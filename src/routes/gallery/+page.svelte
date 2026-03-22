<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Steps from '$lib/components/Steps.svelte';
</script>

<div class="page-grid-bg docs-page min-h-screen bg-transparent">
	<Header isSticky={true} />
	<main class="docs-main">
		<section class="mb-6 rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<h1 class="text-4xl font-bold text-black md:text-5xl">Gallery</h1>
			<p class="mt-2 text-base text-black/80">Browse build stages and project inspiration.</p>
		</section>

		<Steps />
	</main>

	<Footer />
</div>

<style>
	.docs-main {
		min-height: 100vh;
		padding: 96px 24px 64px;
	}

	@media (min-width: 768px) {
		.docs-main {
			padding: 112px 32px 64px;
		}
	}
</style>
