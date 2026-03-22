<script lang="ts">
	import { page } from '$app/state';

	type LinkItem = {
		label: string;
		href: string;
		sub?: boolean;
	};

	const topLevelItems: LinkItem[] = [
		{ label: 'Start here!', href: '/get-started' },
		{ label: 'Readme', href: '/readme' },
		{ label: 'FAQ', href: '/faq' }
	];

	const guideItems: LinkItem[] = [
		{ label: 'Breadboard Basics', href: '/guides', sub: true },
		{ label: 'LED Workshop: Build and Control a Circuit', href: '/workshop', sub: true },
		{ label: 'Example submission', href: '/guides/example-submission', sub: true }
	];

	const requirementsItem: LinkItem = { label: 'Requirements', href: '/requirements' };

	const projectResourceItems: LinkItem[] = [
		{ label: 'What is a shipped project', href: '/project-resources/what-is-a-shipped-project', sub: true },
		{ label: 'Good Journaling', href: '/project-resources/good-journaling', sub: true },
		{ label: 'Design tips', href: '/project-resources/design-tips', sub: true }
	];

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

<aside class="sidebar">
	<div class="sb-divider"></div>

	{#each topLevelItems as item}
		<a class="sb-item {isActive(item.href) ? 'active' : ''}" href={item.href}>
			<div class="btn-icon" aria-hidden="true">
				<div class="btn-outer">
					<div class="btn-inner"></div>
				</div>
			</div>
			{item.label}
		</a>
	{/each}

	<div class="sb-section-label">Guides</div>
	{#each guideItems as item}
		<a class="sb-item sub {isActive(item.href) ? 'active' : ''}" href={item.href}>
			<div class="btn-icon" aria-hidden="true">
				<div class="btn-outer">
					<div class="btn-inner sub-dot"></div>
				</div>
			</div>
			{item.label}
		</a>
	{/each}

	<a class="sb-item {isActive(requirementsItem.href) ? 'active' : ''}" href={requirementsItem.href}>
		<div class="btn-icon" aria-hidden="true">
			<div class="btn-outer">
				<div class="btn-inner"></div>
			</div>
		</div>
		{requirementsItem.label}
	</a>

	<div class="sb-section-label">Project resources</div>
	{#each projectResourceItems as item}
		<a class="sb-item sub {isActive(item.href) ? 'active' : ''}" href={item.href}>
			<div class="btn-icon" aria-hidden="true">
				<div class="btn-outer">
					<div class="btn-inner sub-dot"></div>
				</div>
			</div>
			{item.label}
		</a>
	{/each}

	<div class="sb-hole-row" aria-hidden="true">
		<div class="hole r"></div><div class="hole"></div><div class="hole b"></div>
		<div class="hole"></div><div class="hole g"></div><div class="hole"></div>
		<div class="hole r"></div><div class="hole y"></div><div class="hole"></div>
		<div class="hole b"></div><div class="hole"></div><div class="hole g"></div>
		<div class="hole"></div><div class="hole r"></div><div class="hole"></div>
		<div class="hole y"></div><div class="hole"></div><div class="hole b"></div>
	</div>
</aside>

<style>
	.sidebar {
		position: fixed;
		top: 80px;
		left: 0;
		bottom: 0;
		width: 210px;
		background: rgba(255, 255, 255, 0.96);
		border-right: 2px solid #111;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		z-index: 35;
	}

	@media (min-width: 768px) {
		.sidebar {
			top: 96px;
		}
	}

	.sb-divider {
		height: 2px;
		background: repeating-linear-gradient(90deg, #BD0F32 0px, #BD0F32 6px, transparent 6px, transparent 10px);
		margin: 0 0 8px;
	}

	.sb-item {
		display: flex;
		align-items: center;
		gap: 9px;
		padding: 6px 14px;
		font-size: 18px;
		font-family: 'Share Tech Mono', monospace;
		color: #111;
		cursor: pointer;
		text-decoration: none;
		transition: background 0.12s;
	}

	.sb-item:hover {
		background: rgba(189, 15, 50, 0.08);
	}

	.sb-item.active {
		background: #BD0F32;
		color: #fff;
	}

	.sb-item.active .btn-outer {
		border-color: #fff;
	}

	.sb-item.active .btn-inner {
		background: #fff;
	}

	.sb-item.sub {
		padding-left: 32px;
		font-size: 16.5px;
		color: #555;
	}

	.sb-item.sub:hover {
		background: rgba(189, 15, 50, 0.06);
		color: #111;
	}

	.sb-item.sub.active {
		color: #fff;
	}

	.sb-section-label {
		margin: 10px 14px 0;
		padding: 8px 0 3px;
		border-top: 1px dashed #bbb;
		font-size: 13.5px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #999;
		font-family: 'Share Tech Mono', monospace;
	}

	.btn-icon {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn-outer {
		width: 16px;
		height: 16px;
		border: 1.5px solid #111;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f0f0f0;
	}

	.btn-inner {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #BD0F32;
	}

	.btn-inner.sub-dot {
		background: #ccc;
	}

	.sb-hole-row {
		display: flex;
		gap: 5px;
		padding: 10px 14px;
		flex-wrap: wrap;
		margin-top: auto;
		border-top: 1px dashed #ccc;
	}

	.hole {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		border: 1px solid #999;
		background: #fff;
	}

	.hole.r {
		background: #BD0F32;
		border-color: #BD0F32;
	}

	.hole.g {
		background: #22c55e;
		border-color: #22c55e;
	}

	.hole.b {
		background: #3b82f6;
		border-color: #3b82f6;
	}

	.hole.y {
		background: #eab308;
		border-color: #eab308;
	}
</style>
