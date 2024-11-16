<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem
	} from 'flowbite-svelte';
</script>

<Navbar class="sticky left-0 top-0 z-50">
	<NavBrand href="/">
		<img src="/images/logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<div class="flex items-center md:order-2">
		<Avatar id="avatar-menu" src="/images/logo.svg" />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm">Bonnie Green</span>
			<span class="block truncate text-sm font-medium">name@flowbite.com</span>
		</DropdownHeader>
		<DropdownItem>Dashboard</DropdownItem>
		<DropdownItem>Settings</DropdownItem>
		<DropdownItem>Earnings</DropdownItem>
		<DropdownDivider />
		<DropdownItem>Sign out</DropdownItem>
	</Dropdown>
</Navbar>

<hr class="solid" />
<!-- <Navbar let:hidden let:toggle>
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
-->
