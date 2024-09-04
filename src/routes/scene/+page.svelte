<script lang="ts">
	import { createScene } from '$lib/babylonjs/createScene';
	import { onMount } from 'svelte';

	let _canvas: HTMLCanvasElement;

	onMount(() => {
		createScene(_canvas);
	});
</script>

<canvas bind:this={_canvas}></canvas>

<style>
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
