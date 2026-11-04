import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,statSync} from 'node:fs';
import {ROBOT_ASSETS,ROBOT_DOWNLOAD_BYTES} from '../emu/emu.js';
import {parsePolicy,PolicyRunner} from '../emu/policy.js';

const read=path=>readFileSync(new URL(path,import.meta.url),'utf8');
const bundle=parsePolicy(read('../emu/champion.emupolicy'));

test('genuine pinned 260M champion 360→256→256→6 actor evaluates finite motors',()=>{
 assert.equal(bundle.format,'emu-policy');
 assert.equal(bundle.schema,3);
 assert.equal(bundle.source.step,260046848);
 assert.equal(bundle.policy.obs_dim,360);
 assert.equal(bundle.policy.action_dim,6);
 assert.deepEqual(bundle.policy.hidden_sizes,[256,256]);
 const output=new PolicyRunner(bundle).infer(new Float32Array(360));
 assert.equal(output.length,6);
 assert.ok([...output].every(x=>Number.isFinite(x)&&x>=-1&&x<=1));
});
test('on-demand runtime is official MuJoCo and never the old garden walking proxy',()=>{
 const loader=read('../emu/emu.js');
 const physics=read('../emu/physics/src/index.js');
 const upstream=read('../emu/physics/src/physical-sim.js');
 const packageJson=JSON.parse(read('../emu/physics/package.json'));
 assert.equal(packageJson.dependencies['@mujoco/mujoco'],'3.17.0');
 assert.match(loader,/import\('\.\/physics\/dist\/emu-physics\.js'\)/);
 assert.match(physics,/EmuBrowserSim\.create/);
 assert.match(physics,/sim\.loadModel\(\)/);
 assert.match(physics,/sim\.advance\(dt\)/);
 assert.match(upstream,/this\.mujoco\.mj_step\(this\.model, this\.data\)/);
 assert.match(upstream,/this\.policy\.infer\(this\.obs\)/);
 assert.doesNotMatch(physics,/\.x\s*\+=|\.z\s*\+=|\.y\s*\+=/);
});
test('MuJoCo collision heightfield uses Meadow geometry, not a flat plane',()=>{
 const source=read('../emu/physics/src/index.js');
 const terrain=read('../emu/physics/src/terrain.js');
 assert.match(source,/heightAt\(origin\.x-my,origin\.z\+mx\)/);
 assert.match(source,/PARK_RES=257/);
 assert.match(source,/zOffset:minimum/);
 assert.match(source,/sim\.meadowPark=sampleMeadowPark/);
 assert.match(terrain,/park\.zOffset/);
 assert.match(terrain,/withMeadowTerrain/);
 assert.doesNotMatch(terrain,/depthCourseXml|generateTerrainPark|withGentleCourse/,
   'deployed physics must not retain viewer obstacle classrooms');
});
test('Meadow body + heading + collision terrain all share right-positive coordinates',()=>{
 const source=read('../emu/physics/src/index.js');
 const html=read('../meadow.html');
 assert.match(source,/return \[origin\.x - mj\[1\],origin\.height \+ mj\[2\],origin\.z \+ mj\[0\]\]/);
 assert.match(source,/x:this\.origin\.x-nav\.y,z:this\.origin\.z\+nav\.x/);
 assert.match(source,/heading:-nav\.heading/);
 assert.match(source,/p\[0\]-R\[3\]\*x-R\[4\]\*y-R\[5\]\*z/);
 assert.match(source,/yaw:-clamp\(error\*1\.3/);
 assert.match(html,/yaw:steering/);
 assert.match(html,/forward>=0\?forward\*\.56:forward\*\.34/);
});
test('the robot spawns in a broad outer-meadow clearing with a camera independent of torso bob',()=>{
 const html=read('../meadow.html');
 assert.match(html,/EMU_CLEARING=\{x:22,z:7\}/);
 assert.match(html,/d-4\.5\)\/2\.5/);
 assert.match(html,/const stableAimY=ground\+\.21/);
 assert.match(html,/Math\.exp\(-3\.2\*dt\)/);
 assert.match(html,/emuCameraRig=null/);
});
test('all ≈12 MB of robot assets are explicit, accounted for and opt-in',()=>{
 const html=read('../meadow.html'),loader=read('../emu/emu.js');
 const upstream=read('../emu/physics/src/physical-sim.js');
 const adapter=read('../emu/physics/src/index.js');
 assert.equal(ROBOT_ASSETS.length,3);
 const byName=Object.fromEntries(ROBOT_ASSETS.map(a=>[a.name,a]));
 assert.equal(ROBOT_DOWNLOAD_BYTES,ROBOT_ASSETS.reduce((sum,a)=>sum+a.bytes,0));
 assert.ok(ROBOT_DOWNLOAD_BYTES>11.9e6 && ROBOT_DOWNLOAD_BYTES<12.1e6);
 for(const asset of ROBOT_ASSETS){
  assert.equal(statSync(new URL('../emu/'+asset.path.replace(/^\.\//,''),import.meta.url)).size,
               asset.bytes,asset.name+' manifest must match the real file size');
 }
 assert.match(html,/Walk the robot <span class="emu-download-note">\(≈12 MB download\)<\/span>/);
 assert.match(html,/id="emuDownloadDetail"/);
 assert.match(html,/id="emuProgress"/);
 assert.match(html,/Wake EMU \(≈12 MB download\)/);
 assert.match(loader,/response\.body\?\.getReader/);
 assert.match(loader,/report\(value\.byteLength,asset\.stage\)/);
 assert.match(loader,/wasmBinary=await downloadBytes/);
 assert.match(upstream,/wasmBinary=null/);
 assert.ok(upstream.includes("from '../../policy.js'"),"headless core must reuse the public policy module");
 assert.ok(!upstream.includes("THREE") && !upstream.includes("document.createElement") &&
            !upstream.includes("OrbitControls"),"headless physics must not own WebGL rendering");
 assert.ok(!adapter.includes("document.createElement"),"Meadow must be the only WebGL owner");
 assert.ok(adapter.includes("from './physical-sim.js'"));
 assert.match(upstream,/loadMujoco\(\{/);
 assert.match(adapter,/EmuBrowserSim\.create\(bundle,wasmBinary\)/);
});
test('special rock top, diamond, sides and collision radius are all half-sized',()=>{
 const html=read('../meadow.html');
 assert.match(html,/topY=height\(x,z\)\+\.31/);
 assert.match(html,/const w=\.255,d=\.24,bevel=\.325/);
 assert.match(html,/const north=\[x,glyphY,z-\.15\]/);
 assert.match(html,/radius:\.46,triangles:colliders,emuWake:true/);
 assert.match(html,/if\(site\.emuWake===true\)return false/,
   'the optional robot entrance must remain safe from the lizard');
});

test('public entrance offers walk button and rock alternative, both lazy',()=>{
 const html=read('../meadow.html');
 assert.match(html,/id="emuStart"/);
 assert.match(html,/id="flyStart"/);
 assert.match(html,/addEmuCubeRock\(\)/);
 assert.match(html,/async function startRobotRide\(\)/);
 assert.match(html,/\$\('emuStart'\)\.onclick=startRobotRide/);
 assert.match(html,/module\.loadEmu/);
 assert.match(html,/emu\.autopilot/);
 assert.match(html,/function drawEmu\(/);
 assert.doesNotMatch(html,/<script[^>]+src=["']emu\/emu\.js/);
});
