<script lang="ts">
	import Wordmark from '$lib/components/fragments/Wordmark.svelte';
	import { page } from '$app/state';

	const socials = [
		{ title: 'Instagram', href: 'https://www.instagram.com/citizen.codex', icon: 'mdi:instagram' },
		{
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/company/citizen-codex/',
			icon: 'mdi:linkedin'
		},
		{ title: 'X', href: 'https://x.com/citizencodex', icon: 'fa6-brands:x-twitter' },
		{ title: 'GitHub', href: 'https://github.com/Citizen-Codex', icon: 'mdi:github' }
	];

	const links = [
		{ title: 'Work', href: `${page.data.publisher_url}/our-work` },
		{ title: 'Services', href: `${page.data.publisher_url}/services` },
		{ title: 'Ventures', href: `${page.data.publisher_url}/ventures` },
		{ title: 'Research', href: `${page.data.publisher_url}/research` },
		{ title: 'About', href: `${page.data.publisher_url}/about-us` },
		{
			title: 'hello@citizencodex.com',
			href: 'mailto:hello@citizencodex.com?subject=Website%20Enquiry'
		}
	];

	const relatedStories = $derived(page.data.relatedStories as RelatedStory[]);

	interface Props {
		class?: Classes;
		theme: 'dark' | 'light' | 'accent';
		disabled?: boolean;
	}

	let { class: classes = '', theme = 'dark', disabled = false, ...rest }: Props = $props();
</script>

<footer
	class={[
		'flex flex-col gap-6 px-4 py-8 md:px-6',
		{ 'bg-gray-dark text-white': theme === 'dark' },
		{ 'bg-white text-black': theme === 'light' },
		{ 'bg-cream text-black': theme === 'accent' }
	]}
>
	<a href={page.data.publisher_url} aria-current="page"><Wordmark /></a>

	<div class="detail-sm mb-1 flex flex-wrap gap-x-6 gap-y-2">
		{#each links as { title, href } (title)}
			<a {href} class="underline-offset-2 hover:underline">{title}</a>
		{/each}
	</div>

	<div class="flex w-full flex-wrap items-end justify-between gap-3">
		<div class="detail-xs">2025 Copyright, Citizen Codex LLC.</div>
		<div class="flex items-center gap-2">
			{#each socials as { title, href, icon } (title)}
				<a
					{href}
					target="_blank"
					class="h-fit transition-transform hover:scale-110"
					aria-label={title}
				>
					<iconify-icon {icon} class="h-5 text-2xl"></iconify-icon>
				</a>
			{/each}
		</div>
	</div>
</footer>
