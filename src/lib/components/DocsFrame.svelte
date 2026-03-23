<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import BreadboardSidebar from '$lib/components/BreadboardSidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="page-grid-bg docs-page min-h-screen bg-transparent">
	<Header isSticky={true} />
	<BreadboardSidebar />

	<main class="docs-main">
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	.docs-main {
		min-height: 100vh;
		padding-top: 96px;
		padding-left: 24px;
		padding-right: 24px;
		padding-bottom: 64px;
	}

	@media (min-width: 768px) {
		.docs-main {
			padding-top: 112px;
			padding-left: 230px;
			padding-right: 32px;
		}
	}
</style>
