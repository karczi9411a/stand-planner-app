<script lang="ts">
	import FooterScene from './components/footer-scene.svelte';
	import HeaderScene from './components/header-scene.svelte';

	import Split from 'split.js';
	import { onMount } from 'svelte';

	let left: HTMLElement;
	let right: HTMLElement;

	onMount(() => {
		Split([left, right], {
			elementStyle: function (dimension, size, gutterSize) {
				return {
					width: 'calc(' + size + '% - ' + gutterSize + 'px)'
				};
			},
			gutterStyle: function (dimension, gutterSize) {
				return {
					width: gutterSize + 'px'
				};
			}
		});
	});
</script>

<main class="pg-root">
	<HeaderScene />
	<div class="pg-split">
		<div bind:this={left}>left</div>
		<div class="canvasZone" bind:this={right}>
			<slot />
		</div>
	</div>
	<FooterScene />
</main>

<style>
	.canvasZone {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	.pg-root {
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
	}

	.pg-split {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		grid-row: 2;
		grid-column: 1 / 3;
		overflow: hidden;
		height: 100%;
	}
</style>
