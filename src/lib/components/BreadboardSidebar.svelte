<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	type RoutePath =
		| '/get-started'
		| '/readme'
		| '/faq'
		| '/guides'
		| '/guides/firmware'
		| '/workshop'
		| '/guides/example-submission'
		| '/requirements'
		| '/project-resources/what-is-a-shipped-project'
		| '/project-resources/good-journaling'
		| '/project-resources/design-tips';

	type LinkItem = {
		label: string;
		route: RoutePath;
		href: string;
		sub?: boolean;
	};

	const topLevelItems: LinkItem[] = [
		{ label: 'Start here!', route: '/get-started', href: resolve('/get-started') },
		{ label: 'Readme', route: '/readme', href: resolve('/readme') },
		{ label: 'FAQ', route: '/faq', href: resolve('/faq') }
	];

	const guideItems: LinkItem[] = [
		{ label: 'Breadboard Basics', route: '/guides', href: resolve('/guides'), sub: true },
		{ label: 'LED Workshop: Build and Control a Circuit', route: '/workshop', href: resolve('/workshop'), sub: true },
		{ label: 'Example submission', route: '/guides/example-submission', href: resolve('/guides/example-submission'), sub: true },
		{ label: 'Firmware Guide', route: '/guides/firmware', href: resolve('/guides/firmware'), sub: true }
	];

	const requirementsItem: LinkItem = { label: 'Requirements', route: '/requirements', href: resolve('/requirements') };

	const projectResourceItems: LinkItem[] = [
		{
			label: 'What is a shipped project',
			route: '/project-resources/what-is-a-shipped-project',
			href: resolve('/project-resources/what-is-a-shipped-project'),
			sub: true
		},
		{ label: 'Good Journaling', route: '/project-resources/good-journaling', href: resolve('/project-resources/good-journaling'), sub: true },
		{ label: 'Design tips', route: '/project-resources/design-tips', href: resolve('/project-resources/design-tips'), sub: true }
	];

	function isActive(route: string) {
		return page.url.pathname === route;
	}

	let isOpen = $state(false);

	function closeSidebar() {
		isOpen = false;
	}

	function toggleSidebar() {
		isOpen = !isOpen;
	}
</script>

<button
	class="sidebar-toggle"
	type="button"
	onclick={toggleSidebar}
	aria-controls="docs-sidebar"
	aria-expanded={isOpen}
	aria-label="Toggle docs navigation"
>
	Menu
</button>

<aside id="docs-sidebar" class="sidebar {isOpen ? 'open' : ''}">
	<button class="sidebar-close" type="button" onclick={closeSidebar} aria-label="Close docs navigation">Close</button>
	<div class="sb-divider"></div>

	{#each topLevelItems as item (item.route)}
		<a class="sb-item {isActive(item.route) ? 'active' : ''}" href={resolve(item.route)} onclick={closeSidebar}>
			<div class="btn-icon" aria-hidden="true">
				<div class="btn-outer">
					<div class="btn-inner"></div>
				</div>
			</div>
			{item.label}
		</a>
	{/each}

	<div class="sb-section-label">Guides</div>
	{#each guideItems as item (item.route)}
		<a class="sb-item sub {isActive(item.route) ? 'active' : ''}" href={resolve(item.route)} onclick={closeSidebar}>
			<div class="btn-icon" aria-hidden="true">
				<div class="btn-outer">
					<div class="btn-inner sub-dot"></div>
				</div>
			</div>
			{item.label}
		</a>
	{/each}

	<a class="sb-item {isActive(requirementsItem.route) ? 'active' : ''}" href={resolve(requirementsItem.route)} onclick={closeSidebar}>
		<div class="btn-icon" aria-hidden="true">
			<div class="btn-outer">
				<div class="btn-inner"></div>
			</div>
		</div>
		{requirementsItem.label}
	</a>

	<div class="sb-section-label">Project resources</div>
	{#each projectResourceItems as item (item.route)}
		<a class="sb-item sub {isActive(item.route) ? 'active' : ''}" href={resolve(item.route)} onclick={closeSidebar}>
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
	.sidebar-toggle {
		position: fixed;
		top: 92px;
		left: 12px;
		z-index: 46;
		border: 1.1px solid #111;
		background: #f4f4f4;
		color: #111;
		padding: 8px 12px;
		font-family: 'Share Tech Mono', monospace;
		font-size: 14px;
		box-shadow: 3px 3px 0 #000;
	}

	@media (min-width: 768px) {
		.sidebar-toggle {
			display: none;
		}
	}

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
		z-index: 45;
		transform: translateX(-105%);
		transition: transform 200ms ease;
	}

	.sidebar.open {
		transform: translateX(0);
	}

	@media (min-width: 768px) {
		.sidebar {
			top: 96px;
			transform: translateX(0);
		}
	}

	.sidebar-close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin: 10px 12px 4px;
		border: 1.1px solid #111;
		background: #f4f4f4;
		color: #111;
		padding: 6px 10px;
		font-family: 'Share Tech Mono', monospace;
		font-size: 13px;
		box-shadow: 2px 2px 0 #000;
	}

	@media (min-width: 768px) {
		.sidebar-close {
			display: none;
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
