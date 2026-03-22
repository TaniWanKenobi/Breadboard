<script lang="ts">
	import DocsFrame from '$lib/components/DocsFrame.svelte';
</script>

<DocsFrame>
	<section>
		<div class="mb-6 rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<h1 class="text-4xl font-bold text-black md:text-5xl">Readme</h1>
		</div>

		<div class="prose prose-neutral max-w-none rounded-[12px] border-[1.1px] border-black bg-[#f4f4f4] p-8 shadow-[4px_4px_0_#000]">
			<p>This was just the basic landing page for now, as discussed <a href="https://hackclub.slack.com/archives/C0ALD8SCMGD/p1773450311718909?thread_ts=1773450046.304719&cid=C0ALD8SCMGD">here</a>.</p>

			<p>Planned changes:</p>

			<ul>
				<li>After the initial submission, there will be a shop. Rewards will be time and quality based, similar to Blueprint's build submission system. Since build submissions carry a risk of fraudulent time additions that intial submissions don't (initial review isn't time-based), I'll ask Sam and use <a href="https://github.com/hackclub/lookout">Lookout</a> to verify them.</li>
				<li>As Dev said, I don't think a full login flow is necessary. Submissions will just use Fillout.</li>
			</ul>

			<p>Please DM me if anything is unclear or if anything can be improved! <strong>Enjoy the website :D</strong></p>
		</div>
	</section>
</DocsFrame>
