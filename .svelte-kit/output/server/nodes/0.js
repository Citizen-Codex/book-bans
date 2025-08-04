import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CZ-dLYm_.js","_app/immutable/chunks/stores.DeROBxGc.js","_app/immutable/chunks/entry.CT9J-Mm3.js","_app/immutable/chunks/scheduler.CjypH3xl.js","_app/immutable/chunks/index.Duek6dXD.js","_app/immutable/chunks/paths.Co08GZYG.js","_app/immutable/chunks/index.uIIOWwRv.js"];
export const stylesheets = ["_app/immutable/assets/0.BcOuNtlP.css"];
export const fonts = [];
