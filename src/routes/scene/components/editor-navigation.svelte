<script lang="ts">
	import { Button } from 'flowbite-svelte';
</script>

<div class="catalog-nav">
	<Button>Circle</Button><Button>Cube</Button>
</div>

<style>
	.catalog-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		margin-left: var(--editor-margin);
		display: grid;
		gap: 0.5rem;
	}
</style>
