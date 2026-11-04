// Headless MuJoCo+neural physics extracted from mdt733/emu viewer
// pinned upstream SHA 4e3e1f45b98945c9729aab4d5c68d9ee122a6876.
// Preserve the original policy, 360-field observation contract, ToF/flow,
// one-control-frame actuator delay, passive shins, cadence and yaw controller.
// Viewer-specific Three.js rendering and orbit navigation are deliberately
// not imported or initialised. Meadow alone owns the WebGL canvas.
import loadMujoco from '@mujoco/mujoco';
import mujocoWasmUrl from '@mujoco/mujoco/mujoco.wasm?url';
import {PolicyRunner} from '../../policy.js';
import {ArrayFlowObserver,TerrainActorObserver} from './sensors.js';


import {sampleEpisodeCadence,nextYawCommand,measuredAttitude} from './dynamics.js';
import {withMeadowTerrain,surfaceSlope} from './terrain.js';

const TWO_PI=Math.PI*2;
let mujocoModulePromise=null;
function clamp(x,lo,hi){return Math.max(lo,Math.min(hi,x));}
function approach(x, target, maxDelta) {
  const d = target - x;
  if (Math.abs(d) <= maxDelta) return target;
  return x + Math.sign(d) * maxDelta;
}

export class EmuPhysicsCore {
  static async create(bundle,wasmBinary=null){
    if(!mujocoModulePromise){
      // Use exactly the bytes counted by Meadow's optional download bar:
      // no second hidden wasm request from the Emscripten loader.
      mujocoModulePromise=loadMujoco({
        locateFile:path=>path.endsWith('.wasm')?mujocoWasmUrl:path,
        ...(wasmBinary?{wasmBinary}:{})
      });
    }
    return new EmuPhysicsCore(bundle,await mujocoModulePromise);
  }
  constructor(bundle, mujoco) {
    // The policy, observation history and MuJoCo integration below are
    // retained from EMU's pinned browser simulator. No Three.js, hidden
    // WebGL canvas, scene graph, camera, visual terrain or render loop.
    this.bundle=bundle;
    this.mujoco=mujoco;
    this.policy=new PolicyRunner(bundle);
    this.model=null;
    this.data=null;
    this.meadowPark=null;
    this.terrainMode='park';
    this.park=null;
    this.sensorNoise=true;
    this.headingHold=true;
    this.headingKp=2.2;
    this.headingTarget=0;
    this.requestedYaw=0;
    this.autoReset=false;
    this.paused=false;
    // The deployed champion has exactly one observation contract: the
    // physical 360-input actor with 4x4 ToF array + IMU/flow plane fit.
    // Do not carry the discarded schema-8 tripod / debug sensor branches.
    if(bundle.schema!==3||bundle.observation.sensor_contract?.sensor_model_revision!==
       'forward_tof4x4_array_plane_fit_no_tripod_2')
      throw new Error('Unsupported physical EMU observation contract');
    this.arraySensor=new ArrayFlowObserver(bundle.observation.sensor_contract);
    this.terrainObserver=new TerrainActorObserver(bundle.observation.sensor_contract);
    this.fallenFor=0;
    this.controlFrames=0;
    this.motorTravelRad=0;
    this.commandTarget={vx:0,vy:0,yaw:0,height:0,pitch:0,roll:0,step_height:.012};
    this.command={...this.commandTarget};
    this.episodePhaseHz=1.025;
    this.phase=0;
    this.prevAction=new Float32Array(6);
    this.prevRawTarget=new Float32Array(6);
    this.deliveredCtrl=new Float32Array(6);
    this.baseObsDim=bundle.policy.base_obs_dim;
    this.history=Array.from({length:4},()=>new Float32Array(this.baseObsDim));
    this.obs=new Float32Array(bundle.policy.obs_dim);
    this.actQpos=[];
    this.actQvel=[];
    this.shinQpos=[];
    this.shinQvel=[];
    this.torsoId=-1;
    this.footIds=[];
    this.controlAccumulator=0;
    this.resetGeneration=0;
  }
  disposeModel(){
    this.park=null;
    if(this.data){this.data.delete();this.data=null;}
    if(this.model){this.model.delete();this.model=null;}
  }
  dispose(){this.disposeModel();}
  setHeadingHold(enabled) {
    this.headingHold=Boolean(enabled);
    // Bumpless engage: no jump towards an old target from an earlier mode.
    this.headingTarget=this.actualHeading();
  }
  actualHeading() {
    if (!this.data || !this.model) return 0;
    const r=this.bodyRotation();
    return Math.atan2(r[3],r[0]); // torso +X projected into world XY
  }

  loadModel(){
    this.disposeModel();
    if(!this.meadowPark)throw new Error('Real Meadow collision heightfield required');
    this.park=this.meadowPark;
    const xml=withMeadowTerrain(this.bundle.robot_xml,this.park);
    this.model=this.mujoco.MjModel.from_xml_string(xml);
    if(!this.model)throw new Error('MuJoCo could not load robot XML');
    this.data=new this.mujoco.MjData(this.model);
    this.resolveIds();
    const d=this.bundle.control.default_commands||{};
    this.commandTarget={
      vx:Number(d.vx??.04),vy:Number(d.vy??0),yaw:Number(d.yaw??0),
      height:Number(d.height??0),pitch:Number(d.pitch??0),roll:Number(d.roll??0),
      step_height:Number(d.step_height??.012)
    };
    this.command={...this.commandTarget};
    this.requestedYaw=this.commandTarget.yaw;
    this.reset();
  }
  name2id(objEnum, name) {
    const id = Number(this.mujoco.mj_name2id(this.model, objEnum.value, name));
    if (id < 0) throw new Error(`robot.xml is missing ${name}`);
    return id;
  }

  resolveIds() {
    const mj = this.mujoco;
    const joints = this.bundle.control.actuated_joints;
    const jids = joints.map(n => this.name2id(mj.mjtObj.mjOBJ_JOINT, n));
    this.actQpos = jids.map(j => Number(this.model.jnt_qposadr[j]));
    this.actQvel = jids.map(j => Number(this.model.jnt_dofadr[j]));
    const sj = ['r_shin_flex', 'l_shin_flex'].map(n => this.name2id(mj.mjtObj.mjOBJ_JOINT, n));
    this.shinQpos = sj.map(j => Number(this.model.jnt_qposadr[j]));
    this.shinQvel = sj.map(j => Number(this.model.jnt_dofadr[j]));
    this.torsoId = this.name2id(mj.mjtObj.mjOBJ_BODY, 'torso');
    this.footIds = ['r_foot', 'l_foot'].map(n => this.name2id(mj.mjtObj.mjOBJ_BODY, n));
    this.footGeomIds = ['r_foot_ball','l_foot_ball'].map(n =>
      this.name2id(mj.mjtObj.mjOBJ_GEOM,n));
  }

  reset() {
    this.resetGeneration=(this.resetGeneration||0)+1;
    const mj = this.mujoco;
    mj.mj_resetData(this.model, this.data);
    this.data.ctrl.fill(0);
    this.data.qvel.fill(0);
    // Training births already moving near the commanded state. Do the same for
    // the interactive viewer so reset is not a special stationary task.
    this.data.qvel[0] = this.command.vx;
    this.data.qvel[1] = this.command.vy;
    this.requestedYaw = this.commandTarget.yaw;
    this.command.yaw = this.requestedYaw;
    this.data.qvel[5] = this.command.yaw;
    mj.mj_forward(this.model, this.data);
    this.headingTarget=this.actualHeading();
    // Training samples cadence at birth, then holds it through command changes.
    this.episodePhaseHz = sampleEpisodeCadence(this.command, this.bundle.control);
    this.phase = 0;
    this.prevAction.fill(0);
    this.prevRawTarget.fill(0);
    this.deliveredCtrl.fill(0);
    this.terrainObserver.reset(
      this.terrainActorPose(),this.model,this.data,this.footGeomIds,this.sensorNoise);
    this.arraySensor.reset(this.sensorPose(),this.model,this.data,this.sensorNoise);
    const base = this.buildBaseObs();
    for (let i = 0; i < 4; i++) this.history[i].set(base);
    this.flattenHistory();
    this.controlAccumulator = 0;
    this.fallenFor = 0;
  }
  setDemoCommands({ vx, vy, yaw, pitch }) {
    const l = this.bundle.control.command_limits;
    this.commandTarget.vx = clamp(Number(vx), l.vx_min, l.vx_max);
    this.commandTarget.vy = clamp(Number(vy), -l.vy_abs, l.vy_abs);
    this.commandTarget.yaw = clamp(Number(yaw), -l.yaw_abs, l.yaw_abs);
    this.commandTarget.pitch = clamp(Number(pitch), -l.pitch_abs_rad, l.pitch_abs_rad);
  }

  navigationPose() {
    const o = this.torsoId * 3;
    const heading=this.actualHeading(),c=Math.cos(heading),s=Math.sin(heading);
    const wx=Number(this.data.qvel[0]),wy=Number(this.data.qvel[1]);
    // MuJoCo freejoint angular qvel is body-local; turn it into an
    // observed horizontal heading rate for navigation's yaw damping.
    const R=this.bodyRotation(),q=this.data.qvel;
    const ax=R[0]*q[3]+R[1]*q[4]+R[2]*q[5];
    const ay=R[3]*q[3]+R[4]*q[4]+R[5]*q[5];
    const az=R[6]*q[3]+R[7]*q[4]+R[8]*q[5];
    const horizontal=Math.max(.01,R[0]*R[0]+R[3]*R[3]);
    const yawRate=az-R[6]*(R[0]*ax+R[3]*ay)/horizontal;
    return {x:Number(this.data.xpos[o]),y:Number(this.data.xpos[o+1]),
      heading,vx:c*wx+s*wy,vy:-s*wx+c*wy,yawRate,
      fallen:this.isFallen()};
  }

  smoothCommands(dt) {
    this.command.vx = approach(this.command.vx, this.commandTarget.vx, 1.1 * dt);
    this.command.vy = approach(this.command.vy, this.commandTarget.vy, 0.9 * dt);
    // Yaw is smoothed separately in nextYawCommand (not from applied yaw).
    this.command.pitch = approach(this.command.pitch, this.commandTarget.pitch, 0.70 * dt);
    this.command.height = approach(this.command.height, this.commandTarget.height, 0.045 * dt);
    this.command.roll = approach(this.command.roll, this.commandTarget.roll, 0.55 * dt);
    this.command.step_height = approach(this.command.step_height, this.commandTarget.step_height, 0.050 * dt);
  }

  phaseRate() {
    return this.episodePhaseHz;
  }

  stepControl() {
    const cdt = Number(this.bundle.control.control_dt || 0.02);
    this.smoothCommands(cdt);
    // One shared yaw controller for joystick and autonomous navigation.
    // Navigation is only an upstream producer of vx/vy/yaw/pitch requests.
    const steering = nextYawCommand(this.requestedYaw,this.commandTarget.yaw,
      this.headingTarget,this.actualHeading(),cdt,this.headingHold,this.headingKp,
      Number(this.bundle.control.command_limits.yaw_abs));
    this.requestedYaw=steering.requestedYaw;
    this.headingTarget=steering.headingTarget;
    this.command.yaw=steering.appliedYaw;
    const action = this.policy.infer(this.obs);
    this.controlFrames++;
    const span = this.bundle.control.target_span_rad;

    // One control-frame delay: deliver last target, remember this action's
    // target for the next control frame. This mirrors environment.py.
    for (let i = 0; i < 6; i++) {
      this.deliveredCtrl[i] = this.prevRawTarget[i];
      this.data.ctrl[i] = this.deliveredCtrl[i];
    }

    const nsub = Number(this.bundle.control.control_substeps || 4);
    const beforeJoints=this.actQpos.map(i=>Number(this.data.qpos[i]));
    for (let k = 0; k < nsub; k++) this.mujoco.mj_step(this.model, this.data);
    for(let i=0;i<this.actQpos.length;i++)
      this.motorTravelRad+=Math.abs(Number(this.data.qpos[this.actQpos[i]])-beforeJoints[i]);

    for (let i = 0; i < 6; i++) {
      const raw = clamp(action[i] * span[i], -span[i], span[i]);
      this.prevRawTarget[i] = raw;
      this.prevAction[i] = action[i];
    }

    this.phase = (this.phase + cdt * this.phaseRate() * TWO_PI) % TWO_PI;
    this.terrainObserver.advance(
      this.terrainActorPose(),this.model,this.data,this.footGeomIds,this.sensorNoise);
    this.arraySensor.advance(this.sensorPose(),this.model,this.data,this.sensorNoise);
    const base = this.buildBaseObs();
    this.history[0].set(this.history[1]);
    this.history[1].set(this.history[2]);
    this.history[2].set(this.history[3]);
    this.history[3].set(base);
    this.flattenHistory();

    if (this.isFallen()) this.fallenFor += cdt; else this.fallenFor = 0;
    if (this.autoReset && this.fallenFor > 0.8) this.reset();
  }

  flattenHistory() {
    for (let h = 0; h < 4; h++) this.obs.set(this.history[h], h * this.baseObsDim);
  }

  bodyRotation() {
    const o = this.torsoId * 9;
    const m = this.data.xmat;
    return [m[o],m[o+1],m[o+2],m[o+3],m[o+4],m[o+5],m[o+6],m[o+7],m[o+8]];
  }

  worldToBody(R, x, y, z) {
    return [
      R[0]*x + R[3]*y + R[6]*z,
      R[1]*x + R[4]*y + R[7]*z,
      R[2]*x + R[5]*y + R[8]*z,
    ];
  }

  sensorPose() {
    const R=this.bodyRotation();
    const xyz=this.torsoId*3;
    const torso=Array.from(this.data.xpos.slice(xyz,xyz+3));
    const vbody=this.worldToBody(R,this.data.qvel[0],this.data.qvel[1],this.data.qvel[2]);
    // MuJoCo freejoint angular qvel is body-local, not world angular velocity.
    const gyro=Array.from(this.data.qvel.slice(3,6));
    const heightAt=(x,y)=>{
      if(this.terrainMode==='park'&&this.park) return this.park.sampleHeight(x,y);
      if(this.terrainMode==='ramp'&&Math.abs(y)<.44){
        if(x>=.85&&x<=1.65)return .008+(x-.85)*Math.tan(Math.PI/180);
        if(x>1.65&&x<2.17)return .015;
        if(x>=2.17&&x<=2.97)return .015-(x-2.17)*Math.tan(Math.PI/180);
      }
      return 0;
    };
    // The park replaces the MuJoCo plane with a heightfield. The array-only
    // optical-flow sensor raycaster handles planes/boxes, so it needs the same
    // terrain-height fallback that the 4x4 ToF raycaster already receives.
    // Only provide it for the park: adding a fictitious z=0 fallback to sloped
    // finite-box diagnostics would make downhill optical flow read a ghost floor.
    const terrainHeightAt=this.terrainMode==='park'&&this.park ?
      (x,y)=>this.park.sampleHeight(x,y):null;
    return {R,torso,vbody,gyro,heightAt,terrainHeightAt};
  }

  terrainActorPose() {
    // Same torso-origin physical rays as MJX. On the park hfield, sample its
    // shared height surface rather than pretending it is a flat plane.
    const R=this.bodyRotation(),offset=this.torsoId*3;
    return {R,torso:Array.from(this.data.xpos.slice(offset,offset+3)),
      terrainHeightAt:this.terrainMode==='park'&&this.park ?
        (x,y)=>this.park.sampleHeight(x,y):null};
  }

  buildBaseObs() {
    const qpos = this.data.qpos;
    const qvel = this.data.qvel;
    const xpos = this.data.xpos;
    const R = this.bodyRotation();
    const grav = this.worldToBody(R, 0, 0, -1);
    const bodyVel = this.worldToBody(R, qvel[0], qvel[1], qvel[2]);
    const bodyAng = this.worldToBody(R, qvel[3], qvel[4], qvel[5]);
    // Training defaults to 1.5× synthetic sensor noise, not 1.0×.
    // When disabled this remains a deliberately idealised comparison mode.
    const ns = this.sensorNoise ? Number(this.bundle.control.sensor_noise_scale ?? 1.5) : 0.0;
    const n0 = Math.sin(1.73 * this.phase);
    const n1 = Math.sin(2.31 * this.phase + 0.7);
    const base = new Float32Array(this.baseObsDim);
    let k = 0;

    base[k++] = grav[0] + ns*0.008*n0;
    base[k++] = grav[1] + ns*0.008*n1;
    base[k++] = grav[2] - ns*0.004*n0;
    base[k++] = bodyAng[0] + ns*0.025*n1;
    base[k++] = bodyAng[1] + ns*0.025*n0;
    base[k++] = bodyAng[2] - ns*0.025*n1;
    const noisyGravity=[
      grav[0]+ns*.008*n0,grav[1]+ns*.008*n1,grav[2]-ns*.004*n0
    ];
    const sensor=this.arraySensor.read(noisyGravity,this.terrainObserver.read());
    if (sensor) {
      base[3]=sensor.gyro[0];
      base[4]=sensor.gyro[1];
      base[5]=sensor.gyro[2];
    }

    for (let i = 0; i < 6; i++) base[k++] = qpos[this.actQpos[i]] + ns*0.0015*n0;
    for (let i = 0; i < 6; i++) base[k++] = qvel[this.actQvel[i]] + ns*0.015*n1;
    for (let i = 0; i < 6; i++) base[k++] = this.prevAction[i];
    for (let i = 0; i < 6; i++) base[k++] = this.deliveredCtrl[i];

    const to = this.torsoId * 3;
    const tx = xpos[to], ty = xpos[to+1], tz = xpos[to+2];
    for (const fid of this.footIds) {
      const fo = fid * 3;
      const rel = this.worldToBody(R, xpos[fo]-tx, xpos[fo+1]-ty, xpos[fo+2]-tz);
      base[k++] = rel[0]; base[k++] = rel[1]; base[k++] = rel[2];
    }

    base[k++] = sensor ? sensor.velocity[0] : bodyVel[0] + ns*0.018*n0;
    base[k++] = sensor ? sensor.velocity[1] : bodyVel[1] + ns*0.018*n1;
    base[k++] = sensor ? sensor.depth : tz + ns*0.0025*n1;
    base[k++] = sensor ? sensor.velocityConfidence : clamp(1 - 0.18*ns, 0.2, 1.0);

    base[k++] = this.command.vx;
    base[k++] = this.command.vy;
    base[k++] = this.command.yaw;
    base[k++] = this.command.height;
    base[k++] = this.command.pitch;
    base[k++] = this.command.roll;
    base[k++] = this.command.step_height;
    base[k++] = Math.sin(this.phase);
    base[k++] = Math.cos(this.phase);

    const sf0 = qpos[this.shinQpos[0]] + ns*0.0010*n0;
    const sf1 = qpos[this.shinQpos[1]] + ns*0.0010*n1;
    const sr0 = qvel[this.shinQvel[0]] + ns*0.010*n1;
    const sr1 = qvel[this.shinQvel[1]] + ns*0.010*n0;
    base[k++] = sf0; base[k++] = sf1;
    base[k++] = sr0; base[k++] = sr1;
    base[k++] = clamp(Math.abs(sf0) / 0.10, 0, 1.5);
    base[k++] = clamp(Math.abs(sf1) / 0.10, 0, 1.5);

    if (sensor) {
      base[k++] = sensor.forwardGrade;
      base[k++] = sensor.sideGrade;
      base[k++] = sensor.groundConfidence;
    }
    if (this.terrainObserver) {
      const grid=this.terrainObserver.read();
      for(const range of grid.ranges) base[k++]=range;
      for(const valid of grid.valid) base[k++]=valid?1:0;
    }
    if (k !== this.baseObsDim) throw new Error(`Internal observation builder produced ${k} fields instead of ${this.baseObsDim}`);
    return base;
  }

  isFallen() {
    const R = this.bodyRotation();
    const gravityZ = -this.worldToBody(R, 0, 0, -1)[2];
    // Preserve the original EMU viewer fall predicate for park terrain.
    // The source diagnostic sensor-course special case is not used by Meadow.
    return this.heightM() < 0.145 || gravityZ < 0.35;
  }

  heightM() { return Number(this.data.xpos[this.torsoId * 3 + 2]); }

  telemetry() {
    const R = this.bodyRotation();
    const vel = this.worldToBody(R, this.data.qvel[0], this.data.qvel[1], this.data.qvel[2]);
    const ang = this.worldToBody(R, this.data.qvel[3], this.data.qvel[4], this.data.qvel[5]);
    const xyz = id => [this.data.xpos[id * 3], this.data.xpos[id * 3 + 1], this.data.xpos[id * 3 + 2]];
    const pos = xyz(this.torsoId);
    const feet = this.footIds.map(xyz);
    const { chassisPitch, robotLean } = measuredAttitude(R, pos, feet[0], feet[1]);
    return {
      height: this.heightM(), vx: vel[0], vy: vel[1], yaw: ang[2],
      pitch: chassisPitch, chassisPitch, robotLean,
      cmd: { ...this.command }, requestedYaw: this.requestedYaw,
      headingHold: this.headingHold, headingActual: this.actualHeading(),
      headingTarget: this.headingTarget,
      slope: surfaceSlope(this.park,
        (feet[0][0]+feet[1][0])/2, (feet[0][1]+feet[1][1])/2, this.actualHeading()),
      fallen: this.isFallen(), phaseRate: this.phaseRate(),
    };
  }

  advance(realDt) {
    if (this.paused) return;
    const cdt = Number(this.bundle.control.control_dt || 0.02);
    this.controlAccumulator += Math.min(realDt, 0.08);
    let safety = 0;
    while (this.controlAccumulator >= cdt && safety++ < 6) {
      this.stepControl();
      this.controlAccumulator -= cdt;
    }
  }
}