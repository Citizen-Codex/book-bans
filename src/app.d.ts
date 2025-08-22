import type { IconifyIconProperties } from 'iconify-icon';
import type { ClassValue } from 'svelte/elements';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  interface IconifyPropsLocal extends IconifyIconProperties {
    class?: ClassValue;
  }
}

export { };
