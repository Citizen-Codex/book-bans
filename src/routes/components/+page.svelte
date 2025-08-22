<script lang="ts">
	import type { Component } from 'svelte';

	const components = import.meta.glob('./examples/*.svelte', {
		eager: true,
		import: 'default'
	}) as Record<string, Component>;
</script>

<div class="content-well flex flex-col gap-4 py-8">
	{#each Object.entries(components) as [path, Examples] (path)}
		{@const name = path.replace('./examples/', '').replace('.svelte', '')}
		<section class="flex flex-col gap-4 border p-4">
			<p class="serif-md mb-4 border-b">{name}</p>
			<Examples />
		</section>
	{/each}
</div>
