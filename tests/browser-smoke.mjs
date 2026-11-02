// Browser-level smoke test: wake the actual trained actor in the WebGL meadow,
// ride the robot and return to a live autonomous garden scene.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';

const browser=await chromium.launch({
 headless:true,args:['--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--disable-dev-shm-usage']
});
const errors=[];
mkdirSync('artifacts',{recursive:true});
try{
 const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1});
 page.on('pageerror',error=>errors.push(String(error)));
 await page.goto('http://127.0.0.1:8765/meadow.html?emu-demo=1',{waitUntil:'domcontentloaded'});
 await page.locator('#emuWake').waitFor({state:'visible',timeout:30000});
 assert.equal(await page.locator('#webgl-fallback').isVisible(),false,'WebGL fallback shown');
 await page.locator('#emuWake').click();
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===true,{timeout:45000});
 await page.waitForFunction(()=>window.__meadowEmu?.state().pose?.frames>5,{timeout:15000});
 let state=await page.evaluate(()=>window.__meadowEmu.state());
 assert.equal(state.loaded,true);
 assert.equal(state.riding,true);
 assert.ok(state.pose.frames>5);
 assert.equal(await page.locator('#emuLeave').isVisible(),true);
 await page.screenshot({path:'artifacts/emu-butterfly-rider.png'});
 await page.locator('#flyExit').click();
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===false);
 state=await page.evaluate(()=>window.__meadowEmu.state());
 assert.equal(state.loaded,true,'robot should persist after leaving butterfly mode');
 assert.equal(state.riding,false);
 assert.equal(await page.locator('#flyHud').isVisible(),false);
 await page.screenshot({path:'artifacts/emu-follows-lizard.png'});
 assert.deepEqual(errors,[],errors.join('\n'));
 console.log('EMU rider browser smoke passed:',state);
}finally{await browser.close()}
