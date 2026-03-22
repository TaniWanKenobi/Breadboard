<script lang="ts">
	import errorImg from '$lib/assets/404.png';
</script>

<div class="pg page-grid-bg">
	<div class="tag t1">// error_boundary.js:404</div>
	<div class="tag t2">breadboard.hackclub.com</div>
	<div class="content">
		<div class="breadcrumb">home / <span>404</span></div>
		<img src={errorImg} alt="Confused creature" class="error-img" />
		<div class="code">404</div>
		<p class="title">Page not found.</p>
		<p class="desc">
			This page doesn't exist, or it moved somewhere else.<br />
			Check the URL or head back home.
		</p>
		<a class="btn" href="/">go home</a>
		<div class="or">or</div>
		<a class="link" href="https://hackclub.slack.com/channels/breadboard">ask in #breadboard</a>
	</div>
</div>

<style>
	.pg {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem 2rem;
		position: relative;
		overflow: hidden;
	}

	.content {
		position: relative;
		z-index: 1;
		text-align: center;
		max-width: 480px;
	}

	.error-img {
		width: 180px;
		height: auto;
		margin: 0 auto 1rem;
	}

	.code {
		font-size: 96px;
		font-weight: 400;
		line-height: 1;
		color: var(--brand-red);
		letter-spacing: -2px;
		margin: 0 0 0.5rem;
	}

	.title {
		font-size: 18px;
		font-weight: 400;
		margin: 0 0 0.75rem;
		color: var(--text-main);
	}

	.desc {
		font-size: 13px;
		color: rgba(25, 26, 35, 0.55);
		margin: 0 0 2rem;
		line-height: 1.7;
	}

	.btn {
		display: inline-block;
		background: var(--brand-red);
		color: var(--bg-base);
		font-family: inherit;
		font-size: 13px;
		padding: 10px 24px;
		border: none;
		cursor: pointer;
		text-decoration: none;
		letter-spacing: 0.5px;
	}

	.btn:hover {
		transform: translateY(-1px);
		box-shadow: var(--shadow-sm);
	}

	.btn::after {
		display: none;
	}

	.or {
		font-size: 12px;
		color: rgba(25, 26, 35, 0.4);
		margin: 1rem 0;
	}

	.link {
		font-size: 13px;
		color: var(--brand-red);
		text-decoration: underline;
		cursor: pointer;
	}

	.tag {
		position: absolute;
		font-size: 11px;
		color: rgba(25, 26, 35, 0.25);
		font-family: inherit;
	}

	.t1 {
		top: 24px;
		left: 28px;
	}

	.t2 {
		bottom: 24px;
		right: 28px;
	}

	.breadcrumb {
		font-size: 12px;
		color: rgba(25, 26, 35, 0.35);
		margin: 0 0 2.5rem;
		letter-spacing: 0.3px;
	}

	.breadcrumb span {
		color: var(--brand-red);
	}
</style>
