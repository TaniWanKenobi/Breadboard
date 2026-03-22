<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const items = [
		{
			name: 'Perfboard',
			img: 'https://cdn.hackclub.com/019d17df-1e6d-76fa-a1e7-4dfc97646ede/image.png',
			description: 'Prototype your circuits on a solderable perfboard. Great for permanent builds beyond the breadboard.'
		},
		{
			name: 'Soldering Iron',
			img: 'https://cdn.hackclub.com/019d17df-2275-77e8-8ac7-6b4cbab4cc7c/s-l1200.jpg',
			description: 'A reliable soldering iron for joining components. Essential for any hardware project.'
		},
		{
			name: 'Multimeter',
			img: 'https://cdn.hackclub.com/019d17df-2486-7422-8cc5-ac68e256bf65/image.png',
			description: 'Measure voltage, current, and resistance. Debug circuits with confidence.'
		},
		{
			name: '$10 PCB Grant',
			img: 'https://cdn.hackclub.com/019d17df-269f-7f0a-8274-ab4e8638f64f/pcb_10.webp',
			description: 'Get $10 toward a custom PCB order. Stack grants with other Hack Club programs.'
		},
		{
			name: 'Stickers',
			img: 'https://cdn.hackclub.com/019d17df-28f0-71a2-8ba8-366a94dacb4e/pile_of_stickers.webp',
			description: 'A pile of Hack Club stickers shipped to your door. Slap them everywhere.'
		},
		{
			name: 'Raspberry Pi Pico',
			img: 'https://cdn.hackclub.com/019d17df-ab61-7115-8c67-618edce19967/image.png',
			description: 'The RP2040-powered microcontroller. Flexible, affordable, and perfect for Breadboard projects.'
		}
	];
</script>

<div class="page-grid-bg docs-page min-h-screen bg-transparent">
	<Header isSticky={true} />
	<main class="docs-main">
		<!-- Header section -->
		<section class="mb-8 rounded-xl border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<h1 class="text-4xl font-bold text-black md:text-5xl">Shop</h1>
			<p class="mt-2 text-base text-black/80">
				Hardware, tools, and grants available to Breadboard participants. Submit a project to unlock rewards.
			</p>
		</section>

		<!-- Grid -->
		<section class="mx-auto max-w-360 px-6 py-12">
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each items as item}
				<div class="step-card overflow-hidden rounded-[5px] border-[1.1px] border-black bg-[#BD0F32]">
					<div class="px-5 py-6">
						<h3 class="text-center text-[34px] font-medium tracking-[0.08em] text-white">{item.name}</h3>
					</div>
					<div class="step-image-shell mx-5 mb-5 border-[1.1px] border-black bg-[#D9D9D9]">
						<div class="h-40.25 w-full overflow-hidden">
							<img src={item.img} alt={item.name} loading="lazy" decoding="async" class="step-image h-full w-full object-cover" />
						</div>
					</div>
				</div>
			{/each}
			</div>
		</section>
	</main>

	<Footer />
</div>

<style>
	.docs-main {
		min-height: 100vh;
		padding: 96px 24px 64px;
	}

	.step-card {
		transition:
			transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.step-card:hover {
		transform: translateY(-4px) rotateX(1.2deg);
		box-shadow: 0 14px 24px rgba(25, 26, 35, 0.22);
	}

	.step-image-shell {
		position: relative;
		overflow: hidden;
	}

	.step-image-shell::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.24) 50%, transparent 80%);
		transform: translateX(-130%);
		transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
		pointer-events: none;
	}

	.step-card:hover .step-image-shell::after {
		transform: translateX(130%);
	}

	.step-image {
		transition:
			transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
			filter 360ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.step-card:hover .step-image {
		transform: scale(1.06) rotate(0.35deg);
		filter: saturate(1.1) contrast(1.04);
	}

	@media (min-width: 768px) {
		.docs-main {
			padding: 112px 32px 64px;
		}
	}
</style>
