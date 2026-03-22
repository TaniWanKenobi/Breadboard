<script lang="ts">
	import designImage from '$lib/assets/design.png';
	import kitImage from '$lib/assets/Recieve.png';
	import buildImage from '$lib/assets/Build.png';
</script>

<section class="mx-auto max-w-[1440px] px-6 py-12">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<!-- Step 1: Design Your Project -->
		<a href="/get-started" class="step-card overflow-hidden rounded-[5px] border-[1.1px] border-black bg-[#BD0F32]">
			<div class="px-5 py-6">
				<h3 class="text-center text-[34px] font-medium tracking-[0.08em] text-white">Design Your Project</h3>
			</div>
			<div class="step-image-shell mx-5 mb-5 border-[1.1px] border-black bg-[#D9D9D9]">
				<div class="h-[161px] w-full overflow-hidden">
					<img
						src={designImage}
						alt="Design project"
						loading="lazy"
						decoding="async"
						class="step-image h-full w-full object-cover"
					/>
				</div>
			</div>
		</a>

		<!-- Step 2: Receive Your Kit -->
		<a href="/requirements" class="step-card overflow-hidden rounded-[5px] border-[1.1px] border-black bg-[#BD0F32]">
			<div class="px-5 py-6">
				<h3 class="text-center text-[34px] font-medium tracking-[0.08em] text-white">Receive Your Kit</h3>
			</div>
			<div class="step-image-shell mx-5 mb-5 border-[1.1px] border-black bg-[#D9D9D9]">
				<div class="h-[161px] w-full overflow-hidden">
					<img
						src={kitImage}
						alt="Receive kit"
						loading="lazy"
						decoding="async"
						class="step-image h-full w-full object-cover"
					/>
				</div>
			</div>
		</a>

		<!-- Step 3: Build It! -->
		<a href="/gallery" class="step-card overflow-hidden rounded-[5px] border-[1.1px] border-black bg-[#BD0F32]">
			<div class="px-5 py-6">
				<h3 class="text-center text-[34px] font-medium tracking-[0.08em] text-white">Build It!</h3>
			</div>
			<div class="step-image-shell mx-5 mb-5 border-[1.1px] border-black bg-[#D9D9D9]">
				<div class="h-[161px] w-full overflow-hidden">
					<img
						src={buildImage}
						alt="Build project"
						loading="lazy"
						decoding="async"
						class="step-image h-full w-full object-cover"
					/>
				</div>
			</div>
		</a>
	</div>
</section>

<style>
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
</style>
