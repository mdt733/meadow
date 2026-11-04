// Real physics adapter for Meadow's butterfly rider.
// MuJoCo 3.17 WASM and the same browser simulator / sensor code used by EMU.
// NO scripted gait, kinematic root movement, or navigation position assist.
import { EmuBrowserSim } from './physical-sim.js';

const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
const BODIES=['torso','r_hip','r_shin','r_shin_lower','r_foot','l_hip','l_shin','l_shin_lower','l_foot'];
const PARK_RADIUS=15.5,PARK_RES=257;

// MuJoCo: +X forward, +Y LEFT, +Z up. Meadow: +Z forward,
// +X RIGHT, +Y up. The lateral axis MUST be negated. Otherwise the
// geometry, navigation and keys all disagree about "right".
function worldCoords(origin,mj){
 return [origin.x - mj[1],origin.height + mj[2],origin.z + mj[0]];
}

export function sampleMeadowPark(heightAt,origin){
 // A single collidable physical hfield shares the existing rendered terrain.
 // The original MuJoCo viewer's heightfield loader and row-reversal logic are
 // preserved, including its 1.5 friction coefficient and real foot contacts.
 const radius=PARK_RADIUS,resolution=PARK_RES,cell=2*radius/(resolution-1);
 const raw=new Float64Array(resolution*resolution);
 let minimum=Infinity,maximum=-Infinity;
 const centre=heightAt(origin.x,origin.z);
 for(let j=0;j<resolution;j++)for(let i=0;i<resolution;i++){
  const mx=-radius+i*cell,my=-radius+j*cell;
  const h=heightAt(origin.x-my,origin.z+mx)-centre;
  raw[j*resolution+i]=h;
  minimum=Math.min(minimum,h);maximum=Math.max(maximum,h);
 }
 // XML elevations must be >=0, so shift the hfield geom down by minimum.
 // sampleHeight remains relative to the root floor at the spawn site.
 const heights=new Float32Array(raw.length);
 for(let i=0;i<raw.length;i++)heights[i]=raw[i]-minimum;
 const sampleHeight=(x,y)=>{
  const u=clamp((x+radius)/cell,0,resolution-1.00001);
  const v=clamp((y+radius)/cell,0,resolution-1.00001);
  const i=Math.floor(u),j=Math.floor(v),a=u-i,b=v-j,k=j*resolution+i;
  const q=heights[k]*(1-a)*(1-b)+heights[k+1]*a*(1-b)
   +heights[k+resolution]*(1-a)*b+heights[k+resolution+1]*a*b;
  return q+minimum;
 };
 return {radius,resolution,cell,heights,zOffset:minimum,
         maxHeight:Math.max(.001,maximum-minimum),trees:[],features:[],
         flatRadius:0,challengeLevel:'meadow',maxDegrees:20,sampleHeight};
}

export class PhysicalMeadowEmu {
 static async create(bundle,heightAt,start={x:8,z:9.1},wasmBinary=null){
  // Single-renderer architecture: this headless core constructs MuJoCo
  // and the original observation/policy/actuator contracts WITHOUT creating
  // any second WebGL canvas, Three.js scene or viewer renderer.
  const sim=await EmuBrowserSim.create(bundle,wasmBinary);
  const origin={x:start.x,z:start.z,height:heightAt(start.x,start.z)};
  sim.meadowPark=sampleMeadowPark(heightAt,origin);
  sim.terrainMode='park';
  sim.loadModel(); // MuJoCo now collides with a real Meadow heightfield.
  sim.autoReset=true;sim.setHeadingHold(true);
  sim.setDemoCommands({vx:0,vy:0,yaw:0,pitch:0});
  const robot=new PhysicalMeadowEmu(sim,origin);
  return robot;
 }
 constructor(sim,origin){
  this.sim=sim;this.origin=origin;this.elapsed=0;this.falls=0;
  this.lastGeneration=sim.resetGeneration;
  this.bodyIDs=Object.fromEntries(BODIES.map(name=>
   [name,sim.name2id(sim.mujoco.mjtObj.mjOBJ_BODY,name)]));
 }
 locationOf(body){
  const id=this.bodyIDs[body],offset=id*3;
  return worldCoords(this.origin,Array.from(this.sim.data.xpos.slice(offset,offset+3)));
 }
 get pose(){
  const s=this.sim,nav=s.navigationPose(),actual=s.telemetry();
  return {
   x:this.origin.x-nav.y,z:this.origin.z+nav.x,
   y:this.origin.height+s.heightM(),
   heading:-nav.heading,vx:actual.vx,vy:actual.vy,
   frames:s.controlFrames,falls:this.falls,fallen:actual.fallen,
   motorTravelRad:s.motorTravelRad,
   physics:'MuJoCo WASM',actor:'v5032 Pinnacle 260M'
  };
 }
 get x(){return this.pose.x}
 get z(){return this.pose.z}
 get y(){return this.pose.y}
 get heading(){return this.pose.heading}
 get vx(){return this.pose.vx}
 get head(){
  const torso=this.locationOf('torso');
  const R=this.sim.bodyRotation();
  // Original model has only a torso box; a tiny butterfly perch is visually
  // attached to the MuJoCo torso orientation, NOT a predicted animator pose.
  return [torso[0]-R[5]*.055,torso[1]+R[8]*.055,torso[2]+R[2]*.055];
 }
 get limbs(){
  const legs=[];
  for(const prefix of ['r','l']){
   legs.push([
    this.locationOf(prefix+'_hip'),this.locationOf(prefix+'_shin'),
    this.locationOf(prefix+'_shin_lower'),this.locationOf(prefix+'_foot')
   ]);
  }
  return legs;
 }
 get torso(){
  const sim=this.sim,R=sim.bodyRotation(),p=this.locationOf('torso');
  const transform=(x,y,z)=>[
   p[0]-R[3]*x-R[4]*y-R[5]*z,
   p[1]+R[6]*x+R[7]*y+R[8]*z,
   p[2]+R[0]*x+R[1]*y+R[2]*z
  ];
  const x0=-.024,x1=.076,hy=.09,hz=.025;
  return [
   transform(x0,-hy,-hz),transform(x1,-hy,-hz),
   transform(x1, hy,-hz),transform(x0, hy,-hz),
   transform(x0,-hy, hz),transform(x1,-hy, hz),
   transform(x1, hy, hz),transform(x0, hy, hz)
  ];
 }
 autopilot(lizard){
  if(!lizard)return {vx:.08,vy:0,yaw:0};
  const p=this.pose,dx=lizard.x-p.x,dz=lizard.z-p.z;
  const d=Math.hypot(dx,dz),error=wrap(Math.atan2(dx,dz)-p.heading);
  // Navigation commands only; all actual movement remains under the actor.
  return {vx:Math.abs(error)>1.35?.04:clamp((d-1.0)*.16,0,.24),
          vy:0,yaw:-clamp(error*1.3,-.85,.85)};
 }
 advance(dt,command){
  this.elapsed+=dt;
  this.sim.setDemoCommands({vx:Number(command?.vx)||0,vy:Number(command?.vy)||0,
                           yaw:Number(command?.yaw)||0,pitch:0});
  this.sim.advance(dt);
  if(this.sim.resetGeneration!==this.lastGeneration){
   this.falls+=this.sim.resetGeneration-this.lastGeneration;
   this.lastGeneration=this.sim.resetGeneration;
  }
 }
 dispose(){this.sim.dispose()}
}
