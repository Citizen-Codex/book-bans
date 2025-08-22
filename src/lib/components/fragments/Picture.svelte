<script lang="ts" module>
	const imports = import.meta.glob('../../assets/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
		query: { enhanced: true },
		eager: true,
		import: 'default'
	});

	const pictures = Object.fromEntries(
		Object.entries(imports).map(([key, value]) => {
			return [key.replace('../../assets/', ''), value];
		})
	) as Record<string, string>;
</script>

<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		lazy?: boolean;
		src: string;
		alt: string;
		class?: ClassValue;
		[key: string]: any;
	}

	let { lazy = true, src, alt, class: classes = '', ...rest }: Props = $props();
</script>

<enhanced:img
	src={pictures[src]}
	{alt}
	loading={lazy ? 'lazy' : 'eager'}
	class={classes}
	{...rest}
/>
