// Parse every Meadow browser entry without running a WebGL scene.
// The real browser integration check separately exercises imports and physics.
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import vm from 'node:vm';
const read=p=>readFileSync(new URL(p,import.meta.url),'utf8');
const html=read('../meadow.html');
const inline=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
let count=0;
for(const [,attrs,source] of inline){
 if(/\bsrc\s*=/.test(attrs)||!source.trim())continue;
 new vm.Script(source,{filename:'meadow.html:inline-'+(++count)});
}
if(count<1)throw Error('No inline HTML/bootstrap script found');
for(const [asset,path] of [
 ['assets/meadow.js','../assets/meadow.js'],
 ['assets/flight-physics.js','../assets/flight-physics.js'],
 ['assets/race-course.js','../assets/race-course.js']
]){
 execFileSync(process.execPath,['--input-type=module','--check'],{
  input:read(path),stdio:['pipe','pipe','pipe']
 });
}
new vm.Script(read('../ground-lizard.js'),{filename:'ground-lizard.js'});
if(!html.includes('type="module" src="assets/meadow.js"'))
 throw Error('Meadow scene ES module is not loaded');
if(!read('../assets/meadow.js').includes("import('../ground-lizard.js')"))
 throw Error('Lizard must load after the Meadow world bridge is initialised');
if(!html.includes('href="assets/meadow.css"'))
 throw Error('Meadow stylesheet is not loaded');
console.log('Parsed Meadow HTML, three ES modules, lizard and CSS references.');
