import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parsePolicy, PolicyRunner } from '../emu/policy.js';
import { MeadowEmu } from '../emu/emu.js';

const raw=readFileSync(new URL('../emu/champion.emupolicy',import.meta.url),'utf8');
const bundle=parsePolicy(raw);

test('uses the published 260M six-servo terrain actor, not a fake gait',()=>{
 assert.equal(bundle.format,'emu-policy');
 assert.equal(bundle.schema,3);
 assert.equal(bundle.source.step,260046848);
 assert.equal(bundle.policy.obs_dim,360);
 assert.equal(bundle.policy.action_dim,6);
 assert.deepEqual(bundle.policy.hidden_sizes,[256,256]);
 assert.equal(bundle.policy.layers.length,3);
 const actor=new PolicyRunner(bundle);
 const result=actor.infer(new Float32Array(360));
 assert.equal(result.length,6);
 assert.ok([...result].every(Number.isFinite));
 assert.ok([...result].every(v=>v>=-1&&v<=1));
});

test('Meadow garden controller preserves the trained actor observation widths',()=>{
 const robot=new MeadowEmu(bundle);
 robot.setWorld((x,z)=>.05*Math.sin(x*.5)+.02*Math.cos(z*.7),7,9.1);
 assert.equal(robot.obs.length,360);
 assert.equal(robot.frameObs().length,90);
 assert.equal(robot.history.length,4);
 assert.equal(robot.legs().length,2);
 assert.ok(robot.legs().every(l=>l.foot.length===3&&l.foot.every(Number.isFinite)));
 const scan=robot.rays();
 assert.equal(scan.ranges.length,16);
 assert.equal(scan.valid.length,16);
 assert.ok(scan.valid.every(v=>v===0||v===1));
 for(let i=0;i<20;i++)robot.advance(.02,{vx:.2,vy:0,yaw:.1});
 assert.equal(robot.frames,20);
 assert.ok([...robot.obs,...robot.q].every(Number.isFinite));
 assert.ok(Number.isFinite(robot.pose.x+robot.pose.z+robot.pose.y));
});

test('autonomous navigator pursues the lizard without touching the flight controls',()=>{
 const robot=new MeadowEmu(bundle);
 robot.setWorld(()=>0,7,9.1);
 const cmd=robot.autopilot({x:9,z:10,heading:0});
 assert.ok(cmd.vx>0 && Number.isFinite(cmd.yaw));
 for(let i=0;i<10;i++)robot.advance(.02,cmd);
 assert.equal(robot.frames,10);
 assert.ok(robot.pose);
});

test('main Meadow keeps the EMU actor lazy, with direct launch and a square rock alternative',()=>{
 const html=readFileSync(new URL('../meadow.html',import.meta.url),'utf8');
 assert.match(html,/const EMU_ROCK=/);
 assert.match(html,/id="emuStart"/);
 assert.match(html,/id="flyStart"/);
 assert.match(html,/addEmuCubeRock\(\)/);
 assert.match(html,/async function startRobotRide\(\)/);
 assert.match(html,/\$\('emuStart'\)\.onclick=startRobotRide/);
 assert.match(html,/emuWake:true|emuWake=|emuWake:rock\.emuWake===true/);
 assert.match(html,/import\('\.\/emu\/emu\.js'\)/);
 assert.match(html,/emu\.autopilot/);
 assert.match(html,/function drawEmu\(/);
 assert.doesNotMatch(html,/<script[^>]+src=["']emu\/emu\.js/);
});
