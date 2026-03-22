<script lang="ts">
	import DocsFrame from '$lib/components/DocsFrame.svelte';
</script>

<DocsFrame>
	<section>
		<div class="mb-6 rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<h1 class="text-4xl font-bold text-black md:text-5xl">What is shipping?</h1>
			<p class="mt-2 text-base text-black/80">Understanding what it means to actually ship a project.</p>
		</div>

		<div class="prose prose-neutral max-w-none rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<p><em>Original by <a href="https://github.com/qcoral/">@alexren</a> at <a href="https://hwdocs.hackclub.com">hwdocs.hackclub.com</a></em></p>

			<p>In short, <strong>shipping is process of actually making your project sharable</strong>. It's <em>the</em> most important part of your project, almost as important as the entire project itself.</p>

			<p>When you first make something, usually it just lives as a file on your computer. This is bad because only YOU can access it! Nobody else can see it. Not only that, but when you look back at the project a few years from now it'll be very, <em>very</em> difficult to remember anything about it! <em>It's not real.</em></p>

			<p>Shipping (at least in this context) involves publishing your design out there for the world to see. Making it very real. This involves a couple steps:</p>

			<ul>
				<li><strong>Documenting what your project actually is:</strong>
					<ul>
						<li>A quick story/motivation on how the project came to be</li>
						<li>A description of what the project does</li>
						<li>A quick brief on how it all fits together</li>
						<li>Some pictures of the design</li>
					</ul>
				</li>
				<li><strong>Making all files &amp; resources easily accessible &amp; organized</strong></li>
				<li><strong>Putting it on a platform that's easily shareable (i.e GitHub, Printables, etc)</strong></li>
			</ul>

			<hr />

			<p><strong>Here are some great examples of shipped projects</strong>. Notice how the files are organized using folders, and, more importantly, it's well documented what the project is about and what you can do with it!</p>

			<h3>Keyboards &amp; Macropads</h3>
			<ul>
				<li><a href="https://github.com/yiancar/Seigaiha">Seigaiha Keyboard</a></li>
				<li><a href="https://github.com/dekuNukem/duckyPad">Ducky Pad</a></li>
			</ul>

			<h3>3D Printers</h3>
			<ul>
				<li><a href="https://github.com/VoronDesign/Voron-0">Voron 0</a></li>
				<li><a href="https://github.com/Annex-Engineering/Gasherbrum-K3">Annex K3</a></li>
			</ul>

			<h3>Misc Projects</h3>
			<ul>
				<li><a href="https://github.com/adafruit/Adafruit-PiGRRL-PCB">PiGRRL</a> — Game console</li>
				<li><a href="https://github.com/nevermore3d/Nevermore_Micro">Nevermore filters</a> (I'll admit — this one is a little excessive)</li>
			</ul>

			<p><strong>When you make your repository nothing but a dump of files and 2 sentences for a README</strong>, what happens is that it's hard for other people to recognize your work, nor does it make it easy to learn from. <em>It's not real.</em> It only lives on in your tiny corner of this earth.</p>

			<hr />

			<p><em>Unfortunately we also can't accept non shipped projects since it'd be impossible to tell what you even made. Make sure to ship your projects!</em></p>
		</div>
	</section>
</DocsFrame>
