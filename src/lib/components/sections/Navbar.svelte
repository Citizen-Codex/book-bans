<script lang="ts">
	import { page } from '$app/state';
	import Wordmark from '$lib/components/fragments/Wordmark.svelte';
</script>

<nav class="h-navbar fixed inset-x-0 top-0 flex items-center justify-center bg-black text-white">
	<a href={page.data.publisher_url} aria-current="page"><Wordmark /></a>
</nav>
