import site from './+site.yaml';

export const prerender = true;

export const load = async () => {
	let stories = [];
	const res = await fetch('https://cc-content-stories.vercel.app/stories.json');

	if (res.ok) {
		stories = await res.json();
	}

	return {
		...site,
		relatedStories: stories
	};
};
