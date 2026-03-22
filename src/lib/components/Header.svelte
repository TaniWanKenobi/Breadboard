<script lang="ts">
	import breadboardLogo from '$lib/assets/Breadboard_Logo_White.svg';
	import hackClubFlag from '$lib/assets/Hack_Club_Flag.svg';

	const navLinks = [
		{ label: 'Get started', href: '/get-started' },
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'Workshop', href: '/workshop' }
	];
</script>

<header class="w-full">
	<div class="mx-auto max-w-[1440px] px-6">
		<!-- Main header bar -->
		<div class="flex items-center bg-[#FEFFFE]">
			<!-- Logo -->
			<a href="/" class="px-2 py-1">
				<img src={breadboardLogo} alt="Breadboard" class="h-[38px] w-[125px]" />
			</a>

			<!-- Navigation -->
			<nav class="flex flex-1 items-center gap-6 px-6">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm text-black transition-colors hover:text-[#BD0F32]"
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
				class="px-4 py-2"
			>
				<img src={hackClubFlag} alt="Hack Club" class="h-10" />
			</a>
		</div>


	</div>
</header>
