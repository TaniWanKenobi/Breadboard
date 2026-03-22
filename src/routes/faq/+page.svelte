<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="page-grid-bg relative min-h-screen bg-transparent">
	<Header />

	<main class="mx-auto max-w-360 px-6 pt-32">
		<section class="mb-6">
			<h1 class="text-4xl font-bold text-black md:text-5xl">FAQ</h1>
			<p class="mt-2 text-base text-black/80">Answers to common Breadboard questions.</p>
		</section>
	</main>

	<FAQ />
	<Footer />
</div>
