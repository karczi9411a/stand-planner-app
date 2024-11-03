<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/images/logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/editor">Editor</NavLi>
	</NavUl>
</Navbar>
<hr class="solid" />
