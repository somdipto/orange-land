import QRCode from 'qrcode';
/** One reusable QR for pilot forms, conference screens and printable materials. */
export function createPilotQR(origin=location.origin){
 return QRCode.toString(new URL('/piloto',origin).href,{type:'svg',width:176,margin:2,color:{dark:'#505740',light:'#ffffff'}});
}
