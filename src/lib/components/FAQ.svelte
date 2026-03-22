<script lang="ts">
	type FaqCard = {
		title: string;
		content: string;
		bg: string;
		fg: string;
		subtle?: string;
		extra?: string;
	};

	const cards: FaqCard[] = [
		{
			title: 'What Is Breadboard',
			content:
				"Breadboard is a YSWS (You Ship, We Ship) program run by high schoolers, where you build a real breadboard project and get a component kit shipped to you for free! It's organized by Hack Club, a 501(c)(3) nonprofit that supports a global community of 105,892 high school makers.",
			bg: '#F3F3F3',
			fg: '#000'
		},
		{
			title: 'Do I need prior experience?',
			content:
				"Not at all! Breadboard is built for makers of all skill levels. If you've never touched a breadboard before, our getting started doc and tutorials will walk you through everything you need to know.",
			bg: '#BD0F32',
			fg: '#FFF',
			subtle: 'rgba(255,255,255,0.82)',
			extra: 'orpheus@hackclub.com'
		},
		{
			title: 'Can I submit multiple projects?',
			content:
				"Yes! You can submit as many projects as you want. After your first kit, you'll get access to the shop where you can submit more projects and redeem additional components and kits.",
			bg: '#BD0F32',
			fg: '#FFF'
		},
		{
			title: 'Eligibility',
			content: 'Any teenager aged 13-18 anywhere in the world can participate in Breadboard!',
			bg: '#F3F3F3',
			fg: '#000'
		}
	];

	const handleCardMove = (event: MouseEvent) => {
		const card = event.currentTarget as HTMLDivElement;
		const rect = card.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const px = x / rect.width;
		const py = y / rect.height;
		const rx = (0.5 - py) * 8;
		const ry = (px - 0.5) * 10;

		card.style.setProperty('--mx', `${x}px`);
		card.style.setProperty('--my', `${y}px`);
		card.style.setProperty('--rx', `${rx}deg`);
		card.style.setProperty('--ry', `${ry}deg`);
	};

	const resetCard = (event: MouseEvent) => {
		const card = event.currentTarget as HTMLDivElement;
		card.style.setProperty('--rx', '0deg');
		card.style.setProperty('--ry', '0deg');
		card.style.setProperty('--mx', '50%');
		card.style.setProperty('--my', '50%');
	};
</script>

<section class="mx-auto max-w-360 px-6 py-12">
	<div class="faq-grid">
		{#each cards as card, i}
			<div
				class="faq-card"
				role="group"
				aria-label={card.title}
				style={`--card-bg:${card.bg}; --card-fg:${card.fg}; --card-subtle:${card.subtle || card.fg}; --stagger:${i};`}
				onpointermove={handleCardMove}
				onpointerleave={resetCard}
			>
				<h3 class="faq-title">{card.title}</h3>
				<p class="faq-content">{card.content}</p>
				{#if card.extra}
					<p class="faq-secondary-text">{card.extra}</p>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.faq-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 24px;
	}

	@media (min-width: 768px) {
		.faq-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.faq-card {
		--mx: 50%;
		--my: 50%;
		--rx: 0deg;
		--ry: 0deg;
		--card-bg: #f3f3f3;
		--card-fg: #000;
		--card-subtle: rgba(0, 0, 0, 0.68);
		--stagger: 0;

		position: relative;
		overflow: hidden;
		border-radius: 45px;
		border: 2px solid #191A23;
		padding: 40px;
		background:
			radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.25), transparent 40%),
			linear-gradient(130deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02)),
			var(--card-bg);
		box-shadow: 4px 4px 0 #191A23;
		backdrop-filter: blur(4px);
		text-align: center;
		transform-style: preserve-3d;
		transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(0);
		transition:
			transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);
		animation: card-enter 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
		animation-delay: calc(var(--stagger) * 120ms);
	}

	.faq-card::before {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: radial-gradient(circle 140px at var(--mx) var(--my), rgba(255, 255, 255, 0.38), transparent 70%);
		opacity: 0;
		transition: opacity 260ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.faq-card::after {
		content: '';
		position: absolute;
		inset: 1px;
		border-radius: 42px;
		border: 1px solid rgba(255, 255, 255, 0.35);
		pointer-events: none;
	}

	.faq-card:hover {
		transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-10px);
		box-shadow:
			var(--shadow-md, 12px 16px 30px rgba(25, 26, 35, 0.22)),
			0 22px 45px rgba(25, 26, 35, 0.2);
	}

	.faq-card:hover::before {
		opacity: 1;
	}

	.faq-title {
		position: relative;
		z-index: 1;
		margin-bottom: 24px;
		font-size: 30px;
		font-weight: 900;
		letter-spacing: 0.02em;
		color: var(--card-fg);
		transform: translateY(0) translateZ(24px);
		transition:
			transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1),
			opacity 320ms cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.faq-content {
		position: relative;
		z-index: 1;
		font-size: 14px;
		line-height: 1.5;
		color: var(--card-fg);
		opacity: 0.95;
		transform: translateY(0) translateZ(16px);
		transition:
			transform 380ms cubic-bezier(0.2, 0.8, 0.2, 1),
			opacity 380ms cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.faq-secondary-text {
		position: relative;
		z-index: 1;
		margin-top: 16px;
		font-size: 14px;
		color: var(--card-subtle);
		transform: translateY(0) translateZ(12px);
		transition:
			transform 420ms cubic-bezier(0.2, 0.8, 0.2, 1),
			opacity 420ms cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.faq-card:hover .faq-title {
		transform: translateY(-2px) translateZ(28px);
	}

	.faq-card:hover .faq-content {
		transform: translateY(-1px) translateZ(20px);
	}

	.faq-card:hover .faq-secondary-text {
		transform: translateY(0) translateZ(16px);
	}

	@keyframes card-enter {
		from {
			opacity: 0;
			transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(22px) scale(0.985);
		}
		to {
			opacity: 1;
			transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(0) scale(1);
		}
	}
</style>
