/* Casos salvos do lançamento: guarda o caso inteiro (modelo, lançamento, solo e parâmetros avançados).
   Um caso só muda quando a pessoa clica em Salvar; testes no painel não alteram o que está salvo.
   Os casos ficam no navegador e, com login e projeto aberto, vão junto com o projeto para o servidor. */
(function () {
  'use strict';
  const CHAVE = 'offshore-casos-v1', MAX = 30;
  const raiz = document.getElementById('lx-casos'), form = document.getElementById('lx-form');
  if (!raiz || !form || !window.Lab) return;
  const L = window.Lab;
  const $ = s => raiz.querySelector(s);
  const sel = $('#lx-caso-sel'), st = $('#lx-caso-st'), resumo = $('#lx-caso-resumo'), onde = $('#lx-caso-onde');
  const bSalvar = $('[data-a="salvar"]'), bNovo = $('[data-a="novo"]'), bDesc = $('[data-a="descartar"]'), bExc = $('[data-a="excluir"]');
  const caixaNome = $('#lx-caso-nome'), inNome = $('#lx-caso-nome input'), bOk = $('[data-a="ok"]'), bCancel = $('[data-a="cancelar"]');

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const num = v => L.num(v);
  const fmt = v => String(v).replace('.', ',');
  const ler = () => { try { const d = JSON.parse(localStorage.getItem(CHAVE)); if (d && Array.isArray(d.lista)) return d; } catch (_) {} return { atual: '', lista: [] }; };
  const gravar = d => { try { localStorage.setItem(CHAVE, JSON.stringify(d)); } catch (_) {} };
  const campos = () => [...form.querySelectorAll('input[name]:not([type=range])')].map(i => i.name);
  const modelo = () => Number((window.__lanc && window.__lanc.model) || (L.project && L.project.model)) || 120;
  const nomeModelo = m => (L.MODELS[m] && L.MODELS[m].name) || 'T-' + m;

  function atual() {
    const o = { model: modelo() };
    for (const k of campos()) { const v = num(form.elements.namedItem(k).value); o[k] = Number.isFinite(v) ? v : null; }
    return o;
  }
  const igual = (a, b) => {
    if (!a || !b || Number(a.model) !== Number(b.model)) return false;
    for (const k of campos()) {
      const x = a[k], y = b[k];
      if (x == null && y == null) continue;
      if (x == null || y == null || Math.abs(x - y) > 1e-9 * Math.max(1, Math.abs(x), Math.abs(y))) return false;
    }
    return true;
  };
  const casoAtual = d => d.lista.find(c => c.id === d.atual) || null;
  const novoId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const quando = t => new Date(t).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  const descreve = c => `${nomeModelo(c.model)} · soltura ${fmt(c.release)} m · Su ${fmt(c.su0)} + ${fmt(c.suGradient)}·z kPa`;

  function guardarComo(c) {
    const o = {};
    for (const [k, v] of Object.entries(c)) if (v != null) o[k] = v;
    return o;
  }

  function mostrar() {
    const d = ler(), c = casoAtual(d), sujo = c ? !igual(atual(), c) : true;
    sel.innerHTML = (c ? '' : '<option value="">Caso não salvo</option>') +
      d.lista.map(x => `<option value="${esc(x.id)}"${x.id === d.atual ? ' selected' : ''}>${esc(x.nome)} · ${esc(nomeModelo(x.model))}</option>`).join('');
    sel.disabled = !d.lista.length;
    raiz.classList.toggle('sujo', !!(c && sujo));
    if (!c) { st.textContent = d.lista.length ? 'Nenhum caso aberto' : 'Nenhum caso salvo'; st.className = 'lx-caso-st'; }
    else if (sujo) { st.textContent = 'Alterado, não salvo'; st.className = 'lx-caso-st alterado'; }
    else { st.textContent = 'Salvo ' + quando(c.salvo); st.className = 'lx-caso-st ok'; }
    resumo.textContent = c ? descreve(c) : 'Salve o estudo atual para voltar a ele depois sem perder nada.';
    bSalvar.hidden = !c; bSalvar.disabled = !sujo;
    bDesc.hidden = !c || !sujo; bExc.hidden = !c;
    bNovo.textContent = c ? 'Salvar como novo' : 'Salvar caso';
    const p = window.Sessao && window.Sessao.sessao && window.Sessao.sessao() && window.Sessao.projetoAtivo && window.Sessao.projetoAtivo();
    onde.textContent = p ? 'Guardados no projeto ' + p.nome : 'Guardados neste navegador';
  }

  // aplica um caso no painel e recalcula
  function aplicar(c) {
    if (Number(c.model) !== modelo()) {
      const b = document.querySelector('#lx-lineup [data-model="' + Number(c.model) + '"]');
      if (b) b.click();
    }
    const nomes = campos();
    for (const k of nomes) {
      if (c[k] == null) continue;
      const i = form.elements.namedItem(k);
      i.value = fmt(c[k]);
    }
    for (const k of nomes) { const i = form.elements.namedItem(k); if (c[k] != null) i.dispatchEvent(new Event('input', { bubbles: true })); }
  }

  function pedirNome(sugestao) {
    caixaNome.hidden = false; inNome.value = sugestao; inNome.focus(); inNome.select();
  }
  function fecharNome() { caixaNome.hidden = true; }

  function criar() {
    const nome = inNome.value.trim().slice(0, 60);
    if (!nome) { inNome.focus(); return; }
    const d = ler();
    if (d.lista.length >= MAX) { st.textContent = `Limite de ${MAX} casos. Exclua algum antes.`; st.className = 'lx-caso-st alterado'; return; }
    const c = guardarComo({ id: novoId(), nome, salvo: Date.now(), ...atual() });
    d.lista.unshift(c); d.atual = c.id; gravar(d); fecharNome(); mostrar();
  }
  function salvar() {
    const d = ler(), i = d.lista.findIndex(c => c.id === d.atual);
    if (i < 0) return;
    d.lista[i] = guardarComo({ id: d.lista[i].id, nome: d.lista[i].nome, salvo: Date.now(), ...atual() });
    gravar(d); mostrar();
  }
  let excluirArmado = 0;
  function excluir() {
    if (!excluirArmado) {
      bExc.textContent = 'Confirmar exclusão'; bExc.classList.add('perigo');
      excluirArmado = setTimeout(() => { excluirArmado = 0; bExc.textContent = 'Excluir'; bExc.classList.remove('perigo'); }, 3500);
      return;
    }
    clearTimeout(excluirArmado); excluirArmado = 0; bExc.textContent = 'Excluir'; bExc.classList.remove('perigo');
    const d = ler(); d.lista = d.lista.filter(c => c.id !== d.atual); d.atual = ''; gravar(d); mostrar();
  }

  sel.addEventListener('change', () => {
    const d = ler(), c = d.lista.find(x => x.id === sel.value);
    if (!c) return;
    d.atual = c.id; gravar(d); fecharNome(); aplicar(c); setTimeout(mostrar, 0);
  });
  bSalvar.addEventListener('click', salvar);
  bNovo.addEventListener('click', () => {
    const c = casoAtual(ler());
    pedirNome(c ? c.nome + ' (cópia)' : `${nomeModelo(modelo())} · Su ${fmt(atual().su0)} + ${fmt(atual().suGradient)}·z`);
  });
  bOk.addEventListener('click', criar);
  bCancel.addEventListener('click', fecharNome);
  inNome.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); criar(); } else if (e.key === 'Escape') fecharNome(); });
  bDesc.addEventListener('click', () => { const c = casoAtual(ler()); if (c) { aplicar(c); setTimeout(mostrar, 0); } });
  bExc.addEventListener('click', excluir);

  // campos desta caixa não disparam o recálculo do painel
  raiz.addEventListener('input', e => e.stopPropagation());
  raiz.addEventListener('change', e => e.stopPropagation());
  // qualquer mudança no painel, troca de modelo ou restauração atualiza o estado
  let t = 0;
  const depois = () => { clearTimeout(t); t = setTimeout(mostrar, 80); };
  form.addEventListener('input', depois);
  document.addEventListener('click', e => { if (e.target.closest('#lx-lineup [data-model], #lx-restore')) depois(); });
  document.addEventListener('engenha-sessao', depois);
  addEventListener('storage', e => { if (e.key === CHAVE) mostrar(); });

  // ao abrir a página: se o painel corresponde ao caso aberto (os campos guardados só no caso voltam ao padrão ao recarregar), recoloca o caso inteiro
  const d0 = ler(), c0 = casoAtual(d0);
  if (c0) {
    const a = atual(), p = L.project || {};
    const base = ['release', 'water', 'su0', 'suGradient', 'nc', 'alphaT', 'st', 'rhoSoil', 'cdSoil', 'finT', 'ncFin', 'beta', 'rateRef'];
    const mesmaBase = Number(c0.model) === Number(p.model) && base.every(k => c0[k] == null || Math.abs(Number(p[k]) - c0[k]) < 1e-9);
    if (mesmaBase && !igual(a, c0)) aplicar(c0);
  }
  mostrar();
})();
