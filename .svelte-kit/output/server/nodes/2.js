import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.TQ16jEVY.js","_app/immutable/chunks/scheduler.CjypH3xl.js","_app/immutable/chunks/index.uIIOWwRv.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.CBQK5qNX.css"];
export const fonts = [];
