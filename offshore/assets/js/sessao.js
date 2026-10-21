/* Acesso ao laboratório offshore.
   Sem login, tudo funciona como antes. Com login (convite do administrador, senha e segundo fator):
   - os cálculos vão com a sessão e o servidor libera todos os parâmetros de entrada;
   - o caso de estudo fica salvo no servidor, num projeto do próprio usuário;
   - o memorial é emitido pelo servidor a partir do projeto salvo.
   O servidor confere a sessão em cada pedido; esta página só mostra o que ele permitir. */
(function () {
  'use strict';
  const local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  const BASE = (local ? 'http://127.0.0.1:8787' : (window.ENGENHA_API || '')).replace(/\/$/, '');
  const K_SESSAO = 'engenha-offshore-sessao', K_PROJ = 'engenha-offshore-projeto';
  const CHAVES = ['offshore-project-v8', 'catenaria-lab-case-v1', 'capacidade-axial-caso-v1'];
  const ler = (k, padrao) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? padrao : v; } catch (_) { return padrao; } };
  const gravar = (k, v) => { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (_) { /* sem armazenamento */ } };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ------------------------------------------------------------ sessão */
  const sessao = () => { const s = ler(K_SESSAO, null); return s && s.sessao && s.expira * 1000 > Date.now() ? s : null; };
  function sair(local) {
    const s = sessao();
    gravar(K_SESSAO, null); gravar(K_PROJ, null);
    if (s && !local) fetch(BASE + '/v1/conta/sair', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + s.sessao }, body: '{}' }).catch(() => {});
    document.dispatchEvent(new CustomEvent('engenha-sessao'));
  }
  // pedido ao servidor; com sessão, vai o cabeçalho Authorization. 401 com sessão = sessão encerrada
  async function pedir(rota, corpo, { auth = true } = {}) {
    const s = auth ? sessao() : null, h = { 'Content-Type': s ? 'application/json' : 'text/plain;charset=UTF-8' };
    if (s) h.Authorization = 'Bearer ' + s.sessao;
    let r;
    try { r = await fetch(BASE + '/v1/' + rota, { method: 'POST', headers: h, body: JSON.stringify(corpo || {}) }); }
    catch (_) { throw new Error('Sem conexão com o servidor. Verifique a internet e tente de novo.'); }
    let j = null; try { j = await r.json(); } catch (_) { /* resposta vazia */ }
    if (r.status === 401 && s) { sair(true); const e = new Error((j && j.erro) || 'Sua sessão terminou. Entre de novo.'); e.sessao = false; throw e; }
    if (!r.ok) { const e = new Error((j && j.erro) || 'O servidor não respondeu. Tente de novo em instantes.'); e.status = r.status; if (j && j.campo) e.field = j.campo; throw e; }
    return j;
  }
  // cálculos: com sessão, parâmetros liberados; se a sessão caiu, refaz sem login
  const calc = rota => async corpo => { try { return await pedir(rota, corpo); } catch (e) { if (e.sessao === false) return pedir(rota, corpo, { auth: false }); throw e; } };
  window.Calc = Object.fromEntries(['lancamento', 'secao', 'resumo', 'catenaria', 'capacidade', 'lateral', 'py'].map(k => [k, calc(k)]));

  /* --------------------------------------------- avatar: foto, ícone do setor ou iniciais */
  const ICONES = {
    plataforma: ['Plataforma', 'M4 21h16M6.5 21 8 13M17.5 21 16 13M5 13h14M8 13v-3h8v3M12 10V3l3.5 7M9 17h6'],
    torpedo: ['Estaca torpedo', 'M12 2v3M10 5h4v12l-2 5-2-5zM10 9l-3 3v4l3-2M14 9l3 3v4l-3-2'],
    navio: ['Navio', 'M3 14h18l-2.5 5h-13zM6 14v-4h8l3 4M9 10V6h3v4M2 22c2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2 2 1.2 4 1.2 2-1.2 4-1.2'],
    capacete: ['Capacete', 'M3 18h18M4.5 18a7.5 7.5 0 0 1 15 0M10 10.8V7h4v3.8M7.5 12.5A6 6 0 0 1 10 10.8M16.5 12.5A6 6 0 0 0 14 10.8'],
    ancora: ['Âncora', 'M12 7.5V21M8 11h8M4.5 14.5A7.5 7.5 0 0 0 12 21a7.5 7.5 0 0 0 7.5-6.5M12 3a2.2 2.2 0 1 1 0 4.4A2.2 2.2 0 0 1 12 3z'],
    sonda: ['Sonda', 'M12 2 6.5 22M12 2l5.5 20M9 13.5h6M8 17.5h8M10.2 8.5h3.6M4 22h16'],
    duto: ['Duto', 'M2 6h7a5 5 0 0 1 5 5v2a2 2 0 0 0 2 2h6M2 10h7a1 1 0 0 1 1 1v2a6 6 0 0 0 6 6h6M5 4.5v7M19 13.5v7'],
    onda: ['Ondas', 'M2 8c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 13c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2'],
    helice: ['Hélice', 'M12 10.5c-.6-3.6.6-7.2 3-8 1.3 2.2-.2 5.7-3 8zM13.3 12.8c3.4 1.3 5.8 4.2 5.2 6.6-2.5.3-4.8-2.7-5.2-6.6zM10.6 12.7c-2.8 2.3-6.5 3-8.3 1.3 1.1-2.3 4.8-2.8 8.3-1.3zM13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'],
    valvula: ['Válvula', 'M3 8v8l9-4zM21 8v8l-9-4zM12 12V6M8.5 4h7M2 12h1M21 12h1'],
    boia: ['Boia', 'M8 20h8l-1.2-8H9.2zM9.2 12l1.3-5h3l1.3 5M12 7V2.5M10 2.5h4M2 21.5c2 0 2-1 4-1M18 20.5c2 0 2 1 4 1'],
    engrenagem: ['Engrenagem', 'M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22M4.9 4.9l2.5 2.5M16.6 16.6l2.5 2.5M4.9 19.1l2.5-2.5M16.6 7.4l2.5-2.5']
  };
  const iniciais = nome => String(nome || '?').trim().split(/\s+/).filter(Boolean).map(p => p[0]).slice(0, 2).join('').toUpperCase() || '?';
  function iconeSvg(id) { const i = ICONES[id]; return i ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${i[1]}"/></svg>` : ''; }
  function avatar(u, cls) {
    u = u || {}; const a = String(u.avatar || ''), c = 'av' + (cls ? ' ' + cls : '');
    if (/^data:image\/(png|jpeg|webp);base64,/.test(a)) return `<span class="${c} av-foto"><img src="${esc(a)}" alt=""></span>`;
    if (a.startsWith('icone:') && ICONES[a.slice(6)]) { const id = a.slice(6); return `<span class="${c} av-ic av-${id}">${iconeSvg(id)}</span>`; }
    return `<span class="${c} av-ini">${esc(iniciais(u.nome || u.email))}</span>`;
  }

  /* --------------------------------------------- responsável técnico nos relatórios impressos */
  function blocoResponsavel() {
    const s = sessao(); document.querySelectorAll('.rp-resp').forEach(e => e.remove()); if (!s) return;
    const u = s.usuario, html = `${avatar(u, 'av-rp')}<div><span>Responsável técnico</span><b>${esc(u.nome)}</b><small>${esc([u.empresa, u.email].filter(Boolean).join(' · '))}</small></div>`;
    const alvos = document.querySelectorAll('.rp-title');
    if (alvos.length) alvos.forEach(t => { const d = document.createElement('div'); d.className = 'rp-resp'; d.innerHTML = html; t.after(d); });
    else { const m = document.querySelector('main'); if (m) { const d = document.createElement('div'); d.className = 'rp-resp rp-resp-pagina'; d.innerHTML = html; m.prepend(d); } }
  }
  window.addEventListener('beforeprint', blocoResponsavel);
  window.Sessao = { pedir, sessao, sair, BASE, guardar: s => { gravar(K_SESSAO, s); document.dispatchEvent(new CustomEvent('engenha-sessao')); }, projetoAtivo: () => ler(K_PROJ, null), definirProjeto: p => gravar(K_PROJ, p), dadosLocais, aplicarDados, CHAVES, avatar, ICONES, iconeSvg, iniciais };

  /* ------------------------------------------------- projeto no servidor */
  function dadosLocais() { const o = {}; for (const k of CHAVES) { const v = ler(k, null); if (v && typeof v === 'object') o[k] = v; } return o; }
  function aplicarDados(d) { for (const k of CHAVES) { if (d && d[k]) gravar(k, d[k]); else gravar(k, null); } }
  const pagina = document.body && document.body.dataset.page !== 'acesso';
  if (!pagina) return;

  let ultimo = JSON.stringify(dadosLocais()), espera = 0, salvando = false, barra = null;
  async function salvar() {
    const p = ler(K_PROJ, null), s = sessao(); if (!p || !s || salvando) return;
    const atual = JSON.stringify(dadosLocais()); if (atual === ultimo) return;
    salvando = true; estado('Salvando…');
    try { const r = await pedir('projetos/salvar', { id: p.id, dados: JSON.parse(atual) }); ultimo = atual; gravar(K_PROJ, { ...p, versao: r.versao }); estado('Salvo às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })); }
    catch (e) { estado(e.message, true); }
    finally { salvando = false; }
  }
  setInterval(() => { if (!ler(K_PROJ, null) || !sessao()) return; if (JSON.stringify(dadosLocais()) !== ultimo) { clearTimeout(espera); espera = setTimeout(salvar, 1200); } }, 1500);
  addEventListener('pagehide', () => { const p = ler(K_PROJ, null), s = sessao(), atual = JSON.stringify(dadosLocais()); if (p && s && atual !== ultimo) fetch(BASE + '/v1/projetos/salvar', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + s.sessao }, body: JSON.stringify({ id: p.id, dados: JSON.parse(atual) }) }).catch(() => {}); });

  // ao abrir a página: se o projeto mudou em outro lugar (e aqui não há mudança pendente), traz a versão salva
  async function conferirVersao() {
    const p = ler(K_PROJ, null); if (!p || !sessao()) return;
    try {
      const r = await pedir('projetos/abrir', { id: p.id });
      if (r.versao > (p.versao || 0)) {
        const marca = 'engenha-recarga-' + r.id + '-' + r.versao;
        gravar(K_PROJ, { id: r.id, nome: r.nome, versao: r.versao });
        if (!sessionStorage.getItem(marca)) { sessionStorage.setItem(marca, '1'); aplicarDados(r.dados); location.reload(); return; }
      }
      ultimo = JSON.stringify(dadosLocais());
    } catch (e) { if (e.status === 404) { gravar(K_PROJ, null); montarBarra(); } }
  }

  /* --------------------------------------------- cabeçalho e barra */
  const volta = encodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  function botaoConta() {
    const lugar = document.querySelector('.s-actions'); if (!lugar) return;
    let b = lugar.querySelector('.s-conta'); if (!b) { b = document.createElement('a'); b.className = 's-act s-conta'; lugar.prepend(b); }
    const s = sessao();
    if (s) { b.href = 'conta.html'; b.innerHTML = `${avatar(s.usuario, 's-av')}${esc(s.usuario.nome.split(' ')[0])}`; b.title = 'Sua conta: ' + s.usuario.email; }
    else { b.href = 'conta.html?volta=' + volta; b.textContent = 'Entrar'; b.title = 'Entrar com o seu acesso'; }
  }
  function estado(txt, erro) { const e = barra && barra.querySelector('.sb-estado'); if (e) { e.textContent = txt; e.classList.toggle('erro', !!erro); } }
  async function montarBarra() {
    const s = sessao();
    if (!s) { if (barra) { barra.remove(); barra = null; } return; }
    if (!barra) { barra = document.createElement('div'); barra.className = 's-projeto'; barra.setAttribute('role', 'region'); barra.setAttribute('aria-label', 'Projeto salvo no servidor'); (document.querySelector('.s-areas') || document.querySelector('header')).after(barra); }
    const p = ler(K_PROJ, null);
    barra.innerHTML = `<span class="sb-rot">Projeto</span><select class="sb-sel" aria-label="Projeto"><option value="">${p ? esc(p.nome) : 'Sem projeto (só neste navegador)'}</option></select>
      <span class="sb-estado">${p ? 'Salvo no servidor' : 'Parâmetros completos liberados'}</span>
      <span class="sb-acoes">${p ? '<button type="button" data-a="memorial">Emitir memorial</button>' : '<button type="button" data-a="novo">Salvar como projeto</button>'}<a href="conta.html">Minha conta</a></span>`;
    const sel = barra.querySelector('.sb-sel');
    try {
      const { projetos } = await pedir('projetos/listar');
      sel.innerHTML = (p ? '' : '<option value="">Sem projeto (só neste navegador)</option>') + projetos.map(x => `<option value="${esc(x.id)}"${p && p.id === x.id ? ' selected' : ''}>${esc(x.nome)}</option>`).join('') + '<option value="+">＋ Novo projeto com estes dados…</option>';
    } catch (e) { estado(e.message, true); }
    sel.addEventListener('change', async () => {
      const v = sel.value;
      if (v === '+') return novo();
      if (!v) return;
      try { const r = await pedir('projetos/abrir', { id: v }); gravar(K_PROJ, { id: r.id, nome: r.nome, versao: r.versao }); aplicarDados(r.dados); location.reload(); } catch (e) { estado(e.message, true); }
    });
    barra.querySelector('[data-a="novo"]')?.addEventListener('click', novo);
    barra.querySelector('[data-a="memorial"]')?.addEventListener('click', memorial);
  }
  async function novo() {
    const nome = (prompt('Nome do projeto:', 'Estudo ' + new Date().toLocaleDateString('pt-BR')) || '').trim();
    if (!nome) { montarBarra(); return; }
    try { const r = await pedir('projetos/criar', { nome, dados: dadosLocais() }); gravar(K_PROJ, { id: r.id, nome: r.nome, versao: r.versao }); ultimo = JSON.stringify(dadosLocais()); montarBarra(); } catch (e) { estado(e.message, true); }
  }
  async function memorial() {
    const p = ler(K_PROJ, null); if (!p) return;
    await salvar();
    const janela = window.open('', '_blank');
    try { const r = await pedir('documentos/emitir', { projeto_id: p.id }); const url = 'documento.html#id=' + r.id; if (janela) janela.location = url; else location.href = url; }
    catch (e) { if (janela) janela.close(); estado(e.message, true); }
  }

  /* ------------------- parâmetros internos, liberados para quem tem acesso */
  const INTERNOS = [['se', 'Fator de taxa máx.', 'Sₑ', 4, 1, 10], ['ce', 'Constante de taxa', 'Cₑ · kPa·s', .147, 0, 2], ['rateN', 'Expoente de taxa', 'n · só T-120', .123, 0, .5]];
  function camposInternos() {
    const grade = document.querySelector('.lx-adv-grid'); if (!grade) return;
    grade.querySelectorAll('.sb-interno').forEach(e => e.remove());
    if (!sessao() || !window.Lab) return;
    const proj = window.Lab.project || {};
    for (const [k, rot, sub, padrao, min, max] of INTERNOS) {
      const l = document.createElement('label'); l.className = 'sb-interno';
      const v = proj[k] != null ? proj[k] : padrao;
      l.innerHTML = `${esc(rot)} <small>${esc(sub)}</small><input name="${k}" inputmode="decimal" value="${esc(String(v).replace('.', ','))}" data-min="${min}" data-max="${max}">`;
      grade.append(l);
      const inp = l.querySelector('input');
      inp.addEventListener('change', () => {
        const n = Number(String(inp.value).replace(/\./g, '').replace(',', '.'));
        if (!Number.isFinite(n) || n < min || n > max) { inp.setCustomValidity(`Use um valor entre ${min} e ${max}.`); inp.reportValidity(); return; }
        inp.setCustomValidity(''); window.Lab.saveProject({ [k]: n });
        // recalcula: a página escuta mudanças nos campos do formulário
        const outro = grade.querySelector('input[name="nc"]') || grade.querySelector('input'); if (outro && outro !== inp) outro.dispatchEvent(new Event('change', { bubbles: true }));
      });
    }
  }

  function atualizar() { botaoConta(); montarBarra(); camposInternos(); }
  document.addEventListener('engenha-sessao', atualizar);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { atualizar(); conferirVersao(); }); else { atualizar(); conferirVersao(); }
  // confere a sessão em segundo plano (pode ter sido encerrada pelo administrador)
  if (sessao()) pedir('conta/eu').catch(() => {});
})();
