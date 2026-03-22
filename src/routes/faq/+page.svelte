<script lang="ts">
	import DocsFrame from '$lib/components/DocsFrame.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
</script>

<DocsFrame>
	<section>
		<div class="mb-6 rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<h1 class="text-4xl font-bold text-black md:text-5xl">FAQ</h1>
			<p class="mt-2 text-base text-black/80">Answers to common Breadboard questions.</p>
		</div>
		<FAQ />
	</section>
</DocsFrame>
