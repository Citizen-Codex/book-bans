<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.data.title} - {page.data.publisher}</title>
	<meta name="description" content={page.data.description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Preconnect Iconify -->
	<link rel="preconnect" href="https://api.iconify.design" />
</svelte:head>
