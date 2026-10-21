/* Página de acesso: aceitar convite (senha + aplicativo autenticador), entrar e "Minha conta". */
(function () {
  'use strict';
  const S = window.Sessao, app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const quando = t => t ? new Date(t * 1000).toLocaleString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace('.', '') : '—';
  const iniciais = nome => String(nome || '?').trim().split(/\s+/).filter(Boolean).map(p => p[0]).slice(0, 2).join('').toUpperCase() || '?';
  const primeiro = nome => String(nome || '').trim().split(/\s+/)[0] || '';
  // volta só para páginas do próprio laboratório
  const voltaParam = new URLSearchParams(location.search).get('volta');
  const volta = voltaParam && /^[\w-]+\.html$/.test(voltaParam) ? voltaParam : null;
  // o token do convite fica só na memória da página
  let convite = null; { const m = location.hash.match(/convite=([\w-]{30,80})/); if (m) { convite = m[1]; try { history.replaceState(null, '', location.pathname + location.search); } catch (_) { /* sem histórico */ } } }

  const ICONE = {
    olho: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5c5 0 8.5 4.3 9.6 6.2.3.5.3 1.1 0 1.6C20.5 14.7 17 19 12 19s-8.5-4.3-9.6-6.2a1.6 1.6 0 0 1 0-1.6C3.5 9.3 7 5 12 5Zm0 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/></svg>',
    casa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2 3 10.4V20a1 1 0 0 0 1 1h5.5v-6h5v6H20a1 1 0 0 0 1-1v-9.6L12 3.2Z"/></svg>',
    pasta: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2.2h8A1.5 1.5 0 0 1 21 8.7v9.8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-12Z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 2.5h7.8L19.5 7.7v12.3a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 20V4a1.5 1.5 0 0 1 1.5-1.5Zm7 1.2V8.5h4.8M8 12.5h8M8 16h8"/></svg>',
    escudo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 4.5 5.4v6c0 4.7 3.2 8.8 7.5 10.1 4.3-1.3 7.5-5.4 7.5-10.1v-6L12 2.5Zm-1.2 13.4-3.4-3.4 1.4-1.4 2 2 4.6-4.6 1.4 1.4-6 6Z"/></svg>',
    chave: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 9.5a5 5 0 1 1 3.9 4.9L9.6 16.2H8v1.6H6.4v1.6H3.5v-2.9l4.3-4.3a5 5 0 0 1-.3-2.7Zm7-1.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z"/></svg>',
    celular: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 1.8h8A1.8 1.8 0 0 1 17.8 3.6v16.8A1.8 1.8 0 0 1 16 22.2H8a1.8 1.8 0 0 1-1.8-1.8V3.6A1.8 1.8 0 0 1 8 1.8Zm0 2.4v14.6h8V4.2H8Zm3 15.8h2"/></svg>',
    tela: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 4.5h17a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Zm5 15h7"/></svg>',
    seta: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>',
    admin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9.5c0-3.6 3.1-6 7-6s7 2.4 7 6V21H2v-.5Zm16.5-9 1-1.6 1.5.9-.9 1.6.9 1.6-1.5.9-1-1.6h-1.8l-1 1.6-1.5-.9.9-1.6-.9-1.6 1.5-.9 1 1.6h1.8Z"/></svg>'
  };
  const marca = '<a class="g-marca" href="index.html" aria-label="Laboratório offshore"><span class="g-vg">VG<b>.</b></span><span class="g-marca-txt">Laboratório offshore</span></a>';

  /* ------------------------------------------------------------- utilidades de tela */
  function tela(html, foco) { app.innerHTML = html; const f = app.querySelector(foco || 'input:not([type=hidden]):not([readonly])'); if (f) f.focus(); }
  function aviso(msg, tipo) { const e = app.querySelector('.g-msg'); if (!e) return; e.className = 'g-msg ' + (tipo || 'erro'); e.textContent = msg; e.hidden = !msg; }
  function enviar(form, fn) {
    form.addEventListener('submit', async ev => {
      ev.preventDefault(); const b = form.querySelector('button[type="submit"]'); if (b) b.disabled = true; aviso('');
      try { await fn(new FormData(form)); } catch (e) { aviso(e.message); const i = form.querySelector('input:not([type=hidden]):not([hidden])'); if (i) { i.classList.add('g-invalido'); i.focus(); i.select && i.select(); } } finally { if (b && b.isConnected) b.disabled = false; }
    });
    form.addEventListener('input', ev => ev.target.classList && ev.target.classList.remove('g-invalido'));
  }
  const campo = (nome, rotulo, extra) => `<div class="g-campo"><input id="c-${nome}" name="${nome}" placeholder=" " ${extra || ''}><label for="c-${nome}">${rotulo}</label></div>`;
  const mostrarSenha = '<label class="g-check"><input type="checkbox" data-mostrar> Mostrar senha</label>';
  function ligarMostrar() { app.querySelectorAll('[data-mostrar]').forEach(c => c.addEventListener('change', () => app.querySelectorAll('input[data-senha]').forEach(i => { i.type = c.checked ? 'text' : 'password'; }))); }
  const chip = (nome, email) => `<span class="g-chip"><span class="g-av g-av-p" aria-hidden="true">${esc(iniciais(nome || email))}</span>${esc(email)}</span>`;
  // cartão de entrada: título à esquerda, campos à direita (uma coluna no celular)
  const cartao = (titulo, sub, corpo, cab) => `<div class="g-fundo"><section class="g-cartao"><div class="g-cart-esq">${marca}<h1>${titulo}</h1>${sub ? `<p class="g-sub">${sub}</p>` : ''}${cab || ''}</div><div class="g-cart-dir"><p class="g-msg" hidden></p>${corpo}</div></section>
    <footer class="g-rodape"><span>EngenhaLab · acesso restrito a profissionais convidados</span><a href="../index.html">Todos os laboratórios</a></footer></div>`;
  function entrou(s) { S.guardar({ sessao: s.sessao, expira: s.expira, usuario: s.usuario }); if (volta) location.href = volta; else { history.replaceState(null, '', location.pathname); minhaConta(); } }

  /* ------------------------------------------------------------- convite */
  async function fluxoConvite() {
    let info;
    try { info = await S.pedir('conta/convite', { token: convite }, { auth: false }); }
    catch (e) { tela(cartao('Convite indisponível', esc(e.message), '<div class="g-botoes"><a class="g-btn" href="conta.html">Ir para o login</a></div>')); return; }
    const redefinir = info.tipo === 'redefinir';
    tela(cartao(redefinir ? 'Crie uma nova senha' : 'Crie sua senha', `Olá, ${esc(primeiro(info.nome))}. Este acesso é pessoal e intransferível.`,
      `<form novalidate><input type="email" name="email" value="${esc(info.email)}" autocomplete="username" hidden>
        ${campo('senha', 'Senha', 'type="password" data-senha autocomplete="new-password" minlength="12" maxlength="128" required')}
        ${campo('senha2', 'Confirmar', 'type="password" data-senha autocomplete="new-password" maxlength="128" required')}
        <p class="g-dica">Use 12 caracteres ou mais, com uma combinação de letras, números e símbolos.</p>${mostrarSenha}
        <div class="g-botoes"><span class="g-passo">Etapa 1 de 2</span><button class="g-btn" type="submit">Avançar</button></div></form>`, chip(info.nome, info.email)));
    ligarMostrar();
    enviar(app.querySelector('form'), async fd => {
      if (fd.get('senha') !== fd.get('senha2')) throw new Error('As senhas não coincidem. Tente novamente.');
      const r = await S.pedir('conta/definir-senha', { token: convite, senha: fd.get('senha') }, { auth: false });
      etapaCodigo(r, info);
    });
  }
  function qrSvg(texto) { const q = window.qrcode(0, 'M'); q.addData(texto); q.make(); return q.createSvgTag({ cellSize: 4, margin: 2, scalable: true }); }
  function etapaCodigo(r, info) {
    tela(cartao('Configure a verificação em duas etapas', 'Toda entrada vai pedir um código do aplicativo autenticador no seu celular.',
      `<ol class="g-passos"><li>Abra o Google Authenticator, Microsoft Authenticator ou 1Password.</li><li>Toque em <b>+</b> e leia o código QR.</li><li>Digite os 6 dígitos que aparecerem.</li></ol>
        <div class="g-qr-linha"><div class="g-qr" role="img" aria-label="Código QR para o aplicativo autenticador">${qrSvg(r.otpauth)}</div>
        <details class="g-chave"><summary>Não consegue ler o código?</summary><p>Digite esta chave no aplicativo:</p><code>${esc(r.segredo.replace(/(.{4})/g, '$1 ').trim())}</code></details></div>
        <form novalidate>${campo('codigo', 'Código de 6 dígitos', 'class="g-codigo" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" required')}
        <div class="g-botoes"><span class="g-passo">Etapa 2 de 2</span><button class="g-btn" type="submit">Ativar</button></div></form>`, info ? chip(info.nome, info.email) : ''), '#c-codigo');
    enviar(app.querySelector('form'), async fd => { const s = await S.pedir('conta/ativar', { token: convite, codigo: fd.get('codigo') }, { auth: false }); convite = null; entrou(s); });
  }

  /* ------------------------------------------------------------- entrar: e-mail → senha → código */
  function telaEntrar(msg, emailPre) {
    tela(cartao('Fazer login', 'Use sua conta do laboratório offshore',
      `<form novalidate>${campo('email', 'E-mail', `type="email" autocomplete="username" required maxlength="160" value="${esc(emailPre || '')}"`)}
        <p class="g-dica">O acesso é criado pelo administrador. Sem conta? Peça um convite.</p>
        <div class="g-botoes"><span></span><button class="g-btn" type="submit">Avançar</button></div></form>`));
    if (msg) aviso(msg, 'ok');
    enviar(app.querySelector('form'), async fd => {
      const email = String(fd.get('email') || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Digite um e-mail válido.');
      telaSenha(email);
    });
  }
  function telaSenha(email) {
    tela(cartao('Bem-vindo', '', `<form novalidate><input type="email" name="email" value="${esc(email)}" autocomplete="username" hidden>
        ${campo('senha', 'Digite sua senha', 'type="password" data-senha autocomplete="current-password" required maxlength="128"')}${mostrarSenha}
        <div class="g-botoes"><button class="g-btn g-txt" type="button" data-outra>Usar outro e-mail</button><button class="g-btn" type="submit">Avançar</button></div></form>`, chip('', email)));
    ligarMostrar();
    app.querySelector('[data-outra]').addEventListener('click', () => telaEntrar('', email));
    enviar(app.querySelector('form'), async fd => { const r = await S.pedir('conta/entrar', { email, senha: fd.get('senha') }, { auth: false }); telaDoisFatores(email, r.desafio); });
  }
  function telaDoisFatores(email, desafio) {
    tela(cartao('Verificação em duas etapas', 'Para proteger sua conta, confirme que é você.',
      `<div class="g-fator"><span class="g-fator-ic">${ICONE.celular}</span><div><b>Código do aplicativo autenticador</b><p>Abra o aplicativo no celular e digite o código de 6 dígitos do laboratório offshore.</p></div></div>
        <form novalidate>${campo('codigo', 'Digite o código', 'class="g-codigo" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required')}
        <div class="g-botoes"><button class="g-btn g-txt" type="button" data-voltar>Voltar</button><button class="g-btn" type="submit">Avançar</button></div></form>`, chip('', email)), '#c-codigo');
    app.querySelector('[data-voltar]').addEventListener('click', () => telaSenha(email));
    enviar(app.querySelector('form'), async fd => entrou(await S.pedir('conta/codigo', { desafio, codigo: fd.get('codigo') }, { auth: false })));
  }

  /* ------------------------------------------------------------- diálogo (no lugar de prompt/confirm) */
  function dialogo({ titulo, texto, campoValor, confirmar, perigo }) {
    return new Promise(resolve => {
      const d = document.createElement('dialog'); d.className = 'g-dialogo';
      d.innerHTML = `<form method="dialog"><h2>${esc(titulo)}</h2>${texto ? `<p>${esc(texto)}</p>` : ''}${campoValor != null ? campo('valor', 'Nome', `maxlength="120" value="${esc(campoValor)}"`) : ''}
        <div class="g-botoes"><span></span><span class="g-dir"><button class="g-btn g-txt" value="nao" type="submit">Cancelar</button><button class="g-btn${perigo ? ' g-perigo' : ''}" value="sim" type="submit">${esc(confirmar || 'OK')}</button></span></div></form>`;
      document.body.appendChild(d);
      d.addEventListener('close', () => { const ok = d.returnValue === 'sim'; const v = d.querySelector('input') ? d.querySelector('input').value.trim() : true; d.remove(); resolve(ok ? v : null); });
      d.showModal(); const i = d.querySelector('input'); if (i) { i.focus(); i.select(); }
    });
  }

  /* ------------------------------------------------------------- minha conta */
  const SECOES = [['inicio', 'Início', ICONE.casa], ['projetos', 'Projetos', ICONE.pasta], ['memoriais', 'Memoriais', ICONE.doc], ['seguranca', 'Segurança', ICONE.escudo]];
  const cache = {};
  function aparelho(ua) {
    ua = String(ua || '');
    const nav = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Navegador';
    const so = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) ? 'iPad' : /Android/.test(ua) ? 'Android' : /Mac OS X|Macintosh/.test(ua) ? 'macOS' : /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : '';
    return { nome: so ? `${nav} no ${so}` : nav, movel: /iPhone|Android|iPad|Mobile/.test(ua) };
  }
  const secaoAtual = () => { const h = location.hash.replace('#', ''); return SECOES.some(s => s[0] === h) ? h : 'inicio'; };

  async function minhaConta() {
    const s = S.sessao(); if (!s) return telaEntrar();
    const u = s.usuario, admin = u.papel === 'admin';
    app.innerHTML = `<div class="g-conta">
      <header class="g-barra"><div class="g-barra-esq"><a class="g-marca" href="index.html"><span class="g-vg">VG<b>.</b></span><span class="g-marca-txt">Conta</span></a></div>
        <div class="g-barra-dir"><a class="g-btn g-contorno g-so-largo" href="01-lancamento.html">Abrir o laboratório</a>
        <button type="button" class="g-av g-av-btn" aria-haspopup="true" aria-expanded="false" data-menu title="${esc(u.nome)}\n${esc(u.email)}">${esc(iniciais(u.nome))}</button>
        <div class="g-menu" hidden><span class="g-menu-email">${esc(u.email)}</span><span class="g-av g-av-g" aria-hidden="true">${esc(iniciais(u.nome))}</span><b class="g-menu-ola">Olá, ${esc(primeiro(u.nome))}!</b>
          <a class="g-btn g-contorno" href="#inicio" data-fechar>Gerenciar sua conta</a>${admin ? '<a class="g-btn g-contorno" href="admin.html">Painel do administrador</a>' : ''}<button type="button" class="g-btn g-txt" data-sair>Sair</button></div></div></header>
      <div class="g-corpo"><nav class="g-nav" aria-label="Seções da conta">${SECOES.map(([id, rot, ic]) => `<a href="#${id}" data-sec="${id}">${ic}<span>${rot}</span></a>`).join('')}${admin ? `<a href="admin.html">${ICONE.admin}<span>Administração</span></a>` : ''}</nav>
      <main class="g-principal"><p class="g-msg" hidden></p><div data-conteudo></div></main></div></div>`;
    const botaoMenu = app.querySelector('[data-menu]'), menu = app.querySelector('.g-menu');
    const fecharMenu = () => { menu.hidden = true; botaoMenu.setAttribute('aria-expanded', 'false'); };
    botaoMenu.addEventListener('click', ev => { ev.stopPropagation(); menu.hidden = !menu.hidden; botaoMenu.setAttribute('aria-expanded', String(!menu.hidden)); });
    document.addEventListener('click', ev => { if (!menu.hidden && !menu.contains(ev.target)) fecharMenu(); });
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape') fecharMenu(); });
    menu.querySelector('[data-fechar]').addEventListener('click', fecharMenu);
    menu.querySelector('[data-sair]').addEventListener('click', () => { S.sair(); history.replaceState(null, '', location.pathname); telaEntrar('Você saiu da sua conta.'); });
    const qtd = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;
    const falha = qual => cache['erro_' + qual] ? `<p class="g-vazio">${esc(cache['erro_' + qual])}</p>` : '';
    window.onhashchange = () => { if (app.querySelector('.g-conta')) mostrar(); };
    await Promise.all([carregar('projetos'), carregar('documentos'), carregar('sessoes')]);
    mostrar();

    function mostrar() {
      const sec = secaoAtual();
      app.querySelectorAll('[data-sec]').forEach(a => a.setAttribute('aria-current', a.dataset.sec === sec ? 'page' : 'false'));
      const alvo = app.querySelector('[data-conteudo]');
      alvo.innerHTML = ({ inicio, projetos, memoriais, seguranca })[sec]();
      ligar(sec, alvo); window.scrollTo(0, 0);
    }
    async function carregar(qual) {
      const rota = { projetos: 'projetos/listar', documentos: 'documentos/listar', sessoes: 'conta/sessoes' }[qual];
      try { cache[qual] = (await S.pedir(rota))[qual]; cache['erro_' + qual] = null; }
      catch (e) { if (e.sessao === false) { S.sair(); telaEntrar(e.message); throw e; } cache[qual] = []; cache['erro_' + qual] = e.message; }
    }

    function inicio() {
      const p = cache.projetos || [], d = cache.documentos || [], se = cache.sessoes || [];
      return `<section class="g-ola"><span class="g-av g-av-xg" aria-hidden="true">${esc(iniciais(u.nome))}</span><h1>Olá, ${esc(primeiro(u.nome))}</h1><p>${esc(u.email)}${admin ? ' · administrador' : ''}</p></section>
        <div class="g-cartoes">
          <a class="g-card" href="#projetos"><span class="g-card-ic">${ICONE.pasta}</span><h2>Projetos</h2><p>${p.length ? qtd(p.length, 'projeto salvo', 'projetos salvos') + ' no servidor, vinculados à sua conta.' : 'Salve seus casos para retomar de qualquer computador.'}</p><span class="g-card-link">Ver projetos</span></a>
          <a class="g-card" href="#memoriais"><span class="g-card-ic">${ICONE.doc}</span><h2>Memoriais</h2><p>${d.length ? qtd(d.length, 'memorial emitido', 'memoriais emitidos') + ', com número e verificação.' : 'Os memoriais que você emitir ficam guardados aqui.'}</p><span class="g-card-link">Ver memoriais</span></a>
          <a class="g-card" href="#seguranca"><span class="g-card-ic">${ICONE.escudo}</span><h2>Segurança</h2><p>Verificação em duas etapas ativada. ${qtd(se.length, 'sessão aberta', 'sessões abertas')}.</p><span class="g-card-link">Revisar segurança</span></a>
        </div>
        <section class="g-caixa g-atalho"><div><h2>Laboratório offshore</h2><p>Com a conta aberta você altera todos os parâmetros de entrada, salva projetos e emite memoriais.</p></div><a class="g-btn" href="01-lancamento.html">Abrir o laboratório</a></section>`;
    }
    function projetos() {
      const lista = cache.projetos || [], atual = S.projetoAtivo();
      return `<header class="g-cab"><div><h1>Projetos</h1><p>Seus estudos salvos. Só você tem acesso a eles.</p></div><button type="button" class="g-btn" data-novo>Novo projeto</button></header>${falha('projetos')}
        <section class="g-caixa g-lista">${lista.length ? lista.map(p => `<div class="g-item"><span class="g-item-ic">${ICONE.pasta}</span>
          <div class="g-item-txt"><b>${esc(p.nome)}</b>${atual && atual.id === p.id ? '<span class="g-selo">Aberto neste navegador</span>' : ''}<small>Versão ${esc(p.versao)} · alterado em ${quando(p.atualizado_em)}</small></div>
          <div class="g-item-acoes"><button class="g-btn g-contorno g-peq" data-abrir="${esc(p.id)}">Abrir</button><button class="g-btn g-txt g-peq" data-ren="${esc(p.id)}" data-nome="${esc(p.nome)}">Renomear</button><button class="g-btn g-txt g-peq g-vermelho" data-exc="${esc(p.id)}" data-nome="${esc(p.nome)}">Excluir</button></div></div>`).join('')
          : `<div class="g-vazio-grande">${ICONE.pasta}<b>Nenhum projeto ainda</b><p>Ajuste os parâmetros no laboratório e salve como projeto pela barra do topo, ou crie um aqui com os dados deste navegador.</p></div>`}</section>`;
    }
    function memoriais() {
      const lista = cache.documentos || [];
      return `<header class="g-cab"><div><h1>Memoriais</h1><p>Documentos emitidos pelo servidor, com número e código de verificação.</p></div></header>${falha('documentos')}
        <section class="g-caixa g-lista">${lista.length ? lista.map(d => `<a class="g-item g-item-link" href="documento.html#id=${esc(d.id)}" target="_blank" rel="noopener"><span class="g-item-ic">${ICONE.doc}</span>
          <div class="g-item-txt"><b>${esc(d.numero)}</b><small>${esc(d.projeto)} · emitido em ${quando(d.emitido_em)}</small></div><span class="g-seta">${ICONE.seta}</span></a>`).join('')
          : `<div class="g-vazio-grande">${ICONE.doc}<b>Nenhum memorial emitido</b><p>Use “Emitir memorial” na barra do projeto, dentro do laboratório.</p></div>`}</section>`;
    }
    function seguranca() {
      const lista = cache.sessoes || [];
      return `<header class="g-cab"><div><h1>Segurança</h1><p>Configurações e atividade que ajudam a manter sua conta protegida.</p></div></header>
        <section class="g-caixa"><h2 class="g-caixa-tit">Como você faz login</h2>
          <div class="g-item"><span class="g-item-ic">${ICONE.chave}</span><div class="g-item-txt"><b>Senha</b><small>Para trocar, peça ao administrador um novo link de acesso.</small></div></div>
          <div class="g-item"><span class="g-item-ic">${ICONE.celular}</span><div class="g-item-txt"><b>Verificação em duas etapas</b><small>Aplicativo autenticador</small></div><span class="g-status">Ativada</span></div></section>
        <section class="g-caixa"><h2 class="g-caixa-tit">Seus dispositivos</h2><p class="g-caixa-sub">Onde sua conta está conectada agora.</p>${falha('sessoes')}
          ${lista.map(x => { const a = aparelho(x.agente); return `<div class="g-item"><span class="g-item-ic">${a.movel ? ICONE.celular : ICONE.tela}</span><div class="g-item-txt"><b>${esc(a.nome)}</b>${x.atual ? '<span class="g-selo">Este dispositivo</span>' : ''}<small>Entrou em ${quando(x.criada_em)} · última atividade ${quando(x.ultima_atividade)}</small></div></div>`; }).join('')}
          ${lista.length > 1 ? '<div class="g-caixa-pe"><button type="button" class="g-btn g-contorno" data-outras>Sair de todos os outros dispositivos</button></div>' : ''}</section>`;
    }
    function ligar(sec, alvo) {
      const recarregar = async qual => { await carregar(qual); mostrar(); };
      if (sec === 'projetos') {
        alvo.querySelector('[data-novo]').addEventListener('click', async () => {
          const nome = await dialogo({ titulo: 'Novo projeto', texto: 'O projeto é criado com os dados que estão neste navegador.', campoValor: 'Estudo ' + new Date().toLocaleDateString('pt-BR'), confirmar: 'Criar' });
          if (!nome) return;
          try { const r = await S.pedir('projetos/criar', { nome, dados: S.dadosLocais() }); S.definirProjeto({ id: r.id, nome: r.nome, versao: r.versao }); recarregar('projetos'); } catch (e) { aviso(e.message); }
        });
        alvo.querySelectorAll('[data-abrir]').forEach(b => b.addEventListener('click', async () => { try { const r = await S.pedir('projetos/abrir', { id: b.dataset.abrir }); S.aplicarDados(r.dados); S.definirProjeto({ id: r.id, nome: r.nome, versao: r.versao }); location.href = volta || '01-lancamento.html'; } catch (e) { aviso(e.message); } }));
        alvo.querySelectorAll('[data-ren]').forEach(b => b.addEventListener('click', async () => {
          const nome = await dialogo({ titulo: 'Renomear projeto', campoValor: b.dataset.nome, confirmar: 'Salvar' }); if (!nome || nome === b.dataset.nome) return;
          try { await S.pedir('projetos/renomear', { id: b.dataset.ren, nome }); const a = S.projetoAtivo(); if (a && a.id === b.dataset.ren) S.definirProjeto({ ...a, nome }); recarregar('projetos'); } catch (e) { aviso(e.message); }
        }));
        alvo.querySelectorAll('[data-exc]').forEach(b => b.addEventListener('click', async () => {
          const ok = await dialogo({ titulo: 'Excluir “' + b.dataset.nome + '”?', texto: 'Os memoriais já emitidos continuam no histórico.', confirmar: 'Excluir', perigo: true }); if (!ok) return;
          try { await S.pedir('projetos/excluir', { id: b.dataset.exc }); const a = S.projetoAtivo(); if (a && a.id === b.dataset.exc) S.definirProjeto(null); recarregar('projetos'); } catch (e) { aviso(e.message); }
        }));
      }
      if (sec === 'seguranca') {
        const b = alvo.querySelector('[data-outras]');
        if (b) b.addEventListener('click', async () => {
          const ok = await dialogo({ titulo: 'Sair dos outros dispositivos?', texto: 'Você continua conectado só neste navegador.', confirmar: 'Sair dos outros' }); if (!ok) return;
          try { const r = await S.pedir('conta/encerrar-outras'); await recarregar('sessoes'); aviso(`${r.encerradas} ${r.encerradas === 1 ? 'sessão encerrada' : 'sessões encerradas'}.`, 'ok'); } catch (e) { aviso(e.message); }
        });
      }
    }
  }

  if (convite) fluxoConvite(); else if (S.sessao()) minhaConta(); else telaEntrar();
})();
