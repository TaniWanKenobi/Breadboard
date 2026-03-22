<script lang="ts">
	import DocsFrame from '$lib/components/DocsFrame.svelte';
</script>

<DocsFrame>
	<section>
		<div class="mb-6 rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<h1 class="text-4xl font-bold text-black md:text-5xl">Submitting your Project</h1>
			<p class="mt-2 text-base text-black/80">Everything you need to know before you submit.</p>
		</div>

		<div class="prose prose-neutral max-w-none rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<p>Built something cool? Awesome. Here's what you need to do before we ship you anything.</p>
			<p>We ship real projects. Not vibes, not half-finished ideas. <strong>Real, working things.</strong></p>

			<p>There are two submission stages:</p>
			<ol>
				<li><strong>Design Submission:</strong> before we ship you the kit</li>
				<li><strong>Build Submission:</strong> required after you receive and build it</li>
			</ol>
			<p>Both are required. You don't get to skip the build submission. That's the whole point.</p>

			<p class="text-xl! text-center text-red-600">
				<strong>95% of rejections are fixable in under 5 minutes. Read this carefully.</strong>
			</p>

			<p>Stuck? Ask in <a href="https://hackclub.slack.com">#breadboard</a> before DMing us. Odds are someone else had the same question.</p>

			<h2>Stage 1: Design Submission</h2>
			<p>This is what you submit before we send you anything. It should prove that you've thought your project through and that someone else could understand and replicate it.</p>

			<h3>Your README</h3>
			<p>Imagine someone stumbles onto your repo with zero context. Can they figure out what your project is without opening a single file?</p>
			<p>If not, your README needs work. At minimum, cover:</p>
			<ul>
				<li>What your project is and what makes it interesting</li>
				<li>How it works and how you use it</li>
				<li>Why you made it. Get personal! What problem were you solving? What did you want to learn?</li>
				<li>A clear wiring diagram or schematic</li>
				<li>Renders or images of your planned enclosure</li>
			</ul>

			<h3>Your Design</h3>
			<p>Your project must:</p>
			<ul>
				<li>Be your own original work. No AI-generated designs, no copied tutorials.</li>
				<li>Use several components from the kit (think shift registers, optocouplers, rotary encoders, etc.)</li>
				<li>Have a complete wiring diagram or schematic</li>
				<li>Have firmware. Even untested is fine, but it needs to exist.</li>
				<li>Have a designed enclosure with a real attachment method. Not tape and hope. Screws, clips, something solid.</li>
				<li>Have been looked over by someone else before you submit. Fresh eyes catch things yours won't.</li>
			</ul>

			<p>Your repo must include:</p>
			<ul>
				<li>A BOM (Bill of Materials) as a CSV, with links to every part</li>
				<li>Your wiring diagram or schematic file</li>
				<li>Firmware source code, if applicable</li>
				<li>CAD files for your enclosure (.step, .f3d, .FCStd, or an Onshape link)</li>
				<li>Any libraries or references your project depends on</li>
				<li>Folders and files with clear, logical names</li>
			</ul>

			<h2>Stage 2: Build Submission</h2>
			<p>Once you receive your kit and build your project, you are required to submit your build. This is not optional. Receiving the kit and going silent is not okay.</p>
			<p>Your build submission must include:</p>
			<ul>
				<li>Photos of the finished breadboard circuit, fully assembled</li>
				<li>Photos of your completed enclosure with everything housed inside</li>
				<li>A demo video showing it actually working</li>
				<li>A build log covering what you made, the decisions you made along the way, and what went wrong</li>
			</ul>

			<h2>Things That Will Get You Rejected</h2>
			<ul>
				<li>AI-generated code, designs, or writeups</li>
				<li>Copying someone else's project without credit</li>
				<li>Missing files from the checklist above</li>
				<li>Not submitting your build after receiving the kit</li>
			</ul>

			<div class="rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
				<strong>⚠️ Warning:</strong> Submitting stolen or AI-generated work can result in a permanent ban from this program and other Hack Club programs. Don't do it.
			</div>
		</div>
	</section>
</DocsFrame>
