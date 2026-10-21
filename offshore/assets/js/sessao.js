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
  window.Sessao = { pedir, sessao, sair, BASE, guardar: s => { gravar(K_SESSAO, s); document.dispatchEvent(new CustomEvent('engenha-sessao')); }, projetoAtivo: () => ler(K_PROJ, null), definirProjeto: p => gravar(K_PROJ, p), dadosLocais, aplicarDados, CHAVES };

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
    if (s) { b.href = 'conta.html'; b.innerHTML = `<span class="s-conta-pt" aria-hidden="true"></span>${esc(s.usuario.nome.split(' ')[0])}`; b.title = 'Sua conta: ' + s.usuario.email; }
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
