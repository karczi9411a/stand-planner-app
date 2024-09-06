<script lang="ts">
	import { Button } from "flowbite-svelte";

</script>

<div class="catalog-nav">
	<Button>1</Button><button>2</button><button>3</button><button>4</button><button>5</button>
</div>

<style>
	.catalog-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		margin-left: var(--editor-margin);
		display: grid;
	}

	button {
		width: 4rem;
		height: 4rem;
	}
</style>
