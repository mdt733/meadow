import test from 'node:test';
import assert from 'node:assert/strict';
import {RACE_TYPES,EIGHT,raceFigurePoint,raceChoices,makeFigureEightCourse} from '../assets/race-course.js';

const norm=a=>Math.hypot(...a);
const height=(x,z)=>3.75*Math.exp(-(x*x+z*z)/118)+.14*Math.sin(x*.22+z*.09)+
 .19*Math.cos(z*.18-x*.14)+.42*Math.exp(-((x+30)**2+(z-28)**2)/320)+
 .36*Math.exp(-((x-31)**2+(z+21)**2)/600);
const arch=[16.8,height(16.8,-18.5)+1.40*2/3,-18.5];
const dir=[.731,0,.683];

test('difficulty choice gates are lower and farther away, but still in rich terrain',()=>{
 const choices=raceChoices(arch,dir,height);
 assert.equal(choices.length,3);
 assert.deepEqual(choices.map(x=>x.name),['Green','Orange','Red']);
 for(const c of choices){
  const dist=norm([c.pos[0]-arch[0],c.pos[2]-arch[2]]);
  assert.ok(dist>13,'each choice must allow a deliberate approach');
  assert.ok(norm([c.pos[0],c.pos[2]])<31,'choices must stay inside detailed meadow');
  assert.ok(c.pos[1]-height(c.pos[0],c.pos[2])<3,'lower flight selection');
  assert.ok(c.pos[1]-height(c.pos[0],c.pos[2])>1.5,'no ground grazing');
  assert.ok(c.radius>=1.5,'forgiving 3-D choice gates');
 }
 const lateral=norm([choices[0].pos[0]-choices[2].pos[0],choices[0].pos[2]-choices[2].pos[2]]);
 assert.ok(lateral>9,'gates must be well separated for meaningful steering');
});

test('full figure eight crosses near the tree first low then above the crown',()=>{
 for(let i=0;i<3;i++){
  const low=raceFigurePoint(i,0,height),high=raceFigurePoint(i,Math.PI,height);
  assert.ok(Math.hypot(low[0],low[2])<4.1,'first crossing near trunk');
  assert.ok(Math.abs(low[0]-high[0])<1e-8&&Math.abs(low[2]-high[2])<1e-8,
   'two crossings really share the same world X/Z');
  assert.ok(high[1]-low[1]>5,'second pass must rise above the whole canopy');
  assert.ok(high[1]>height(0,0)+6,'second pass substantially above tree trunk');
  const begin=raceFigurePoint(i,EIGHT.entry,height);
  const end=raceFigurePoint(i,EIGHT.entry+2*Math.PI,height);
  assert.ok(norm(begin.map((n,j)=>n-end[j]))<1e-6,'loop joins without position jump');
 }
 const g=raceFigurePoint(0,1.13,height),r=raceFigurePoint(2,1.13,height);
 assert.ok(norm([g[0]-r[0],g[2]-r[2]])>.4,'harder routes have meaningful turns');
});

test('each difficulty is one continuous traversable course that closes through original arch',()=>{
 const choice=raceChoices(arch,dir,height);
 const all=RACE_TYPES.map((_,index)=>makeFigureEightCourse({
  index,choice:choice[index],start:arch,direction:dir,height,finishRadius:.64
 }));
 for(const [i,gates] of all.entries()){
  assert.ok(gates.length>20,'large figure-eight needs meaningful checkpoints');
  const final=gates.at(-1);
  assert.ok(norm(final.pos.map((v,k)=>v-arch[k]))<1e-7,'finish in real stone arch');
  assert.ok(Math.abs(norm(final.normal)-1)<1e-6,'normal remains unit length');
  for(let j=0;j<gates.length;j++){
   const a=gates[j];
   assert.ok(a.pos.every(Number.isFinite)&&a.normal.every(Number.isFinite));
   assert.ok(a.pos[1]-height(a.pos[0],a.pos[2])>1.35,'no checkpoints underground');
   if(j>0){
    const b=gates[j-1];
    const step=norm(a.pos.map((n,k)=>n-b.pos[k]));
    assert.ok(step<9,'no discontinuity between ring centres');
    const planar=norm([a.pos[0]-b.pos[0],a.pos[2]-b.pos[2]]);
    if(a.pos[1]>b.pos[1]&&planar>1){
     assert.ok((a.pos[1]-b.pos[1])/planar<.43,
      'course climb should be attainable with real flapping rather than a teleport');
    }
   }
  }
 }
 assert.ok(all[2].length>=all[0].length,'harder course has denser/smaller ring spacing');
});
