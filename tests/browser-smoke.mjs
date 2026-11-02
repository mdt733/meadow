// Real-browser smoke: normal homepage direct button, no eager model fetch,
// autonomous return, and the still-functional square-rock Easter egg.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';

const browser=await chromium.launch({
 headless:true,args:['--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--disable-dev-shm-usage']
});
const errors=[],requests=[];
mkdirSync('artifacts',{recursive:true});
try{
 const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1});
 page.on('pageerror',error=>errors.push(String(error)));
 page.on('request',request=>{if(request.url().endsWith('/champion.emupolicy'))requests.push(request.url());});
 await page.goto('http://127.0.0.1:8765/meadow.html',{waitUntil:'domcontentloaded'});
 await page.locator('#emuStart').waitFor({state:'visible',timeout:30000});
 assert.equal(await page.locator('#flyStart').isVisible(),true,'Butterfly launch still visible');
 assert.equal(await page.locator('#webgl-fallback').isVisible(),false,'WebGL fallback shown');
 assert.equal(requests.length,0,'EMUs large actor must NOT download before activation');
 await page.screenshot({path:'artifacts/emu-walk-button.png'});
 await page.locator('#emuStart').click();
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===true,null,{timeout:45000});
 await page.waitForFunction(()=>window.__meadowEmu?.state().pose?.frames>5,null,{timeout:15000});
 let state=await page.evaluate(()=>window.__meadowEmu.state());
 assert.equal(requests.length,1,'Actor is downloaded exactly once on opt in');
 assert.equal(state.loaded,true);
 assert.equal(state.riding,true);
 assert.ok(state.pose.frames>5);
 assert.equal(await page.locator('#emuLeave').isVisible(),true);
 assert.equal(await page.locator('#flyHudTitle').textContent(),'Butterfly riding EMU');
 await page.screenshot({path:'artifacts/emu-butterfly-rider.png'});

 await page.locator('#flyExit').click();
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===false);
 state=await page.evaluate(()=>window.__meadowEmu.state());
 assert.equal(state.loaded,true,'robot persists in meadow once loaded');
 assert.equal(state.riding,false);
 assert.equal(await page.locator('#flyHud').isVisible(),false);
 assert.equal(await page.locator('#emuStart').isVisible(),true,'direct launch returns after exit');
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
 await page.waitForFunction(()=>window.__meadowEmu?.state().riding===true,null,{timeout:45000});
 assert.deepEqual(errors,[],errors.join('\n'));
 console.log('EMU direct-launch and rock-landing browser smoke passed.');
}finally{await browser.close()}
