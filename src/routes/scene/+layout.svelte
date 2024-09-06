<script lang="ts">
	import HeaderScene from './components/header-scene.svelte';
</script>

<main>
	<HeaderScene />
	<slot />
</main>

<style>
	:root{
		--header-height: 3.5rem;
	}
</style>
