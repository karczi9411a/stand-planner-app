<script lang="ts">
	import Project from '$lib/classes/project';
	import Loading from '$lib/components/Loading.svelte';
	import { onMount } from 'svelte';
	import Editor from './components/editor.svelte';

	let canvas: HTMLCanvasElement;
	let project: Project | undefined = $state();
	let isSceneReady = $state(false);

	onMount(() => {
		project = new Project(canvas);

		project.setup();
		project.run();

		project.scene.executeWhenReady(() => {
			isSceneReady = true;
		});
	});
</script>

{#if !isSceneReady}
	<Loading />
{/if}

<div class="editor">
	<Editor />
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.editor {
		width: 100%;
		height: calc(100% - var(--header-height));
		top: var(--header-height);
		padding: 0;
		margin: 0;
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
