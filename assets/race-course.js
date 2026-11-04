// Geometrically continuous figure-eight flight courses, separate from WebGL.
// Two centre crossings near the apple tree: first low (u=0), then above
// its canopy (u=PI). The red course adds turns and climbs, never teleports.
const TAU=Math.PI*2,clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const add=(a,b)=>a.map((x,i)=>x+b[i]),sub=(a,b)=>a.map((x,i)=>x-b[i]);
const mul=(a,s)=>a.map(x=>x*s),length=a=>Math.hypot(...a);
const norm=a=>mul(a,1/Math.max(1e-8,length(a)));
export const RACE_TYPES=Object.freeze([
 {name:'Green',color:[.40,.94,.49],radius:1.90,step:5.8},
 {name:'Orange',color:[1,.63,.23],radius:1.65,step:5.0},
 {name:'Red',color:[1,.30,.35],radius:1.42,step:4.35}
]);
export const EIGHT={centerX:3.5,centerZ:-.9,spanX:14.7,spanZ:12.7,entry:-Math.PI/4};

export function raceFigurePoint(index,u,height){
 if(!Number.isInteger(index)||index<0||index>=RACE_TYPES.length)
  throw new RangeError('Unknown race difficulty');
 const x0=EIGHT.centerX,z0=EIGHT.centerZ;
 // Periodic wiggles vanish at BOTH centre crossings, so the low and high
 // passes really cross the same world X/Z close to the apple tree.
 const variation=[.22,.80,1.55][index],window=Math.sin(u)**2;
 const ripple=window*variation*(Math.sin(3*u+.28*index)+.4*Math.sin(5*u-.35*index));
 const x=x0-EIGHT.spanX*Math.sin(u)+ripple*.36*Math.cos(u);
 const z=z0+EIGHT.spanZ*Math.sin(2*u)+ripple*.72;
 const low=height(x0,z0)+2.35;
 const high=low+[5.9,7.5,8.8][index];
 const sky=low+(high-low)*(1-Math.cos(u))*.5;
 const verticalNoise=window*[.15,.55,1.05][index]*
   (Math.sin(3*u+.25*index)+.30*Math.sin(5*u));
 // Harder runs require more effort, but all ring centres have at least
 // 1.65m of real terrain clearance. No height snapping of the butterfly.
 return [x,Math.max(height(x,z)+1.65,sky+verticalNoise),z];
}

export function raceChoices(start,direction,height){
 const f=norm([direction[0],0,direction[2]]);
 const right=norm([-f[2],0,f[0]]);
 return RACE_TYPES.map((type,i)=>{
  // Farther downrange and lower than the old 9m/3m markers. ~16.5m
  // of approach gives the visitor room to read and deliberately steer.
  const x=start[0]+f[0]*16.5+right[0]*(i-1)*5.3;
  const z=start[2]+f[2]*16.5+right[2]*(i-1)*5.3;
  return {name:type.name,color:type.color,radius:1.70,
   pos:[x,Math.max(height(x,z)+1.85,start[1]+.10),z],normal:f};
 });
}
function tangent(point,u){return norm(sub(point(u+.002),point(u-.002)))}
function cubic(a,b,c,d,t){
 const w=1-t;
 return add(add(mul(a,w*w*w),mul(b,3*w*w*t)),add(mul(c,3*w*t*t),mul(d,t*t*t)));
}
function cubicDerivative(a,b,c,d,t){
 const w=1-t;
 return norm(add(add(mul(sub(b,a),3*w*w),mul(sub(c,b),6*w*t)),mul(sub(d,c),3*t*t)));
}

export function makeFigureEightCourse({index,choice,start,direction,height,finishRadius}){
 if(!choice||typeof height!=='function')throw new Error('A selected ring and real terrain are required');
 const kind=RACE_TYPES[index],f=norm([direction[0],0,direction[2]]);
 const at=u=>raceFigurePoint(index,u,height),entry=EIGHT.entry,exit=entry+TAU;
 const first=at(entry),last=at(exit);
 const inT=tangent(at,entry),outT=tangent(at,exit);
 const points=[],directions=[],distance=[0];
 function append(p,t){
  if(points.length)distance.push(distance[distance.length-1]+length(sub(p,points[points.length-1])));
  points.push(p);directions.push(norm(t));
 }
 function bezier(a,b,c,d,steps,includeEnd){
  for(let i=0;i<steps+(includeEnd?1:0);i++){
   const t=i/steps;
   append(cubic(a,b,c,d,t),cubicDerivative(a,b,c,d,t));
  }
 }
 // One smooth outbound link, the FULL 8 (first low crossing, next high),
 // then one smooth return link to the original stone finish arch.
 bezier(choice.pos,add(choice.pos,mul(f,4.8)),
  sub(first,mul(inT,6)),first,125,false);
 const samples=1250;
 for(let i=0;i<=samples;i++){
  const u=entry+TAU*i/samples;
  append(at(u),tangent(at,u));
 }
 bezier(last,add(last,mul(outT,5.5)),
  sub(start,mul(f,6)),start,125,true);
 const total=distance[distance.length-1],count=Math.max(18,Math.round(total/kind.step));
 const gates=[];let cursor=1;
 for(let k=1;k<=count;k++){
  const d=total*k/count;
  while(cursor<distance.length-1&&distance[cursor]<d)cursor++;
  const a=cursor-1,b=cursor,t=clamp((d-distance[a])/Math.max(1e-8,distance[b]-distance[a]),0,1);
  const pos=k===count?[...start]:add(mul(points[a],1-t),mul(points[b],t));
  const normal=k===count?f:norm(add(mul(directions[a],1-t),mul(directions[b],t)));
  gates.push({pos,normal,color:kind.color,
   radius:k===count?finishRadius:kind.radius,boost:k%4===3&&k!==count});
 }
 return gates;
}
