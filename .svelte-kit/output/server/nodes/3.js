

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/elements/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.C8F3ACV1.js","_app/immutable/chunks/scheduler.CjypH3xl.js","_app/immutable/chunks/index.uIIOWwRv.js"];
export const stylesheets = ["_app/immutable/assets/3.DwDI_Gvc.css"];
export const fonts = [];
