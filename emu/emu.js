// Genuine EMU deployment: trained 360→256→256→6 policy + MuJoCo 3.17
// physics on a sampled Meadow hfield. NO kinematic walking fallback.
// Both assets are fetched only when the visitor explicitly awakens EMU.
import {parsePolicy} from './policy.js';

export async function loadEmu(onProgress=()=>{},heightAt,start={x:8,z:9.1}){
 if(typeof heightAt!=='function')throw new TypeError('Meadow terrain height function required');
 const report=(percent,stage)=>onProgress(percent,stage);
 report(0,'Downloading the EMU champion…');
 const response=await fetch(new URL('./champion.emupolicy',import.meta.url));
 if(!response.ok)throw new Error('Champion policy download failed: HTTP '+response.status);
 const total=Number(response.headers.get('content-length'))||886002;
 let received=0,text;
 if(response.body?.getReader){
  const reader=response.body.getReader(),decoder=new TextDecoder();let parts='';
  while(true){
   const {done,value}=await reader.read();if(done)break;
   received+=value.byteLength;parts+=decoder.decode(value,{stream:true});
   report(Math.min(.29,.29*received/total),'Downloading neural weights…');
  }
  text=parts+decoder.decode();
 }else text=await response.text();
 const bundle=parsePolicy(text);
 if(bundle.schema!==3||bundle.policy.obs_dim!==360||bundle.policy.action_dim!==6
   ||bundle.source?.step!==260046848){
  throw new Error('Incorrect EMU policy version; expected the 260M terrain champion');
 }
 report(.33,'Loading MuJoCo physics engine…');
 // The module and its official WASM binary are local files in the repo.
 // Built from pinned upstream EMU viewer source in GitHub Actions.
 const {PhysicalMeadowEmu}=await import('./physics/dist/emu-physics.js');
 report(.65,'Building the real Meadow collision terrain…');
 const robot=await PhysicalMeadowEmu.create(bundle,heightAt,start);
 report(1,'EMU is physically awake');
 return robot;
}
