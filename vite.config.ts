import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import yaml from '@rollup/plugin-yaml';
import dsv from '@rollup/plugin-dsv';
import { autoType } from 'd3';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [dsv({ processRow: autoType }), yaml(), enhancedImages(), tailwindcss(), sveltekit()]
});
