<script lang="ts">
	import BreadboardCanvas from './BreadboardCanvas.svelte';

	let interacted = $state(false);
</script>

<section class="mx-auto max-w-360 px-6 pt-24 sm:pt-16">
	<div class="mx-auto w-full max-w-4000 xl:max-w-7xl">
		<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
		<div onclick={() => (interacted = true)}>
			<BreadboardCanvas />
		</div>
		<div class="mt-4 flex items-center justify-center gap-3 transition-opacity duration-500 {interacted ? 'opacity-0 pointer-events-none' : 'opacity-100'}">
			<span class="animate-pulse text-sm font-semibold tracking-widest text-[#BD0F32] uppercase">Try it</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BD0F32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
			<span class="text-sm text-black/50">click a hole, then click another to place a wire</span>
		</div>
	</div>
</section>
