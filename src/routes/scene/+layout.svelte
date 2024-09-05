<script lang="ts">
	import FooterScene from './components/footer-scene.svelte';
	import HeaderScene from './components/header-scene.svelte';
	import LeftNavbarScene from './components/left-navbar-scene.svelte';
	import RightNavbarScene from './components/right-navbar-scene.svelte';
</script>

<main>
	<HeaderScene />
	<div class="scene-body">
		<LeftNavbarScene />
		<slot />
		<RightNavbarScene />
	</div>
	<FooterScene />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		overflow: hidden;
		font-family: 'acumin-pro-condensed';
		font-weight: normal;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: 55px calc(100% - 90px) 35px;
		/* display: flex;
		min-height: 100vh; */
	}

	.scene-body {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		grid-row: 2;
		grid-column: 1/3;
		overflow: hidden;
		height: 100%;
	}
</style>
