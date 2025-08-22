<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		padding?: boolean;
		padTop?: boolean;
		padBottom?: boolean;
		bordered?: boolean;
		borderTop?: boolean;
		borderBottom?: boolean;
		class?: Classes;
		id?: string;
	}

	let {
		children,
		padding = true,
		padTop = padding,
		padBottom = padding,
		bordered = false,
		borderTop = bordered,
		borderBottom = bordered,
		class: classes = '',
		...rest
	}: Props = $props();

	let section = $state<HTMLElement>();
</script>

<section
	bind:this={section}
	class={['border-gray relative', borderBottom && 'border-b', classes]}
	{...rest}
>
	{#if borderTop}
		<div class="content-well-sm border-gray border-t"></div>
	{/if}

	<div
		class={[
			'flex flex-col gap-10 transition-all duration-500 md:gap-16',
			padTop && 'pt-24',
			padBottom && 'pb-24'
		]}
	>
		{@render children?.()}
	</div>
</section>
