<script lang="ts">
	import Wordmark from '$lib/components/fragments/Wordmark.svelte';
	import { page } from '$app/state';
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

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

	const relatedStories = $derived<RelatedStory[] | undefined>(
		page.data.relatedStories?.filter((story: RelatedStory) => story.title !== page.data.title)
	);

	interface Props {
		theme: 'dark' | 'light' | 'accent';
		disabled?: boolean;
	}

	let { theme = 'dark', disabled = false, ...rest }: Props = $props();

	const options = {};

	let carousel = $state<EmblaCarouselType>();
	let activeIndex = $state(0);
	let canScrollNext = $state(false);
	let canScrollPrev = $state(false);

	const onInit = (event) => {
		carousel = event.detail;
		setCarouselState();

		carousel?.on('select', () => {
			setCarouselState();
		});
	};

	const setCarouselState = () => {
		if (!carousel) return;

		activeIndex = carousel.selectedScrollSnap();
		canScrollNext = carousel.canScrollNext();
		canScrollPrev = carousel.canScrollPrev();
	};
</script>

<footer
	class={[
		'px-4 py-8 md:px-6',
		{ 'bg-night text-white': theme === 'dark' },
		{ 'bg-white text-black': theme === 'light' },
		{ 'bg-cream text-black': theme === 'accent' }
	]}
>
	<div class="mx-auto flex max-w-6xl flex-col gap-12 overflow-hidden">
		{#if Array.isArray(relatedStories) && relatedStories.length > 0}
			<div class="flex flex-col gap-6">
				<p class="detail-md uppercase">Further Reads</p>
				<div
					class="embla w-full max-w-5xl"
					use:emblaCarouselSvelte={{ options, plugins: [] }}
					onemblaInit={onInit}
				>
					<div class="embla__container flex">
						{#each relatedStories as story (story.title)}
							<div class="embla__slide mr-6 min-w-0 flex-[0_0_auto]">
								<a
									href={story.link}
									target="_blank"
									class="group flex w-fit flex-col items-start gap-2 rounded transition-transform duration-300 hover:-translate-y-2"
								>
									<img src={story.thumbnail} alt={story.title} class="w-64 object-cover" />
									<div class="flex max-w-[250px] flex-col gap-1">
										<p class="display-xs font-serif">{story.title}</p>
										<p class="detail-sm font-medium uppercase">{story.author}</p>
									</div>
								</a>
							</div>
						{/each}
					</div>
				</div>

				{#if canScrollNext || canScrollPrev}
					<div class="flex items-center gap-2">
						<button
							onclick={carousel?.scrollPrev}
							disabled={!canScrollPrev}
							aria-label="Previous"
							class="flex h-8 w-8 items-center justify-center rounded-full border"
						>
							<iconify-icon icon="material-symbols:arrow-back-ios-new-rounded" class="mr-0.5"
							></iconify-icon>
						</button>
						<button
							onclick={carousel?.scrollNext}
							disabled={!canScrollNext}
							aria-label="Next"
							class="flex h-8 w-8 items-center justify-center rounded-full border"
						>
							<iconify-icon icon="material-symbols:arrow-forward-ios-rounded" class="ml-0.5"
							></iconify-icon>
						</button>
					</div>
				{/if}
			</div>
		{/if}

		<div class="flex w-full flex-col gap-6 border-t pt-8">
			<a href={page.data.publisher_url} aria-current="page"><Wordmark /></a>

			<div class="detail-sm mb-1 flex flex-wrap gap-x-6 gap-y-2">
				{#each links as { title, href } (title)}
					<a {href} class=" hover:underline">{title}</a>
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
		</div>
	</div>
</footer>
