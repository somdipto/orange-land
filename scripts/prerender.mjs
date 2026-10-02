import {readFile,writeFile,mkdir} from 'node:fs/promises';
const shell=await readFile('dist/index.html','utf8');
const scripts=[...shell.matchAll(/<script[^>]*src="[^"]+"[^>]*><\/script>/g)].map(m=>m[0]).join('');
const styles=[...shell.matchAll(/<link[^>]*href="\/assets\/index-[^"]+\.css"[^>]*>/g)].map(m=>m[0]).join('');
for(const [name,route] of [['home',''],['piloto','piloto'],['demo','demo'],['privacidad','privacidad']]){
 let html=await readFile(`prerender/${name}.html`,'utf8');
 html=html.replace(/<script[^>]*src="[^"]+"[^>]*><\/script>/g,'').replace(/<link[^>]*href="\/assets\/index-[^"]+\.css"[^>]*>/g,'').replace('</head>',styles+scripts+'</head>');
 const dir='dist'+(route?'/'+route:'');await mkdir(dir,{recursive:true});await writeFile(dir+'/index.html',html);console.log('Static metadata/content:',route||'/');
}
