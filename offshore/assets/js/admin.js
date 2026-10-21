/* Painel do administrador: usuários e convites, sessões abertas e histórico.
   Tudo é conferido no servidor (sessão de administrador com segundo fator); esta página só exibe. */
(function () {
  'use strict';
  const S = window.Sessao, app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const data = t => t ? new Date(t * 1000).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—';
  const ACOES = { login: 'Entrou', logout: 'Saiu', login_recusado: 'Login recusado', conta_ativada: 'Conta ativada', acesso_redefinido: 'Acesso redefinido', convite_criado: 'Convite criado', convite_admin_terminal: 'Convite (Terminal)', redefinicao_criada: 'Link de redefinição', convite_cancelado: 'Convite cancelado', usuario_bloqueado: 'Bloqueado', usuario_desbloqueado: 'Desbloqueado', sessoes_encerradas: 'Sessões encerradas', projeto_criado: 'Projeto criado', projeto_alterado: 'Projeto alterado', projeto_renomeado: 'Projeto renomeado', projeto_excluido: 'Projeto excluído', documento_emitido: 'Memorial emitido', documento_baixado: 'Memorial aberto' };
  const s = S.sessao();
  if (!s) { location.href = 'conta.html?volta=admin.html'; return; }
  if (s.usuario.papel !== 'admin') { app.innerHTML = '<section class="ac-cartao"><h1>Acesso restrito</h1><p>Este painel é só do administrador.</p><a class="ac-btn sec" href="conta.html">Minha conta</a></section>'; return; }

  let aba = 'usuarios', usuarios = [];
  app.innerHTML = `<div class="ac-titulo"><div><span class="ac-olho">Administração</span><h1>Laboratório offshore</h1><p>Convites, bloqueios, sessões e histórico de alterações e emissões.</p></div><a class="ac-btn sec" href="conta.html">Minha conta</a></div>
    <nav class="ac-abas" role="tablist"><button role="tab" data-aba="usuarios" aria-selected="true">Usuários</button><button role="tab" data-aba="sessoes" aria-selected="false">Sessões</button><button role="tab" data-aba="historico" aria-selected="false">Histórico</button></nav>
    <p class="ac-msg" hidden></p><div id="painel"></div>`;
  const painel = app.querySelector('#painel');
  const aviso = (msg, ok) => { const m = app.querySelector('.ac-msg'); m.hidden = false; m.className = 'ac-msg ' + (ok ? 'ac-ok' : 'ac-erro'); m.textContent = msg; };
  const pedir = async (rota, corpo) => { try { return await S.pedir(rota, corpo); } catch (e) { if (e.sessao === false) location.href = 'conta.html?volta=admin.html'; throw e; } };
  app.querySelectorAll('[data-aba]').forEach(b => b.addEventListener('click', () => { aba = b.dataset.aba; app.querySelectorAll('[data-aba]').forEach(x => x.setAttribute('aria-selected', String(x === b))); app.querySelector('.ac-msg').hidden = true; mostrar(); }));
  const linkConvite = r => `${location.origin}${location.pathname.replace(/admin\.html$/, 'conta.html')}#convite=${r.token}`;
  function mostrarLink(r, quem) {
    const box = painel.querySelector('[data-link]'); const url = linkConvite(r);
    box.hidden = false; box.innerHTML = `<code>${esc(url)}</code><button type="button" class="ac-btn peq">Copiar</button>`;
    box.querySelector('button').addEventListener('click', () => navigator.clipboard.writeText(url).then(() => aviso('Link copiado. Envie só para ' + quem + '.', true), () => aviso('Copie o link manualmente.')));
    aviso(`Link de uso único para ${quem}, vale até ${data(r.expira)}. Envie por um canal seu (WhatsApp, e-mail).`, true);
  }

  async function abaUsuarios() {
    painel.innerHTML = `<section class="ac-bloco"><header><h2>Convidar profissional</h2></header>
      <form class="ac-form-linha" novalidate><label class="ac-campo">Nome<input name="nome" required maxlength="80"></label><label class="ac-campo">E-mail<input name="email" type="email" required maxlength="160"></label>
      <label class="ac-campo ac-curto">Papel<select name="papel"><option value="usuario">Profissional</option><option value="admin">Administrador</option></select></label><button class="ac-btn" type="submit">Gerar convite</button></form>
      <div class="ac-link" data-link hidden></div></section>
      <section class="ac-bloco"><header><h2>Usuários</h2></header><div class="ac-rolar" data-lista><p class="ac-vazio">Carregando…</p></div></section>`;
    painel.querySelector('form').addEventListener('submit', async ev => {
      ev.preventDefault(); const fd = new FormData(ev.target);
      try { const r = await pedir('admin/convidar', { nome: fd.get('nome'), email: fd.get('email'), papel: fd.get('papel') }); mostrarLink(r, fd.get('nome')); ev.target.reset(); lista(); } catch (e) { aviso(e.message); }
    });
    await lista();
  }
  async function lista() {
    const alvo = painel.querySelector('[data-lista]');
    try {
      ({ usuarios } = await pedir('admin/usuarios'));
      const agora = Date.now() / 1000;
      alvo.innerHTML = `<table class="ac-tabela"><thead><tr><th>Profissional</th><th>Situação</th><th>Último acesso</th><th>Sessões</th><th></th></tr></thead><tbody>${usuarios.map(u => {
        const st = u.status === 'pendente' ? (u.convite_ate ? 'convite enviado' : 'convite vencido') : u.status;
        return `<tr><td><b>${esc(u.nome)}</b><small>${esc(u.email)}${u.papel === 'admin' ? ' · administrador' : ''}</small></td>
          <td><span class="ac-selo ${esc(u.status)}">${esc(st)}</span>${u.travado_ate > agora ? '<small>travado por tentativas erradas</small>' : ''}${u.convite_ate && u.status !== 'pendente' ? `<small>redefinição até ${data(u.convite_ate)}</small>` : ''}</td>
          <td>${data(u.ultimo_acesso)}</td><td>${u.sessoes}</td>
          <td class="ac-acoes">${u.id === s.usuario.id ? '<small>você</small>' : u.status === 'pendente'
            ? `<button class="ac-btn peq" data-a="redefinir" data-id="${esc(u.id)}">Novo link</button><button class="ac-btn peq perigo" data-a="cancelar" data-id="${esc(u.id)}">Cancelar convite</button>`
            : `${u.status === 'ativo' ? `<button class="ac-btn peq perigo" data-a="bloquear" data-id="${esc(u.id)}">Bloquear</button>` : `<button class="ac-btn peq" data-a="desbloquear" data-id="${esc(u.id)}">Desbloquear</button>`}
               <button class="ac-btn peq sec" data-a="encerrar" data-id="${esc(u.id)}"${u.sessoes ? '' : ' disabled'}>Encerrar sessões</button><button class="ac-btn peq sec" data-a="redefinir" data-id="${esc(u.id)}">Redefinir acesso</button>`}
            <button class="ac-btn peq sec" data-a="hist" data-id="${esc(u.id)}">Histórico</button></td></tr>`; }).join('')}</tbody></table>`;
      alvo.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', () => acao(b.dataset.a, usuarios.find(u => u.id === b.dataset.id))));
    } catch (e) { alvo.innerHTML = `<p class="ac-vazio">${esc(e.message)}</p>`; }
  }
  async function acao(a, u) {
    try {
      if (a === 'bloquear') { if (!confirm(`Bloquear ${u.nome}? As sessões abertas são encerradas na hora.`)) return; await pedir('admin/bloquear', { usuario_id: u.id, bloquear: true }); aviso(u.nome + ' bloqueado.', true); }
      else if (a === 'desbloquear') { await pedir('admin/bloquear', { usuario_id: u.id, bloquear: false }); aviso(u.nome + ' desbloqueado.', true); }
      else if (a === 'encerrar') { const r = await pedir('admin/encerrar', { usuario_id: u.id }); aviso(`${r.encerradas} sessão(ões) de ${u.nome} encerrada(s).`, true); }
      else if (a === 'cancelar') { await pedir('admin/cancelar-convite', { usuario_id: u.id }); aviso('Convite cancelado.', true); }
      else if (a === 'redefinir') { if (u.status !== 'pendente' && !confirm(`Gerar link para ${u.nome} criar nova senha e novo segundo fator? Ao usar o link, as sessões dele são encerradas.`)) return; const r = await pedir('admin/redefinir', { usuario_id: u.id }); await lista(); mostrarLink(r, u.nome); return; }
      else if (a === 'hist') { aba = 'historico'; app.querySelectorAll('[data-aba]').forEach(x => x.setAttribute('aria-selected', String(x.dataset.aba === 'historico'))); return abaHistorico(u.id); }
      lista();
    } catch (e) { aviso(e.message); }
  }

  async function abaSessoes() {
    painel.innerHTML = '<section class="ac-bloco"><header><h2>Sessões abertas</h2></header><div class="ac-rolar" data-lista><p class="ac-vazio">Carregando…</p></div></section>';
    const alvo = painel.querySelector('[data-lista]');
    try {
      const { sessoes } = await pedir('admin/sessoes', {});
      alvo.innerHTML = sessoes.length ? `<table class="ac-tabela"><thead><tr><th>Profissional</th><th>Aparelho</th><th>Início</th><th>Última atividade</th><th></th></tr></thead><tbody>${sessoes.map(x => `<tr><td><b>${esc(x.nome)}</b><small>${esc(x.email)}</small></td><td>${esc((x.agente || '—').slice(0, 80))}<small>${esc(x.ip || '')}</small></td><td>${data(x.criada_em)}</td><td>${data(x.ultima_atividade)}</td><td>${x.atual ? '<small>esta sessão</small>' : `<button class="ac-btn peq perigo" data-s="${esc(x.id)}">Encerrar</button>`}</td></tr>`).join('')}</tbody></table>` : '<p class="ac-vazio">Nenhuma sessão aberta.</p>';
      alvo.querySelectorAll('[data-s]').forEach(b => b.addEventListener('click', async () => { try { await pedir('admin/encerrar', { sessao_id: b.dataset.s }); aviso('Sessão encerrada.', true); abaSessoes(); } catch (e) { aviso(e.message); } }));
    } catch (e) { alvo.innerHTML = `<p class="ac-vazio">${esc(e.message)}</p>`; }
  }

  async function abaHistorico(uid) {
    if (!usuarios.length) try { ({ usuarios } = await pedir('admin/usuarios')); } catch (_) { /* filtro sem nomes */ }
    painel.innerHTML = `<section class="ac-bloco"><header><h2>Histórico</h2></header>
      <div class="ac-filtros"><select data-f="u" aria-label="Profissional"><option value="">Todos os profissionais</option>${usuarios.map(u => `<option value="${esc(u.id)}"${u.id === uid ? ' selected' : ''}>${esc(u.nome)} · ${esc(u.email)}</option>`).join('')}</select>
      <select data-f="a" aria-label="Tipo"><option value="">Todos os tipos</option>${Object.entries(ACOES).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}</select></div>
      <div class="ac-rolar" data-lista></div><div class="ac-rodape"><button class="ac-btn peq sec" data-mais hidden>Carregar mais</button></div></section>`;
    let antes = null;
    const alvo = painel.querySelector('[data-lista]'), mais = painel.querySelector('[data-mais]');
    async function carregar(reset) {
      if (reset) { antes = null; alvo.innerHTML = ''; }
      try {
        const { registros } = await pedir('admin/historico', { usuario_id: painel.querySelector('[data-f="u"]').value || undefined, acao: painel.querySelector('[data-f="a"]').value || undefined, antes: antes || undefined, limite: 100 });
        if (!registros.length && !antes) { alvo.innerHTML = '<p class="ac-vazio">Nada registrado com este filtro.</p>'; mais.hidden = true; return; }
        let t = alvo.querySelector('tbody'); if (!t) { alvo.innerHTML = '<table class="ac-tabela"><thead><tr><th>Quando</th><th>O quê</th><th>Profissional</th><th>Detalhes</th></tr></thead><tbody></tbody></table>'; t = alvo.querySelector('tbody'); }
        t.insertAdjacentHTML('beforeend', registros.map(r => `<tr><td>${data(r.em)}<small>${esc(r.ip || '')}</small></td><td><b>${esc(ACOES[r.acao] || r.acao)}</b>${r.ator && r.ator !== r.usuario ? `<small>por ${esc(r.ator)}</small>` : ''}</td><td>${esc(r.usuario || '—')}</td><td class="ac-det">${esc(detalhe(r.detalhes))}</td></tr>`).join(''));
        antes = registros.length ? registros[registros.length - 1].id : antes; mais.hidden = registros.length < 100;
      } catch (e) { aviso(e.message); }
    }
    painel.querySelectorAll('[data-f]').forEach(sel => sel.addEventListener('change', () => carregar(true)));
    mais.addEventListener('click', () => carregar(false));
    carregar(true);
  }
  const detalhe = d => !d ? '' : d.mudancas ? `v${d.versao}: ` + d.mudancas.join('; ') : Object.entries(d).map(([k, v]) => `${k}: ${v}`).join(' · ');

  function mostrar() { if (aba === 'usuarios') abaUsuarios(); else if (aba === 'sessoes') abaSessoes(); else abaHistorico(); }
  mostrar();
})();
