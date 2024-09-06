<script lang="ts">
	import Project from '$lib/classes/project';
	import Split from 'split.js';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let project: Project;

	let leftSplit: HTMLElement;
	let rightSplit: HTMLElement;

	onMount(() => {
		Split([leftSplit, rightSplit], {
			sizes: [10, 90],
			elementStyle: function (dimension, size, gutterSize) {
				if (project) project.engine.resize();
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

		project = new Project(canvas);
		project.setup();
		project.run();
	});
</script>

<div class="pg-split">
	<div bind:this={leftSplit}>left</div>
	<div class="canvasZone" bind:this={rightSplit}>
		<!-- <canvas bind:this={canvas}></canvas> -->
	</div>
</div>

<style>
	.pg-split {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		grid-row: 2;
		grid-column: 1 / 3;
		overflow: hidden;
	}

	.canvasZone {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		background-color: aqua;
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
