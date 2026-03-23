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

	let hasScrolled = $state(false);

	onMount(() => {
		function onScroll() {
			if (!hasScrolled && window.scrollY > 6) {
				hasScrolled = true;
				window.removeEventListener('scroll', onScroll);
			}
		}

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<Header />

<div class="page-grid-bg relative min-h-screen bg-transparent">
	<a
		href="https://hackclub.com"
		target="_blank"
		rel="noopener noreferrer"
		class="hc-badge-link fixed top-20 left-2 z-999 hidden w-28 xl:block 2xl:w-32"
	>
		<img
			src="https://assets.hackclub.com/banners/2026.svg"
			alt="Hack Club 2026"
			class="block w-full border-0"
		/>
	</a>
	<Hero />
	<Headline {form} />
	<Steps />
	<FAQ />
</div>

<Footer />

<div
	class="scroll-indicator fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-500 {hasScrolled ? 'opacity-0' : 'opacity-100'}"
	aria-hidden="true"
>
	<span class="chevron chevron-1"></span>
	<span class="chevron chevron-2"></span>
	<span class="chevron chevron-3"></span>
</div>

<style>
	.scroll-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2rem;
		pointer-events: none;
	}

	.chevron {
		display: block;
		width: 16px;
		height: 16px;
		border-right: 2px solid #191a23;
		border-bottom: 2px solid #191a23;
		transform: rotate(45deg);
		opacity: 0;
		animation: chevron-cascade 1.4s ease-in-out infinite;
	}

	.chevron-2 {
		animation-delay: 0.18s;
	}

	.chevron-3 {
		animation-delay: 0.36s;
	}

	@keyframes chevron-cascade {
		0% {
			opacity: 0;
			transform: translateY(-4px) rotate(45deg);
		}
		35% {
			opacity: 0.95;
		}
		70% {
			opacity: 0.25;
			transform: translateY(4px) rotate(45deg);
		}
		100% {
			opacity: 0;
			transform: translateY(10px) rotate(45deg);
		}
	}
</style>
