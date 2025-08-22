<script lang="ts">
	import Section1 from '$lib/components/bookbans/Section1.svelte';
	import Page from '$lib/components/bookbans/Page.svelte';
</script>

<Section1 />

<Page />

<style>
	:global(body) {
		background-image: url('/assets/images/paper.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	main {
		min-height: 100vh;
	}
</style>
