<script lang="ts">
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownItem,
		SidebarDropdownWrapper
	} from 'flowbite-svelte';
	import {
		GridSolid,
		CartSolid,
		MailBoxSolid,
		UserSolid,
		ArrowRightToBracketOutline,
		EditOutline,
		HomeSolid,
		PlaySolid
	} from 'flowbite-svelte-icons';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
	// let { sidebarClass }: { sidebarClass?: string } = $props();
</script>

<Sidebar {activeUrl}>
	<SidebarWrapper divClass="h-full p-4">
		<SidebarGroup>
			<SidebarItem label="Home" href="/">
				<svelte:fragment slot="icon">
					<HomeSolid />
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Editor" href="/editor">
				<svelte:fragment slot="icon">
					<PlaySolid />
				</svelte:fragment>
			</SidebarItem>
			<SidebarDropdownWrapper label="E-commerce">
				<svelte:fragment slot="icon">
					<CartSolid
						class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
				<SidebarDropdownItem label="Products" />
				<SidebarDropdownItem label="Billing" />
				<SidebarDropdownItem label="Invoice" />
			</SidebarDropdownWrapper>
			<SidebarItem label="Kanban" {spanClass} href="/test">
				<svelte:fragment slot="icon">
					<GridSolid
						class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<span
						class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
					>
						Pro
					</span>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Inbox" {spanClass}>
				<svelte:fragment slot="icon">
					<MailBoxSolid
						class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<span
						class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
					>
						3
					</span>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Users">
				<svelte:fragment slot="icon">
					<UserSolid
						class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Sign In">
				<svelte:fragment slot="icon">
					<ArrowRightToBracketOutline
						class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Sign Up">
				<svelte:fragment slot="icon">
					<EditOutline
						class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
