

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/ig-story/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.bZCmzRwq.js","_app/immutable/chunks/scheduler.CjypH3xl.js","_app/immutable/chunks/index.uIIOWwRv.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.Duek6dXD.js"];
export const stylesheets = ["_app/immutable/assets/5.CoF_kmeS.css"];
export const fonts = [];