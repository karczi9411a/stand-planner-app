<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	let { children } = $props();
</script>

<Header />
<div class="flex min-h-screen">
	<Sidebar />
	<main class="flex-auto">
		{@render children?.()}
		<Footer />
	</main>
</div>

<!-- <Sidebar />
	<div class="sm:ml-64">
		<Header />
		<main class="flex flex-auto">
			{@render children?.()}
		</main>
		<Footer />
	</div> -->

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem; 
		margin: 0 auto;
		box-sizing: border-box;
	} */
</style>
