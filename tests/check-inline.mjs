// Parse Meadow's classic inline scripts without executing a WebGL scene.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const html=readFileSync(new URL('../meadow.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
let found=0;
for(const [,attributes,source] of scripts){
 if(/\bsrc\s*=/.test(attributes)||!source.trim())continue;
 new vm.Script(source,{filename:'meadow.html:inline-'+(++found)});
}
if(found<1)throw Error('No inline Meadow scripts parsed');
console.log('Parsed '+found+' Meadow inline scripts.');
