<footer class="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#BD0F32] text-white">
	<div class="mx-auto max-w-[1440px] px-8 py-16 text-center md:py-20">
		<div class="flex flex-col gap-8">
			<p class="text-xl font-semibold leading-relaxed md:text-2xl">
				Build with ❤️ by teenagers, for teenagers at
				<a href="https://hackclub.com" class="underline decoration-white/80">Hack Club</a>
			</p>

			<div class="flex flex-wrap items-center justify-center gap-4 text-base md:text-lg">
				<a href="https://hackclub.com" class="hover:underline">Hack Club</a>
				<span>|</span>
				<a href="https://hackclub.com/slack" class="hover:underline">Slack</a>
				<span>|</span>
				<a href="https://www.youtube.com/@HackClubHQ" class="hover:underline">YouTube</a>
				<span>|</span>
				<a href="https://www.instagram.com/starthackclub/" class="hover:underline">Instagram</a>
			</div>

			<p class="mx-auto max-w-4xl text-base leading-relaxed text-white/90 md:text-lg">
				Hack Club is a 501(c)(3) nonprofit and network of 60k+ technical high schoolers. We believe
				you learn best by building so we're creating community and providing grants so you can make
				awesome projects. In the past few years, we've partnered with GitHub to run Summer of Making,
				hosted the world's longest hackathon on land, and ran Canada's largest high school hackathon.
			</p>
		</div>
	</div>
</footer>

<style>
	footer::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -24px;
		height: 24px;
		background: #BD0F32;
		pointer-events: none;
	}
</style>
