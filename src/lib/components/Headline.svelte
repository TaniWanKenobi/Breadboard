<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	type SignupFormState = {
		success?: boolean;
		message?: string;
		email?: string;
	};

	let { form }: { form?: SignupFormState } = $props();

	const actionButtons = [
		{ label: 'Get started', href: '/get-started', id: 'start' },
		{ label: 'Gallery', href: '/gallery', id: 'gallery' },
		{ label: 'Workshop', href: '/workshop', id: 'workshop' }
	] as const;

	type ModelPhase = 'idle' | 'preparing' | 'fetching' | 'ready' | 'error';

	let modelPhase = $state<ModelPhase>('idle');
	let modelViewerLoaded = $state(false);
	let breadboardModel = $state('');
	let modelSectionEl: HTMLElement;

	function waitForPaint() {
		return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
	}

	async function ensureModelViewerLibrary() {
		if (modelViewerLoaded) return;
		await import('@google/model-viewer');
		modelViewerLoaded = true;
	}

	async function loadModelViewer() {
		if (modelPhase === 'preparing' || modelPhase === 'fetching' || modelPhase === 'ready') return;

		modelPhase = 'preparing';

		try {
			await waitForPaint();
			await ensureModelViewerLibrary();

			modelPhase = 'fetching';
			await waitForPaint();

			const modelModule = await import('$lib/assets/breadboard.glb?url');
			breadboardModel = modelModule.default;
			modelPhase = 'ready';
		} catch {
			modelPhase = 'error';
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					void loadModelViewer();
					observer.disconnect();
				}
			},
			{ rootMargin: '320px 0px' }
		);

		if (modelSectionEl) observer.observe(modelSectionEl);

		return () => observer.disconnect();
	});
</script>

<section class="mx-auto max-w-360 px-6 py-16">
	<div class="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
		<!-- Large heading text -->
		<div class="w-full max-w-2xl lg:justify-self-center lg:text-left">
			<h1 class="text-5xl font-bold leading-tight text-black lg:text-6xl">
				Design something real. Iterate. Build.
			</h1>
		</div>

		<!-- Email signup card matching the reference style -->
		<div class="w-full max-w-120 rounded-md border border-black bg-[#BD0F32] p-5 shadow-[4px_4px_0_#000] lg:justify-self-center">
			<p class="mb-3 text-[20px] leading-none text-white">Learn how &amp; get free stickers!</p>
			<div class="signup-form-wrap">
				<form method="POST" action="?/subscribe" use:enhance class="flex flex-col gap-3 sm:flex-row sm:items-stretch">
				<input
					name="email"
					type="email"
					required
					autocomplete="email"
					placeholder="orpheus@hackclub.com"
					value={form?.success ? '' : (form?.email ?? '')}
					class="h-16 flex-1 border border-black bg-[#d5d5d5] px-4 text-[18px] text-black placeholder:text-black/75"
				/>
				<button
					type="submit"
					class="h-16 min-w-32 border border-black bg-black px-6 text-[20px] leading-none text-white transition-colors hover:bg-white hover:text-black"
				>
					Get Started
				</button>
				</form>
				<img src="/favicon-sticker-cropped.png" alt="Breadboard sticker" class="signup-sticker" loading="lazy" decoding="async" />
			</div>
			{#if form?.message}
				<p class="mt-3 text-sm {form.success ? 'text-white' : 'text-[#ffe0e0]'}">{form.message}</p>
			{/if}
		</div>
	</div>

	<!-- Description text -->
	<div class="mt-10 max-w-3xl">
		<p class="text-base leading-relaxed text-black">
			Design a complete breadboard project.
		</p>
		<p class="mt-1 text-base leading-relaxed text-black">
			We send you the kit to build it.
		</p>
	</div>
</section>

<!-- Full-width button grid with equal thirds -->
<div class="w-full grid grid-cols-3 gap-0">
			{#each actionButtons as btn (btn.id)}
		<div class="flex flex-col items-center justify-center gap-2 py-8 text-center text-black">
			<button class="btn-group" aria-label={`${btn.label} red pushbutton`} onclick={() => (window.location.href = btn.href)}>
						<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
							<defs>
								<linearGradient id={`gr-red-up-${btn.id}`} x1="0" y1="0" x2="1" y2="1">
									<stop stop-color="#ffffff" offset="0"></stop>
									<stop stop-color="#E24B4A" offset="0.3"></stop>
									<stop stop-color="#E24B4A" offset="0.5"></stop>
									<stop stop-color="#000000" offset="1"></stop>
								</linearGradient>
								<linearGradient id={`gr-red-dn-${btn.id}`} x1="1" y1="1" x2="0" y2="0">
									<stop stop-color="#ffffff" offset="0"></stop>
									<stop stop-color="#E24B4A" offset="0.3"></stop>
									<stop stop-color="#E24B4A" offset="0.5"></stop>
									<stop stop-color="#000000" offset="1"></stop>
								</linearGradient>
							</defs>

							<rect x="2" y="18" width="10" height="6" rx="2" fill="#d0cfc4" opacity="0.8"></rect>
							<rect x="2" y="56" width="10" height="6" rx="2" fill="#d0cfc4" opacity="0.8"></rect>
							<rect x="68" y="18" width="10" height="6" rx="2" fill="#d0cfc4" opacity="0.8"></rect>
							<rect x="68" y="56" width="10" height="6" rx="2" fill="#d0cfc4" opacity="0.8"></rect>

							<rect x="10" y="10" width="60" height="60" rx="3" fill="#383838"></rect>
							<rect x="14" y="14" width="52" height="52" rx="2" fill="#e8e8e8"></rect>

							<circle cx="20" cy="20" r="2.5" fill="#1a1a1a"></circle>
							<circle cx="60" cy="20" r="2.5" fill="#1a1a1a"></circle>
							<circle cx="60" cy="60" r="2.5" fill="#1a1a1a"></circle>
							<circle cx="20" cy="60" r="2.5" fill="#1a1a1a"></circle>

							<circle class="c-up" cx="40" cy="40" r="19" fill={`url(#gr-red-up-${btn.id})`}></circle>
							<circle class="c-down" cx="40" cy="40" r="19" fill={`url(#gr-red-dn-${btn.id})`}></circle>

							<circle cx="40" cy="40" r="14" fill="#E24B4A" stroke="#2f2f2f" stroke-opacity="0.4" stroke-width="0.5"></circle>
			</svg>
		</button>
		<span class="text-xl font-base">{btn.label}</span>
	</div>
{/each}
</div>

<section class="mx-auto max-w-360 px-6 pb-16" bind:this={modelSectionEl}>
	<div class="rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-4 shadow-[4px_4px_0_#000]">
		{#if modelPhase === 'ready'}
			<model-viewer
				src={breadboardModel}
				alt="830 tie breadboard 3D model"
				loading="lazy"
				camera-controls
				auto-rotate
				auto-rotate-delay="900"
				rotation-per-second="28deg"
				touch-action="pan-y"
				environment-image="neutral"
				exposure="1"
				shadow-intensity="1"
				style="width:100%;height:460px;background:#e6e6e6;border:1.1px solid #000;"
			></model-viewer>
		{:else}
			<div class="flex h-[460px] flex-col items-center justify-center gap-4 border-[1.1px] border-black bg-[#e6e6e6] px-6 text-center text-base text-black/80">
				<div class="w-full max-w-90" role="status" aria-live="polite">
					<div class="mb-2 h-2 w-full overflow-hidden rounded border border-black/30 bg-white/70">
						<div
							class="h-full bg-[#BD0F32] transition-all duration-300"
							style={`width:${modelPhase === 'idle' ? '0%' : modelPhase === 'preparing' ? '35%' : modelPhase === 'fetching' ? '75%' : modelPhase === 'error' ? '100%' : '100%'}`}
						></div>
					</div>
					<p class="font-medium text-black">
						{modelPhase === 'error'
							? '3D load failed'
							: modelPhase === 'preparing'
								? 'Preparing 3D viewer...'
								: modelPhase === 'fetching'
									? 'Loading 3D model...'
									: 'Loading 3D model...'}
					</p>
				</div>
				{#if modelPhase === 'error'}
					<button
						type="button"
						class="h-11 rounded border border-black bg-black px-4 text-sm text-white transition-colors hover:bg-white hover:text-black"
						onclick={() => void loadModelViewer()}
					>
						Retry 3D Preview
					</button>
				{/if}
			</div>
		{/if}
	</div>
</section>
<style>
	.btn-group {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	.c-up {
		display: block;
	}

	.c-down {
		display: none;
	}

	.btn-group:active .c-up {
		display: none;
	}

	.btn-group:active .c-down {
		display: block;
	}

	.signup-form-wrap {
		position: relative;
	}

	.signup-sticker {
		position: absolute;
		right: -10rem;
		bottom: -16rem;
		z-index: 20;
		pointer-events: auto;
		width: min(36vw, 280px);
		height: auto;
		filter: drop-shadow(0 18px 16px rgba(0, 0, 0, 0.44));
		transform: rotate(-25deg) translateY(0);
		transition:
			transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
			filter 280ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.signup-sticker:hover {
		filter: drop-shadow(0 24px 24px rgba(0, 0, 0, 0.56));
		transform: rotate(-25deg) translateY(-10px) scale(1.03);
	}

	@media (max-width: 640px) {
		.signup-sticker {
			right: -0.5rem;
			bottom: -6.5rem;
			width: min(46vw, 170px);
		}
	}
</style>
