/** Future model replacement point. Current product reference stays static and accessible.
 * TODO: INSERT FINAL MANZANILLA 3D MODEL HERE: /public/models/manzanilla.glb
 * Model renderer must be lazy-loaded, respect reduced motion, and keep this fallback.
 * Allowed states: idle, listening, thinking, speaking, calling.
 * Future adapter: idle rotation, pointer parallax, scroll transition and state animation.
 */
export function ManzanillaDevice3D({state='idle',alt='Teléfono Android de referencia para Manzanilla'}={}){
 return `<img data-device-state="${state}" data-future-model="/models/manzanilla.glb" src="/assets/phone.png" alt="${alt}">`;
}
