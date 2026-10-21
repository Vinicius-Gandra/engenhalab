/* Página de acesso: aceitar convite (senha + aplicativo autenticador), entrar e "Minha conta". */
(function () {
  'use strict';
  const S = window.Sessao, app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const data = t => t ? new Date(t * 1000).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';
  // volta só para páginas do próprio laboratório
  const voltaParam = new URLSearchParams(location.search).get('volta');
  const volta = voltaParam && /^[\w-]+\.html$/.test(voltaParam) ? voltaParam : null;
  // o token do convite fica só na memória da página
  let convite = null; { const m = location.hash.match(/convite=([\w-]{30,80})/); if (m) { convite = m[1]; try { history.replaceState(null, '', location.pathname + location.search); } catch (_) { /* sem histórico */ } } }

  const tela = html => { app.innerHTML = html; const f = app.querySelector('input'); if (f) f.focus(); };
  const erro = (onde, msg) => { const e = app.querySelector(onde || '.ac-msg'); if (e) { e.className = 'ac-msg ac-erro'; e.textContent = msg; e.hidden = false; } };
  async function enviar(form, fn) {
    form.addEventListener('submit', async ev => {
      ev.preventDefault(); const b = form.querySelector('button[type="submit"]'); if (b) b.disabled = true;
      try { await fn(new FormData(form)); } catch (e) { erro(null, e.message); } finally { if (b && b.isConnected) b.disabled = false; }
    });
  }
  function entrou(s) { S.guardar({ sessao: s.sessao, expira: s.expira, usuario: s.usuario }); if (volta) location.href = volta; else minhaConta(); }

  /* --------------------------------------------------- convite */
  async function fluxoConvite() {
    let info;
    try { info = await S.pedir('conta/convite', { token: convite }, { auth: false }); }
    catch (e) { tela(`<section class="ac-cartao"><span class="ac-olho">Convite</span><h1>Convite indisponível</h1><p>${esc(e.message)}</p><a class="ac-btn sec" href="conta.html">Ir para o login</a></section>`); return; }
    const redefinir = info.tipo === 'redefinir';
    tela(`<section class="ac-cartao"><span class="ac-olho">${redefinir ? 'Redefinir acesso' : 'Convite'} · etapa 1 de 2</span><h1>${redefinir ? 'Nova senha' : 'Crie sua senha'}</h1>
      <p>${esc(info.nome)}, este acesso é pessoal: <b>${esc(info.email)}</b>. Use pelo menos 12 caracteres.</p>
      <p class="ac-msg" hidden></p>
      <form novalidate><label class="ac-campo">Senha<input name="senha" type="password" autocomplete="new-password" minlength="12" maxlength="128" required></label>
      <label class="ac-campo">Repita a senha<input name="senha2" type="password" autocomplete="new-password" required></label>
      <input type="email" name="email" value="${esc(info.email)}" autocomplete="username" hidden>
      <button class="ac-btn ac-cheio" type="submit">Continuar</button></form></section>`);
    enviar(app.querySelector('form'), async fd => {
      if (fd.get('senha') !== fd.get('senha2')) throw new Error('As duas senhas não são iguais.');
      const r = await S.pedir('conta/definir-senha', { token: convite, senha: fd.get('senha') }, { auth: false });
      etapaCodigo(r);
    });
  }
  function qrSvg(texto) { const q = window.qrcode(0, 'M'); q.addData(texto); q.make(); return q.createSvgTag({ cellSize: 4, margin: 2, scalable: true }); }
  function etapaCodigo(r) {
    tela(`<section class="ac-cartao"><span class="ac-olho">Segundo fator · etapa 2 de 2</span><h1>Aplicativo autenticador</h1>
      <ol class="ac-passos"><li>Abra o Google Authenticator, Microsoft Authenticator ou 1Password no celular.</li><li>Leia o código abaixo (ou digite a chave).</li><li>Informe os 6 dígitos que aparecerem.</li></ol>
      <div class="ac-qr" aria-label="Código QR para o aplicativo autenticador">${qrSvg(r.otpauth)}</div>
      <code class="ac-segredo">${esc(r.segredo.replace(/(.{4})/g, '$1 ').trim())}</code>
      <p class="ac-msg" hidden></p>
      <form novalidate><label class="ac-campo">Código de 6 dígitos<input class="ac-codigo" name="codigo" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" required></label>
      <button class="ac-btn ac-cheio" type="submit">Ativar acesso</button></form></section>`);
    enviar(app.querySelector('form'), async fd => { const s = await S.pedir('conta/ativar', { token: convite, codigo: fd.get('codigo') }, { auth: false }); convite = null; entrou(s); });
  }

  /* --------------------------------------------------- login */
  function telaEntrar(msg) {
    tela(`<section class="ac-cartao"><span class="ac-olho">Laboratório offshore</span><h1>Entrar</h1>
      <p>Acesso para profissionais convidados. Quem entra pode alterar todos os parâmetros de entrada, salvar projetos e emitir memoriais.</p>
      <p class="ac-msg${msg ? ' ac-ok' : ''}"${msg ? '' : ' hidden'}>${esc(msg || '')}</p>
      <form novalidate><label class="ac-campo">E-mail<input name="email" type="email" autocomplete="username" required maxlength="160"></label>
      <label class="ac-campo">Senha<input name="senha" type="password" autocomplete="current-password" required maxlength="128"></label>
      <button class="ac-btn ac-cheio" type="submit">Continuar</button></form>
      <p class="ac-nota">Sem acesso? O cadastro é só por convite do administrador.</p></section>`);
    enviar(app.querySelector('form'), async fd => {
      const r = await S.pedir('conta/entrar', { email: fd.get('email'), senha: fd.get('senha') }, { auth: false });
      tela(`<section class="ac-cartao"><span class="ac-olho">Segundo fator</span><h1>Código do aplicativo</h1><p>Digite os 6 dígitos do aplicativo autenticador.</p>
        <p class="ac-msg" hidden></p><form novalidate><label class="ac-campo">Código<input class="ac-codigo" name="codigo" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required></label>
        <button class="ac-btn ac-cheio" type="submit">Entrar</button></form></section>`);
      enviar(app.querySelector('form'), async fd2 => entrou(await S.pedir('conta/codigo', { desafio: r.desafio, codigo: fd2.get('codigo') }, { auth: false })));
    });
  }

  /* --------------------------------------------------- minha conta */
  async function minhaConta() {
    const s = S.sessao(); if (!s) return telaEntrar();
    const u = s.usuario, ativo = S.projetoAtivo();
    tela(`<div class="ac-titulo"><div><span class="ac-olho">Minha conta</span><h1>${esc(u.nome)}</h1><p>${esc(u.email)}${u.papel === 'admin' ? ' · administrador' : ''}</p></div>
      <div class="ac-acoes">${u.papel === 'admin' ? '<a class="ac-btn sec" href="admin.html">Painel do administrador</a>' : ''}<a class="ac-btn sec" href="01-lancamento.html">Abrir o laboratório</a><button type="button" class="ac-btn perigo" data-a="sair">Sair</button></div></div>
      <p class="ac-msg" hidden></p>
      <section class="ac-bloco"><header><h2>Projetos</h2><button type="button" class="ac-btn peq" data-a="novo">Novo projeto com os dados deste navegador</button></header><div data-p="projetos" class="ac-rolar"><p class="ac-vazio">Carregando…</p></div></section>
      <section class="ac-bloco"><header><h2>Memoriais emitidos</h2></header><div data-p="docs" class="ac-rolar"><p class="ac-vazio">Carregando…</p></div></section>
      <section class="ac-bloco"><header><h2>Sessões abertas</h2><button type="button" class="ac-btn peq sec" data-a="outras">Encerrar as outras</button></header><div data-p="sessoes" class="ac-rolar"><p class="ac-vazio">Carregando…</p></div></section>`);
    app.querySelector('[data-a="sair"]').addEventListener('click', () => { S.sair(); telaEntrar('Você saiu.'); });
    app.querySelector('[data-a="outras"]').addEventListener('click', async () => { try { const r = await S.pedir('conta/encerrar-outras'); carregarSessoes(); const m = app.querySelector('.ac-msg'); m.className = 'ac-msg ac-ok'; m.hidden = false; m.textContent = `${r.encerradas} sessão(ões) encerrada(s).`; } catch (e) { erro(null, e.message); } });
    app.querySelector('[data-a="novo"]').addEventListener('click', async () => {
      const nome = (prompt('Nome do projeto:', 'Estudo ' + new Date().toLocaleDateString('pt-BR')) || '').trim(); if (!nome) return;
      try { const r = await S.pedir('projetos/criar', { nome, dados: S.dadosLocais() }); S.definirProjeto({ id: r.id, nome: r.nome, versao: r.versao }); carregarProjetos(); } catch (e) { erro(null, e.message); }
    });
    async function carregarProjetos() {
      const alvo = app.querySelector('[data-p="projetos"]');
      try {
        const { projetos } = await S.pedir('projetos/listar'), atual = S.projetoAtivo();
        alvo.innerHTML = projetos.length ? `<table class="ac-tabela"><thead><tr><th>Projeto</th><th>Versão</th><th>Alterado</th><th></th></tr></thead><tbody>${projetos.map(p => `<tr><td><b>${esc(p.nome)}</b>${atual && atual.id === p.id ? '<small>aberto neste navegador</small>' : ''}</td><td>${p.versao}</td><td>${data(p.atualizado_em)}</td>
          <td class="ac-acoes"><button class="ac-btn peq" data-abrir="${esc(p.id)}">Abrir</button><button class="ac-btn peq sec" data-ren="${esc(p.id)}">Renomear</button><button class="ac-btn peq perigo" data-exc="${esc(p.id)}">Excluir</button></td></tr>`).join('')}</tbody></table>` : '<p class="ac-vazio">Nenhum projeto ainda. Ajuste os parâmetros no laboratório e salve como projeto.</p>';
        alvo.querySelectorAll('[data-abrir]').forEach(b => b.addEventListener('click', async () => { try { const r = await S.pedir('projetos/abrir', { id: b.dataset.abrir }); S.aplicarDados(r.dados); S.definirProjeto({ id: r.id, nome: r.nome, versao: r.versao }); location.href = volta || '01-lancamento.html'; } catch (e) { erro(null, e.message); } }));
        alvo.querySelectorAll('[data-ren]').forEach(b => b.addEventListener('click', async () => { const nome = (prompt('Novo nome:') || '').trim(); if (!nome) return; try { await S.pedir('projetos/renomear', { id: b.dataset.ren, nome }); const a = S.projetoAtivo(); if (a && a.id === b.dataset.ren) S.definirProjeto({ ...a, nome }); carregarProjetos(); } catch (e) { erro(null, e.message); } }));
        alvo.querySelectorAll('[data-exc]').forEach(b => b.addEventListener('click', async () => { if (!confirm('Excluir este projeto? Os memoriais já emitidos continuam no histórico.')) return; try { await S.pedir('projetos/excluir', { id: b.dataset.exc }); const a = S.projetoAtivo(); if (a && a.id === b.dataset.exc) S.definirProjeto(null); carregarProjetos(); } catch (e) { erro(null, e.message); } }));
      } catch (e) { if (e.sessao === false) return telaEntrar(e.message); alvo.innerHTML = `<p class="ac-vazio">${esc(e.message)}</p>`; }
    }
    async function carregarDocs() {
      const alvo = app.querySelector('[data-p="docs"]');
      try { const { documentos } = await S.pedir('documentos/listar');
        alvo.innerHTML = documentos.length ? `<table class="ac-tabela"><thead><tr><th>Número</th><th>Projeto</th><th>Emitido</th><th></th></tr></thead><tbody>${documentos.map(d => `<tr><td><b>${esc(d.numero)}</b></td><td>${esc(d.projeto)}</td><td>${data(d.emitido_em)}</td><td><a class="ac-btn peq sec" href="documento.html#id=${esc(d.id)}" target="_blank" rel="noopener">Abrir</a></td></tr>`).join('')}</tbody></table>` : '<p class="ac-vazio">Nenhum memorial emitido.</p>';
      } catch (e) { alvo.innerHTML = `<p class="ac-vazio">${esc(e.message)}</p>`; }
    }
    async function carregarSessoes() {
      const alvo = app.querySelector('[data-p="sessoes"]');
      try { const { sessoes } = await S.pedir('conta/sessoes');
        alvo.innerHTML = `<table class="ac-tabela"><thead><tr><th>Aparelho</th><th>Início</th><th>Última atividade</th></tr></thead><tbody>${sessoes.map(x => `<tr><td>${esc((x.agente || '—').slice(0, 90))}${x.atual ? '<small>esta sessão</small>' : ''}</td><td>${data(x.criada_em)}</td><td>${data(x.ultima_atividade)}</td></tr>`).join('')}</tbody></table>`;
      } catch (e) { alvo.innerHTML = `<p class="ac-vazio">${esc(e.message)}</p>`; }
    }
    void ativo; carregarProjetos(); carregarDocs(); carregarSessoes();
  }

  if (convite) fluxoConvite(); else if (S.sessao()) minhaConta(); else telaEntrar();
})();
