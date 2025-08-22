<script lang="ts">
	import Button from '$lib/components/interactivity/Button.svelte';
</script>

<div class="flex gap-4">
	<Button theme="light" iconProps={{ icon: 'mdi:chevron-up' }} iconPosition="right">light</Button>
	<Button theme="dark" iconProps={{ icon: 'mdi:chevron-down' }} iconPosition="left">dark</Button>
</div>
