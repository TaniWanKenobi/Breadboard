<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let wrapEl: HTMLDivElement;

	let isDark = $state(false);
	let activeColor = $state('#e05555');

	const colors = ['#e05555', '#4477dd', '#44aa66', '#999', '#e0aa22'];

	const THEMES = {
		light: {
			board: '#f4f1e8',
			boardStroke: '#dedad0',
			railBg: '#eaf0f8',
			midGap: '#e8e4d8',
			holeRing: '#ccc8bc',
			holeRingRail: '#b8cce0',
			holeDark: '#1e1c18',
			colLabel: '#aaa',
			colLabelMod: '#888',
			railRed: '#cc3333',
			railBlue: '#3355cc',
			btnBorder: '#bbb',
			btnText: '#555',
			btnHover: '#eee',
			activeBorder: '#222',
			hint: '#999'
		},
		dark: {
			board: '#2e2e2e',
			boardStroke: '#222',
			railBg: '#383838',
			midGap: '#272727',
			holeRing: '#888880',
			holeRingRail: '#c8c0b0',
			holeDark: '#1e1c18',
			colLabel: '#555',
			colLabelMod: '#888',
			railRed: '#cc3333',
			railBlue: '#3355cc',
			btnBorder: '#666',
			btnText: '#aaa',
			btnHover: '#444',
			activeBorder: '#eee',
			hint: '#777'
		}
	};

	onMount(() => {
		let T = THEMES.light;

		const P = 24;
		const HR = 4.5;
		const RING = 3;
		const WW = 5;
		const LWW = 10;
		const LC = '#BD0F32';

		const COLS = 42;
		const ROWS = 5;
		const MX = 20;
		const MY = 16;

		const TOP_RAIL_Y = MY;
		const TOP_RAILM_Y = MY + P;
		const MAIN_Y = MY + 3 * P;
		const BOT_RAIL_Y = MAIN_Y + ROWS * P + P;
		const BOT_RAILM_Y = BOT_RAIL_Y + P;
		const BH_BASE = BOT_RAILM_Y + MY;

		const BW = MX * 2 + (COLS - 1) * P;
		const BH = BH_BASE;

		const dpr = window.devicePixelRatio || 1;
		canvas.width = BW * dpr;
		canvas.height = BH * dpr;
		canvas.style.width = '100%';
		canvas.style.aspectRatio = `${BW} / ${BH}`;
		const ctx = canvas.getContext('2d')!;
		ctx.scale(dpr, dpr);

		function hx(c: number) {
			return MX + c * P;
		}

		interface Hole {
			id: string;
			cx: number;
			cy: number;
			sec: string;
			col: number;
			row: number;
			rail: boolean;
		}

		const HOLES: Hole[] = [];

		for (let c = 0; c < COLS; c++) {
			HOLES.push({ id: `tr+${c}`, cx: hx(c), cy: TOP_RAIL_Y, sec: 'tr+', col: c, row: 0, rail: true });
			HOLES.push({ id: `tr-${c}`, cx: hx(c), cy: TOP_RAILM_Y, sec: 'tr-', col: c, row: 1, rail: true });
			for (let r = 0; r < ROWS; r++)
				HOLES.push({ id: `m${c}_${r}`, cx: hx(c), cy: MAIN_Y + r * P, sec: 'm', col: c, row: r, rail: false });
			HOLES.push({ id: `br+${c}`, cx: hx(c), cy: BOT_RAIL_Y, sec: 'br+', col: c, row: 0, rail: true });
			HOLES.push({ id: `br-${c}`, cx: hx(c), cy: BOT_RAILM_Y, sec: 'br-', col: c, row: 1, rail: true });
		}

		function gh(sec: string, col: number, row: number) {
			return HOLES.find((h) => h.sec === sec && h.col === col && h.row === row) || null;
		}

		function nearest(px: number, py: number) {
			let best: Hole | null = null;
			let bd = 14;
			for (const h of HOLES) {
				const d = Math.hypot(h.cx - px, h.cy - py);
				if (d < bd) { bd = d; best = h; }
			}
			return best;
		}

		// Letter defs
		const B1_segs = [[0,0,0,4],[0,4,3,4],[3,4,3,2],[3,2,0,2],[2,2,2,0],[2,0,0,0]];
		const R_segs = [[0,2,0,4],[0,2,2,2]];
		const E_segs = [[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,3],[2,3,0,3]];
		const A_segs = [[0,4,0,2],[0,2,2,2],[2,2,2,4],[0,3,2,3]];
		const D_segs = [[0,2,0,4],[0,4,2,4],[2,4,2,0],[2,2,0,2]];
		const B2_segs = [[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2]];
		const O_segs = [[2,2,0,2],[0,2,0,4],[0,4,2,4],[2,4,2,2]];

		const WORD_SEGS = [B1_segs, R_segs, E_segs, A_segs, D_segs, B2_segs, O_segs, A_segs, R_segs, D_segs];

		function maxCol(segs: number[][]) {
			let m = 0;
			for (const [c1, , c2] of segs) m = Math.max(m, c1, c2);
			return m;
		}

		const GAP = 1;
		const offsets: number[] = [];
		let col = 0;
		for (let i = 0; i < WORD_SEGS.length; i++) {
			offsets.push(col);
			col += maxCol(WORD_SEGS[i]) + 1 + GAP;
		}
		const totalLetterCols = col - GAP;
		const letterStart = Math.floor((COLS - totalLetterCols) / 2);

		interface Wire { x1: number; y1: number; x2: number; y2: number; color?: string }

		const LETTER_WIRES: Wire[] = [];
		for (let i = 0; i < WORD_SEGS.length; i++) {
			const oc = letterStart + offsets[i];
			for (const [c1, r1, c2, r2] of WORD_SEGS[i]) {
				const h1 = gh('m', oc + c1, r1);
				const h2 = gh('m', oc + c2, r2);
				if (h1 && h2) LETTER_WIRES.push({ x1: h1.cx, y1: h1.cy, x2: h2.cx, y2: h2.cy });
			}
		}

		let fromHole: Hole | null = null;
		let userWires: (Wire & { color: string })[] = [];
		let mouse: { x: number; y: number } | null = null;

		function rr(x: number, y: number, w: number, h: number, r: number) {
			ctx.beginPath();
			ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
			ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
			ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
			ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
			ctx.closePath();
		}

		function drawWire(x1: number, y1: number, x2: number, y2: number, col: string, alpha: number, width: number, dashed: boolean) {
			ctx.globalAlpha = alpha;
			ctx.strokeStyle = col; ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
			ctx.setLineDash(dashed ? [7, 5] : []);
			ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y1); ctx.lineTo(x2, y2); ctx.stroke();
			ctx.setLineDash([]);
			const r = width / 2 + 0.5;
			ctx.fillStyle = col;
			ctx.beginPath(); ctx.arc(x1, y1, r, 0, Math.PI * 2); ctx.fill();
			ctx.beginPath(); ctx.arc(x2, y2, r, 0, Math.PI * 2); ctx.fill();
			if (Math.abs(x1 - x2) > 2 && Math.abs(y1 - y2) > 2) {
				ctx.beginPath(); ctx.arc(x2, y1, r, 0, Math.PI * 2); ctx.fill();
			}
			ctx.globalAlpha = 1;
		}

		function drawHole(h: Hole, highlight: boolean) {
			const ringColor = highlight
				? activeColor
				: (h.sec === 'tr+' || h.sec === 'br+') ? T.railRed
				: (h.sec === 'tr-' || h.sec === 'br-') ? T.railBlue
				: T.holeRing;
			ctx.fillStyle = ringColor;
			ctx.globalAlpha = highlight ? 1 : (h.rail ? 0.5 : 1);
			ctx.beginPath(); ctx.arc(h.cx, h.cy, HR + RING, 0, Math.PI * 2); ctx.fill();
			ctx.globalAlpha = 1;
			ctx.fillStyle = highlight ? activeColor : T.holeDark;
			ctx.beginPath(); ctx.arc(h.cx, h.cy, HR, 0, Math.PI * 2); ctx.fill();
		}

		function draw() {
			ctx.clearRect(0, 0, BW, BH);

			ctx.fillStyle = T.board; rr(0, 0, BW, BH, 8); ctx.fill();
			ctx.strokeStyle = T.boardStroke; ctx.lineWidth = 1; rr(0, 0, BW, BH, 8); ctx.stroke();

			ctx.fillStyle = T.railBg;
			rr(2, TOP_RAIL_Y - P / 2 + 2, BW - 4, P * 2 - 4, 5); ctx.fill();
			rr(2, BOT_RAIL_Y - P / 2 + 2, BW - 4, P * 2 - 4, 5); ctx.fill();

			ctx.font = 'bold 9px monospace'; ctx.textAlign = 'left'; ctx.fillStyle = T.railRed;
			ctx.fillText('+', 4, TOP_RAIL_Y + 4);
			ctx.fillText('+', 4, BOT_RAIL_Y + 4);
			ctx.fillStyle = T.railBlue;
			ctx.fillText('−', 4, TOP_RAILM_Y + 4);
			ctx.fillText('−', 4, BOT_RAILM_Y + 4);

			ctx.fillStyle = T.midGap;
			ctx.fillRect(4, MAIN_Y + ROWS * P + 2, BW - 8, P - 4);

			ctx.font = '7px monospace'; ctx.textAlign = 'center';
			for (let c = 0; c < COLS; c++) {
				ctx.fillStyle = (c + 1) % 5 === 0 ? T.colLabelMod : T.colLabel;
				ctx.fillText(String(c + 1), hx(c), MAIN_Y + ROWS * P + P / 2 + 2);
			}

			for (const h of HOLES) drawHole(h, fromHole !== null && fromHole.id === h.id);

			for (const w of userWires) drawWire(w.x1, w.y1, w.x2, w.y2, w.color, 1, WW, false);
			if (fromHole && mouse) drawWire(fromHole.cx, fromHole.cy, mouse.x, mouse.y, activeColor, 0.4, WW, true);

			for (const w of LETTER_WIRES) drawWire(w.x1, w.y1, w.x2, w.y2, LC, 0.95, LWW, false);
		}

		function gp(e: MouseEvent | TouchEvent) {
			const r = canvas.getBoundingClientRect();
			const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
			const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
			return { x: (cx - r.left) * (BW / r.width), y: (cy - r.top) * (BH / r.height) };
		}

		canvas.addEventListener('click', (e) => {
			const { x, y } = gp(e);
			const h = nearest(x, y);
			if (!h) return;
			if (!fromHole) { fromHole = h; }
			else {
				if (fromHole.id !== h.id) userWires.push({ x1: fromHole.cx, y1: fromHole.cy, x2: h.cx, y2: h.cy, color: activeColor });
				fromHole = null;
			}
			draw();
		});

		canvas.addEventListener('mousemove', (e) => { mouse = gp(e); if (fromHole) draw(); });
		canvas.addEventListener('mouseleave', () => { mouse = null; if (fromHole) draw(); });

		canvas.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
		canvas.addEventListener('touchend', (e) => {
			e.preventDefault();
			const t = e.changedTouches[0];
			const r = canvas.getBoundingClientRect();
			const x = (t.clientX - r.left) * (BW / r.width);
			const y = (t.clientY - r.top) * (BH / r.height);
			const h = nearest(x, y);
			if (!h) return;
			if (!fromHole) fromHole = h;
			else {
				if (fromHole.id !== h.id) userWires.push({ x1: fromHole.cx, y1: fromHole.cy, x2: h.cx, y2: h.cy, color: activeColor });
				fromHole = null;
			}
			draw();
		}, { passive: false });

		// Expose clear and theme toggle
		(wrapEl as any).__clear = () => { userWires = []; fromHole = null; draw(); };
		(wrapEl as any).__toggleTheme = () => {
			isDark = !isDark;
			T = isDark ? THEMES.dark : THEMES.light;
			draw();
		};
		(wrapEl as any).__redraw = () => draw();

		draw();
	});

	function selectColor(c: string) {
		activeColor = c;
	}

	function clearBoard() {
		(wrapEl as any)?.__clear?.();
	}

	function toggleTheme() {
		(wrapEl as any)?.__toggleTheme?.();
	}
</script>

<div bind:this={wrapEl} class="font-mono">
	<div class="mb-3 flex flex-wrap items-center gap-2.5">
		<span class="text-xs" style="color: {isDark ? '#777' : '#999'}">color</span>
		{#each colors as c}
			<button
				class="h-[22px] w-[22px] rounded-full border-[2.5px] transition-transform hover:scale-110"
				style="background: {c}; border-color: {activeColor === c ? (isDark ? '#eee' : '#222') : 'transparent'}"
				onclick={() => selectColor(c)}
			></button>
		{/each}
		<span class="text-xs" style="color: {isDark ? '#777' : '#999'}">click hole → click hole</span>
		<button
			class="rounded-[20px] border px-3.5 py-1 text-xs"
			style="border-color: {isDark ? '#666' : '#bbb'}; color: {isDark ? '#aaa' : '#555'}"
			onclick={toggleTheme}
		>
			{isDark ? 'light mode' : 'dark mode'}
		</button>
		<button
			class="rounded-[20px] border px-3.5 py-1 text-xs"
			style="border-color: {isDark ? '#666' : '#bbb'}; color: {isDark ? '#aaa' : '#555'}"
			onclick={clearBoard}
		>
			clear
		</button>
	</div>
	<canvas bind:this={canvas} style="display:block;cursor:crosshair;border-radius:8px;border:2px solid #000;"></canvas>
</div>
