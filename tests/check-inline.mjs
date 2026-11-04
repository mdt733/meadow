// Parse every classic Meadow browser script without starting WebGL.
// Markup links and external files are checked separately, so extracting
// code from meadow.html cannot silently drop a dependency.
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const read=p=>readFileSync(new URL(p,import.meta.url),'utf8');
const html=read('../meadow.html');
const scripts=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
let found=0;
for(const [,attrs,source] of scripts){
 if(/\bsrc\s*=/.test(attrs)||!source.trim())continue;
 new vm.Script(source,{filename:'meadow.html:inline-'+(++found)});
}
if(found<1)throw Error('Meadow has no inline startup scripts');
for(const [src,path] of [
 ['assets/meadow.js','../assets/meadow.js'],
 ['ground-lizard.js','../ground-lizard.js']
]){
 if(!html.includes('src="'+src+'"'))throw Error('HTML no longer loads '+src);
 new vm.Script(read(path),{filename:src});
}
if(!html.includes('href="assets/meadow.css"'))
 throw Error('Meadow stylesheet is not loaded');
console.log('Parsed '+found+' startup scripts, Meadow engine, lizard and stylesheet references.');
