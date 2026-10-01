export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Método no permitido.'});}
 const origin=req.headers.origin;if(origin){try{if(new URL(origin).host!==req.headers.host)return res.status(403).json({error:'Origen no permitido.'});}catch{return res.status(403).json({error:'Origen no permitido.'});}}
 const b=req.body||{};if(JSON.stringify(b).length>16000)return res.status(413).json({error:'La solicitud es demasiado larga.'});
 if(b.website)return res.status(400).json({error:'Solicitud no válida.'});
 const required=['nombre','apellido','hotel','cargo','email','telefono','ciudad','habitaciones','pms','horario','problema'];
 if(required.some(k=>typeof b[k]!=='string'||!b[k].trim()||b[k].length>500)||b.consent!==true||!/^\S+@\S+\.\S+$/.test(b.email)||!/^\d+$/.test(b.habitaciones)||Number(b.habitaciones)<1)return res.status(400).json({error:'Revisa los campos obligatorios.'});
 // Configure an owner-approved lead destination before enabling collection.
 if(!process.env.PILOT_WEBHOOK_URL)return res.status(503).json({error:'El formulario aún no está habilitado para recibir solicitudes. Vuelve a intentarlo más adelante.'});
 try{const r=await fetch(process.env.PILOT_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.PILOT_WEBHOOK_SECRET?{'Authorization':`Bearer ${process.env.PILOT_WEBHOOK_SECRET}`}:{})},body:JSON.stringify({...b,receivedAt:new Date().toISOString(),source:'orange-pilot'}),signal:AbortSignal.timeout(8000)});if(!r.ok)throw new Error('destination failure');return res.status(201).json({ok:true});}catch{return res.status(502).json({error:'No hemos podido guardar la solicitud. Inténtalo de nuevo.'});}
}
