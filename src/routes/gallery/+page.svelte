<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Steps from '$lib/components/Steps.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="page-grid-bg relative min-h-screen bg-transparent">
	<Header />

	<main class="mx-auto max-w-360 px-6 pt-32">
		<section class="mb-6">
			<h1 class="text-4xl font-bold text-black md:text-5xl">Gallery</h1>
			<p class="mt-2 text-base text-black/80">Browse build stages and project inspiration.</p>
		</section>
	</main>

	<Steps />
	<Footer />
</div>
