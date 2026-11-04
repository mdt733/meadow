// Real-browser smoke: normal homepage direct button, no eager model fetch,
// autonomous return, and the still-functional square-rock Easter egg.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';

const browser=await chromium.launch({
 headless:true,args:['--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--disable-dev-shm-usage']
});
const errors=[],requests=[],robotRequests=[];
mkdirSync('artifacts',{recursive:true});
try{
 const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1});
 page.on('console',msg=>{if(msg.type()==='error')errors.push('console: '+msg.text())});
 page.on('pageerror',error=>errors.push(String(error)));
 page.on('response',response=>{
  if(response.status()>=400)errors.push('HTTP '+response.status()+' '+response.url());
 });
 page.on('request',request=>{
  const url=request.url();
  if(url.endsWith('/champion.emupolicy'))requests.push(url);
  if(/\/emu\/champion\.emupolicy$|\/emu-physics\.js$|\/mujoco-[^/]+\.wasm$/.test(url))
   robotRequests.push(url);
 });
 await page.goto('http://127.0.0.1:8765/meadow.html',{waitUntil:'domcontentloaded'});
 await page.locator('#emuStart').waitFor({state:'visible',timeout:30000});
 assert.equal(await page.locator('#flyStart').isVisible(),true,'Butterfly launch still visible');
 assert.equal(await page.locator('#webgl-fallback').isVisible(),false,'WebGL fallback shown');
 assert.equal(robotRequests.length,0,'no robot assets may download on an idle meadow');
 assert.match(await page.locator('#emuStart').textContent(),/12\.5 MB download/);
 await page.screenshot({path:'artifacts/emu-walk-button.png'});
 // Flying the butterfly should be genuinely free of all robot downloads.
 await page.locator('#flyStart').click();
 await page.waitForFunction(()=>window.__meadowFlight?.state().active===true);
 await page.waitForTimeout(300);
 assert.equal(robotRequests.length,0,'flying the butterfly must not fetch actor, JS or WASM');
 await page.locator('#flyExit').click();
 await page.waitForFunction(()=>window.__meadowFlight?.state().active===false);
 // Observe actual progress DOM mutations as network chunks arrive.
 await page.evaluate(()=>{
  window.__emuProgressSamples=[];
  const loader=document.getElementById('emuLoader');
  new MutationObserver(()=>{
   if(loader.hidden)return;
   window.__emuProgressSamples.push({
    value:Number(document.getElementById('emuProgress').value),
    detail:document.getElementById('emuDownloadDetail').textContent,
    stage:document.getElementById('emuLoadStatus').textContent
   });
  }).observe(loader,{attributes:true,subtree:true,childList:true,characterData:true});
 });
 await page.locator('#emuStart').click();
 try{
  await page.waitForFunction(()=>window.__meadowEmu?.state().riding===true,null,{timeout:30000});
 }catch(error){
  const status=await page.evaluate(()=>({
   emu:window.__meadowEmu?.state(),
   loader:document.getElementById('emuLoadStatus')?.textContent,
   alert:document.getElementById('flyAlert')?.textContent,
   progress:document.getElementById('emuProgress')?.value
  }));
  console.log('EMU failed to wake. Diagnostics:',JSON.stringify(status));
  console.log('Browser errors:',errors);
  await page.screenshot({path:'artifacts/emu-physics-load-failure.png'});
  throw error;
 }
 await page.waitForFunction(()=>window.__meadowEmu?.state().pose?.frames>5,null,{timeout:15000});
 let state=await page.evaluate(()=>window.__meadowEmu.state());
 assert.equal(requests.length,1,'Actor is downloaded exactly once on opt in');
 assert.equal(robotRequests.filter(x=>x.includes('.wasm')).length,1,
   'WASM must be downloaded exactly once, not secretly downloaded again on boot');
 assert.ok(robotRequests.some(x=>x.endsWith('/emu-physics.js')),
   'The runtime JS is fetched only after Walk is chosen');
 const progressSamples=await page.evaluate(()=>window.__emuProgressSamples);
 assert.ok(progressSamples.some(p=>p.value>.001 && p.value<.999),
   'the progress bar must show real intermediate bytes, not jump from zero to 100%');
 assert.ok(progressSamples.some(p=>p.detail.includes('12.5 MB') && p.detail.includes('100%')),
   'the bar must finish with the actual 12.5 MB total');
 console.log('Download progress samples:',progressSamples.length,
             'max:',Math.max(...progressSamples.map(p=>p.value)));
 assert.equal(state.loaded,true);
 assert.equal(state.riding,true);
 assert.ok(state.pose.frames>5);
 assert.equal(state.pose.physics,'MuJoCo WASM','must be actual rigid-body physics');
 assert.ok(Number.isFinite(state.pose.y));
 assert.ok(Math.hypot(state.pose.x-state.clearing.x,state.pose.z-state.clearing.z)<1,
   'robot must start in the outer clearing, not on the hill');
 const clearing=await page.evaluate(()=>{
  const c=window.__meadowEmu.state().clearing,h=window.__meadowWorld.height;
  const at=(dx,dz)=>h(c.x+dx,c.z+dz);
  return {centre:at(0,0),around:[[3,0],[-3,0],[0,3],[0,-3],[2,2]]
   .map(([dx,dz])=>at(dx,dz))};
 });
 assert.ok(clearing.around.every(v=>Math.abs(v-clearing.centre)<1e-5),
   'the entire central flat physical patch must be level');
 await page.keyboard.down('d');
 await page.evaluate(()=>window.__meadowStep(.1));
 assert.ok((await page.evaluate(()=>window.__meadowEmu.state().commandYaw))>.1,
   'D/right must request positive rider yaw after correcting the mirrored steering');
 await page.keyboard.up('d');
 await page.keyboard.down('a');
 await page.evaluate(()=>window.__meadowStep(.1));
 assert.ok((await page.evaluate(()=>window.__meadowEmu.state().commandYaw))<-.1,
   'A/left must request negative rider yaw');
 await page.keyboard.up('a');
 const rig=await page.evaluate(()=>window.__meadowEmu.state().cameraRig);
 assert.ok(rig&&Number.isFinite(rig.x+rig.y+rig.z+rig.heading),
   'third-person ride must use the independent smoothed camera rig');
 await page.keyboard.down('w');
 await page.evaluate(()=>window.__meadowStep(.1));
 assert.ok(Math.abs((await page.evaluate(()=>window.__meadowEmu.state().commandVx))-.56)<.005,
   'full W must request 0.56 m/s within the policy trained forward speed envelope');
 // Deterministic physics stepping avoids tying the test to SwiftShader's
 // variable CPU render FPS. The website still uses its normal RAF in play.
 const measure=await page.evaluate(()=>{
  const before=window.__meadowEmu.state().pose,started=performance.now();
  window.__meadowStep(.6);
  return {before,after:window.__meadowEmu.state().pose,wallMs:performance.now()-started};
 });
 await page.keyboard.up('w');
 const moving=measure.after;
 console.log('MuJoCo physical stepping benchmark:',JSON.stringify(measure));
 await page.screenshot({path:'artifacts/emu-mujoco-servo-motion.png'});
 assert.ok(moving.frames>measure.before.frames+15,'MuJoCo and actor must keep stepping');
 assert.ok(moving.motorTravelRad>0.01,'actual servo joints must move');
 assert.ok(Number.isFinite(moving.x+moving.y+moving.z),'physical root position must stay finite');
 console.log('Physical EMU telemetry:',moving);
 assert.equal(await page.locator('#emuLeave').isVisible(),true);
 assert.equal(await page.locator('#flyHudTitle').textContent(),'Butterfly riding EMU');
 await page.screenshot({path:'artifacts/emu-butterfly-rider.png'});
 // Observe actual turning response over many control frames, rather than
 // assuming the command sign alone proves the physical direction of travel.
 await page.keyboard.down('d');
 const rightTurn=await page.evaluate(()=>{
  const before=window.__meadowEmu.state();
  window.__meadowStep(1.0);
  return {before,after:window.__meadowEmu.state()};
 });
 await page.keyboard.up('d');
 await page.keyboard.down('a');
 const leftTurn=await page.evaluate(()=>{
  const before=window.__meadowEmu.state();
  window.__meadowStep(1.0);
  return {before,after:window.__meadowEmu.state()};
 });
 await page.keyboard.up('a');
 console.log('Physical rider turn diagnostics:',JSON.stringify({
  right:{before:rightTurn.before.pose.heading,after:rightTurn.after.pose.heading,
         falls:rightTurn.after.pose.falls,command:rightTurn.after.commandYaw},
  left:{before:leftTurn.before.pose.heading,after:leftTurn.after.pose.heading,
        falls:leftTurn.after.pose.falls,command:leftTurn.after.commandYaw}
 }));

 await page.locator('#flyExit').click();
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===false);
 state=await page.evaluate(()=>window.__meadowEmu.state());
 assert.equal(state.loaded,true,'robot persists in meadow once loaded');
 assert.equal(state.riding,false);
 assert.equal(await page.locator('#flyHud').isVisible(),false);
 assert.equal(await page.locator('#emuStart').isVisible(),true,'direct launch returns after exit');
 assert.match(await page.locator('#emuStart').textContent(),/already loaded/,
   'returning rider should not be warned about a new download');
 await page.screenshot({path:'artifacts/emu-follows-lizard.png'});

 // Re-enter without triggering another actor download.
 await page.locator('#emuStart').click();
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===true);
 assert.equal(requests.length,1);
 await page.locator('#emuLeave').click();
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===false);
 assert.equal(await page.locator('#flyHudTitle').textContent(),'Butterfly flight');

 // The old discoverable-rock path still works, but now looks like a cube.
 await page.goto('http://127.0.0.1:8765/meadow.html?emu-demo=1',{waitUntil:'domcontentloaded'});
 await page.locator('#emuWake').waitFor({state:'visible',timeout:30000});
 assert.equal(await page.locator('#emuStart').isVisible(),false,'entry controls hidden in pilot mode');
 await page.screenshot({path:'artifacts/emu-square-rock.png'});
 await page.locator('#emuWake').click();
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===true,null,{timeout:90000});
 assert.deepEqual(errors,[],errors.join('\n'));
 console.log('EMU direct-launch and rock-landing browser smoke passed.');
}finally{await browser.close()}
