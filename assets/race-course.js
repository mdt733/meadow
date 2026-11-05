// One original arch opens a choice menu; all courses start there.
// Clockwise/anticlockwise traversal matches the direction of entry.
const TAU=Math.PI*2,clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const add=(a,b)=>a.map((x,i)=>x+b[i]),sub=(a,b)=>a.map((x,i)=>x-b[i]);
const mul=(a,s)=>a.map(x=>x*s),length=a=>Math.hypot(...a);
const norm=a=>mul(a,1/Math.max(1e-8,length(a)));
export const RACE_TYPES=Object.freeze([
 {name:'Easy',color:[.40,.94,.49],radius:1.90,step:5.8},
 {name:'Medium',color:[1,.63,.23],radius:1.65,step:5.0},
 {name:'Hard',color:[1,.30,.35],radius:1.42,step:4.35}
]);
// Nearly 59 metres between the farthest outer bends.
export const EIGHT={centerX:3.5,centerZ:-.9,spanX:29.4,spanZ:12.7,entry:-Math.PI/3};
const ease=t=>{t=clamp(t,0,1);return t*t*(3-2*t)};
export function raceFigurePoint(index,u,height,reverse=false){
 if(!Number.isInteger(index)||index<0||index>=RACE_TYPES.length)
  throw new RangeError('Unknown race difficulty');
 const {centerX:x0,centerZ:z0,spanX,spanZ,entry}=EIGHT;
 const variation=[.22,.80,1.55][index],window=Math.sin(u)**2;
 const ripple=window*variation*(Math.sin(3*u+.28*index)+.4*Math.sin(5*u-.35*index));
 const x=x0-spanX*Math.sin(u)+ripple*.36*Math.cos(u);
 const z=z0+spanZ*Math.sin(2*u)+ripple*.72;
 const low=height(x0,z0)+2.35,high=low+[5.9,7.5,8.8][index];
 // Low first, high second, whichever way we traverse the loop.
 // The climb is spread over half a complete lap; not dumped into the
 // first couple of rings when the butterfly has just left the arch.
 const raw=reverse?(u-entry)/TAU:(entry-u)/TAU;
 const phase=((raw%1)+1)%1;
 const lowAt=reverse?1/6:1/3,highAt=reverse?2/3:5/6;
 const lift=phase<=lowAt?0:phase<=highAt?
  ease((phase-lowAt)/(highAt-lowAt)):1-ease((phase-highAt)/(1-highAt));
 const verticalNoise=window*[.15,.55,1.05][index]*
   (Math.sin(3*u+.25*index)+.30*Math.sin(5*u));
 return [x,Math.max(height(x,z)+1.65,low+(high-low)*lift+verticalNoise),z];
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
export function makeFigureEightCourse({index,start,direction,height,finishRadius}){
 if(!start||typeof height!=='function')throw new Error('An arch and real terrain are required');
 const kind=RACE_TYPES[index],f=norm([direction[0],0,direction[2]]);
 if(!kind)throw new RangeError('Unknown race difficulty');
 // Arch is approximately facing (.73,0,.68). Reversing the loop
 // traversal makes its opening tangent match either entry direction.
 const canonical=norm([.73,0,.68]);
 const reverse=f[0]*canonical[0]+f[2]*canonical[2]<0;
 const entry=EIGHT.entry,exit=entry+(reverse?TAU:-TAU);
 const sign=reverse?1:-1;
 const at=u=>raceFigurePoint(index,u,height,reverse);
 const first=at(entry),last=at(exit);
 const inT=mul(tangent(at,entry),sign),outT=mul(tangent(at,exit),sign);
 const points=[],directions=[],distance=[0];
 function append(p,t){
  if(points.length){const step=length(sub(p,points[points.length-1]));
   if(step<1e-7)return;
   distance.push(distance[distance.length-1]+step);
  }
  points.push(p);directions.push(norm(t));
 }
 function bezier(a,b,c,d,steps,includeEnd){
  for(let i=0;i<steps+(includeEnd?1:0);i++){
   const t=i/steps;append(cubic(a,b,c,d,t),cubicDerivative(a,b,c,d,t));
  }
 }
 // Arc-line-arc returns heading in the SAME direction as it entered,
 // with two generous radii rather than a 180-degree flip between rings.
 function roundedConnection(from,to,heading){
  const lateral=norm([-heading[2],0,heading[0]]);
  const side=(lateral[0]*-from[0]+lateral[2]*-from[2])>=0?lateral:mul(lateral,-1);
  const delta=sub(to,from);
  const sTarget=delta[0]*heading[0]+delta[2]*heading[2];
  const qTarget=delta[0]*side[0]+delta[2]*side[2];
  if(sTarget>=-1)throw new Error('Invalid race turnaround geometry');
  const radius=10,outside=radius*2,lastRadius=(outside-qTarget)/2;
  if(lastRadius<5)throw new Error('Unsafe race turnaround radius');
  const total=Math.PI*(radius+lastRadius)-sTarget;
  const startClear=from[1]-height(from[0],from[2]);
  const loc=(ss,qq,t)=>{
   const x=from[0]+heading[0]*ss+side[0]*qq;
   const z=from[2]+heading[2]*ss+side[2]*qq;
   const safe=startClear<2.2?startClear+(2.2-startClear)*ease(t/.11):2.2;
   return [x,Math.max(height(x,z)+safe,from[1]+(to[1]-from[1])*ease(t)),z];
  };
  const tangent=(ds,dq)=>norm(add(mul(heading,ds),mul(side,dq)));
  const n1=Math.ceil(Math.PI*radius/.25);
  for(let i=0;i<=n1;i++){
   const a=-Math.PI/2+Math.PI*i/n1;
   append(loc(radius*Math.cos(a),radius*(1+Math.sin(a)),
    radius*(a+Math.PI/2)/total),tangent(-radius*Math.sin(a),radius*Math.cos(a)));
  }
  const n2=Math.ceil(-sTarget/.25);
  for(let i=1;i<=n2;i++){
   const u=i/n2;
   append(loc(sTarget*u,outside,(Math.PI*radius-sTarget*u)/total),mul(heading,-1));
  }
  const center=(outside+qTarget)/2,n3=Math.ceil(Math.PI*lastRadius/.25);
  for(let i=1;i<=n3;i++){
   const a=Math.PI/2+Math.PI*i/n3;
   const t=(Math.PI*radius-sTarget+lastRadius*(a-Math.PI/2))/total;
   append(i===n3?[...to]:
    loc(sTarget+lastRadius*Math.cos(a),center+lastRadius*Math.sin(a),t),
    tangent(-lastRadius*Math.sin(a),lastRadius*Math.cos(a)));
  }
 }
 // The first ring is forward from the arch, never behind its entry.
 // An arrival from the other direction uses a longer curved approach.
 if(reverse){
  // The loop is behind a reverse arch entry. Round the approach in
  // physically navigable broad turns before joining its tangent.
  roundedConnection(start,first,f);
 }else{
  bezier(start,add(start,mul(f,5.5)),sub(first,mul(inT,5.5)),first,125,false);
 }
 const samples=1250;
 for(let i=0;i<=samples;i++){
  const u=entry+sign*TAU*i/samples;
  append(at(u),mul(tangent(at,u),sign));
 }
 // Swing behind the arch and finish through its real crossing plane,
 // heading in the same direction as the butterfly originally entered.
 if(reverse){
  // The reverse loop naturally faces toward the arch at its seam.
  // A shallow cubic returns directly without any hairpin.
  bezier(last,add(last,mul(f,5.5)),
   sub(start,mul(f,6)),start,145,true);
 }else{
  const behind=add(start,mul(f,-14));
  behind[1]=Math.max(start[1]+1.25,height(behind[0],behind[2])+2.15);
  roundedConnection(last,behind,f);
  const align=sub(start,mul(f,5));
  align[1]=Math.max(start[1]+1.0,height(align[0],align[2])+1.95);
  bezier(behind,add(behind,mul(f,4.5)),align,start,55,true);
 }
 const total=distance.at(-1),count=Math.max(18,Math.round(total/kind.step));
 function nearestDistance(pos){
  let closest=Infinity,idx=0;
  for(let i=0;i<points.length;i++){
   const delta=length(sub(points[i],pos));
   if(delta<closest){closest=delta;idx=i;}
  }
  return distance[idx];
 }
 const lowU=reverse?0:-Math.PI,highU=reverse?Math.PI:-2*Math.PI;
 const mandatory=[
  {milestone:'low',pos:at(lowU),normal:mul(tangent(at,lowU),sign)},
  {milestone:'high',pos:at(highU),normal:mul(tangent(at,highU),sign)}
 ].map(m=>({...m,d:nearestDistance(m.pos)}));
 const ringDistances=Array.from({length:count-1},(_,k)=>total*(k+1)/count)
  .filter(d=>mandatory.every(m=>Math.abs(d-m.d)>kind.step*.42));
 const scheduled=[...ringDistances,...mandatory.map(m=>m.d),total].sort((a,b)=>a-b);
 const gates=[];let cursor=1;
 for(let k=0;k<scheduled.length;k++){
  const d=scheduled[k],isFinish=k===scheduled.length-1;
  const milestone=mandatory.find(m=>Math.abs(d-m.d)<1e-5);
  while(cursor<distance.length-1&&distance[cursor]<d)cursor++;
  const a=cursor-1,b=cursor,t=clamp((d-distance[a])/Math.max(1e-8,distance[b]-distance[a]),0,1);
  const pos=isFinish?[...start]:milestone?[...milestone.pos]:
   add(mul(points[a],1-t),mul(points[b],t));
  const normal=isFinish?f:milestone?[...milestone.normal]:
   norm(add(mul(directions[a],1-t),mul(directions[b],t)));
  gates.push({pos,normal,color:kind.color,
   radius:isFinish?finishRadius:kind.radius,
   milestone:milestone?.milestone||null,
   boost:k%4===2&&!isFinish&&!milestone});
 }
 return gates;
}
