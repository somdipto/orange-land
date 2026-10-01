/** Future model replacement point. Current product reference stays static and accessible.
 * TODO: INSERT FINAL ORANGE 3D MODEL HERE: /public/models/orange.glb
 * Model renderer must be lazy-loaded, respect reduced motion, and keep this fallback.
 * Allowed states: idle, listening, thinking, speaking, calling.
 * Future adapter: idle rotation, pointer parallax, scroll transition and state animation.
 */
export function OrangeDevice3D({state='idle',alt='Teléfono Android de referencia para Orange'}={}){
 return `<img data-device-state="${state}" data-future-model="/models/orange.glb" src="/assets/phone.png" alt="${alt}">`;
}
