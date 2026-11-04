// Genuine 260M EMU policy + real MuJoCo WebAssembly physics.
// The page imports this loader ONLY after an explicit Walk/Wake click.
// Every robot-only binary is tracked by real network bytes, not timed guesses.
import {parsePolicy} from './policy.js';

// Exact committed (uncompressed) asset sizes, verified against the GitHub
// feature-branch files. If rebuilding the bundle changes a filename or size,
// update this manifest and the public Walk button's download estimate together.
export const ROBOT_ASSETS=Object.freeze([
 {name:'champion',path:'./champion.emupolicy',bytes:886002,stage:'Downloading the champion neural network…'},
 {name:'runtime',path:'./physics/dist/emu-physics.js',bytes:714059,stage:'Downloading the MuJoCo runtime…'},
 {name:'wasm',path:'./physics/dist/assets/mujoco-CGsuVDfV.wasm',bytes:10927842,stage:'Downloading the MuJoCo physics engine…'},
]);
export const ROBOT_DOWNLOAD_BYTES=ROBOT_ASSETS.reduce((sum,a)=>sum+a.bytes,0);

async function downloadBytes(asset,report){
 const url=new URL(asset.path,import.meta.url);
 const response=await fetch(url);
 if(!response.ok)throw new Error(asset.name+' download failed: HTTP '+response.status);
 let chunks=[],received=0;
 if(response.body?.getReader){
  const reader=response.body.getReader();
  try{
   while(true){
    const {value,done}=await reader.read();
    if(done)break;
    if(!value?.byteLength)continue;
    chunks.push(value);received+=value.byteLength;
    report(value.byteLength,asset.stage);
   }
  }finally{reader.releaseLock()}
 }else{
  const buffer=await response.arrayBuffer();
  chunks=[new Uint8Array(buffer)];received=buffer.byteLength;
  report(received,asset.stage);
 }
 if(received!==asset.bytes){
  throw new Error(asset.name+' has changed ('+received+' bytes; expected '+asset.bytes+
   '). Update the asset manifest and runtime before retrying.');
 }
 const data=new Uint8Array(received);let cursor=0;
 for(const chunk of chunks){data.set(chunk,cursor);cursor+=chunk.byteLength}
 return data;
}

export async function loadEmu(onProgress=()=>{},heightAt,start={x:22,z:7}){
 if(typeof heightAt!=='function')throw new TypeError('Meadow terrain height function required');
 let received=0;
 const progress=(count,stage)=>{
  received+=count;
  const fraction=received/ROBOT_DOWNLOAD_BYTES;
  onProgress(fraction,stage,received,ROBOT_DOWNLOAD_BYTES);
 };
 onProgress(0,'Preparing optional robot download…',0,ROBOT_DOWNLOAD_BYTES);
 // Do not prefetch, preload or import robot packages until this function runs
 // in direct response to the visitor choosing Walk or Wake.
 const weights=await downloadBytes(ROBOT_ASSETS[0],progress);
 const bundle=parsePolicy(new TextDecoder().decode(weights));
 if(bundle.schema!==3||bundle.policy.obs_dim!==360||bundle.policy.action_dim!==6
   ||bundle.source?.step!==260046848){
  throw new Error('Incorrect EMU policy version; expected 260M terrain champion');
 }
 // Fetch the JS explicitly so the bar counts its ACTUAL bytes. The subsequent
 // native import can reuse the browser's HTTP cache and keeps the module URL
 // stable (blob-based imports would break its relative asset URLs/CSP).
 await downloadBytes(ROBOT_ASSETS[1],progress);
 // Emscripten receives these exact WASM bytes through wasmBinary; it will
 // instantiate directly from memory and MUST NOT silently fetch them again.
 const wasmBinary=await downloadBytes(ROBOT_ASSETS[2],progress);
 onProgress(1,'Download complete · starting real MuJoCo physics…',
            ROBOT_DOWNLOAD_BYTES,ROBOT_DOWNLOAD_BYTES);
 const {PhysicalMeadowEmu}=await import('./physics/dist/emu-physics.js');
 onProgress(1,'Preparing the physical Meadow terrain…',
            ROBOT_DOWNLOAD_BYTES,ROBOT_DOWNLOAD_BYTES);
 const robot=await PhysicalMeadowEmu.create(bundle,heightAt,start,wasmBinary);
 onProgress(1,'EMU is ready to walk!',
            ROBOT_DOWNLOAD_BYTES,ROBOT_DOWNLOAD_BYTES);
 return robot;
}
