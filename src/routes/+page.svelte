<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Headline from '$lib/components/Headline.svelte';
	import Steps from '$lib/components/Steps.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte';

	type SignupFormState = {
		success?: boolean;
		message?: string;
		email?: string;
	};

	let { form }: { form?: SignupFormState } = $props();

	let scrolled = $state(false);

	onMount(() => {
		function onScroll() {
			scrolled = window.scrollY > 20;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<div class="page-grid-bg relative min-h-screen bg-transparent">
	<a
		href="https://hackclub.com"
		target="_blank"
		rel="noopener noreferrer"
		class="fixed top-20 left-2 z-999 hidden w-28 xl:block 2xl:w-32"
	>
		<img
			src="https://assets.hackclub.com/banners/2026.svg"
			alt="Hack Club 2026"
			class="block w-full border-0"
		/>
	</a>
	<Header />
	<Hero />
	<Headline {form} />
	<Steps />
	<FAQ />
	<Footer />
</div>

<button
	class="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-300 {scrolled ? 'pointer-events-none opacity-0' : 'opacity-100'}"
	onclick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
	aria-label="Scroll down"
>
	<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="M7 13l5 5 5-5" />
		<path d="M7 6l5 5 5-5" />
	</svg>
</button>
