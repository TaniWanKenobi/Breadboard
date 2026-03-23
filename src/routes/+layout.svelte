<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';

	let { children } = $props();

	onMount(() => {
		const cursor = document.createElement('div');
		cursor.className = 'custom-cursor';
		const trail = document.createElement('div');
		trail.className = 'cursor-trail';
		document.body.append(cursor, trail);

		let mouseX = window.innerWidth / 2;
		let mouseY = window.innerHeight / 2;
		let trailX = mouseX;
		let trailY = mouseY;

		const handlePointerMove = (event: PointerEvent) => {
			mouseX = event.clientX;
			mouseY = event.clientY;
			cursor.style.left = `${mouseX}px`;
			cursor.style.top = `${mouseY}px`;
		};

		const animateTrail = () => {
			trailX += (mouseX - trailX) * 0.16;
			trailY += (mouseY - trailY) * 0.16;
			trail.style.left = `${trailX}px`;
			trail.style.top = `${trailY}px`;
			requestAnimationFrame(animateTrail);
		};
		animateTrail();

		const handlePointerDown = () => {
			cursor.style.scale = '0.8';
		};

		const handlePointerUp = () => {
			cursor.style.scale = '1';
		};

		document.addEventListener('pointermove', handlePointerMove);
		document.addEventListener('pointerdown', handlePointerDown);
		document.addEventListener('pointerup', handlePointerUp);

		const clickHandler = (event: MouseEvent) => {
			const target = event.target as HTMLElement | null;
			const button = target?.closest('button, [role="button"]') as HTMLElement | null;
			if (!button) return;

			const rect = button.getBoundingClientRect();
			const ripple = document.createElement('span');
			ripple.className = 'ripple';
			const size = Math.max(rect.width, rect.height) * 1.35;
			ripple.style.width = `${size}px`;
			ripple.style.height = `${size}px`;
			ripple.style.left = `${event.clientX - rect.left}px`;
			ripple.style.top = `${event.clientY - rect.top}px`;
			button.appendChild(ripple);
			ripple.addEventListener('animationend', () => ripple.remove());
		};
		document.addEventListener('click', clickHandler);

		const revealTargets = document.querySelectorAll('section:not(.docs-page section), .faq-card, .reveal-on-scroll');
		revealTargets.forEach((node) => node.classList.add('reveal-on-scroll'));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
		);

		revealTargets.forEach((node) => observer.observe(node));

		return () => {
			document.removeEventListener('pointermove', handlePointerMove);
			document.removeEventListener('pointerdown', handlePointerDown);
			document.removeEventListener('pointerup', handlePointerUp);
			document.removeEventListener('click', clickHandler);
			observer.disconnect();
			cursor.remove();
			trail.remove();
		};
	});
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="512x512" href="/favicon-sticker-cropped.png?v=3" />
	<link rel="shortcut icon" href="/favicon-sticker-cropped.png?v=3" />
	<link rel="apple-touch-icon" href="/favicon-sticker-cropped.png?v=3" />
</svelte:head>
{@render children()}

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
