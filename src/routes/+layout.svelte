<script lang="ts">
	import '$lib/styles/app.css';
	import 'iconify-icon';
	import Head from '$lib/components/Head.svelte';
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	let { children } = $props();
</script>

<main class="">
	{@render children()}
</main>

<Footer theme="light" />
