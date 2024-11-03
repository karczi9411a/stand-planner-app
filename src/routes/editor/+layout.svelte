<script lang="ts">
	import HeaderScene from './components/header-scene.svelte';
	let { children } = $props();
</script>

<main>
	<HeaderScene />
	{@render children?.()}
</main>

<style>
	:root {
		--header-height: 3.5rem;
	}
</style>
