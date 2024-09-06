<script lang="ts">
	import FooterScene from './components/footer-scene.svelte';
	import HeaderScene from './components/header-scene.svelte';
</script>

<main class="pg-root">
	<HeaderScene />
	<slot />
	<FooterScene />
</main>

<style>
	.pg-root {
		width: 100%;
		height: 100%;
		min-height: 100lvh;
		padding: 0;
		margin: 0;
		overflow: hidden;
		font-family: 'acumin-pro-condensed';
		font-weight: normal;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: 55px calc(100% - 90px) 35px;
	}
</style>
