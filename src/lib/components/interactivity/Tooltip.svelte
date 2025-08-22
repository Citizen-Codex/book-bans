<script lang="ts">
	import { computePosition, autoPlacement, offset } from '@floating-ui/dom';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		class?: ClassValue;
		children?: import('svelte').Snippet;
	}

	let { class: classes = '', children }: Props = $props();
	let floating: HTMLElement | undefined = $state();
</script>

<svelte:window
	onmousemove={({ clientX, clientY }) => {
		if (!floating) return;

		const virtualEl = {
			getBoundingClientRect() {
				return {
					width: 0,
					height: 0,
					x: clientX,
					y: clientY,
					left: clientX,
					right: clientX,
					top: clientY,
					bottom: clientY
				};
			}
		};

		computePosition(virtualEl, floating, {
			placement: 'right-start',
			middleware: [
				offset(20),
				autoPlacement({
					crossAxis: true,
					padding: 5
				})
			],
			strategy: 'fixed'
		}).then(({ x, y }) => {
			if (!floating) return;
			Object.assign(floating.style, {
				top: `${y}px`,
				left: `${Math.max(0, x)}px`,
				opacity: '1',
				zIndex: '9999'
			});
		});
	}}
/>

<div
	class={[
		'border-gray-dark pointer-events-none absolute z-40 w-64 rounded border bg-white px-3 py-2 shadow',
		classes
	]}
	bind:this={floating}
>
	{@render children?.()}
</div>
