import test from 'node:test';
import assert from 'node:assert/strict';
import {wingForces,NPC_AERO,FLY,RACE_FLY} from '../assets/flight-physics.js';

// One tested aerodynamic kernel drives the player and the ambient butterflies;
// neither path may silently become a scripted or visually faked flight model.
test('butterfly forces respond to airspeed, flapping, banking and stall',()=>{
 const straight=wingForces(2,.1,0,false,0,FLY);
 const fast=wingForces(3,.1,0,false,0,FLY);
 const flap=wingForces(2,.1,0,true,Math.PI/2,FLY);
 const bank=wingForces(2,.1,.6,false,0,FLY);
 const attached=wingForces(2,.3,0,false,0,FLY);
 const stalled=wingForces(2,1.9,0,false,0,FLY);
 assert.ok(straight.lift>0);
 assert.ok(fast.drag>straight.drag);
 assert.ok(flap.lift>straight.lift);
 assert.ok(bank.drag>straight.drag);
 assert.ok(stalled.lift<attached.lift,'stall must reduce available lift');
 assert.ok(stalled.drag>attached.drag,'stall must increase drag');
});

test('player and ambient physics remain finite across their working envelope',()=>{
 for(const profile of [FLY,NPC_AERO]){
  for(const speed of [.25,.7,2,5,13]){
   for(const aoa of [-.3,0,.45,1.5]){
    for(const bank of [-.7,0,.7]){
     const result=wingForces(speed,aoa,bank,true,Math.PI/3,profile);
     assert.ok(Object.values(result).every(Number.isFinite),
      'finite wing forces required at '+JSON.stringify({speed,aoa,bank}));
     assert.ok(result.drag>=0 && result.lift>=0);
    }
   }
  }
 }
});

test('race-only wingbeats improve physical climb thrust without changing relaxed flight',()=>{
 assert.equal(FLY.flapImpulse,.64,'normal Meadow flight retains the original impulse');
 assert.equal(FLY.flapLift,3.4,'normal Meadow flight retains the original wing lift');
 assert.ok(RACE_FLY.flapImpulse>FLY.flapImpulse);
 assert.ok(RACE_FLY.flapCost<FLY.flapCost);
 const ordinary=wingForces(2,.3,0,true,Math.PI/2,FLY);
 const racing=wingForces(2,.3,0,true,Math.PI/2,RACE_FLY);
 assert.ok(racing.lift>ordinary.lift,'race climb is real lift from a stronger flap');
 assert.ok(Math.abs(racing.drag-ordinary.drag)<1e-8,'no magical drag disappearance');
});
