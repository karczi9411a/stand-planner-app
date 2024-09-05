<script lang="ts">
	import Project from '$lib/classes/project';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let project: Project;

	onMount(() => {
		project = new Project(canvas);
		project.setup();
		project.run();
	});
</script>

<canvas bind:this={canvas}></canvas>

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
