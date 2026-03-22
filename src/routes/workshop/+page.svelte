<script lang="ts">
	import DocsFrame from '$lib/components/DocsFrame.svelte';
	import BreadboardCanvas from '$lib/components/BreadboardCanvas.svelte';
</script>

<DocsFrame>
	<section class="rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
		<h1 class="text-4xl font-bold text-black md:text-5xl">Workshop</h1>
		<p class="mt-4 max-w-3xl text-lg leading-relaxed text-black/80">
			Experiment with virtual wiring before building on your physical board.
		</p>
	</section>

	<section class="mt-8 rounded-[12px] border-[1.1px] border-black bg-white p-4 shadow-[4px_4px_0_#000]">
		<BreadboardCanvas />
	</section>
</DocsFrame>
