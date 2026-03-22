<script lang="ts">
	import breadboardLogo from '$lib/assets/Breadboard_Logo_White.svg';
	import hackClubFlag from '$lib/assets/Hack_Club_Flag.svg';

	const navLinks = [
		{ label: 'Get Started', href: '/get-started' },
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'Guides', href: '/guides' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'Shop', href: '/shop' }
	];

	let { isSticky = false } = $props();
</script>

<header class={`${isSticky ? 'sticky' : 'fixed'} top-0 left-0 w-screen bg-[#FEFFFE] z-50`}>
	<div class="mx-auto max-w-360 px-6">
		<!-- Main header bar -->
		<div class="flex min-h-20 items-center md:min-h-24">
			<!-- Logo -->
			<a href="/" class="py-3">
				<img src={breadboardLogo} alt="Breadboard" class="h-12 w-auto md:h-14" />
			</a>

			<!-- Navigation -->
			<nav class="flex flex-1 items-center justify-center gap-4 px-4 sm:gap-6 sm:px-6 md:gap-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm font-medium text-black transition-colors hover:text-[#BD0F32] sm:text-base"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<!-- Hack Club flag -->
			<a
				href="https://hackclub.com"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Hack Club"
				class="hc-badge-link px-3 py-3 sm:px-4"
			>
				<img src={hackClubFlag} alt="Hack Club" class="h-11 md:h-12" />
			</a>
		</div>
	</div>
</header>
