// Real-browser smoke: normal homepage direct button, no eager model fetch,
// autonomous return, and the still-functional square-rock Easter egg.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import {ROBOT_DOWNLOAD_BYTES} from '../emu/emu.js';

const browser=await chromium.launch({
 headless:true,args:['--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--disable-dev-shm-usage']
});
const errors=[],requests=[],robotRequests=[];
mkdirSync('artifacts',{recursive:true});
try{
 const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1});
 // No secret second WebGL context: Meadow alone owns all visual output.
 // This records the creation calls before the page or optional robot loads.
 await page.addInitScript(()=>{
  const original=HTMLCanvasElement.prototype.getContext;
  window.__meadowWebGLContexts=[];
  HTMLCanvasElement.prototype.getContext=function(type,...args){
   if(/^(webgl|webgl2|experimental-webgl)$/i.test(type))
    window.__meadowWebGLContexts.push({canvas:this.id||'(detached)',kind:type});
   return original.call(this,type,...args);
  };
 });
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
 assert.match(await page.locator('#emuStart').textContent(),/≈12 MB download/);
 await page.waitForFunction(()=>window.__meadowDiagnostics&&window.__lizardDiagnostics);
 const resources=await page.evaluate(()=>performance.getEntriesByType('resource').map(x=>x.name));
 for(const asset of ['/assets/meadow.css','/assets/meadow.js','/ground-lizard.js'])
  assert.ok(resources.some(url=>url.endsWith(asset)),asset+' must load on a blank site');

 // Camera drag persists only after mouse release, not on every move.
 await page.evaluate(()=>{
  window.__cameraSaves=[];
  const original=Storage.prototype.setItem;
  Storage.prototype.setItem=function(key,value){
   if(key==='meadow-camera-v14')window.__cameraSaves.push(value);
   return original.call(this,key,value);
  };
 });
 await page.mouse.move(650,430);
 await page.mouse.down();
 await page.mouse.move(940,330,{steps:8});
 assert.equal(await page.evaluate(()=>window.__cameraSaves.length),0,
  'landscape drag should not write localStorage on each pointermove');
 await page.mouse.up();
 assert.equal(await page.evaluate(()=>window.__cameraSaves.length),1,
  'completed landscape drag should persist exactly once');
 // Dispatch one trackpad wheel burst in the same task. Two real Playwright
 // mouse.wheel awaits can be hundreds of ms apart on software-rendered CI.
 await page.evaluate(()=>{
  const canvas=document.getElementById('scene');
  for(let i=0;i<2;i++)canvas.dispatchEvent(new WheelEvent('wheel',{
   deltaY:130,bubbles:true,cancelable:true
  }));
 });
 await page.waitForFunction(()=>window.__cameraSaves.length>=2,null,{timeout:3000});
 await page.waitForTimeout(230);
 assert.equal(await page.evaluate(()=>window.__cameraSaves.length),2,
  'one burst of scroll input should persist once after the gesture finishes');

 await page.screenshot({path:'artifacts/emu-walk-button.png'});
 // Flying the butterfly should be genuinely free of all robot downloads.
 await page.locator('#flyStart').click();
 await page.waitForFunction(()=>window.__meadowFlight?.state().active===true);
 await page.waitForTimeout(300);
 assert.equal(robotRequests.length,0,'flying the butterfly must not fetch actor, JS or WASM');
 assert.equal(await page.evaluate(()=>window.__meadowWorld.isPiloting()),true);
 await page.evaluate(()=>{
  window.__lizardGroundChecks=0;
  const original=window.__meadowWorld.groundAt;
  window.__meadowWorld.groundAt=(...args)=>{
   window.__lizardGroundChecks++;
   return original(...args);
  };
 });

 // Mouse orbit works in the AIR, not just on perches. It is camera-only.
 await page.mouse.move(980,570);
 await page.mouse.down();
 await page.mouse.move(630,390,{steps:5});
 const flightDrag=await page.evaluate(()=>window.__meadowFlight.state());
 assert.equal(flightDrag.camera.dragging,true);
 assert.ok(Math.abs(flightDrag.camera.yaw)>.3,'flying butterfly must orbit on drag');
 assert.ok(Math.abs(flightDrag.camera.elevation-.28)>.1,'drag tilts flying view');
 assert.equal(flightDrag.joystick.x,0,'dragging the view must not steer the joystick');
 assert.equal(await page.evaluate(()=>window.__lizardGroundChecks),0,
  'dragging a pilot camera must not make the lizard chase the mouse');
 await page.mouse.wheel(0,-480);
 const flightZoom=await page.evaluate(()=>window.__meadowFlight.state().camera.zoom);
 assert.ok(flightZoom<.85,'scrolling up zooms in on airborne butterfly');
 await page.mouse.up();
 await page.waitForTimeout(1050);
 // Force a render even if headless SwiftShader's RAF was delayed.
 await page.evaluate(()=>window.__meadowStep(.05));
 const flightReturn=await page.evaluate(()=>window.__meadowFlight.state().camera);
 assert.equal(flightReturn.dragging,false,'releasing mouse returns to chase mode');
 assert.ok(Math.abs(flightReturn.yaw)<Math.abs(flightDrag.camera.yaw)*.80,
  'camera must start drifting towards its normal trailing angle after release');
 assert.ok(Math.abs(flightReturn.zoom-flightZoom)<.001,
  'the zoom level persists while orbit angle auto-centres');

 // Browser-native two-finger gesture (not a synthetic application callback).
 const cdp=await page.context().newCDPSession(page);
 await cdp.send('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:2});
 const tp=(id,x,y)=>({id,x,y,radiusX:1,radiusY:1,force:1});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',
  touchPoints:[tp(1,460,550),tp(2,620,550)]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',
  touchPoints:[tp(1,370,550),tp(2,710,550)]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 const pinched=await page.evaluate(()=>window.__meadowFlight.state());
 assert.ok(pinched.camera.zoom<flightZoom*.75,
  'spreading two fingertips on the canvas must pinch-zoom the view in');
 assert.equal(pinched.camera.dragging,false,'touch release ends camera manipulation');
 assert.equal(pinched.joystick.x,0,'pinch gesture must not steer the butterfly');
 await cdp.send('Emulation.setTouchEmulationEnabled',{enabled:false});
 assert.equal(robotRequests.length,0,'looking around may not trigger robot downloads');
 await page.locator('#flyExit').click();
 await page.waitForFunction(()=>window.__meadowFlight?.state().active===false);

 // Before loading MuJoCo, verify the same playable butterfly can actually
 // climb under repeated flaps in the untouched open-meadow physics model.
 await page.goto('http://127.0.0.1:8765/meadow.html?climb-demo=1',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__meadowFlight?.state().active===true);
 // Disable RAF stepping: manual __meadowStep must be the ONLY integrator,
 // otherwise software WebGL frame timing contaminates the climb measurement.
 await page.evaluate(()=>document.getElementById('pause').click());
 const climbStart=await page.evaluate(()=>window.__meadowFlight.state());
 await page.keyboard.down('s');
 await page.keyboard.down('Space');
 await page.evaluate(()=>window.__meadowStep(10));
 await page.keyboard.up('Space');
 await page.keyboard.up('s');
 const climbEnd=await page.evaluate(()=>window.__meadowFlight.state());
 const climbGain=climbEnd.pos[1]-climbStart.pos[1];
 console.log('Butterfly ten-second continuous powered climb:',JSON.stringify({
  gainM:climbGain,verticalMps:climbGain/10,flaps:climbEnd.flaps-climbStart.flaps,
  speedMps:climbEnd.speed,energy:climbEnd.energy,stalled:climbEnd.stalled,
  land:climbEnd.landed
 }));
 assert.ok(climbGain>4.5,'butterfly must have physical powered climb rate for upper tree pass');
 assert.equal(climbEnd.landed,false,'continuous ascent must not finish on the ground');
 assert.equal(robotRequests.length,0,'butterfly climb trial must not fetch optional EMU assets');

 // Maximum pull-up is intentionally slow; a competent pilot should also be
 // able to use smaller pitch corrections to ascend *with* forward airspeed.
 await page.goto('http://127.0.0.1:8765/meadow.html?climb-demo=1',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__meadowFlight?.state().active===true);
 await page.evaluate(()=>document.getElementById('pause').click());
 await page.keyboard.down('Space');
 const cruise=await page.evaluate(()=>{
  const start=window.__meadowFlight.state();
  for(let i=0;i<20;i++){
   window.dispatchEvent(new KeyboardEvent('keydown',{key:'s',code:'KeyS',bubbles:true}));
   window.__meadowStep(.05);
   window.dispatchEvent(new KeyboardEvent('keyup',{key:'s',code:'KeyS',bubbles:true}));
   window.__meadowStep(.45);
  }
  const end=window.__meadowFlight.state();
  return {gainM:end.pos[1]-start.pos[1],speedMps:end.speed,energy:end.energy,
    flaps:end.flaps-start.flaps,landed:end.landed,stalled:end.stalled};
 });
 await page.keyboard.up('Space');
 console.log('Butterfly ten-second pitched cruising climb:',JSON.stringify(cruise));
 assert.ok(cruise.gainM>7,'race flight must climb enough for red upper-tree pass');
 assert.ok(cruise.speedMps>1.5,'climb must retain steering speed for the next race ring');
 assert.equal(cruise.stalled,false,'climb must not enter the wing stall state');
 assert.equal(cruise.landed,false);

 // Exercise the ACTUAL in-browser arch -> colour gate -> course selection
 // pipeline, not merely the pure Node geometry generator.
 await page.goto('http://127.0.0.1:8765/meadow.html?race-demo=red',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__meadowFlight?.state().race.mode==='running');
 const redStart=await page.evaluate(()=>window.__meadowFlight.state());
 assert.equal(redStart.race.course,2,'red entry should select the hardest circuit');
 assert.ok(redStart.race.total>30,'red should produce a full long figure eight');
 assert.equal(redStart.race.courseGates.length,redStart.race.total);
 const liveFirst=redStart.race.courseGates[0],liveLast=redStart.race.courseGates.at(-1);
 assert.ok(liveFirst.pos.every(Number.isFinite));
 assert.ok(liveLast.pos.every(Number.isFinite));
 assert.equal(robotRequests.length,0,'red race does not require neural robot downloads');
 await page.evaluate(()=>window.__meadowStep(.25));
 const redAfter=await page.evaluate(()=>window.__meadowFlight.state());
 assert.ok(redAfter.pos.every(Number.isFinite)&&redAfter.speed>0,
  'physically flown red figure eight must remain numerically sound');
 await page.screenshot({path:'artifacts/red-figure-eight-race.png'});

 await page.goto('http://127.0.0.1:8765/meadow.html',{waitUntil:'domcontentloaded'});
 await page.locator('#emuStart').waitFor({state:'visible',timeout:30000});
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
 assert.ok(progressSamples.some(p=>p.detail.includes((ROBOT_DOWNLOAD_BYTES/1e6).toFixed(1)+' MB') && p.detail.includes('100%')),
   'the bar must finish with the actual ≈12 MB total');
 console.log('Download progress samples:',progressSamples.length,
             'max:',Math.max(...progressSamples.map(p=>p.value)));
 assert.equal(state.loaded,true);
 assert.equal(state.riding,true);
 const glContexts=await page.evaluate(()=>window.__meadowWebGLContexts);
 assert.deepEqual(glContexts.map(x=>x.canvas),['scene'],
  'one visible Meadow WebGL renderer only; no hidden physics-viewer canvas');
 // Robot's view orbit is equally independent of the actor's control commands.
 await page.mouse.move(1020,580);
 await page.mouse.down();
 await page.mouse.move(680,390,{steps:5});
 const emuCameraDrag=await page.evaluate(()=>window.__meadowEmu.state());
 assert.equal(emuCameraDrag.camera.dragging,true);
 assert.ok(Math.abs(emuCameraDrag.camera.yaw)>.3,
  'third-person robot camera must orbit when dragged');
 assert.ok(Math.abs(emuCameraDrag.camera.elevation-.28)>.1);
 assert.equal(emuCameraDrag.commandYaw,0,
  'looking sideways must not command actual MuJoCo yaw');
 await page.mouse.wheel(0,440);
 const emuZoom=await page.evaluate(()=>window.__meadowEmu.state().camera.zoom);
 assert.ok(emuZoom>1.4,'scrolling down must zoom the robot camera out');
 await page.mouse.up();
 await page.waitForTimeout(950);
 await page.evaluate(()=>window.__meadowStep(.05));
 const emuCameraReturn=await page.evaluate(()=>window.__meadowEmu.state().camera);
 assert.equal(emuCameraReturn.dragging,false);
 assert.ok(Math.abs(emuCameraReturn.yaw)<Math.abs(emuCameraDrag.camera.yaw)*.85,
  'robot camera must drift back to follow after the pointer is released');
 assert.ok(Math.abs(emuCameraReturn.zoom-emuZoom)<.001,
  'robot zoom should not reset when the orbit returns to chase');
 assert.ok(emuCameraReturn.eye.every(Number.isFinite),'camera must remain finite');
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
 // Check physical turn directions while the actual rider camera is active.
 // Test body rotations, not just the sign of controller yaw requests.
 const screenOrientation=await page.evaluate(()=>{
  const p=window.__meadowEmu.state().pose;
  const project=window.__meadowWorld.project;
  return {minusX:project(p.x-1,p.y+.15,p.z+3),
          plusX:project(p.x+1,p.y+.15,p.z+3)};
 });
 assert.ok(screenOrientation.minusX.x>screenOrientation.plusX.x,
  'Meadow chase view visually projects world negative-X to screen RIGHT');
 await page.keyboard.down('w');
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
 await page.keyboard.up('w');
 const angles={
  right:rightTurn.after.pose.heading-rightTurn.before.pose.heading,
  left:leftTurn.after.pose.heading-leftTurn.before.pose.heading
 };
 console.log('Screen-right physical rider turn diagnostics:',JSON.stringify({
  right:{...angles,before:rightTurn.before.pose.heading,
         after:rightTurn.after.pose.heading,falls:rightTurn.after.pose.falls,
         command:rightTurn.after.commandYaw},
  left:{before:leftTurn.before.pose.heading,after:leftTurn.after.pose.heading,
        falls:leftTurn.after.pose.falls,command:leftTurn.after.commandYaw},
  camera:screenOrientation
 }));
 assert.ok(rightTurn.after.commandYaw>.1,'D must request screen-right steering');
 assert.ok(leftTurn.after.commandYaw<-.1,'A must request screen-left steering');
 assert.ok(angles.right<-.1,
  'physical D turn must rotate toward world negative-X, which camera shows on screen RIGHT');
 assert.ok(angles.left>-.02,
  'physical A turn must oppose the right turn rather than continuing left');

 // A 5-second real physical walking stretch checks more than a single
 // accelerating stride. This does NOT synthesize root motion or bypass the
 // 360-input actor: it advances the actual 6-servo MuJoCo control loop.
 await page.keyboard.down('w');
 const endurance=await page.evaluate(()=>{
  const before=window.__meadowEmu.state().pose;
  window.__meadowStep(5.0);
  return {before,after:window.__meadowEmu.state().pose};
 });
 await page.keyboard.up('w');
 const travel=Math.hypot(endurance.after.x-endurance.before.x,
                         endurance.after.z-endurance.before.z);
 console.log('Headless EMU 5-second physical endurance:',JSON.stringify({
  distanceM:travel,falls:endurance.after.falls-endurance.before.falls,
  frames:endurance.after.frames-endurance.before.frames,
  avgVelocityMps:travel/5,motorTravelRad:endurance.after.motorTravelRad
 }));
 assert.ok(endurance.after.frames>endurance.before.frames+150,
  'headless actor must continue receiving physical observations at 50 Hz');
 assert.ok(travel>.25,'five seconds of forward walking must move a real body');
 assert.ok(Number.isFinite(endurance.after.motorTravelRad+endurance.after.y),
  'torques and physical body trajectory must remain finite');
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

 // The new discoverable arch uses a genuine swept-plane crossing and
 // pauses butterfly flight. It never loads MuJoCo until Walk is selected.
 const downloadsBeforeGate=robotRequests.length;
 await page.goto('http://127.0.0.1:8765/meadow.html?emu-arch-flight-demo=1',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__meadowFlight?.state().active===true);
 await page.evaluate(()=>window.__meadowStep(1.4));
 await page.locator('#emuGateWalk').waitFor({state:'visible',timeout:30000});
 assert.equal(await page.locator('#emuStart').isVisible(),false,'entry buttons hidden in pilot mode');
 const encounter=await page.evaluate(()=>({
  flight:window.__meadowFlight.state(),arch:window.__meadowEmu.state().arch
 }));
 assert.equal(encounter.flight.gatePaused,true,'fly-through must freeze the butterfly');
 assert.equal(robotRequests.length,downloadsBeforeGate,
  'simply crossing the new arch must not download any robot binaries');
 assert.ok(encounter.arch.center.every(Number.isFinite));
 assert.ok(Math.abs(encounter.arch.x-18.5)<.01&&Math.abs(encounter.arch.z-16.8)<.01);
 const frozen=encounter.flight.pos;
 await page.evaluate(()=>window.__meadowStep(2));
 assert.deepEqual(await page.evaluate(()=>window.__meadowFlight.state().pos),frozen,
  'the butterfly must remain still until the visitor makes a choice');
 await page.screenshot({path:'artifacts/emu-robot-arch-pause.png'});
 await page.locator('#emuGateContinue').click();
 assert.equal(await page.locator('#emuGatePrompt').isVisible(),false);
 assert.equal(await page.evaluate(()=>window.__meadowFlight.state().gatePaused),false);
 assert.ok((await page.evaluate(()=>window.__meadowFlight.state().speed))>1,
  'Keep flying must restore real flight momentum');
 await page.goto('http://127.0.0.1:8765/meadow.html?emu-arch-flight-demo=reverse',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__meadowFlight?.state().active===true);
 await page.evaluate(()=>window.__meadowStep(1.4));
 await page.locator('#emuGateWalk').waitFor({state:'visible',timeout:30000});
 assert.equal(await page.evaluate(()=>window.__meadowFlight.state().gatePaused),true,
  'the arch should also catch real physical flight from its opposite side');
 await page.evaluate(()=>{
  window.__archLoaderSeen=false;
  const loader=document.getElementById('emuLoader');
  new MutationObserver(()=>{
   if(!loader.hidden)window.__archLoaderSeen=true;
  }).observe(loader,{attributes:true,attributeFilter:['hidden']});
 });
 await page.locator('#emuGateWalk').click();
 await page.waitForTimeout(350);
 const archResult=await page.evaluate(()=>({
  seen:window.__archLoaderSeen,state:window.__meadowEmu?.state(),
  alert:document.getElementById('flyAlert')?.textContent
 }));
 console.log('Robot arch opt-in diagnostics:',JSON.stringify(archResult).slice(0,900));
 assert.ok(archResult.seen||archResult.state.loading||archResult.state.riding,
  'the EMU arch Walk button must explicitly start the optional robot download');
 assert.ok(!errors.some(e=>e.includes('pageerror')),errors.join('\n'));
 console.log('EMU physical rider, figure-eight entrance and robot arch browser smoke passed.');

}finally{await browser.close()}
