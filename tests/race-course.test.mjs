import test from 'node:test';
import assert from 'node:assert/strict';
import {RACE_TYPES,EIGHT,raceFigurePoint,makeFigureEightCourse} from '../assets/race-course.js';

const norm=a=>Math.hypot(...a);
const height=(x,z)=>3.75*Math.exp(-(x*x+z*z)/118)+.14*Math.sin(x*.22+z*.09)+
 .19*Math.cos(z*.18-x*.14)+.42*Math.exp(-((x+30)**2+(z-28)**2)/320)+
 .36*Math.exp(-((x-31)**2+(z+21)**2)/600);
const arch=[16.8,height(16.8,-18.5)+1.40*2/3,-18.5];
const canonical=[.731,0,.683];

test('only three difficulty names are exposed through one arch',()=>{
 assert.deepEqual(RACE_TYPES.map(t=>t.name),['Easy','Medium','Hard']);
 assert.equal(EIGHT.spanX,29.4,'keep the deliberately wide outer curves');
});

test('a complete continuous eight passes near the tree low first, high second, in either direction',()=>{
 for(const reverse of [false,true])for(let i=0;i<3;i++){
  const entry=EIGHT.entry,sign=reverse?1:-1;
  const lap=Array.from({length:721},(_,k)=>raceFigurePoint(i,entry+sign*k*Math.PI*2/720,height,reverse));
  const xs=lap.map(p=>p[0]),span=Math.max(...xs)-Math.min(...xs);
  assert.ok(span>58.5&&span<60.5,'outer curves must remain around 59 metres wide');
  const start=lap[0],end=lap.at(-1);
  assert.ok(norm(start.map((v,k)=>v-end[k]))<1e-5,'loop must close at identical altitude');
  const low=raceFigurePoint(i,reverse?0:-Math.PI,height,reverse);
  const high=raceFigurePoint(i,reverse?Math.PI:-2*Math.PI,height,reverse);
  assert.ok(Math.hypot(low[0],low[2])<4.1,'low pass near tree');
  assert.ok(norm([low[0]-high[0],low[2]-high[2]])<1e-6,'same XY plan at both crossings');
  assert.ok(high[1]-low[1]>5,'second crossing above tree');
 }
});

test('every difficulty points ahead of the butterfly after either arch entrance',()=>{
 for(const reverse of [false,true])for(let i=0;i<3;i++){
  const direction=canonical.map(v=>reverse?-v:v);
  const gates=makeFigureEightCourse({index:i,start:arch,direction,height,finishRadius:.64});
  assert.ok(gates.length>25,'full-length eight needs numerous checkpoints');
  const first=gates[0],second=gates[1];
  const dx=first.pos[0]-arch[0],dz=first.pos[2]-arch[2];
  const forward=(dx*direction[0]+dz*direction[2])/Math.hypot(dx,dz);
  assert.ok(forward>.78,'FIRST ring must be clearly ahead, never behind after choosing a menu option');
  assert.ok(Math.hypot(dx,dz)>2,'first target should not overlap the arch');
  const approach=second.pos.map((v,k)=>v-first.pos[k]);
  assert.ok(approach[0]*direction[0]+approach[2]*direction[2]>0,
   'second target must not immediately double back behind the first');
  const earlyTangent=first.normal[0]*direction[0]+first.normal[2]*direction[2];
  assert.ok(earlyTangent>.2,'first ring must face the departing pilot, not backwards');
  const milestones=gates.filter(g=>g.milestone);
  assert.deepEqual(milestones.map(x=>x.milestone),['low','high'],
   'must pass tree low, then high, in the actual flight order');
  assert.ok(milestones[1].pos[1]-milestones[0].pos[1]>5);
  const last=gates.at(-1),prev=gates.at(-2);
  assert.ok(norm(last.pos.map((v,k)=>v-arch[k]))<1e-7,'finish is the real arch');
  const finish=last.pos.map((v,k)=>v-prev.pos[k]);
  const forwardFinish=(finish[0]*direction[0]+finish[2]*direction[2])/Math.hypot(finish[0],finish[2]);
  assert.ok(forwardFinish>.85,'finish must align with the arch in the actual arrival direction');
  assert.ok(Math.hypot(finish[0],finish[2])>2,'final checkpoint must be a flyable distance away');
  let lengthM=0,maxGrade=0;
  for(let k=0;k<gates.length;k++){
   const g=gates[k];
   assert.ok(g.pos.every(Number.isFinite)&&g.normal.every(Number.isFinite));
   const clearance=g.pos[1]-height(g.pos[0],g.pos[2]);
   assert.ok(clearance>(k===gates.length-1?.8:1.3),
    'terrain clearance: '+RACE_TYPES[i].name+' '+(reverse?'reverse':'forward')+
    ' gate '+k+'/'+gates.length+' clearance='+clearance.toFixed(3));
   if(k===0)continue;
   const p=gates[k-1],d=g.pos.map((v,n)=>v-p.pos[n]);
   const planar=Math.hypot(d[0],d[2]);
   lengthM+=norm(d);
   assert.ok(norm(d)<9,'no jump between ring centres');
   if(d[1]>0&&planar>1)maxGrade=Math.max(maxGrade,d[1]/planar);
  }
  assert.ok(maxGrade<.52,'courses must have a physically achievable grade');
  console.log(RACE_TYPES[i].name+(reverse?' reverse':' forward')+
   ': '+gates.length+' gates, '+lengthM.toFixed(1)+' m, uphill '+(maxGrade*100).toFixed(1)+'%');
 }
});
