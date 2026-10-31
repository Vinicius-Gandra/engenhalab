/* Escoamento do ar na vista "Na máquina": simulação Lattice Boltzmann (D2Q9) na geometria do corte.
   Ventiladores no eixo empurram o ar; os polos do rotor bombeiam para fora; dutos do núcleo, cabeças
   das bobinas e polos aquecem; o feixe do trocador freia e esfria. A temperatura é levada pelo ar
   e calibrada para que o ar que chega ao feixe esteja na temperatura quente e o que sai, na fria.
   A metade de cima é calculada; a de baixo é o espelho. O cálculo roda num worker quando possível. */
(function () {
  'use strict';
  const H = 2.5;

  /* ================================================================ núcleo (sem dependências: roda no worker) */
  function nucleo(H) {
    const X0 = 104, Y0 = 48, XC = 698, YC = 330;
    const NX = Math.ceil((XC - X0) / H), NY = Math.ceil((YC - Y0) / H), N = NX * NY;
    const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
    const segDist = (px, py, ax, ay, bx, by) => { const dx = bx - ax, dy = by - ay, t = clamp(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1), 0, 1); return Math.hypot(px - ax - t * dx, py - ay - t * dy); };
    const lpk = (264 - 36) / 7, DUCTS = []; for (let k = 1; k < 7; k++) DUCTS.push(268 + k * lpk + (k - 1) * 6 + 3);
    const noDuto = x => DUCTS.some(d => Math.abs(x - d) < 3.8);
    const F32 = () => new Float32Array(N);
    const bar = new Uint8Array(N), borda = new Uint8Array(N), poroso = new Uint8Array(N), frio = new Uint8Array(N);
    const drag = F32(), fx = F32(), fy = F32(), q = F32(), alvoX = F32(), alvoY = F32(), puxa = F32();
    let viz = null, entrada = null;
    const K = { vent: 0.075, bomba: 0.05, dCab: 0.05, dPolo: 0.06, dFeixe: 0.07, dDesvio: 0.05, nu: 0.012, kc: 0.012, S1: 650, S2: 460, dtT: 18, radial: 0.4 };

    /* ---------- geometria em células: sólido, meio poroso, forças, fontes de calor */
    function geometria(fans) {
      bar.fill(0); poroso.fill(0); frio.fill(0); drag.fill(0); fx.fill(0); fy.fill(0); q.fill(0); alvoX.fill(0); alvoY.fill(0); puxa.fill(0);
      const cat = [F32(), F32(), F32(), F32()];   // dutos, cabeças, polos, ventiladores
      for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
        const k = j * NX + i, x = X0 + (i + 0.5) * H, y = Y0 + (j + 0.5) * H, r = YC - y;
        const esq = x <= 400, xl = esq ? x : 800 - x, dir = esq ? 1 : -1, temVent = fans >= 2 || esq;
        let s = 0;
        const capo = x > 106 && x < 694 && y > 52 && y < 200, carc = x > 122 && x < 678 && y >= 198 && y < YC + H;
        if (!capo && !carc) s = 1;
        if (Math.abs(y - 200) < 2.6 && !((x > 128 && x < 166) || (x > 262 && x < 538) || (x > 634 && x < 672))) s = 1;   // topo da carcaça e aberturas
        if (xl >= 172 && xl <= 196 && y >= 108 && y <= 156) s = 1;                    // cabeçotes de água
        if (xl >= 169.5 && xl <= 175.5 && y >= 154 && y <= 200) s = 1;                // divisórias
        if (y > 200) {
          if (r < 13) s = 1;                                                           // eixo
          if (segDist(xl, r, 214, 61, 214, 114) < 2.3 || segDist(xl, r, 214, 114, 238, 129.5) < 2.3) s = 1;   // defletor
          if (xl >= 266 && r >= 77 && r <= 112 && !noDuto(x)) s = 1;                 // pacotes do núcleo
          if (xl >= 292 && r >= 13 && r <= 38 && !(r > 20.5 && r < 29.5)
            && !(r >= 29.5 && (Math.abs(xl - 325) < 4 || Math.abs(xl - 343) < 4))) s = 1;   // coroa: duto axial e furos radiais
          const z = 268 - xl, lift = 10 * clamp((z - 12) / 30, 0, 1);
          if (!s && z >= 0 && z <= 50 && r >= 76 + lift && r <= 95 + lift) { drag[k] = K.dCab; poroso[k] = 1; cat[1][k] = 1; }   // cabeças: o ar passa entre as bobinas
          if (!s && xl >= 276 && r > 38 && r <= 75) { drag[k] = K.dPolo; poroso[k] = 1; cat[2][k] = 1; alvoY[k] = K.bomba; puxa[k] = 0.14; }   // entre os polos: o rotor bombeia para fora
          if (!s && xl >= 266 && r >= 77 && r <= 112) cat[0][k] = 1;
          if (!s && !poroso[k] && xl >= 242 && xl < 266 && r >= 100) { drag[k] = K.dDesvio; poroso[k] = 2; }   // por cima das cabeças: escoras e dedos de pressão                  // dutos do núcleo
          if (!s && temVent && xl >= 201 && xl <= 212 && r >= 13 && r <= 62) { alvoX[k] = K.vent * dir; alvoY[k] = 0; puxa[k] = 0.5; cat[3][k] = 1; }   // ventiladores: impõem a vazão, sem refluxo
          if (!s && temVent && xl > 212 && xl <= 226 && r >= 30 && r <= 74) { alvoX[k] = K.vent * 0.55 * dir; alvoY[k] = K.vent * K.radial * clamp((r - 30) / 30, 0.2, 1); puxa[k] = 0.12; }   // saída do ventilador: joga o ar para fora, sobre as cabeças
        }
        if (!s && x >= 196 && x <= 604 && y >= 118 && y <= 146) { drag[k] = K.dFeixe; poroso[k] = 1; frio[k] = 1; }   // feixe do trocador
        if (i === 0 || j === 0 || i === NX - 1 || j === NY - 1) s = 1;
        if (s) { drag[k] = 0; poroso[k] = 0; frio[k] = 0; fx[k] = fy[k] = alvoX[k] = alvoY[k] = puxa[k] = 0; for (const c of cat) c[k] = 0; }
        bar[k] = s;
      }
      // calor: 55 % nos dutos (ferro e cobre do estator), 20 % nas cabeças, 20 % no rotor, 5 % nos ventiladores
      const pesos = [0.55, 0.2, 0.2, 0.05];
      cat.forEach((c, n) => { let s = 0; for (let k = 0; k < N; k++) s += c[k]; if (s) for (let k = 0; k < N; k++) q[k] += c[k] * pesos[n] / s; });
      // sólidos na fronteira com o ar: recebem a média do ar ao lado (parede sem fluxo de calor)
      const lista = [];
      borda.fill(0);
      for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) {
        const k = j * NX + i; if (!bar[k]) continue;
        const vs = [k + 1, k - 1, k + NX, k - NX, k + NX + 1, k + NX - 1, k - NX + 1, k - NX - 1].filter(n => !bar[n]);
        if (vs.length) { borda[k] = 1; lista.push(k, vs.length, ...vs); }
      }
      viz = Int32Array.from(lista);
      // ar que chega ao feixe (linha logo abaixo dele): referência da temperatura quente
      const e = [], je = Math.floor((149 - Y0) / H);
      for (let i = 0; i < NX; i++) { const x = X0 + (i + 0.5) * H; if (x > 198 && x < 602 && !bar[je * NX + i]) e.push(je * NX + i); }
      entrada = Int32Array.from(e);
    }

    /* ---------- LBM */
    let n0, nE, nW, nN, nS, nNE, nSE, nNW, nSW, ux, uy, T, T2, passos = 0, fase = 0, ganho = 0.02, sref = 0.05;
    let om = 1, tau = 1;
    const f9 = 4 / 9, f1 = 1 / 9, f36 = 1 / 36, UMAX = 0.17;
    function iniciar(fans) {
      om = 1 / (3 * K.nu + 0.5); tau = 1 / om;
      geometria(fans);
      [n0, nE, nW, nN, nS, nNE, nSE, nNW, nSW, ux, uy, T, T2] = Array.from({ length: 13 }, F32);
      n0.fill(f9); nE.fill(f1); nW.fill(f1); nN.fill(f1); nS.fill(f1); nNE.fill(f36); nSE.fill(f36); nNW.fill(f36); nSW.fill(f36);
      passos = 0; fase = 0; ganho = 0.02;
    }
    function collide() {
      for (let y = 1; y < NY - 1; y++) for (let x = 1, i = y * NX + 1; x < NX - 1; x++, i++) {
        if (bar[i]) continue;
        const r = n0[i] + nN[i] + nS[i] + nE[i] + nW[i] + nNW[i] + nNE[i] + nSW[i] + nSE[i];
        let vx = (nE[i] + nNE[i] + nSE[i] - nW[i] - nNW[i] - nSW[i]) / r, vy = (nN[i] + nNE[i] + nNW[i] - nS[i] - nSE[i] - nSW[i]) / r;
        const d = drag[i]; if (d) { vx *= 1 - d; vy *= 1 - d; }
        const pu = puxa[i]; if (pu) { vx += (alvoX[i] - vx) * pu; if (alvoY[i] > vy || pu > 0.3) vy += (alvoY[i] - vy) * pu; }
        vx = vx > UMAX ? UMAX : vx < -UMAX ? -UMAX : vx; vy = vy > UMAX ? UMAX : vy < -UMAX ? -UMAX : vy;
        ux[i] = vx; uy[i] = vy;
        const r9 = f9 * r, r1 = f1 * r, r36 = f36 * r, vx3 = 3 * vx, vy3 = 3 * vy, vx2 = vx * vx, vy2 = vy * vy, vxy2 = 2 * vx * vy, v2 = vx2 + vy2, v215 = 1.5 * v2;
        n0[i] += om * (r9 * (1 - v215) - n0[i]);
        nE[i] += om * (r1 * (1 + vx3 + 4.5 * vx2 - v215) - nE[i]); nW[i] += om * (r1 * (1 - vx3 + 4.5 * vx2 - v215) - nW[i]);
        nN[i] += om * (r1 * (1 + vy3 + 4.5 * vy2 - v215) - nN[i]); nS[i] += om * (r1 * (1 - vy3 + 4.5 * vy2 - v215) - nS[i]);
        nNE[i] += om * (r36 * (1 + vx3 + vy3 + 4.5 * (v2 + vxy2) - v215) - nNE[i]); nSE[i] += om * (r36 * (1 + vx3 - vy3 + 4.5 * (v2 - vxy2) - v215) - nSE[i]);
        nNW[i] += om * (r36 * (1 - vx3 + vy3 + 4.5 * (v2 - vxy2) - v215) - nNW[i]); nSW[i] += om * (r36 * (1 - vx3 - vy3 + 4.5 * (v2 + vxy2) - v215) - nSW[i]);
      }
    }
    // "N" aponta para cima no desenho (j menor)
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

    /* ---------- temperatura: transporte semilagrangiano (RK2), fontes, resfriamento no feixe */
    const bil = (a, x, y) => {
      x = clamp(x, 0, NX - 1.001); y = clamp(y, 0, NY - 1.001);
      const i0 = x | 0, j0 = y | 0, fx_ = x - i0, fy_ = y - j0, i = j0 * NX + i0;
      return (a[i] * (1 - fx_) + a[i + 1] * fx_) * (1 - fy_) + (a[i + NX] * (1 - fx_) + a[i + NX + 1] * fx_) * fy_;
    };
    function paredes(a) { for (let p = 0; p < viz.length;) { const k = viz[p], n = viz[p + 1]; let s = 0; for (let m = 0; m < n; m++) s += a[viz[p + 2 + m]]; a[k] = s / n; p += 2 + n; } }
    function calor(dt) {
      // balanço de energia: calor gerado = vazão que atravessa o feixe × (quente − frio), com quente − frio = 1
      let vaz = 0; for (const k of entrada) if (uy[k] > 0) vaz += uy[k];
      ganho = vaz;
      paredes(T);
      const cf = Math.exp(-K.kc * dt);
      for (let y = 1; y < NY - 1; y++) for (let x = 1, i = y * NX + 1; x < NX - 1; x++, i++) {
        if (bar[i]) { T2[i] = T[i]; continue; }
        // coordenada j cresce para baixo; uy > 0 é para cima
        const xm = x - ux[i] * dt * 0.5, ym = y + uy[i] * dt * 0.5;
        let t = bil(T, x - bil(ux, xm, ym) * dt, y + bil(uy, xm, ym) * dt) + ganho * q[i] * dt;
        if (frio[i]) t *= cf;
        T2[i] = t < 0 ? 0 : t > 3 ? 3 : t;
      }
      // difusão leve, só entre células de ar
      for (let y = 1; y < NY - 1; y++) for (let x = 1, i = y * NX + 1; x < NX - 1; x++, i++) {
        if (bar[i]) { T[i] = T2[i]; continue; }
        let s = 0, n = 0;
        if (!bar[i + 1]) { s += T2[i + 1]; n++; } if (!bar[i - 1]) { s += T2[i - 1]; n++; }
        if (!bar[i + NX]) { s += T2[i + NX]; n++; } if (!bar[i - NX]) { s += T2[i - NX]; n++; }
        T[i] = n ? T2[i] * 0.84 + 0.16 * s / n : T2[i];
      }
      paredes(T);
    }
    function tEntrada() { let a = 0, b = 0; for (const k of entrada) { const v = uy[k] > 0 ? uy[k] : 0; a += T[k] * v; b += v; } return b ? a / b : 0; }
    function velRef() {   // velocidade típica (percentil 92) no ar livre, para escalar setas e traços
      const h = new Uint32Array(200); let n = 0;
      for (let k = 0; k < N; k++) if (!bar[k] && !poroso[k]) { const s = Math.hypot(ux[k], uy[k]); h[Math.min(199, s / 0.001 | 0)]++; n++; }
      let c = 0, m = 0; for (; m < 200; m++) { c += h[m]; if (c >= 0.92 * n) break; }
      sref = sref * 0.7 + 0.3 * Math.max(0.01, (m + 0.5) * 0.001);
    }
    // aquecimento: o escoamento se forma; depois a temperatura converge com passos grandes
    function aquecer() {
      if (fase === 0) { collide(); stream(); if (++passos % 4 === 0) calor(4); if (passos >= K.S1) { fase = 1; passos = 0; } }
      else if (fase === 1) { calor(K.dtT); if (++passos >= K.S2) { fase = 2; sref = 0.05; for (let k = 0; k < 6; k++) velRef(); } }
    }
    function passo(n) { for (let k = 0; k < n; k++) { collide(); stream(); } calor(n); velRef(); }
    return {
      NX, NY, N, X0, Y0, YC, K, tEntrada, bar, borda, poroso, geometria, iniciar, aquecer, passo,
      pronto: () => fase === 2,
      campo: () => ({ ux: ux.slice(), uy: uy.slice(), T: T.slice(), sref })
    };
  }

  /* ================================================================ worker */
  function trabalhador(nucleo, H) {
    let sim = null, gen = 0;
    const enviar = (g, extra) => { const c = sim.campo(); self.postMessage(Object.assign({ g }, c, extra), [c.ux.buffer, c.uy.buffer, c.T.buffer]); };
    self.onmessage = e => {
      const m = e.data;
      if (m.tipo === 'iniciar') {
        gen = m.g; sim = nucleo(H); sim.iniciar(m.fans);
        const g = gen, fatia = () => {
          if (g !== gen) return;
          const t = performance.now(); while (!sim.pronto() && performance.now() - t < 50) sim.aquecer();
          if (sim.pronto()) enviar(g, { ms: 0 }); else setTimeout(fatia, 0);
        };
        fatia();
      } else if (m.tipo === 'passo' && sim && m.g === gen && sim.pronto()) {
        const t = performance.now(); sim.passo(m.n); enviar(gen, { ms: performance.now() - t });
      }
    };
  }
  // motor: worker se possível; senão, a mesma simulação no thread principal
  function motor(aoCampo) {
    let w = null, local = null, gen = 0;
    const emLocal = fans => {
      local = nucleo(H); local.iniciar(fans);
      const g = gen, fatia = () => {
        if (g !== gen) return;
        const t = performance.now(); while (!local.pronto() && performance.now() - t < 10) local.aquecer();
        if (local.pronto()) aoCampo(Object.assign({ g, ms: 0 }, local.campo())); else setTimeout(fatia, 0);
      };
      setTimeout(fatia, 0);
    };
    let fansW = 0;
    try {
      const url = URL.createObjectURL(new Blob([`(${trabalhador})(${nucleo}, ${H});`], { type: 'text/javascript' }));
      w = new Worker(url);
      w.onmessage = e => { if (e.data.g === gen) aoCampo(e.data); };
      w.onerror = () => { w = null; gen++; emLocal(fansW); };
    } catch (_) { w = null; }
    return {
      iniciar(fans) {
        gen++; fansW = fans;
        if (w) w.postMessage({ tipo: 'iniciar', fans, g: gen }); else emLocal(fans);
      },
      pedir(n) {
        if (w) { w.postMessage({ tipo: 'passo', n, g: gen }); return; }
        if (!local || !local.pronto()) return;
        const t = performance.now(); local.passo(n);
        const g = gen, ms = performance.now() - t; setTimeout(() => aoCampo(Object.assign({ g, ms }, local.campo())), 0);
      }
    };
  }

  /* ================================================================ desenho na tela */
  const G = nucleo(H), NX = G.NX, NY = G.NY, X0 = G.X0, Y0 = G.Y0, YC = G.YC;
  const STOPS = [[0, [43, 108, 176]], [0.25, [47, 164, 199]], [0.5, [124, 197, 143]], [0.75, [242, 181, 68]], [1, [217, 71, 58]]];
  const corT = h => { h = Math.max(0, Math.min(1, h)); let i = 0; while (i < STOPS.length - 2 && h > STOPS[i + 1][0]) i++; const [h0, c0] = STOPS[i], [h1, c1] = STOPS[i + 1], t = (h - h0) / (h1 - h0); return c0.map((c, k) => c + (c1[k] - c) * t); };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const temaClaro = () => { const t = document.documentElement.dataset.theme; return t ? t === 'light' : matchMedia('(prefers-color-scheme: light)').matches; };
  let eng = null, fansAtual = 0, campo = null, novo = false, esperando = false, nPassos = 4, sref = 0.05;
  let cv = null, ctx = null, off = null, octx = null, img = null, svg = null, alvo = null, raf = 0, vis = false, io = null, ro = null;
  let W = 0, Hh = 0, dpr = 1, M = null, lut = null, lutTema = null, ultimo = 0;
  const P = [], NP = 380, HL = 18, livres = [], SETAS = [];

  function prepararGeometria(fans) {
    G.geometria(fans);
    livres.length = 0; SETAS.length = 0;
    for (let k = 0; k < G.N; k++) if (!G.bar[k] && !G.poroso[k]) livres.push(k);
    // malha de setas a cada ~15 unidades, em linhas alternadas, só no ar visível
    for (let y = 57, lin = 0; y < YC - 6; y += 13, lin++) for (let x = 111 + (lin % 2) * 7.5; x < 692; x += 15) {
      const i = Math.floor((x - X0) / H), j = Math.floor((y - Y0) / H), k = j * NX + i;
      if (!G.bar[k] && !G.poroso[k]) SETAS.push((x - X0) / H, (y - Y0) / H);
    }
  }
  const livre = (x, y) => { const i = x | 0, j = y | 0; if (i < 1 || j < 1 || i >= NX - 1 || j >= NY - 1) return false; return !G.bar[j * NX + i]; };
  const nascer = p => { const k = livres[(Math.random() * livres.length) | 0]; p.x = k % NX + Math.random(); p.y = (k / NX | 0) + Math.random(); p.hx.fill(p.x); p.hy.fill(p.y); p.h = 0; p.n = 0; p.s = 0; p.vida = 60 + Math.random() * 140; };
  // campo nas coordenadas de célula (x, y contínuos, centro da célula em +0.5)
  const amostra = (a, x, y) => {
    x = Math.max(0, Math.min(NX - 1.001, x - 0.5)); y = Math.max(0, Math.min(NY - 1.001, y - 0.5));
    const i0 = x | 0, j0 = y | 0, fx = x - i0, fy = y - j0, i = j0 * NX + i0;
    return (a[i] * (1 - fx) + a[i + 1] * fx) * (1 - fy) + (a[i + NX] * (1 - fx) + a[i + NX + 1] * fx) * fy;
  };
  function cor(nome, padrao) {
    const s = document.createElement('span'); s.style.color = `var(${nome})`; s.style.display = 'none'; (alvo || document.body).append(s);
    const m = getComputedStyle(s).color.match(/\d+(\.\d+)?/g); s.remove();
    return m ? m.slice(0, 3).map(Number) : padrao;
  }
  function prepararCores() {
    const claro = temaClaro(), chave = claro ? 'l' : 'd';
    if (lut && lutTema === chave) return;
    const bg = cor('--surface-2', claro ? [244, 246, 248] : [22, 30, 40]), a = claro ? 0.8 : 0.82;
    lut = new Uint8Array(256 * 3);
    for (let n = 0; n < 256; n++) { const c = corT(n / 255); for (let m = 0; m < 3; m++) lut[n * 3 + m] = Math.round(bg[m] + (c[m] - bg[m]) * a); }
    lutTema = chave;
  }
  function medir() {
    if (!cv || !svg || !svg.isConnected) return;
    const box = svg.getBoundingClientRect(); dpr = Math.min(2, devicePixelRatio || 1);
    cv.style.left = svg.offsetLeft + 'px'; cv.style.top = svg.offsetTop + 'px'; cv.style.width = box.width + 'px'; cv.style.height = box.height + 'px';
    W = Math.max(1, Math.round(box.width * dpr)); Hh = Math.max(1, Math.round(box.height * dpr));
    if (cv.width !== W || cv.height !== Hh) { cv.width = W; cv.height = Hh; }
    const m = svg.getScreenCTM(); if (!m) return;
    M = { a: m.a * dpr, d: m.d * dpr, e: (m.e - box.left) * dpr, f: (m.f - box.top) * dpr };
  }
  const sx = gx => M.a * (X0 + gx * H) + M.e, sy = gy => M.d * (Y0 + gy * H) + M.f;

  function imagem() {
    prepararCores();
    const px = img.data, T = campo.T;
    for (let k = 0, o = 0; k < G.N; k++, o += 4) {
      if (G.bar[k] && !G.borda[k]) { px[o + 3] = 0; continue; }
      const n = Math.max(0, Math.min(255, T[k] * 255 | 0)) * 3;
      px[o] = lut[n]; px[o + 1] = lut[n + 1]; px[o + 2] = lut[n + 2]; px[o + 3] = 255;
    }
    octx.putImageData(img, 0, 0);
  }
  const grupos = [[], [], [], []];
  function pintar(dtq) {
    if (!M || !campo) return;
    if (novo || lutTema !== (temaClaro() ? 'l' : 'd')) { imagem(); novo = false; }
    const claro = temaClaro(), tinta = claro ? '18,30,42' : '238,244,248';
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, Hh);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(off, sx(0), sy(0), sx(NX) - sx(0), sy(NY) - sy(0));
    const ux = campo.ux, uy = campo.uy;
    // setas: comprimento e opacidade pela velocidade local
    const cab = 2.1 * M.a;
    for (const g of grupos) g.length = 0;
    for (let s = 0; s < SETAS.length; s += 2) {
      const gx = SETAS[s], gy = SETAS[s + 1], u = amostra(ux, gx, gy), v = -amostra(uy, gx, gy), sp = Math.hypot(u, v), f = sp / sref;
      if (f < 0.07) continue;
      const L = (2.2 + 9.5 * Math.pow(Math.min(f, 1.5), 0.8)) * M.a, cx = sx(gx), cy = sy(gy), ex = u / sp, ey = v / sp;
      grupos[f < 0.3 ? 0 : f < 0.6 ? 1 : f < 1 ? 2 : 3].push(cx - ex * L / 2, cy - ey * L / 2, cx + ex * L / 2, cy + ey * L / 2, ex, ey);
    }
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    grupos.forEach((g, n) => {
      if (!g.length) return;
      ctx.strokeStyle = `rgba(${tinta},${[0.3, 0.48, 0.66, 0.85][n] * (claro ? 0.85 : 1)})`; ctx.lineWidth = (0.8 + 0.3 * n) * dpr; ctx.beginPath();
      for (let p = 0; p < g.length; p += 6) {
        const ax = g[p], ay = g[p + 1], bx = g[p + 2], by = g[p + 3], ex = g[p + 4], ey = g[p + 5];
        ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
        ctx.moveTo(bx - ex * cab - ey * cab * 0.6, by - ey * cab + ex * cab * 0.6); ctx.lineTo(bx, by); ctx.lineTo(bx - ex * cab + ey * cab * 0.6, by - ey * cab - ex * cab * 0.6);
      }
      ctx.stroke();
    });
    // partículas: andam com o ar; o rastro fica longo e forte onde o ar é rápido
    const kv = 1.7 / sref * dtq;
    if (dtq > 0) for (const p of P) {
      const u = amostra(ux, p.x, p.y), v = -amostra(uy, p.x, p.y);
      p.x += u * kv; p.y += v * kv; p.s = Math.hypot(u, v) / sref;
      if (--p.vida < 0 || !livre(p.x, p.y)) { nascer(p); continue; }
      p.h = (p.h + 1) % HL; p.hx[p.h] = p.x; p.hy[p.h] = p.y; if (p.n < HL - 1) p.n++;
    }
    for (let b = 0; b < 4; b++) for (let velho = 1; velho >= 0; velho--) {
      const al = [0.1, 0.24, 0.42, 0.62][b] * (velho ? 0.4 : 1) * (claro ? 0.85 : 1);
      ctx.strokeStyle = `rgba(${tinta},${al})`; ctx.lineWidth = (0.7 + 0.3 * b) * dpr; ctx.beginPath();
      for (const p of P) {
        const f = p.s, bb = f < 0.25 ? 0 : f < 0.55 ? 1 : f < 0.95 ? 2 : 3; if (bb !== b || p.n < 1) continue;
        const meio = p.n >> 1, a0 = velho ? 0 : meio, a1 = velho ? meio : p.n;
        for (let a = a0; a < a1; a++) {
          const i0 = (p.h - p.n + a + HL) % HL, i1 = (i0 + 1) % HL;
          ctx.moveTo(sx(p.hx[i0]), sy(p.hy[i0])); ctx.lineTo(sx(p.hx[i1]), sy(p.hy[i1]));
        }
      }
      ctx.stroke();
    }
    // metade de baixo da carcaça: espelho em torno do eixo
    const yE = sy((YC - Y0) / H), yT = Math.floor(sy((200 - Y0) / H)), xa = Math.floor(sx((122 - X0) / H)), xb = Math.ceil(sx((678 - X0) / H)), hh = Math.ceil(yE - yT);
    ctx.save(); ctx.translate(0, 2 * yE); ctx.scale(1, -1);
    ctx.drawImage(cv, xa, yT, xb - xa, hh, xa, yT, xb - xa, hh);
    ctx.restore();
  }

  function aoCampo(c) {
    campo = c; sref = c.sref || sref; novo = true; esperando = false;
    if (c.ms > 0) { if (c.ms > 14 && nPassos > 2) nPassos--; else if (c.ms < 7 && nPassos < 8) nPassos++; }
    if (alvo && !alvo.classList.contains('hx-cfd-on')) { alvo.classList.add('hx-cfd-on'); seguir(); }
    else if (!raf) pintar(0);
  }
  function quadro(t) {
    raf = requestAnimationFrame(quadro);
    if (!esperando && campo) { esperando = true; eng.pedir(nPassos); }
    const dtq = ultimo ? Math.min(2.5, (t - ultimo) / 16.7) : 1; ultimo = t;
    pintar(dtq);
  }
  function seguir() {
    cancelAnimationFrame(raf); raf = 0; ultimo = 0;
    if (!cv || !campo) return;
    medir();
    if (vis && !reduce.matches && !document.hidden) { esperando = false; raf = requestAnimationFrame(quadro); } else pintar(0);
  }
  /** coloca a simulação sob o desenho da vista "Na máquina" */
  function anexar(sc, s, opt = {}) {
    if (!sc || !s || typeof Float32Array === 'undefined') return;
    const fans = opt.fans >= 2 ? 2 : 1;
    if (!cv) {
      cv = document.createElement('canvas'); cv.className = 'hx-cfd'; cv.setAttribute('aria-hidden', 'true'); ctx = cv.getContext('2d');
      off = document.createElement('canvas'); off.width = NX; off.height = NY; octx = off.getContext('2d'); img = octx.createImageData(NX, NY);
      io = 'IntersectionObserver' in window ? new IntersectionObserver(es => { vis = es[0].isIntersecting; seguir(); }) : null;
      document.addEventListener('visibilitychange', seguir);
      reduce.addEventListener?.('change', seguir);
      new MutationObserver(() => { if (!raf) pintar(0); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      addEventListener('resize', () => { medir(); if (!raf) pintar(0); }, { passive: true });
      for (let k = 0; k < NP; k++) P.push({ hx: new Float32Array(HL), hy: new Float32Array(HL), s: 0 });
    }
    if (!eng) eng = motor(aoCampo);
    if (fans !== fansAtual) {
      fansAtual = fans; campo = null; esperando = false; prepararGeometria(fans);
      for (const p of P) nascer(p);
      eng.iniciar(fans);
    }
    alvo = sc; svg = s;
    alvo.prepend(cv);
    if (campo) alvo.classList.add('hx-cfd-on');
    if ('ResizeObserver' in window) { ro && ro.disconnect(); ro = new ResizeObserver(() => { medir(); if (!raf) pintar(0); }); ro.observe(s); }
    if (io) { io.disconnect(); io.observe(alvo); } else vis = true;
    requestAnimationFrame(() => { medir(); seguir(); });
  }
  window.VGThermalCFD = { anexar, _nucleo: nucleo };
})();
