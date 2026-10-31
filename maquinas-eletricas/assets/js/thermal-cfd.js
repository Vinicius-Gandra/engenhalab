/* Escoamento do ar na vista "Na máquina": simulação Lattice Boltzmann (D2Q9) em tempo real,
   a mesma técnica da esteira de von Kármán da página inicial, na geometria do corte da máquina.
   Ventiladores empurram o ar, o feixe do trocador freia e esfria, cobre e ferro aquecem.
   A metade de cima é calculada; a de baixo é o espelho (máquina simétrica em torno do eixo).
   Cores = temperatura do ar (frio → quente); traços = partículas levadas pelo ar. */
(function () {
  'use strict';
  const H = 3, X0 = 104, Y0 = 48, XC = 698, YC = 330;          // célula de 3 unidades do desenho
  const NX = Math.ceil((XC - X0) / H), NY = Math.ceil((YC - Y0) / H), N = NX * NY;
  const cxOf = i => X0 + (i + 0.5) * H, cyOf = j => Y0 + (j + 0.5) * H;
  const DUCTS = (() => { const lpk = (264 - 36) / 7, d = []; for (let k = 1; k < 7; k++) d.push(268 + k * lpk + (k - 1) * 6 + 3); return d; })();
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const segDist = (px, py, ax, ay, bx, by) => { const dx = bx - ax, dy = by - ay, t = clamp(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1), 0, 1); return Math.hypot(px - ax - t * dx, py - ay - t * dy); };

  /* ------------------------------------------------------------ geometria em células */
  // tipo: 0 ar, 1 sólido; arrasto (meio poroso), força do ventilador, calor e resfriamento por célula
  function geometria(fans, K) {
    const bar = new Uint8Array(N), drag = new Float32Array(N), fx = new Float32Array(N), q = new Float32Array(N), frio = new Uint8Array(N);
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = j * NX + i, x = cxOf(i), y = cyOf(j), r = YC - y, xl = x <= 400 ? x : 800 - x, dir = x <= 400 ? 1 : -1;
      let s = 0;
      const capo = x > 106 && x < 694 && y > 52 && y < 200, carc = x > 122 && x < 678 && y >= 199 && y < YC;
      if (!capo && !carc) s = 1;
      if (Math.abs(y - 200) < 2.6 && !((x > 128 && x < 166) || (x > 262 && x < 538) || (x > 634 && x < 672))) s = 1;
      if (xl >= 172 && xl <= 196 && y >= 108 && y <= 156) s = 1;                    // cabeçotes
      if (xl >= 170 && xl <= 175 && y >= 155 && y <= 200) s = 1;                    // divisórias
      if (y > 200) {
        if (r < 13) s = 1;                                                           // eixo
        if (segDist(xl, r, 214, 61, 214, 114) < 2.2 || segDist(xl, r, 214, 114, 238, 129) < 2.2) s = 1;   // defletor
        if (xl >= 262 && r >= 77 && r <= 112 && !DUCTS.some(d => Math.abs(x - d) < 3.2)) s = 1;           // núcleo
        if (xl >= 292 && r >= 13 && r <= 38 && !(r > 20.5 && r < 29.5)) s = 1;    // coroa (duto axial livre)
        const z = 268 - xl, lift = 10 * clamp((z - 12) / 30, 0, 1);
        if (z >= 0 && z <= 50 && r >= 76 + lift && r <= 95 + lift) { drag[k] = 0.35 * K.d; q[k] = 1; }   // cabeças: passa entre as bobinas
        if (xl >= 276 && r > 38 && r <= 75) { drag[k] = 0.22 * K.d; if (xl < 300 || (r > 38 && r < 66 && xl > 296)) q[k] = 0.35; }   // polos: espaço entre eles
        if (xl >= 200 && xl <= 217 && r >= 13 && r <= 58 && (fans >= 2 || x <= 400)) fx[k] = K.f * dir;   // ventiladores
        if (xl >= 260 && r > 70 && r < 115 && DUCTS.some(d => Math.abs(x - d) < 3.2)) q[k] = 1.2;          // dutos: cobre e ferro
      }
      if (x >= 196 && x <= 604 && y >= 118 && y <= 146) { drag[k] = 0.3 * K.d; frio[k] = 1; }   // feixe do trocador
      if (i === 0 || j === 0 || i === NX - 1 || j === NY - 1) s = 1;
      bar[k] = s;
    }
    return { bar, drag, fx, q, frio };
  }

  /* ------------------------------------------------------------ LBM D2Q9 (mesmo núcleo da página inicial) */
  function criar(fans, K = { d: 0.04, f: 0.008 }) {
    const G = geometria(fans, K), { bar, drag, fx, q, frio } = G;
    const nu = 0.02, om = 1 / (3 * nu + 0.5);
    const A = () => new Float32Array(N);
    const n0 = A(), nE = A(), nW = A(), nN = A(), nS = A(), nNE = A(), nSE = A(), nNW = A(), nSW = A(), ux = A(), uy = A(), T = A(), T2 = A();
    const f9 = 4 / 9, f1 = 1 / 9, f36 = 1 / 36;
    for (let i = 0; i < N; i++) { n0[i] = f9; nE[i] = nW[i] = nN[i] = nS[i] = f1; nNE[i] = nSE[i] = nNW[i] = nSW[i] = f36; T[i] = 0.5; }
    function collide() {
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) {
        const i = x + y * NX; if (bar[i]) continue;
        const r = n0[i] + nN[i] + nS[i] + nE[i] + nW[i] + nNW[i] + nNE[i] + nSW[i] + nSE[i];
        let vx = (nE[i] + nNE[i] + nSE[i] - nW[i] - nNW[i] - nSW[i]) / r, vy = (nN[i] + nNE[i] + nNW[i] - nS[i] - nSE[i] - nSW[i]) / r;
        // meio poroso (arrasto) e ventilador (força), aplicados à velocidade de equilíbrio
        const d = drag[i]; if (d) { vx *= 1 - d; vy *= 1 - d; }
        vx += fx[i] / om / r;
        if (vx > 0.2) vx = 0.2; else if (vx < -0.2) vx = -0.2; if (vy > 0.2) vy = 0.2; else if (vy < -0.2) vy = -0.2;
        ux[i] = vx; uy[i] = vy;
        const r9 = f9 * r, r1 = f1 * r, r36 = f36 * r, vx3 = 3 * vx, vy3 = 3 * vy, vx2 = vx * vx, vy2 = vy * vy, vxy2 = 2 * vx * vy, v2 = vx2 + vy2, v215 = 1.5 * v2;
        n0[i] += om * (r9 * (1 - v215) - n0[i]);
        nE[i] += om * (r1 * (1 + vx3 + 4.5 * vx2 - v215) - nE[i]); nW[i] += om * (r1 * (1 - vx3 + 4.5 * vx2 - v215) - nW[i]);
        nN[i] += om * (r1 * (1 + vy3 + 4.5 * vy2 - v215) - nN[i]); nS[i] += om * (r1 * (1 - vy3 + 4.5 * vy2 - v215) - nS[i]);
        nNE[i] += om * (r36 * (1 + vx3 + vy3 + 4.5 * (v2 + vxy2) - v215) - nNE[i]); nSE[i] += om * (r36 * (1 + vx3 - vy3 + 4.5 * (v2 - vxy2) - v215) - nSE[i]);
        nNW[i] += om * (r36 * (1 - vx3 + vy3 + 4.5 * (v2 - vxy2) - v215) - nNW[i]); nSW[i] += om * (r36 * (1 - vx3 - vy3 + 4.5 * (v2 + vxy2) - v215) - nSW[i]);
      }
    }
    // linha j cresce para baixo no desenho; "N" aponta para j menor (para cima)
    function stream() {
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) { const i = x + y * NX; nN[i] = nN[i + NX]; nNW[i] = nNW[i + 1 + NX]; }
      for (let y = 1; y < NY - 1; y++) for (let x = NX - 2; x > 0; x--) { const i = x + y * NX; nE[i] = nE[i - 1]; nNE[i] = nNE[i - 1 + NX]; }
      for (let y = NY - 2; y > 0; y--) for (let x = NX - 2; x > 0; x--) { const i = x + y * NX; nS[i] = nS[i - NX]; nSE[i] = nSE[i - 1 - NX]; }
      for (let y = NY - 2; y > 0; y--) for (let x = 1; x < NX - 1; x++) { const i = x + y * NX; nW[i] = nW[i + 1]; nSW[i] = nSW[i + 1 - NX]; }
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) {
        const i = x + y * NX; if (!bar[i]) continue;
        nE[i + 1] = nW[i]; nW[i - 1] = nE[i]; nN[i - NX] = nS[i]; nS[i + NX] = nN[i];
        nNE[i - NX + 1] = nSW[i]; nNW[i - NX - 1] = nSE[i]; nSE[i + NX + 1] = nNW[i]; nSW[i + NX - 1] = nNE[i];
        n0[i] = f9; nE[i] = nW[i] = nN[i] = nS[i] = f1; nNE[i] = nSE[i] = nNW[i] = nSW[i] = f36;
      }
    }
    // temperatura: transportada pelo ar (semilagrangiano), aquecida no cobre e no ferro, esfriada no feixe
    const vel = (x, y) => { const i0 = clamp(x | 0, 0, NX - 2), j0 = clamp(y | 0, 0, NY - 2), fx_ = x - i0, fy = y - j0, i = j0 * NX + i0;
      const b = a => a[i] * (1 - fx_) * (1 - fy) + a[i + 1] * fx_ * (1 - fy) + a[i + NX] * (1 - fx_) * fy + a[i + NX + 1] * fx_ * fy; return [b(ux), -b(uy)]; };
    const amostraT = (x, y) => { const i0 = clamp(x | 0, 0, NX - 2), j0 = clamp(y | 0, 0, NY - 2), fx_ = x - i0, fy = y - j0, i = j0 * NX + i0;
      return T[i] * (1 - fx_) * (1 - fy) + T[i + 1] * fx_ * (1 - fy) + T[i + NX] * (1 - fx_) * fy + T[i + NX + 1] * fx_ * fy; };
    function calor(passos) {
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) {
        const i = x + y * NX; if (bar[i]) { T2[i] = T[i]; continue; }
        const [u, v] = vel(x, y);
        let t = amostraT(x - u * passos, y - v * passos);
        t += q[i] * 0.004 * passos;
        if (frio[i]) t -= (t - 0) * 0.06 * passos;
        T2[i] = clamp(t, 0, 1.4);
      }
      // difusão leve (só no ar)
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) {
        const i = x + y * NX; if (bar[i]) continue;
        let s = T2[i] * 4, n = 4; for (const o of [1, -1, NX, -NX]) if (!bar[i + o]) { s += T2[i + o]; n++; }
        T[i] = s / n;
      }
    }
    function step() { collide(); stream(); }
    return { step, calor, vel, ux, uy, T, bar, drag, frio, fans };
  }

  /* ------------------------------------------------------------ desenho na tela */
  const STOPS = [[0, [43, 108, 176]], [0.25, [47, 164, 199]], [0.5, [124, 197, 143]], [0.75, [242, 181, 68]], [1, [217, 71, 58]]];
  const corT = h => { h = clamp(h, 0, 1); let i = 0; while (i < STOPS.length - 2 && h > STOPS[i + 1][0]) i++; const [h0, c0] = STOPS[i], [h1, c1] = STOPS[i + 1], t = (h - h0) / (h1 - h0); return c0.map((c, k) => c + (c1[k] - c) * t); };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let sim = null, cv = null, ctx = null, off = null, octx = null, img = null, alvo = null, svg = null, raf = 0, vis = false, aquecido = 0, passos = 4, io = null, ro = null, W = 0, Hh = 0, dpr = 1, M = null;
  const P = [], NP = 340, HL = 24;
  const livre = (x, y) => { const i = clamp(x | 0, 0, NX - 1), j = clamp(y | 0, 0, NY - 1); return !sim.bar[j * NX + i]; };
  const nascer = p => { let t = 0; do { p.x = 1 + Math.random() * (NX - 2); p.y = 1 + Math.random() * (NY - 2); } while (!livre(p.x, p.y) && ++t < 50); p.hx = new Float32Array(HL).fill(p.x); p.hy = new Float32Array(HL).fill(p.y); p.h = 0; p.n = 0; p.vida = 90 + Math.random() * 160; };
  function medir() {
    if (!cv || !svg) return;
    const box = svg.getBoundingClientRect(); dpr = Math.min(2, devicePixelRatio || 1);
    cv.style.left = svg.offsetLeft + 'px'; cv.style.top = svg.offsetTop + 'px'; cv.style.width = box.width + 'px'; cv.style.height = box.height + 'px';
    W = Math.max(1, Math.round(box.width * dpr)); Hh = Math.max(1, Math.round(box.height * dpr));
    if (cv.width !== W || cv.height !== Hh) { cv.width = W; cv.height = Hh; }
    const m = svg.getScreenCTM(); if (!m) return;
    M = { a: m.a * dpr, d: m.d * dpr, e: (m.e - box.left) * dpr, f: (m.f - box.top) * dpr };
  }
  const tela = (gx, gy) => [M.a * (X0 + gx * H) + M.e, M.d * (Y0 + gy * H) + M.f];
  function pintar(mover) {
    if (!M) return;
    const bg = cor('--surface-2', [24, 34, 46]), claro = document.documentElement.dataset.theme === 'light' || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: light)').matches);
    const px = img.data;
    for (let i = 0; i < N; i++) {
      const k = i * 4;
      if (sim.bar[i]) { px[k + 3] = 0; continue; }
      const c = corT(sim.T[i]), sp = Math.min(1, Math.hypot(sim.ux[i], sim.uy[i]) / 0.08), a = claro ? 0.34 + 0.18 * sp : 0.42 + 0.22 * sp;
      px[k] = bg[0] + (c[0] - bg[0]) * a; px[k + 1] = bg[1] + (c[1] - bg[1]) * a; px[k + 2] = bg[2] + (c[2] - bg[2]) * a; px[k + 3] = 255;
    }
    octx.putImageData(img, 0, 0);
    ctx.clearRect(0, 0, W, Hh);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    const [x0, y0] = tela(0, 0), [x1, y1] = tela(NX, NY);
    ctx.drawImage(off, x0, y0, x1 - x0, y1 - y0);
    // metade de baixo: espelho da carcaça em torno do eixo
    const [, yEixo] = tela(0, (YC - Y0) / H), [, yTopo] = tela(0, (200 - Y0) / H), [xa] = tela((122 - X0) / H, 0), [xb] = tela((678 - X0) / H, 0);
    ctx.save(); ctx.beginPath(); ctx.rect(xa, yEixo, xb - xa, yEixo - yTopo); ctx.clip();
    ctx.translate(0, 2 * yEixo); ctx.scale(1, -1); ctx.drawImage(off, x0, y0, x1 - x0, y1 - y0); ctx.restore();
    // partículas com rastro
    if (mover) for (const p of P) {
      const [u, v] = sim.vel(p.x, p.y); p.x += u * 2.6; p.y += v * 2.6;
      if (--p.vida < 0 || !livre(p.x, p.y) || p.x < 1 || p.y < 1 || p.x > NX - 2 || p.y > NY - 2) { nascer(p); continue; }
      p.h = (p.h + 1) % HL; p.hx[p.h] = p.x; p.hy[p.h] = p.y; p.n = Math.min(HL - 1, p.n + 1);
    }
    const tinta = claro ? '20,32,44' : '235,242,247', yMeio = (200 - Y0) / H;
    ctx.lineCap = 'round';
    for (const espelho of [false, true]) {
      ctx.save();
      if (espelho) { ctx.beginPath(); ctx.rect(xa, yEixo, xb - xa, yEixo - yTopo); ctx.clip(); ctx.translate(0, 2 * yEixo); ctx.scale(1, -1); }
      for (let bk = 0; bk < 3; bk++) {
        ctx.strokeStyle = `rgba(${tinta},${(claro ? 0.55 : 0.7) * (bk + 1) / 3})`; ctx.lineWidth = (0.6 + 0.5 * bk) * dpr; ctx.beginPath();
        const a0 = Math.floor(bk * (HL - 1) / 3), a1 = Math.floor((bk + 1) * (HL - 1) / 3);
        for (const p of P) {
          if (espelho && p.y < yMeio) continue;
          const lo = HL - 1 - p.n; if (a1 <= lo) continue;
          for (let a = Math.max(a0, lo); a < a1; a++) { const i0 = (p.h + 1 + a) % HL, i1 = (p.h + 2 + a) % HL; const [ax, ay] = tela(p.hx[i0], p.hy[i0]), [bx, by] = tela(p.hx[i1], p.hy[i1]); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); }
        }
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  const cores = {};
  function cor(nome, padrao) {
    if (cores[nome] && cores[nome].t === document.documentElement.dataset.theme) return cores[nome].v;
    const s = document.createElement('span'); s.style.color = `var(${nome})`; s.style.display = 'none'; document.body.append(s);
    const m = getComputedStyle(s).color.match(/\d+(\.\d+)?/g); s.remove();
    const v = m ? m.slice(0, 3).map(Number) : padrao; cores[nome] = { t: document.documentElement.dataset.theme, v }; return v;
  }
  function quadro() {
    const t = performance.now();
    for (let k = 0; k < passos; k++) sim.step();
    sim.calor(passos);
    const dt = performance.now() - t; if (dt > 12 && passos > 2) passos--; else if (dt < 6 && passos < 6) passos++;
    pintar(true);
    raf = requestAnimationFrame(quadro);
  }
  function seguir() {
    cancelAnimationFrame(raf);
    if (!sim || !cv) return;
    if (aquecido < 1000) return;
    medir();
    if (vis && !reduce.matches && !document.hidden) raf = requestAnimationFrame(quadro); else pintar(false);
  }
  // deixa o escoamento e a temperatura se formarem antes de mostrar
  function aquecer() {
    const t = performance.now();
    while (aquecido < 1000 && performance.now() - t < 12) { sim.step(); if (++aquecido % 4 === 0) sim.calor(4); }
    if (aquecido < 1000) setTimeout(aquecer, 0); else { alvo && alvo.classList.add('hx-cfd-on'); seguir(); }
  }
  /** coloca a simulação sob o desenho da vista "Na máquina" */
  function anexar(sc, s, opt = {}) {
    if (!sc || !s || typeof Float32Array === 'undefined') return;
    const fans = opt.fans >= 2 ? 2 : 1;
    if (!sim || sim.fans !== fans) { sim = criar(fans); aquecido = 0; P.length = 0; for (let k = 0; k < NP; k++) { const p = {}; nascer(p); P.push(p); } setTimeout(aquecer, 0); }
    if (!cv) {
      cv = document.createElement('canvas'); cv.className = 'hx-cfd'; cv.setAttribute('aria-hidden', 'true');
      ctx = cv.getContext('2d'); off = document.createElement('canvas'); off.width = NX; off.height = NY; octx = off.getContext('2d'); img = octx.createImageData(NX, NY);
      io = 'IntersectionObserver' in window ? new IntersectionObserver(es => { vis = es[0].isIntersecting; seguir(); }) : null;
      document.addEventListener('visibilitychange', seguir);
      reduce.addEventListener?.('change', seguir);
      new MutationObserver(() => { if (!raf) pintar(false); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      addEventListener('resize', () => { medir(); if (!raf) pintar(false); }, { passive: true });
    }
    alvo = sc; svg = s;
    if ('ResizeObserver' in window) { ro && ro.disconnect(); ro = new ResizeObserver(() => { medir(); if (!raf) pintar(false); }); ro.observe(s); }
    alvo.prepend(cv);
    if (aquecido >= 1000) alvo.classList.add('hx-cfd-on');
    if (io) { io.disconnect(); io.observe(alvo); } else vis = true;
    requestAnimationFrame(() => { medir(); seguir(); });
  }
  window.VGThermalCFD = { anexar, _criar: criar, _NX: NX, _NY: NY };
})();
