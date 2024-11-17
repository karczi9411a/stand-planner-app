<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	let { children } = $props();
</script>

<Header />
<div class="flex min-h-screen">
	<Sidebar />
	<main class="w-full flex-auto">
		{@render children?.()}
		<Footer />
	</main>
</div>

<style>
</style>
