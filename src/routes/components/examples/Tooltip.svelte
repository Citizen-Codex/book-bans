<script lang="ts">
	import Tooltip from '$lib/components/interactivity/Tooltip.svelte';
	let hovered = $state(false);
</script>

<div
	class="bg-gray-dark h-20 w-40 cursor-crosshair"
	role="presentation"
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
></div>

{#if hovered}
	<Tooltip>This is a tooltip</Tooltip>
{/if}
