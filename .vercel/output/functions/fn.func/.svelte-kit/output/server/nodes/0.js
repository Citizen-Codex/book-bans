import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Fs_g-0Qq.js","_app/immutable/chunks/scheduler.CjypH3xl.js","_app/immutable/chunks/index.uIIOWwRv.js"];
export const stylesheets = ["_app/immutable/assets/0.BcOuNtlP.css"];
export const fonts = [];
