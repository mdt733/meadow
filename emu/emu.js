// EMU's real 260M champion actor, attached to Meadow's deliberately lightweight
// kinematic CONTACT PROXY. This is not MuJoCo and must not be used for exams.
// Lazy imported only after the butterfly lands on the odd mossy rock.
import { parsePolicy, PolicyRunner } from './policy.js';

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
const approach=(a,b,s)=>a+clamp(b-a,-s,s);
const FORWARD_MAX=.55, CONTROL_DT=.02;

export async function loadEmu(onProgress=()=>{}) {
  const response=await fetch(new URL('./champion.emupolicy',import.meta.url));
  if(!response.ok)throw new Error('EMU actor download failed: HTTP '+response.status);
  const expected=Number(response.headers.get('content-length'))||886002;
  let text;
  if(response.body?.getReader){
    const reader=response.body.getReader(), decoder=new TextDecoder();
    let pieces='',received=0;
    while(true){
      const {done,value}=await reader.read();if(done)break;
      received+=value.byteLength;
      pieces+=decoder.decode(value,{stream:true});
      onProgress(Math.min(0.97,received/expected));
    }
    text=pieces+decoder.decode();
  }else{
    text=await response.text();onProgress(.97);
  }
  const bundle=parsePolicy(text);
  if(bundle.schema!==3 || bundle.policy.obs_dim!==360 || bundle.source?.step!==260046848)
    throw new Error('Expected the pinned EMU 260M terrain champion; got a different policy');
  const robot=new MeadowEmu(bundle);
  onProgress(1);
  return robot;
}

export class MeadowEmu {
  constructor(bundle){
    this.bundle=bundle;
    this.actor=new PolicyRunner(bundle);
    this.height=()=>0;
    this.x=7.0;this.z=9.1;this.heading=0.4;
    this.y=.2584;this.vx=0;this.vy=0;this.turnRate=0;
    this.q=new Float32Array(6);this.qd=new Float32Array(6);
    this.prevAction=new Float32Array(6);this.prevCtrl=new Float32Array(6);
    this.phase=0;this.elapsed=0;this.frames=0;this.accumulator=0;this.falls=0;
    this.fallen=false;this.fallTime=0;this.roll=0;this.pitch=0;
    this.baseDim=bundle.policy.base_obs_dim;
    this.history=Array.from({length:4},()=>new Float32Array(this.baseDim));
    this.obs=new Float32Array(bundle.policy.obs_dim);
    this.targetSpan=bundle.control.target_span_rad;
    this.command={vx:0,vy:0,yaw:0,height:0,pitch:0,roll:0,step_height:.012};
    this.limbs=[];
    this.reset();
  }

  setWorld(height,x=7,z=9.1){this.height=height;this.reset(x,z);}
  reset(x=this.x,z=this.z){
    this.x=x;this.z=z;this.y=this.height(x,z)+.2584;
    this.q.fill(0);this.qd.fill(0);this.prevAction.fill(0);this.prevCtrl.fill(0);
    this.vx=0;this.vy=0;this.turnRate=0;this.roll=0;this.pitch=0;
    this.fallen=false;this.fallTime=0;this.phase=0;this.accumulator=0;
    this.limbs=this.legs();
    const frame=this.frameObs();this.history.forEach(h=>h.set(frame));
    this.flatten();
  }
  // Six real servo angles drive EMU's original 120.2 mm thigh/shin links.
  // World is Y-up; actor body-forward is Meadow +Z.
  legs(){
    const c=Math.cos(this.heading),s=Math.sin(this.heading);
    const pos=(forward,side,up)=>[this.x+s*forward+c*side,this.y+up,this.z+c*forward-s*side];
    const out=[];
    for(let side of [1,-1]){
      const index=side===1?0:3,roll=this.q[index],hipAngle=this.q[index+1],kneeAngle=this.q[index+2];
      const joint=(forward,up)=>{
        const lateral=-up*Math.sin(roll);
        return pos(forward,side*.08+lateral,up*Math.cos(roll));
      };
      const th=[-.1202*Math.cos(hipAngle)-.1202*Math.sin(hipAngle),
                  .1202*Math.sin(hipAngle)-.1202*Math.cos(hipAngle)];
      const total=hipAngle+kneeAngle;
      const sh=[.1202*Math.cos(total)-.1202*Math.sin(total),
                -.1202*Math.sin(total)-.1202*Math.cos(total)];
      const hip=pos(0,side*.08,0);
      const knee=joint(th[0],th[1]);
      const foot=joint(th[0]+sh[0],th[1]+sh[1]);
      out.push({hip,knee,foot,side,relative:[th[0]+sh[0],side*.08-(th[1]+sh[1])*Math.sin(roll),(th[1]+sh[1])*Math.cos(roll)]});
    }
    return out;
  }

  // The 4x4 forward-facing heightfield rays sample the SAME height() as
  // Meadow. Simplified array sensor: no robot-foot ray occlusion or latency.
  rays(){
    const ranges=[],valid=[],ca=Math.cos(this.heading),sa=Math.sin(this.heading);
    const origin=this.y;
    for(const pitch of [40,60,80,100])for(const yaw of [-22.5,-7.5,7.5,22.5]){
      const a=pitch*Math.PI/180,b=yaw*Math.PI/180;
      const f=Math.cos(a)*Math.cos(b),side=Math.cos(a)*Math.sin(b);
      const dx=sa*f+ca*side,dz=ca*f-sa*side,dy=-Math.sin(a);
      let hit=0,prev=.04,prevDelta=origin+dy*prev-this.height(this.x+dx*prev,this.z+dz*prev);
      for(let t=.065;t<=1.501;t+=.025){
        const delta=origin+dy*t-this.height(this.x+dx*t,this.z+dz*t);
        if(delta<=0 && prevDelta>0){let lo=prev,hi=t;
          for(let k=0;k<8;k++){const m=(lo+hi)/2;
            if(origin+dy*m-this.height(this.x+dx*m,this.z+dz*m)>0)lo=m;else hi=m;}
          hit=(lo+hi)/2;break;}
        prev=t;prevDelta=delta;
      }
      ranges.push(hit);valid.push(hit>0?1:0);
    }
    return {ranges,valid};
  }

  frameObs(){
    const base=new Float32Array(this.baseDim);
    const legs=this.legs();
    // The same ordered observation contract as EMU's browser evaluator.
    base[0]=-Math.sin(this.pitch);
    base[1]=Math.sin(this.roll);
    base[2]=-Math.cos(this.pitch)*Math.cos(this.roll);
    base[3]=0;base[4]=0;base[5]=this.turnRate;
    base.set(this.q,6);base.set(this.qd,12);
    base.set(this.prevAction,18);base.set(this.prevCtrl,24);
    for(let j=0;j<2;j++)base.set(legs[j].relative,30+j*3);
    base[36]=this.vx;base[37]=this.vy;
    base[38]=this.y-this.height(this.x,this.z);base[39]=1;
    const command=this.command;
    base.set([command.vx,command.vy,command.yaw,command.height,command.pitch,command.roll,command.step_height],40);
    base[47]=Math.sin(this.phase);base[48]=Math.cos(this.phase);
    const eps=.09,c=Math.cos(this.heading),s=Math.sin(this.heading);
    const h=this.height(this.x,this.z);
    const fGrade=Math.atan2(this.height(this.x+eps*s,this.z+eps*c)-h,eps);
    const sideGrade=Math.atan2(this.height(this.x+eps*c,this.z-eps*s)-h,eps);
    base[55]=fGrade;base[56]=sideGrade;base[57]=1;
    const scan=this.rays();
    base.set(scan.ranges,58);base.set(scan.valid,74);
    return base;
  }
  flatten(){for(let i=0;i<4;i++)this.obs.set(this.history[i],i*this.baseDim);}
  autopilot(lizard){
    if(!lizard)return {vx:.08,vy:0,yaw:Math.sin(this.elapsed*.25)*.18};
    const dx=lizard.x-this.x,dz=lizard.z-this.z,dist=Math.hypot(dx,dz);
    const desired=Math.atan2(dx,dz),error=wrap(desired-this.heading);
    return {vx:dist>1.15?clamp((dist-1.15)*.22,.03,.24):0,
            vy:0,yaw:clamp(error*1.8,-.8,.8)};
  }
  advance(dt,command){
    this.accumulator+=Math.min(Math.max(dt,0),.06);
    while(this.accumulator>=CONTROL_DT){
      this.step(CONTROL_DT,command);
      this.accumulator-=CONTROL_DT;
    }
  }
  step(dt,command){
    this.elapsed+=dt;this.frames++;
    this.command.vx=clamp(Number(command?.vx)||0,-.25,.45);
    this.command.vy=clamp(Number(command?.vy)||0,-.15,.15);
    this.command.yaw=clamp(Number(command?.yaw)||0,-1.2,1.2);
    if(this.fallen){
      this.fallTime+=dt;
      if(this.fallTime>1.1){this.falls++;this.reset();}
      return;
    }
    const action=this.actor.infer(this.obs);
    const previousLegs=this.legs(),previousQ=this.q.slice();
    for(let i=0;i<6;i++){
      const target=clamp(action[i],-1,1)*this.targetSpan[i];
      const vel=clamp((target-this.q[i])*13,-4.4,4.4);
      const smoothed=approach(this.qd[i],vel,18*dt);
      this.qd[i]=smoothed;
      this.q[i]+=smoothed*dt;
    }
    const nowLegs=this.legs();
    // Lightweight planted-foot proxy: infer forward traction from feet
    // sweeping backwards while near the terrain. NOT full rigid-body physics.
    let planted=0,push=0;
    for(let i=0;i<2;i++){
      const foot=nowLegs[i].foot,old=previousLegs[i].relative,cur=nowLegs[i].relative;
      const gap=foot[1]-.018-this.height(foot[0],foot[2]);
      if(gap<.045){
        const strength=clamp((.045-gap)/.055,0,1);
        push+=clamp((old[0]-cur[0])/dt,-.8,.8)*strength;planted+=strength;
      }
    }
    const traction=planted>.05?push/planted:0;
    // Small navigation assist keeps an exploratory garden creature playable.
    // It is explicit rather than pretending this is MJX-accurate locomotion.
    const intended=clamp(.65*traction+.35*this.command.vx,-.30,FORWARD_MAX);
    this.vx+=(intended-this.vx)*Math.min(1,dt*5);
    this.vy+=(this.command.vy-this.vy)*Math.min(1,dt*3);
    this.turnRate+=(this.command.yaw-this.turnRate)*Math.min(1,dt*4);
    this.heading=wrap(this.heading+this.turnRate*dt);
    this.x+= (Math.sin(this.heading)*this.vx+Math.cos(this.heading)*this.vy)*dt;
    this.z+= (Math.cos(this.heading)*this.vx-Math.sin(this.heading)*this.vy)*dt;
    // Stay inside the lizard's accessible garden.
    const radius=Math.hypot(this.x,this.z);
    if(radius>14.5){this.x*=14.5/radius;this.z*=14.5/radius;this.vx=0;}
    if(radius<2.2){this.x*=2.2/Math.max(radius,.01);this.z*=2.2/Math.max(radius,.01);this.vx=0;}
    // Two-leg support height approximates a compliant contact constraint.
    const support=this.legs().map(l=>this.height(l.foot[0],l.foot[2])+.018-l.relative[2]);
    const desiredY=clamp(Math.max(...support),this.height(this.x,this.z)+.16,this.height(this.x,this.z)+.36);
    this.y+=(desiredY-this.y)*Math.min(1,dt*8);
    this.pitch+=(clamp(this.q[1]+this.q[4],-.6,.6)*.11-this.pitch)*dt*5;
    this.roll+=(clamp(this.q[0]+this.q[3],-.6,.6)*.16-this.roll)*dt*5;
    if(!Number.isFinite(this.x+this.z+this.y)||this.y<this.height(this.x,this.z)+.12){
      this.fallen=true;this.fallTime=0;
    }
    const cadence=1.025+Math.abs(this.command.vx)*.75;
    this.phase=(this.phase+2*Math.PI*dt*cadence)%(2*Math.PI);
    this.prevAction.set(action);this.prevCtrl.set(this.q);
    this.history.shift();this.history.push(this.frameObs());this.flatten();
  }
  get head(){return [this.x,this.y+.095,this.z];}
  get pose(){return {x:this.x,z:this.z,y:this.y,heading:this.heading,vx:this.vx,frames:this.frames,falls:this.falls};}
}
