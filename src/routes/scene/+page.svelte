<script lang="ts">
	import { createScene } from '$lib/babylonjs/createScene';
	import { onMount } from 'svelte';

	let _canvas: HTMLCanvasElement;

	onMount(() => {
		createScene(_canvas);
	});
</script>

<div class="canvasZone">
	<canvas bind:this={_canvas}></canvas>
</div>

<style>
	.canvasZone {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	canvas {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		overflow: unset;
		border: none !important;
		outline: none !important;
		display: block;
	}
</style>
