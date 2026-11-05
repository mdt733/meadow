// Shared butterfly aerodynamics used by both the player and NPCs.
// Pure specific-force calculations: no DOM, rendering, state or timers.
// Keep these tested coefficients together so flight tuning is deliberate.
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
export function wingForces(speed,aoa,bank,flapping,phase,p){
 const excess=Math.max(0,aoa-(p.stallStart??100));
 const attached=Math.max(p.minAttach??1,1-excess*excess*(p.stallLoss??0));
 const cl=clamp(p.liftBase+p.liftAoA*clamp(aoa,p.shapeMin??-10,p.shapeMax??10),p.minCl,p.maxCl)*attached;
 const lift=Math.min(p.maxLift??1000,cl*Math.min(p.liftSpeedLimit??1000,p.liftV2*speed*speed))+
  (flapping?p.flapLift*(p.flapBase+p.flapPulse*(p.positiveFlap?Math.max(0,Math.sin(phase)):Math.sin(phase+(p.flapPhase||0)))):0);
 const drag=p.drag0+p.dragV2*speed*speed+(p.induced||0)*Math.max(0,cl*cl)+
  (p.bankDrag||0)*Math.abs(bank)*(p.bankSpeed?speed:1)+(p.stallDrag||0)*excess*excess;
 return {lift,drag,cl,excess};
}
export const NPC_AERO={liftBase:.66,liftAoA:.85,shapeMin:-.22,shapeMax:.48,minCl:0,maxCl:3,
 liftV2:1/1.47,liftSpeedLimit:1.55,flapLift:1,flapBase:.88,flapPulse:.12,flapPhase:Math.PI/2,
 drag0:.105,dragV2:.16,bankDrag:.12};

export const FLY={g:9.81, drag0:.055,dragV2:.065,induced:.032, liftV2:2.30,
 liftBase:.63,liftAoA:1.65,maxLift:29,flapImpulse:.64,flapLift:3.4,
 flapInterval:.245, flapCost:.019,regen:.080,
 // Gradually lower the nose when speed falls, even if the pilot keeps pulling up.
 noseDipStart:1.90,noseDipFull:.70,noseDipRate:1.05,lowSpeedStick: .78,
 stallIn:.34,stallOut:.88,maxSpeed:14,
 // Shared wing-force coefficients: these preserve the original player model.
 stallStart:.70,stallLoss:1.15,minAttach:.62,minCl:.06,maxCl:1.75,
 flapBase:.70,flapPulse:.30,positiveFlap:true,bankDrag:.055,bankSpeed:true,stallDrag:.55};

// Race flight uses the SAME physical lift/drag and gravity integration,
// with more powerful wingbeats and enough stamina for a sustained canopy
// climb. Ordinary relaxed Meadow flight retains the original FLY tuning.
export const RACE_FLY=Object.freeze({...FLY,
 flapImpulse:1.14,flapLift:4.45,flapCost:.013,regen:.09
});
