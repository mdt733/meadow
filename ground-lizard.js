/* Meadow lizard: articulated spine and inverse-kinematic limbs, with
   head-led steering, inertia, wandering and butterfly hunting.
   Simulation coordinates are meadow x/z metres, projected by the world renderer. */
(()=>{'use strict';
// Available in standalone and embedded meadow sessions.
const world=window.__meadowWorld;
if(!world)return;
// Each stroke remains a 2D drawing, but is projected as a thin 3D ribbon into
// the meadow WebGL depth buffer. The tree, foliage and terrain can occlude it.
let W=0,H=0,last=performance.now(),elapsed=0,active=!document.hidden;
const PI=Math.PI, TAU=PI*2, clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const delta=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
const lines=[];
function resize(){W=innerWidth;H=innerHeight;}
function toScreen(x,y,height=.085){return world.project(x,world.height(x,y)+height,y);}
function sizeFactor(){return clamp(Number(world.lizardConfig?.size)||.65,.25,2);}
function coordinate(x,y,high=.085){
 const factor=sizeFactor();
 const cx=critter?.x??x,cy=critter?.y??y;
 const xx=cx+(x-cx)*factor,zz=cy+(y-cy)*factor;
 // Raise the stroke clear of ground; leave depth testing on for tree occlusion.
 return [xx,world.height(xx,zz)+Math.max(.10,high*factor),zz];
}
function putLine(a,b,high=.085){lines.push([coordinate(a.x,a.y,high),coordinate(b.x,b.y,high)]);}
function penPath(coords){for(let i=1;i<coords.length;i++){
 const a=coords[i-1],b=coords[i];lines.push([coordinate(a[0],a[1],a[2]??.11),coordinate(b[0],b[1],b[2]??.11)]);
}}
function confine(p){if(!p || !Number.isFinite(p.x)||!Number.isFinite(p.y))return null;
 let {x,y}=p,r=Math.hypot(x,y);if(r>15){x*=15/r;y*=15/r;r=15;}if(r<2.8){const a=Math.atan2(y||1,x||.01);x=2.8*Math.cos(a);y=2.8*Math.sin(a);}return {x,y};}
function surfaceGoal(px,py){let p=world.groundAt(px,py);
 if(!p) p=world.groundAt(px,Math.max(py,H*.78)); // sky pointer -> nearest reachable grass
 return p?confine({x:p.x,y:p.z}):null;
}
// These three classes retain the articulated follow + inverse kinematics
// implementation from the original lizard.js. Numerical units are metres.
class Segment {
 constructor(parent,size,angle,range,stiffness){
  this.isSegment=true;this.parent=parent;if(typeof parent.children==='object')parent.children.push(this);
  this.children=[];this.size=size;this.relAngle=angle;this.defAngle=angle;
  this.absAngle=parent.absAngle+angle;this.range=range;this.stiffness=stiffness;this.updateRelative(false,true);
 }
 updateRelative(iter,flex){
  this.relAngle=this.relAngle-TAU*Math.floor((this.relAngle-this.defAngle)/TAU+.5);
  if(flex)this.relAngle=Math.min(this.defAngle+this.range/2,Math.max(this.defAngle-this.range/2,(this.relAngle-this.defAngle)/this.stiffness+this.defAngle));
  this.absAngle=this.parent.absAngle+this.relAngle;
  this.x=this.parent.x+Math.cos(this.absAngle)*this.size;
  this.y=this.parent.y+Math.sin(this.absAngle)*this.size;
  if(iter)for(const c of this.children)c.updateRelative(iter,flex);
 }
 follow(iter){
  const x=this.parent.x,y=this.parent.y,dist=Math.max(1e-9,Math.hypot(this.x-x,this.y-y));
  this.x=x+this.size*(this.x-x)/dist;this.y=y+this.size*(this.y-y)/dist;
  this.absAngle=Math.atan2(this.y-y,this.x-x);this.relAngle=this.absAngle-this.parent.absAngle;
  this.updateRelative(false,true);
  if(iter)for(const c of this.children)c.follow(true);
 }
 draw(iter){putLine(this.parent,this);if(iter)for(const c of this.children)c.draw(true);}
}
class LimbSystem {
 constructor(end,length,speed,creature){
  this.end=end;this.length=Math.max(1,length);this.creature=creature;this.speed=speed;
  creature.systems.push(this);this.nodes=[];let node=end;
  for(let i=0;i<length;i++){this.nodes.unshift(node);node=node.parent;
   if(!node.isSegment){this.length=i+1;break;}}
  this.hip=this.nodes[0].parent;
 }
 moveTo(x,y){
  this.nodes[0].updateRelative(true,true);
  const dist=Math.hypot(x-this.end.x,y-this.end.y);let len=Math.max(0,dist-this.speed);
  for(let i=this.nodes.length-1;i>=0;i--){const node=this.nodes[i],ang=Math.atan2(node.y-y,node.x-x);
   node.x=x+len*Math.cos(ang);node.y=y+len*Math.sin(ang);x=node.x;y=node.y;len=node.size;}
  for(const node of this.nodes){node.absAngle=Math.atan2(node.y-node.parent.y,node.x-node.parent.x);
   node.relAngle=node.absAngle-node.parent.absAngle;
   for(const child of node.children)if(!this.nodes.includes(child))child.updateRelative(true,false);}
 }
}
class LegSystem extends LimbSystem {
 constructor(end,length,speed,creature){super(end,length,speed,creature);
  this.goalX=end.x;this.goalY=end.y;this.step=0;this.forwardness=0;
  this.reach=.9*Math.hypot(this.end.x-this.hip.x,this.end.y-this.hip.y);
  let relAngle=this.creature.absAngle-Math.atan2(this.end.y-this.hip.y,this.end.x-this.hip.x);
  relAngle-=TAU*Math.floor(relAngle/TAU+.5);
  this.swing=-relAngle+(2*(relAngle<0)-1)*PI/2;
  this.swingOffset=this.creature.absAngle-this.hip.absAngle;
 }
 update(){
  this.moveTo(this.goalX,this.goalY);
  if(this.step===0){const dist=Math.hypot(this.end.x-this.goalX,this.end.y-this.goalY);
   if(dist>.023){this.step=1;
    this.goalX=this.hip.x+this.reach*Math.cos(this.swing+this.hip.absAngle+this.swingOffset)+(2*Math.random()-1)*this.reach/2;
    this.goalY=this.hip.y+this.reach*Math.sin(this.swing+this.hip.absAngle+this.swingOffset)+(2*Math.random()-1)*this.reach/2;}}
  else if(this.step===1){const theta=Math.atan2(this.end.y-this.hip.y,this.end.x-this.hip.x)-this.hip.absAngle;
   const dist=Math.hypot(this.end.x-this.hip.x,this.end.y-this.hip.y);
   const forwardness2=dist*Math.cos(theta),dF=this.forwardness-forwardness2;
   this.forwardness=forwardness2;
   if(dF*dF<.0003){this.step=0;this.goalX=this.hip.x+(this.end.x-this.hip.x);this.goalY=this.hip.y+(this.end.y-this.hip.y);}}
 }
}
class Creature {
 constructor(x,y,angle,fAccel,fFric,fRes,fThresh,rAccel,rFric,rRes,rThresh){
  this.x=x;this.y=y;this.absAngle=angle;this.headAngle=angle;this.headTurnSpeed=.13;
  this.fSpeed=0;this.fAccel=fAccel;this.fFric=fFric;this.fRes=fRes;this.fThresh=fThresh;
  this.rSpeed=0;this.rAccel=rAccel;this.rFric=rFric;this.rRes=rRes;this.rThresh=rThresh;
  this.children=[];this.systems=[];
 }
 follow(x,y){
  const angleToTarget=Math.atan2(y-this.y,x-this.x),angleDiff=delta(angleToTarget,this.absAngle);
  // Restore *head first* steering. The head looks toward the target before the
  // main body rotates, within its own anatomical range of +/- ~50 degrees.
  const targetHeadAngle=this.absAngle+clamp(angleDiff,-.84,.84);
  this.headAngle+=delta(targetHeadAngle,this.headAngle)*this.headTurnSpeed;
  const dist=Math.hypot(this.x-x,this.y-y);
  const planted=this.systems.filter(s=>s.step===0).length;
  const accel=this.fAccel*(planted/Math.max(this.systems.length,1)||.6);
  this.fSpeed=(this.fSpeed+accel*Number(dist>this.fThresh))*(1-this.fRes);
  this.speed=Math.max(0,this.fSpeed-this.fFric);
  const bodyRotDiff=delta(this.absAngle,angleToTarget);
  if(Math.abs(bodyRotDiff)>this.rThresh&&dist>this.fThresh)this.rSpeed-=this.rAccel*Math.sign(bodyRotDiff);
  this.rSpeed*=1-this.rRes;
  this.rSpeed=Math.abs(this.rSpeed)>this.rFric?this.rSpeed-this.rFric*Math.sign(this.rSpeed):0;
  this.absAngle=delta(this.absAngle+this.rSpeed,0);
  this.x+=this.speed*Math.cos(this.absAngle);this.y+=this.speed*Math.sin(this.absAngle);
  // Original kinematic trick: turn the root 180° before propagating the spine,
  // so the body bends behind the independently pointing head.
  this.absAngle+=PI;
  for(const c of this.children)c.follow(true);
  for(const s of this.systems)s.update();
  this.absAngle-=PI;
 }
 draw(){
  // Original open C-shaped head and pointed snout, using terrain projection.
  const r=.076,path=[];
  for(let k=0;k<=18;k++){
   const theta=this.headAngle+PI/4+(TAU-PI/2)*k/18;
   path.push([this.x+r*Math.cos(theta),this.y+r*Math.sin(theta),.11]);
  }
  path.push([this.x+Math.SQRT2*r*Math.cos(this.headAngle),this.y+Math.SQRT2*r*Math.sin(this.headAngle),.11]);
  path.push([this.x+r*Math.cos(this.headAngle+PI/4),this.y+r*Math.sin(this.headAngle+PI/4),.11]);
  penPath(path);
  for(const c of this.children)c.draw(true);
 }
}
let critter=null;
// Read-only wildlife coordinate for optional EMU's lizard-follow navigator.
world.getLizard=()=>critter?{x:critter.x,z:critter.y,heading:critter.absAngle}:null;
function setupLizard(){
 const start=surfaceGoal(W*.73,H*.79)||{x:3.5,y:9};
 critter=new Creature(start.x,start.y,-2.4,.024,.005,.48,.38,.105,.012,.65,.17);
 const size=.018;
 let spinal=critter;
 for(let i=0;i<6;i++)spinal=new Segment(spinal,size*4,0,PI*2/3,1.1);
 for(let i=0;i<2;i++){
  if(i>0)for(let ii=0;ii<6;ii++)spinal=new Segment(spinal,size*4,0,PI/2,1.5);
  for(let side=-1;side<=1;side+=2){
   let node=new Segment(spinal,size*12,side*.785,0,8);
   node=new Segment(node,size*16,-side*.785,TAU,1);
   node=new Segment(node,size*16,side*PI/2,PI,2);
   new LegSystem(node,3,size*12,critter);
  }
 }
 const tailLength=Math.floor(12+Math.random()*20);
 for(let i=0;i<tailLength;i++)spinal=new Segment(spinal,size*4,0,PI*2/3,1.1);
}
let mouseActivityTimer=0,idleActionTimer=0;
let lizardState='WANDERING',destination=null,temporaryTarget=null,lastMouse=null;
let smoothedTarget=null,velocity={x:0,y:0},eaten=0;
function newWanderDestination(){
 for(let i=0;i<25;i++){
  const p=surfaceGoal(W*(.20+Math.random()*.75),H*(.61+Math.random()*.33));
  if(p&&Math.hypot(p.x-critter.x,p.y-critter.y)>1.8){destination=p;return;}}
 destination=confine({x:critter.x+(Math.random()-.5)*9,y:critter.y+(Math.random()-.5)*9});
}
function butterflies(){
 // The world already supplies its current reachable prey. Re-filter only by
 // the lizard's roaming boundary; don't run the world's prey scan twice.
 return world.bugs().filter(b=>b.state==='perched'&&Math.hypot(b.pos[0],b.pos[2])>2.8&&Math.hypot(b.pos[0],b.pos[2])<15);
}
function preyPosition(b){return b?{x:b.pos[0],y:b.pos[2]}:null;}
function closestButterfly(){let best=null,dist=Infinity;
 for(const b of butterflies()){
  const p=toScreen(b.pos[0],b.pos[2]);if(!p?.visible)continue;
  const d=Math.hypot(critter.x-b.pos[0],critter.y-b.pos[2]);if(d<dist){best=b;dist=d;}}
 return best;}
// Inspect the actual route, not just the initial mouse event. A quick detour
// should be local to the line of travel, not a wholesale change of destination.
function opportunisticButterfly(target){
 if(!target)return null;
 const dx=target.x-critter.x,dy=target.y-critter.y,routeSq=dx*dx+dy*dy;
 if(routeSq<.4)return null;
 let best=null,bestScore=Infinity;
 for(const b of butterflies()){
  const p=preyPosition(b),ox=p.x-critter.x,oy=p.y-critter.y,d=Math.hypot(ox,oy);
  if(d>4.2)continue;
  const along=clamp((ox*dx+oy*dy)/routeSq,0,1);
  if(along<.03)continue;
  const offRoute=Math.hypot(ox-along*dx,oy-along*dy);
  if(offRoute>1.65)continue;
  const score=offRoute*.8+d*.12;
  if(score<bestScore){best=b;bestScore=score;}
 }
 return best;
}

let pointer={x:W/2,y:H*.8},pointerChanged=false;
function inputMove(x,y){
 // Dragging the butterfly/robot camera must not redirect the lizard.
 if(world.isPiloting?.())return;
 const moved=!lastMouse||Math.hypot(x-lastMouse.x,y-lastMouse.y)>1.5;
 lastMouse={x,y};
 if(moved){const p=surfaceGoal(x,y);if(p){pointer=p;pointerChanged=true;}}
}
window.addEventListener('pointermove',e=>inputMove(e.clientX,e.clientY),{passive:true});
window.addEventListener('touchmove',e=>{if(e.touches.length)inputMove(e.touches[0].clientX,e.touches[0].clientY);},{passive:true});
// Pointer events on homepage buttons happen in the parent, not in its iframe.
window.addEventListener('message',e=>{if(e.origin===location.origin&&e.source===parent&&e.data?.type==='trial-pointer')inputMove(e.data.x,e.data.y)});
window.addEventListener('blur',()=>{mouseActivityTimer=0});
document.addEventListener('visibilitychange',()=>{active=!document.hidden;last=performance.now()});
let huntScanTimer=0;
function logicStep(){
 if(pointerChanged){
  lizardState='CHASING_MOUSE';mouseActivityTimer=140;destination=pointer;
  pointerChanged=false;
 }else if(mouseActivityTimer>0){
  lizardState='CHASING_MOUSE';mouseActivityTimer--;
 }else{
  temporaryTarget=null;
  if(--idleActionTimer<=0){
   const prey=Math.random()<.8?closestButterfly():null;
   if(prey){lizardState='SEEKING_MOTE';destination=prey;idleActionTimer=220+Math.random()*160;}
   else{lizardState='WANDERING';newWanderDestination();idleActionTimer=150+Math.random()*150;}
  }
 }
 if(!destination){newWanderDestination();idleActionTimer=180;}
 if(destination?.pos&&destination.state!=='perched'){idleActionTimer=0;destination=null;return;}
 // Do not continue after butterflies that fly away, and do not only look for
 // snacks during a mousemove: rescan the corridor periodically while walking.
 if(temporaryTarget?.state!=='perched')temporaryTarget=null;
 if(lizardState==='CHASING_MOUSE'&&--huntScanTimer<=0){
  huntScanTimer=12;
  if(!temporaryTarget)temporaryTarget=opportunisticButterfly(destination);
 }
 const prey=temporaryTarget||((destination?.pos)?destination:null);
 const target=prey?preyPosition(prey):destination;
 if(!target)return;
 const distance=Math.hypot(critter.x-target.x,critter.y-target.y);
 if(prey&&prey.state==='perched'&&distance<(.17+.40*sizeFactor())){
  world.eatButterfly(prey);eaten++;
  const counter=document.getElementById('lizardSnackCount');if(counter)counter.textContent=String(eaten);
  temporaryTarget=null;huntScanTimer=50;
  // Return to the stored mouse goal after a snack rather than resuming
  // pursuit of the now-respawned butterfly up in the tree.
  if(destination===prey){destination=null;idleActionTimer=0;}
 }else if(!prey&&lizardState==='WANDERING'&&distance<.5)idleActionTimer=0;
 const next=prey&&prey.state==='perched'?target:destination?.pos?preyPosition(destination):destination;
 if(!next)return;
 let easing=.02,friction=.90;
 if(lizardState==='CHASING_MOUSE'){easing=.08;friction=.88;}
 else if(lizardState==='SEEKING_MOTE'||prey){easing=.05;friction=.90;}
 velocity.x=(velocity.x+(next.x-smoothedTarget.x)*easing)*friction;
 velocity.y=(velocity.y+(next.y-smoothedTarget.y)*easing)*friction;
 const velocityLength=Math.hypot(velocity.x,velocity.y);
 if(velocityLength>.12){velocity.x*=.12/velocityLength;velocity.y*=.12/velocityLength;}
 smoothedTarget.x+=velocity.x;smoothedTarget.y+=velocity.y;
 const goal=confine(smoothedTarget);
 if(goal){critter.follow(goal.x,goal.y);
  const safe=confine({x:critter.x,y:critter.y});
  if(safe&&Math.hypot(safe.x-critter.x,safe.y-critter.y)>.001){critter.x=safe.x;critter.y=safe.y;}}
}

function draw(){lines.length=0;critter.draw();world.setLizardLines(lines);}
let pausedFrameDrawn=false;
function frame(now){requestAnimationFrame(frame);
 if(!active){last=now;return;}
 resize();const dt=clamp((now-last)/1000,0,.065);last=now;
 if(!critter){setupLizard();newWanderDestination();smoothedTarget={x:critter.x,y:critter.y};}
 if(world.isPaused()){
  // Preserve a single visible lizard pose for reduced-motion / paused mode;
  // there is no point rebuilding identical line geometry every RAF.
  if(!pausedFrameDrawn){draw();pausedFrameDrawn=true;}
  return;
 }
 pausedFrameDrawn=false;
 elapsed+=dt*clamp(Number(world.lizardConfig?.speed)||3,.5,7);let iterations=0;
 while(elapsed>=1/60&&iterations<24){logicStep();elapsed-=1/60;iterations++;}
 if(iterations===24)elapsed=0;
 draw();
}
resize();requestAnimationFrame(frame);
window.__lizardDiagnostics=()=>({size:sizeFactor(),speedSetting:world.lizardConfig?.speed,strokes:lines.length,x:critter?.x,y:critter?.y,speed:critter?.speed,bodyHeading:critter?.absAngle,headHeading:critter?.headAngle,
 firstSpineHeading:critter?.children[0]?.absAngle,tailHeading:critter?.children[0]?.children[0]?.absAngle,
 state:lizardState,catchCount:eaten,legSteps:critter?.systems.map(s=>s.step),spinalSegments:critter?countSegments(critter):0});
function countSegments(parent){return (parent.children||[]).reduce((n,c)=>n+1+countSegments(c),0);}
})();
