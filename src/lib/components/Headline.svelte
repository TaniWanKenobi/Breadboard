<script lang="ts">
	type SignupFormState = {
		success?: boolean;
		message?: string;
		email?: string;
	};

	let { form }: { form?: SignupFormState } = $props();

	const actionButtons = [
		{ label: 'Get started', hash: 'get-started', id: 'start' },
		{ label: 'Gallery', hash: 'gallery', id: 'gallery' },
		{ label: 'Workshop', hash: 'workshop', id: 'workshop' }
	] as const;
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
			<form method="POST" action="?/subscribe" class="flex flex-col gap-3 sm:flex-row sm:items-stretch">
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
		<div class="flex flex-col items-center justify-center gap-2 text-center text-black py-8">
			<button class="btn-group" aria-label={`${btn.label} red pushbutton`} onclick={() => window.location.hash = btn.hash}>
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
</style>
