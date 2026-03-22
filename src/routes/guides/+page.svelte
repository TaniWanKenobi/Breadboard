<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="page-grid-bg relative min-h-screen bg-transparent">
	<Header />

	<main class="mx-auto max-w-360 px-6 pb-16 pt-32">
		<section class="rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<h1 class="text-4xl font-bold text-black md:text-5xl">Guides</h1>
			<p class="mt-4 max-w-3xl text-lg leading-relaxed text-black/80">
				Step-by-step docs to help you design, source parts, and ship your build.
			</p>

			<div class="mt-8 grid gap-4 md:grid-cols-2">
				<a
					href="/Docs/Where_To_Start.md"
					class="rounded border border-black bg-white px-5 py-4 text-base font-medium text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5"
				>
					Where To Start
				</a>
				<a
					href="/get-started"
					class="rounded border border-black bg-white px-5 py-4 text-base font-medium text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5"
				>
					Get Started Page
				</a>
			</div>
		</section>
	</main>

	<Footer />
</div>
