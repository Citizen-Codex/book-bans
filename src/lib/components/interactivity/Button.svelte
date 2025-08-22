<script lang="ts">
	import { Button } from 'bits-ui';

	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		iconPosition?: 'left' | 'right';
		class?: ClassValue;
		theme?: 'light' | 'dark';
		iconProps?: IconifyPropsLocal;
		children?: Snippet;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	}

	let {
		iconProps,
		iconPosition = 'right',
		class: classes = '',
		children,
		theme = 'light',
		...rest
	}: Props = $props();
</script>

<Button.Root
	class={[
		'flex cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 transition-all hover:scale-102 active:scale-95',
		{
			'border-1 border-black bg-white text-black hover:bg-gray-100 active:bg-gray-300':
				theme === 'light'
		},
		{ 'text-yellow border-yellow bg-gray-dark border-1': theme === 'dark' },
		iconPosition === 'left' ? 'flex-row-reverse' : 'flex-row',
		classes
	]}
	{...rest}
>
	{@render children?.()}
	{#if iconProps}
		<iconify-icon {...iconProps}></iconify-icon>
	{/if}
</Button.Root>

<style lang="postcss">
	@reference '$lib/styles/app.css';

	:global(button:disabled) {
		@apply pointer-events-none opacity-50;
	}
</style>
