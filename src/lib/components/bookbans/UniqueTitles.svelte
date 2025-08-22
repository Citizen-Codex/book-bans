<script>
	import ChartDetails from '$lib/components/bookbans/ChartDetails.svelte';
	import Titles from '$lib/svg/titles.html?raw';
</script>

<div class="image">
	{@html Titles.replaceAll('figma2html-box', 'figma2html-box-titles')}
</div>
<ChartDetails source="Source: American Library Association's Office for Intellectual Freedom" />

<style>
	.image {
		display: block;
		margin: 2rem auto !important;
	}

	@media (max-width: 800px) {
		.image {
			margin: 4rem auto 2rem auto !important;
		}
	}
</style>
