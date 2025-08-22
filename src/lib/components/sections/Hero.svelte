<script lang="ts">
	import { page } from '$app/state';
	import md from '$lib/utils/md';

	let copy = page.data;
</script>

<section class="flex w-full items-center justify-center bg-white">
	<div class="flex flex-col items-center justify-center gap-4">
		{@html md(copy.hed)}
		{@html md(copy.dek)}
		{@html md(copy.byline)}
	</div>
</section>
