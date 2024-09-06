<script lang="ts">
	import Project from '$lib/classes/project';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let project: Project;

	onMount(() => {
		project = new Project(canvas);

		project.scene.executeWhenReady(() => {
			console.log('ready scene!');
		});
		project.setup();
		project.run();
	});
</script>

<div class="pg-split">
	<div class="editor">
		<canvas bind:this={canvas}></canvas>
	</div>
</div>

<style>
	.editor {
		width: 100%;
		height: calc(100% - var(--header-height));
		top: var(--header-height);
		padding: 0;
		margin: 0;
		background-color: aqua;
		position: absolute;
	}

	canvas {
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
		overflow: unset;
		border: none !important;
		outline: none !important;
		display: block;
	}
</style>
