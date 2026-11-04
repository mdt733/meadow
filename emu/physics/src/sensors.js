// Only the real 360-input EMU champion's observation path survives.
// Source: mdt733/emu original viewer at SHA
// 4e3e1f45b98945c9729aab4d5c68d9ee122a6876.
// Preserve original 4x4 ToF distances, foot occlusion, delayed readings,
// plane fit, optical flow, gyro bias/noise and asynchronous sample clocks.
const MIN=.035,MAX=.6;

const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
const norm=a=>Math.sqrt(dot(a,a));
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const normalized=a=>{const n=Math.max(1e-8,norm(a));return a.map(x=>x/n);};
const sub=(a,b)=>a.map((x,i)=>x-b[i]);
const scale=(a,s)=>a.map(x=>x*s);
// MuJoCo xmat is row-major body to world, so columns map local basis vectors.
function bodyToWorld(R,v){
  return [R[0]*v[0]+R[1]*v[1]+R[2]*v[2],
          R[3]*v[0]+R[4]*v[1]+R[5]*v[2],
          R[6]*v[0]+R[7]*v[1]+R[8]*v[2]];
}

export function rayHeight(origin, direction, heightAt) {
  // Browser visual heightfield is not an infinite plane. Bisection gives a
  // plausible narrow ToF reading against its actual display surface.
  const at=t=>origin[2]+direction[2]*t-
    heightAt(origin[0]+direction[0]*t,origin[1]+direction[1]*t);
  if(direction[2]>-.3 || at(MIN)<0 || at(MAX)>0) return 0;
  let a=MIN,b=MAX;
  for(let i=0;i<19;i++){
    const m=(a+b)/2;
    if(at(m)>0)a=m;else b=m;
  }
  return (a+b)/2;
}

function gaussian(){
  return Math.sqrt(-2*Math.log(Math.max(1e-8,Math.random())))*
    Math.cos(2*Math.PI*Math.random());
}

export function terrainActorRays(R) {
  const out = [];
  for (const pitch of [40,60,80,100]) for (const yaw of [-22.5,-7.5,7.5,22.5]) {
    const p=pitch*Math.PI/180,y=yaw*Math.PI/180;
    out.push(bodyToWorld(R,[Math.cos(p)*Math.cos(y), Math.cos(p)*Math.sin(y), -Math.sin(p)]));
  }
  return out;
}

export function actorTerrainDistance(origin, ray, model, data, footGeomIds, heightAt=null) {
  let terrain=Infinity;
  const gpos=data.geom_xpos,gmat=data.geom_xmat,types=model.geom_type,
        sizes=model.geom_size, bodies=model.geom_bodyid;
  for(let g=0;g<Number(model.ngeom);g++) {
    if(Number(bodies[g])!==0)continue; // static world collision geometry
    const t=Number(types[g]);
    const ix=3*g,im=9*g;
    const delta=[origin[0]-gpos[ix],origin[1]-gpos[ix+1],origin[2]-gpos[ix+2]];
    if(t===0) { // plane: geom-xmat local Z is the upward world normal
      const nz=[gmat[im+2],gmat[im+5],gmat[im+8]];
      const denom=dot(ray,nz);
      if(denom < -1e-6){
        const dist=-dot(delta,nz)/denom;
        if(dist>0)terrain=Math.min(terrain,dist);
      }
    } else if(t===6) { // arbitrarily oriented finite box: slab intersection
      let near=-Infinity,far=Infinity;
      for(let axis=0;axis<3;axis++){
        const v=[gmat[im+axis],gmat[im+3+axis],gmat[im+6+axis]];
        const o=dot(delta,v),d=dot(ray,v),half=sizes[ix+axis];
        if(Math.abs(d)<1e-7) {
          if(Math.abs(o)>half){far=-Infinity;break;}
        } else {
          const ta=(-half-o)/d,tb=(half-o)/d;
          near=Math.max(near,Math.min(ta,tb));
          far=Math.min(far,Math.max(ta,tb));
        }
      }
      if(far>=Math.max(near,0)){
        const dist=near>0?near:far;
        if(dist>0)terrain=Math.min(terrain,dist);
      }
    }
  }
  if(heightAt) {
    const h=rayHeight(origin,ray,heightAt);
    if(h>0)terrain=Math.min(terrain,h);
  }
  let foot=Infinity;
  for(const g of footGeomIds){
    const i=g*3;
    const delta=[origin[0]-gpos[i],origin[1]-gpos[i+1],origin[2]-gpos[i+2]];
    const b=dot(ray,delta),c=dot(delta,delta)-sizes[i]*sizes[i],disc=b*b-c;
    if(disc<0)continue;
    const first=-b-Math.sqrt(disc),last=-b+Math.sqrt(disc),hit=first>1e-6?first:last;
    if(hit>1e-6)foot=Math.min(foot,hit);
  }
  return foot>=terrain && terrain>=.04 && terrain<=1.5 ? terrain : 0;
}

export class TerrainActorObserver {
  constructor(contract) {
    if(contract?.schema!=='terrain_360')throw new Error('Schema-9 terrain contract required');
    this.settings=contract.settings;
    this.frame=0;
    this.ring=[];
  }
  sample(pose,model,data,footGeomIds,noisy=true) {
    const scale=noisy?this.settings.sensor_noise_scale:0;
    const h=pose.terrainHeightAt||null;
    const ranges=terrainActorRays(pose.R).map(ray=>{
      const measured=actorTerrainDistance(pose.torso,ray,model,data,footGeomIds,h);
      return measured ? clamp(measured+scale*.002*gaussian(),.04,1.5) : 0;
    });
    return {ranges,valid:ranges.map(x=>x>0)};
  }
  reset(pose,model,data,feet,noisy=true) {
    this.frame=0;
    const s=this.sample(pose,model,data,feet,noisy);
    this.ring=Array.from({length:4},()=>({ranges:s.ranges.slice(),valid:s.valid.slice()}));
  }
  advance(pose,model,data,feet,noisy=true) {
    this.frame++;
    const old=this.ring[3],st=this.settings;
    const due=this.frame%st.tof_period_frames===0;
    const missed=noisy&&Math.random()<st.tof_dropout_prob;
    const fresh=due?this.sample(pose,model,data,feet,noisy):old;
    const next={
      ranges:due?(missed?Array(16).fill(0):fresh.ranges.slice()):old.ranges.slice(),
      valid:due?(missed?Array(16).fill(false):fresh.valid.slice()):old.valid.slice()
    };
    this.ring.shift();this.ring.push(next);
  }
  read(){
    const s=this.ring[3-this.settings.tof_delay_frames];
    return {ranges:s.ranges,valid:s.valid};
  }
}

export function fitArrayGround(ranges,valid,gravity){
  const invalid={valid:false,depth:0,forward:0,side:0,confidence:0,
                 residual:Infinity,count:0};
  const rays=terrainActorRays([1,0,0,0,1,0,0,0,1]);
  const G=[[.00005,0,0],[0,.00005,0],[0,0,.0000001]],rhs=[0,0,0];
  let count=0;
  const points=[];
  for(let i=0;i<16;i++){
    const d=ranges[i];
    if(!valid[i]||!Number.isFinite(d)||d<.04||d>1.5)continue;
    const pt=scale(rays[i],d),v=[pt[0],pt[1],1];
    points.push(pt);count++;
    for(let j=0;j<3;j++){
      rhs[j]+=v[j]*pt[2];
      for(let k=0;k<3;k++)G[j][k]+=v[j]*v[k];
    }
  }
  if(count<6 || norm(gravity)<.1)return {...invalid,count};
  // Tiny, regularised 3x3 least-squares solve; no external libraries.
  const aug=G.map((row,i)=>[...row,rhs[i]]);
  for(let col=0;col<3;col++){
    let pivot=col;
    for(let r=col+1;r<3;r++)
      if(Math.abs(aug[r][col])>Math.abs(aug[pivot][col]))pivot=r;
    if(Math.abs(aug[pivot][col])<1e-9)return {...invalid,count};
    [aug[pivot],aug[col]]=[aug[col],aug[pivot]];
    const v=aug[col][col];
    for(let j=col;j<4;j++)aug[col][j]/=v;
    for(let r=0;r<3;r++){
      if(r===col)continue;
      const mul=aug[r][col];
      for(let j=col;j<4;j++)aug[r][j]-=mul*aug[col][j];
    }
  }
  const [a,b,c]=aug.map(row=>row[3]);
  const residual=Math.sqrt(points.reduce((acc,p)=>
    acc+(a*p[0]+b*p[1]+c-p[2])**2,0)/count);
  const up=scale(normalized(gravity),-1);
  let n=normalized([-a,-b,1]);
  if(dot(n,up)<0)n=scale(n,-1);
  const cosine=dot(n,up);
  const fwd=normalized(sub([1,0,0],scale(up,up[0])));
  const side=cross(up,fwd);
  const depth=-c;
  const planeValid=residual<.008&&cosine>.25&&depth>=.035&&depth<=.60
    &&Number.isFinite(depth);
  const steepIndices=[9,10,13,14],projected=[];
  for(const i of steepIndices)if(valid[i]&&Number.isFinite(ranges[i])&&ranges[i]>=.04)
    projected.push(ranges[i]*-rays[i][2]);
  const fallback=projected.length>=2?
    projected.reduce((a,b)=>a+b,0)/projected.length:0;
  const opticalDepth=planeValid?depth:fallback;
  const depthValid=planeValid||(
    projected.length>=2&&opticalDepth>=.035&&opticalDepth<=.60);
  return {valid:planeValid,depthValid,depth:depthValid?opticalDepth:0,
    forward:planeValid?Math.atan2(-dot(n,fwd),cosine):0,
    side:planeValid?Math.atan2(-dot(n,side),cosine):0,
    confidence:planeValid?clamp(count/12,0,1)*clamp(1-residual/.008,0,1):0,
    residual,count};
}

export class ArrayFlowObserver {
  constructor(contract){
    if(contract?.sensor_model_revision!=='forward_tof4x4_array_plane_fit_no_tripod_2')
      throw new Error('Expected array-only terrain sensor');
    this.settings=contract.settings;this.ring=[];this.frame=0;this.bias=[0,0,0];
  }
  synth(pose,model,data,noisy=true){
    const st=this.settings,ns=noisy?st.sensor_noise_scale:0;
    const dir=bodyToWorld(pose.R,[0,0,-1]);
    const depth=actorTerrainDistance(pose.torso,dir,model,data,[],
                                    pose.terrainHeightAt||null);
    const gyro=pose.gyro.map((x,i)=>x+this.bias[i]+gaussian()*ns*.025);
    const good=depth>=.035&&depth<=.60;
    const flow=good?[
      -pose.vbody[0]/depth+pose.gyro[1]+gaussian()*ns*.035,
      -pose.vbody[1]/depth-pose.gyro[0]+gaussian()*ns*.035
    ]:[0,0];
    return {gyro,flow,flowGyro:gyro.slice(),flowValid:good,flowAge:0};
  }
  reset(pose,model,data,noisy=true){
    this.frame=0;
    this.bias=noisy?this.bias.map(()=>gaussian()*this.settings.gyro_bias_std_rad_s):[0,0,0];
    const sample=this.synth(pose,model,data,noisy);
    this.ring=Array.from({length:4},()=>({
      ...sample,gyro:sample.gyro.slice(),flow:sample.flow.slice(),
      flowGyro:sample.flowGyro.slice()
    }));
  }
  advance(pose,model,data,noisy=true){
    this.frame++;
    const st=this.settings,last=this.ring[3];
    const raw=this.synth(pose,model,data,noisy);
    const due=this.frame%st.flow_period_frames===0;
    const missed=noisy&&Math.random()<st.flow_dropout_prob;
    const next={
      gyro:raw.gyro,
      flow:due?(missed?[0,0]:raw.flow):last.flow.slice(),
      flowGyro:due?raw.flowGyro:last.flowGyro.slice(),
      flowValid:due?(raw.flowValid&&!missed):last.flowValid,
      flowAge:due?0:last.flowAge+1
    };
    this.ring.shift();this.ring.push(next);
  }
  read(gravity,array){
    const s=this.settings,flow=this.ring[3-s.flow_delay_frames];
    const ground=fitArrayGround(array.ranges,array.valid,gravity);
    const good=ground.depthValid&&flow.flowValid;
    const depth=ground.valid?ground.depth:0;
    const velocity=good?[
      -depth*(flow.flow[0]-flow.flowGyro[1]),
      -depth*(flow.flow[1]+flow.flowGyro[0])
    ]:[0,0];
    const fresh=clamp(1-.25*(flow.flowAge/s.flow_period_frames),.25,1);
    return {gyro:this.ring[3].gyro,velocity,
      velocityConfidence:good?fresh:0,depth,
      forwardGrade:ground.forward,sideGrade:ground.side,
      groundConfidence:ground.confidence};
  }
}
