/* Página de acesso: aceitar convite (senha + aplicativo autenticador), entrar e "Minha conta". */
(function () {
  'use strict';
  const S = window.Sessao, app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const quando = t => t ? new Date(t * 1000).toLocaleString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace('.', '') : '—';
  const primeiro = nome => String(nome || '').trim().split(/\s+/)[0] || '';
  // volta só para páginas do próprio laboratório
  const voltaParam = new URLSearchParams(location.search).get('volta');
  const volta = voltaParam && /^[\w-]+\.html$/.test(voltaParam) ? voltaParam : null;
  // o token do convite fica só na memória da página
  let convite = null; { const m = location.hash.match(/convite=([\w-]{30,80})/); if (m) { convite = m[1]; try { history.replaceState(null, '', location.pathname + location.search); } catch (_) { /* sem histórico */ } } }

  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const IC = {
    email: svg('M3 6h18v12H3zM3 7l9 6 9-6'),
    senha: svg('M6 11h12v10H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 15v2.5'),
    codigo: svg('M12 2.5 4.5 5.5v6c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10v-6zM9 12l2 2 4-4'),
    pessoa: svg('M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 21a7.5 7.5 0 0 1 15 0'),
    empresa: svg('M4 21V6l8-3 8 3v15M4 21h16M9 21v-5h6v5M8 9h1M15 9h1M8 13h1M15 13h1'),
    pasta: svg('M3 6.5h6l2 2.2h10V19H3z'),
    doc: svg('M6 2.5h8l5 5V21.5H6zM14 2.5V7.5h5M9 12.5h7M9 16h7'),
    camera: svg('M4 8h3l2-3h6l2 3h3v11H4zM12 16.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z'),
    sair: svg('M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10'),
    admin: svg('M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2.5 21a6.5 6.5 0 0 1 13 0M18 8v6M15 11h6'),
    lab: svg('M9 3h6M10 3v6l-5.5 9.5A1.6 1.6 0 0 0 5.9 21h12.2a1.6 1.6 0 0 0 1.4-2.5L14 9V3'),
    tela: svg('M3 4.5h18v11H3zM8.5 20h7M12 15.5V20'),
    celular: svg('M7.5 2h9v20h-9zM11 18.5h2'),
    seta: svg('M9 5l7 7-7 7'),
    silhueta: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50 22c-11 0-18 8.5-18 20 0 8.5 3.8 16 8.5 19.6v5.6C27 70 16 77 14 100h72c-2-23-13-30-26.5-32.8v-5.6C64.2 58 68 50.5 68 42c0-11.5-7-20-18-20z"/></svg>'
  };

  /* ------------------------------------------------------------- utilidades */
  function tela(html, foco) { app.innerHTML = html; const f = app.querySelector(foco || 'input:not([type=hidden]):not([hidden])'); if (f) f.focus(); }
  function aviso(msg, tipo) { const e = app.querySelector('.v-msg'); if (!e) return; e.className = 'v-msg ' + (tipo || 'erro'); e.textContent = msg; e.hidden = !msg; }
  function enviar(form, fn) {
    form.addEventListener('submit', async ev => {
      ev.preventDefault(); const b = form.querySelector('button[type="submit"]'); if (b) b.disabled = true; aviso('');
      try { await fn(new FormData(form)); }
      catch (e) { aviso(e.message); const i = form.querySelector('input:not([type=hidden]):not([hidden]):not([type=file])'); if (i) { const c = i.closest('.v-campo'); if (c) c.classList.add('invalido'); i.focus(); } }
      finally { if (b && b.isConnected) b.disabled = false; }
    });
    form.addEventListener('input', ev => { const c = ev.target.closest && ev.target.closest('.v-campo'); if (c) c.classList.remove('invalido'); });
  }
  const campo = (nome, icone, rotulo, extra) => `<label class="v-campo">${IC[icone]}<input name="${nome}" placeholder="${rotulo}" aria-label="${rotulo}" ${extra || ''}></label>`;
  function ligarMostrar() { app.querySelectorAll('[data-mostrar]').forEach(c => c.addEventListener('change', () => app.querySelectorAll('input[data-senha]').forEach(i => { i.type = c.checked ? 'text' : 'password'; }))); }
  const cena = corpo => `<div class="v-cena"><span class="v-luz l1"></span><span class="v-luz l2"></span><span class="v-luz l3"></span>${corpo}</div>`;
  const cartao = (topo, corpo) => cena(`<div class="v-centro"><section class="v-cartao">${topo}<p class="v-msg" hidden></p>${corpo}</section>
    <footer class="v-rodape"><span>Laboratório offshore · acesso por convite</span><a href="../index.html">EngenhaLab</a></footer></div>`);
  const retrato = (u, titulo, sub) => `<div class="v-retrato">${u ? S.avatar(u, 'v-av-g') : `<span class="v-av-vazio">${IC.silhueta}</span>`}</div>${titulo ? `<h1 class="v-tit">${titulo}</h1>` : ''}${sub ? `<p class="v-sub">${sub}</p>` : ''}`;
  function entrou(s, primeiraVez) {
    S.guardar({ sessao: s.sessao, expira: s.expira, usuario: s.usuario });
    if (volta && !primeiraVez) location.href = volta;
    else { history.replaceState(null, '', location.pathname + (primeiraVez ? '#perfil' : '')); minhaConta(primeiraVez); }
  }

  /* ------------------------------------------------------------- convite */
  async function fluxoConvite() {
    let info;
    try { info = await S.pedir('conta/convite', { token: convite }, { auth: false }); }
    catch (e) { tela(cartao(retrato(null, 'Convite indisponível', esc(e.message)), '<a class="v-btn" href="conta.html">Ir para o login</a>')); return; }
    const redefinir = info.tipo === 'redefinir';
    tela(cartao(retrato({ nome: info.nome }, redefinir ? 'Nova senha' : `Bem-vindo, ${esc(primeiro(info.nome))}`, `<span class="v-email">${esc(info.email)}</span><br>${redefinir ? 'Defina uma nova senha para sua conta.' : 'Crie sua senha para ativar o acesso.'}`),
      `<form novalidate><input type="email" name="email" value="${esc(info.email)}" autocomplete="username" hidden>
        ${campo('senha', 'senha', 'Nova senha', 'type="password" data-senha autocomplete="new-password" minlength="12" maxlength="128" required')}
        ${campo('senha2', 'senha', 'Confirmar senha', 'type="password" data-senha autocomplete="new-password" maxlength="128" required')}
        <div class="v-linha"><label class="v-check"><input type="checkbox" data-mostrar><span></span>Mostrar senha</label><span class="v-passo">Etapa 1 de 2</span></div>
        <p class="v-dica">Mínimo de 12 caracteres. Uma frase longa é mais segura e fácil de lembrar.</p>
        <button class="v-btn" type="submit">Continuar</button></form>`));
    ligarMostrar();
    enviar(app.querySelector('form'), async fd => {
      if (fd.get('senha') !== fd.get('senha2')) throw new Error('As senhas não coincidem.');
      const r = await S.pedir('conta/definir-senha', { token: convite, senha: fd.get('senha') }, { auth: false });
      etapaCodigo(r);
    });
  }
  function qrSvg(texto) { const q = window.qrcode(0, 'M'); q.addData(texto); q.make(); return q.createSvgTag({ cellSize: 4, margin: 2, scalable: true }); }
  function etapaCodigo(r) {
    tela(cartao('<h1 class="v-tit">Verificação em duas etapas</h1><p class="v-sub">Leia o código com o Google Authenticator, Microsoft Authenticator ou 1Password.</p>',
      `<div class="v-qr" role="img" aria-label="Código QR para o aplicativo autenticador">${qrSvg(r.otpauth)}</div>
        <details class="v-chave"><summary>Não consegue ler? Digite a chave</summary><code>${esc(r.segredo.replace(/(.{4})/g, '$1 ').trim())}</code></details>
        <form novalidate>${campo('codigo', 'codigo', 'Código de 6 dígitos', 'class="v-num" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" required')}
        <div class="v-linha"><span></span><span class="v-passo">Etapa 2 de 2</span></div>
        <button class="v-btn" type="submit">Ativar acesso</button></form>`), 'input[name=codigo]');
    enviar(app.querySelector('form'), async fd => { const s = await S.pedir('conta/ativar', { token: convite, codigo: fd.get('codigo') }, { auth: false }); convite = null; entrou(s, true); });
  }

  /* ------------------------------------------------------------- entrar */
  function telaEntrar(msg, emailPre) {
    tela(cartao(retrato(null, '', ''),
      `<form novalidate>${campo('email', 'email', 'E-mail', `type="email" autocomplete="username" required maxlength="160" value="${esc(emailPre || '')}"`)}
        ${campo('senha', 'senha', 'Senha', 'type="password" data-senha autocomplete="current-password" required maxlength="128"')}
        <div class="v-linha"><label class="v-check"><input type="checkbox" data-mostrar><span></span>Mostrar senha</label><button type="button" class="v-link" data-esqueci>Esqueceu a senha?</button></div>
        <button class="v-btn" type="submit">Entrar</button></form>`), emailPre ? 'input[name=senha]' : null);
    if (msg) aviso(msg, 'ok');
    ligarMostrar();
    app.querySelector('[data-esqueci]').addEventListener('click', () => aviso('Peça ao administrador um novo link de acesso. Por segurança, a senha não é redefinida por e-mail.', 'info'));
    enviar(app.querySelector('form'), async fd => {
      const email = String(fd.get('email') || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Digite um e-mail válido.');
      const r = await S.pedir('conta/entrar', { email, senha: fd.get('senha') }, { auth: false });
      telaDoisFatores(email, r.desafio);
    });
  }
  function telaDoisFatores(email, desafio) {
    tela(cartao(`<div class="v-retrato"><span class="v-av-vazio v-av-ic">${IC.celular}</span></div><h1 class="v-tit">Confirme que é você</h1><p class="v-sub">Digite o código de 6 dígitos do aplicativo autenticador.<br><span class="v-email">${esc(email)}</span></p>`,
      `<form novalidate>${campo('codigo', 'codigo', 'Código', 'class="v-num" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required')}
        <div class="v-linha"><button type="button" class="v-link" data-voltar>← Usar outra conta</button><span></span></div>
        <button class="v-btn" type="submit">Verificar</button></form>`), 'input[name=codigo]');
    app.querySelector('[data-voltar]').addEventListener('click', () => telaEntrar('', email));
    enviar(app.querySelector('form'), async fd => entrou(await S.pedir('conta/codigo', { desafio, codigo: fd.get('codigo') }, { auth: false })));
  }

  /* ------------------------------------------------------------- diálogo */
  function dialogo({ titulo, texto, valor, confirmar, perigo }) {
    return new Promise(resolve => {
      const d = document.createElement('dialog'); d.className = 'v-dialogo';
      d.innerHTML = `<form method="dialog"><h2>${esc(titulo)}</h2>${texto ? `<p>${esc(texto)}</p>` : ''}${valor != null ? `<label class="v-campo">${IC.pasta}<input name="valor" maxlength="80" value="${esc(valor)}" aria-label="Nome"></label>` : ''}
        <div class="v-dial-botoes"><button class="v-btn v-sec v-peq" value="nao" type="submit">Cancelar</button><button class="v-btn v-peq${perigo ? ' v-perigo' : ''}" value="sim" type="submit">${esc(confirmar || 'OK')}</button></div></form>`;
      document.body.appendChild(d);
      d.addEventListener('close', () => { const ok = d.returnValue === 'sim', i = d.querySelector('input'); const v = i ? i.value.trim() : true; d.remove(); resolve(ok ? v : null); });
      d.showModal(); const i = d.querySelector('input'); if (i) { i.focus(); i.select(); }
    });
  }

  /* ------------------------------------------------------------- foto: recorte quadrado de 160 px */
  async function reduzirImagem(arquivo) {
    if (!/^image\//.test(arquivo.type)) throw new Error('Escolha um arquivo de imagem.');
    if (arquivo.size > 15e6) throw new Error('Imagem muito grande. Use uma de até 15 MB.');
    let bmp; try { bmp = await createImageBitmap(arquivo); } catch (_) { throw new Error('Não consegui abrir esta imagem. Tente JPG ou PNG.'); }
    const lado = Math.min(bmp.width, bmp.height), c = document.createElement('canvas'); c.width = c.height = 160;
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, 160, 160);
    g.drawImage(bmp, (bmp.width - lado) / 2, (bmp.height - lado) / 2, lado, lado, 0, 0, 160, 160);
    for (const q of [0.86, 0.75, 0.6, 0.45]) {
      let url = c.toDataURL('image/webp', q); if (!url.startsWith('data:image/webp')) url = c.toDataURL('image/jpeg', q);
      if (url.length <= 58000) return url;
    }
    throw new Error('Não consegui reduzir a imagem. Tente outra.');
  }

  /* ------------------------------------------------------------- minha conta */
  const SECOES = [['perfil', 'Perfil'], ['projetos', 'Projetos'], ['memoriais', 'Memoriais'], ['seguranca', 'Segurança']];
  const cache = {};
  function aparelho(ua) {
    ua = String(ua || '');
    const nav = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Navegador';
    const so = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) ? 'iPad' : /Android/.test(ua) ? 'Android' : /Mac OS X|Macintosh/.test(ua) ? 'macOS' : /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : '';
    return { nome: so ? `${nav} no ${so}` : nav, movel: /iPhone|Android|iPad|Mobile/.test(ua) };
  }
  const secaoAtual = () => { const h = location.hash.replace('#', ''); return SECOES.some(s => s[0] === h) ? h : 'perfil'; };
  const qtd = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;

  async function minhaConta(primeiraVez) {
    const s = S.sessao(); if (!s) return telaEntrar();
    let u = s.usuario; const admin = u.papel === 'admin';
    try { const r = await S.pedir('conta/eu'); u = r.usuario; S.guardar({ ...S.sessao(), usuario: u }); } catch (e) { if (e.sessao === false) { S.sair(); return telaEntrar(e.message); } }
    app.innerHTML = cena(`<div class="v-conta">
      <header class="v-topo"><a class="v-marca" href="index.html"><span class="v-vg">VG<b>.</b></span><span class="v-largo">Laboratório offshore</span></a>
        <nav class="v-topo-dir"><a class="v-btn v-sec v-peq" href="01-lancamento.html">${IC.lab}<span class="v-largo">Abrir o laboratório</span></a>${admin ? `<a class="v-btn v-sec v-peq" href="admin.html">${IC.admin}<span class="v-largo">Administração</span></a>` : ''}
        <button type="button" class="v-btn v-sec v-peq" data-sair title="Sair">${IC.sair}<span class="v-largo">Sair</span></button></nav></header>
      <main class="v-main">
        <section class="v-heroi"><button type="button" class="v-heroi-av" data-ir aria-label="Alterar foto ou ícone">${S.avatar(u, 'v-av-h')}<span class="v-cam">${IC.camera}</span></button>
          <div class="v-heroi-txt"><h1 data-nome>${esc(u.nome)}</h1><p><span data-empresa>${esc(u.empresa || 'Empresa não informada')}</span><span class="v-ponto">·</span>${esc(u.email)}</p><span class="v-selo">${admin ? 'Administrador' : 'Profissional convidado'}</span></div>
          <dl class="v-numeros"><div><dt>Projetos</dt><dd data-n="projetos">—</dd></div><div><dt>Memoriais</dt><dd data-n="documentos">—</dd></div><div><dt>Sessões</dt><dd data-n="sessoes">—</dd></div></dl></section>
        <nav class="v-abas" aria-label="Seções">${SECOES.map(([id, rot]) => `<a href="#${id}" data-sec="${id}">${rot}</a>`).join('')}</nav>
        <p class="v-msg" hidden></p><div data-conteudo></div></main></div>`);
    app.querySelector('[data-sair]').addEventListener('click', () => { S.sair(); history.replaceState(null, '', location.pathname); telaEntrar('Você saiu da sua conta.'); });
    app.querySelector('[data-ir]').addEventListener('click', () => { if (secaoAtual() === 'perfil') { const b = app.querySelector('[data-arquivo]'); if (b) b.click(); } else location.hash = 'perfil'; });
    const falha = qual => cache['erro_' + qual] ? `<p class="v-vazio">${esc(cache['erro_' + qual])}</p>` : '';
    window.onhashchange = () => { if (app.querySelector('.v-conta')) mostrar(); };
    mostrar();
    if (primeiraVez) aviso('Acesso ativado. Confira seu nome e escolha uma foto ou ícone: eles aparecem nos memoriais e relatórios.', 'ok');
    await Promise.all([carregar('projetos'), carregar('documentos'), carregar('sessoes')]);
    numeros(); if (secaoAtual() !== 'perfil') mostrar();

    function numeros() { ['projetos', 'documentos', 'sessoes'].forEach(k => { const e = app.querySelector(`[data-n="${k}"]`); if (e) e.textContent = cache[k] ? cache[k].length : '—'; }); }
    function mostrar() {
      const sec = secaoAtual();
      app.querySelectorAll('[data-sec]').forEach(a => a.setAttribute('aria-current', a.dataset.sec === sec ? 'page' : 'false'));
      const alvo = app.querySelector('[data-conteudo]');
      alvo.innerHTML = ({ perfil, projetos, memoriais, seguranca })[sec]();
      ligar(sec, alvo);
    }
    async function carregar(qual) {
      const rota = { projetos: 'projetos/listar', documentos: 'documentos/listar', sessoes: 'conta/sessoes' }[qual];
      try { cache[qual] = (await S.pedir(rota))[qual]; cache['erro_' + qual] = null; }
      catch (e) { if (e.sessao === false) { S.sair(); telaEntrar(e.message); throw e; } cache[qual] = []; cache['erro_' + qual] = e.message; }
    }
    function atualizarCabecalho() {
      app.querySelector('.v-heroi-av').innerHTML = `${S.avatar(u, 'v-av-h')}<span class="v-cam">${IC.camera}</span>`;
      app.querySelector('[data-nome]').textContent = u.nome;
      app.querySelector('[data-empresa]').textContent = u.empresa || 'Empresa não informada';
    }

    function perfil() {
      const atual = u.avatar || '';
      return `<form class="v-painel v-perfil" novalidate data-perfil>
        <div class="v-bloco"><h2>Foto ou ícone</h2><p class="v-nota">Aparece no topo do laboratório, na sua conta e no bloco de responsável técnico dos relatórios.</p>
          <div class="v-escolha"><div class="v-previa" data-previa>${S.avatar({ ...u, avatar: atual }, 'v-av-p')}</div>
            <div class="v-escolha-acoes"><label class="v-btn v-sec v-peq">${IC.camera}<span>Enviar foto</span><input type="file" accept="image/*" data-arquivo hidden></label>
            <button type="button" class="v-btn v-txt v-peq" data-iniciais>Usar iniciais</button></div></div>
          <div class="v-icones" role="radiogroup" aria-label="Ícones">${Object.entries(S.ICONES).map(([id, [rot]]) => `<button type="button" role="radio" class="v-icone" data-icone="${id}" aria-checked="${atual === 'icone:' + id}" title="${esc(rot)}">${S.avatar({ avatar: 'icone:' + id }, 'v-av-i')}<span>${esc(rot)}</span></button>`).join('')}</div>
          <p class="v-nota">Quer usar o logotipo da sua empresa? Envie a imagem dele em “Enviar foto”.</p></div>
        <div class="v-bloco"><h2>Dados do responsável</h2>
          <div class="v-grade">${campo('nome', 'pessoa', 'Nome completo', `required maxlength="80" value="${esc(u.nome)}" autocomplete="name"`)}${campo('empresa', 'empresa', 'Empresa', `maxlength="80" value="${esc(u.empresa || '')}" autocomplete="organization"`)}</div>
          <p class="v-nota">Assim sai nos memoriais e nos relatórios em PDF:</p>
          <div class="v-assinatura" data-assinatura></div></div>
        <div class="v-perfil-pe"><button class="v-btn v-auto" type="submit">Salvar alterações</button></div></form>`;
    }
    function projetos() {
      const lista = cache.projetos, atual = S.projetoAtivo();
      if (!lista) return '<section class="v-painel"><p class="v-vazio">Carregando…</p></section>';
      return `<section class="v-painel"><header class="v-painel-cab"><div><h2>Projetos</h2><p class="v-nota">Seus estudos salvos no servidor. Só você tem acesso a eles.</p></div><button type="button" class="v-btn v-peq v-auto" data-novo>+ Novo projeto</button></header>${falha('projetos')}
        ${lista.length ? `<div class="v-lista">${lista.map(p => `<div class="v-item"><span class="v-item-ic">${IC.pasta}</span>
          <div class="v-item-txt"><b>${esc(p.nome)}</b>${atual && atual.id === p.id ? '<span class="v-selo">Aberto aqui</span>' : ''}<small>Versão ${esc(p.versao)} · ${quando(p.atualizado_em)}</small></div>
          <div class="v-item-acoes"><button class="v-btn v-peq" data-abrir="${esc(p.id)}">Abrir</button><button class="v-btn v-txt v-peq" data-ren="${esc(p.id)}" data-nome="${esc(p.nome)}">Renomear</button><button class="v-btn v-txt v-peq v-vermelho" data-exc="${esc(p.id)}" data-nome="${esc(p.nome)}">Excluir</button></div></div>`).join('')}</div>`
          : `<div class="v-vazio-g">${IC.pasta}<b>Nenhum projeto ainda</b><p>Ajuste os parâmetros no laboratório e salve pela barra do topo, ou crie um aqui com os dados deste navegador.</p></div>`}</section>`;
    }
    function memoriais() {
      const lista = cache.documentos;
      if (!lista) return '<section class="v-painel"><p class="v-vazio">Carregando…</p></section>';
      return `<section class="v-painel"><header class="v-painel-cab"><div><h2>Memoriais</h2><p class="v-nota">Emitidos pelo servidor, com número e código de verificação.</p></div></header>${falha('documentos')}
        ${lista.length ? `<div class="v-lista">${lista.map(d => `<a class="v-item v-item-link" href="documento.html#id=${esc(d.id)}" target="_blank" rel="noopener"><span class="v-item-ic">${IC.doc}</span>
          <div class="v-item-txt"><b>${esc(d.numero)}</b><small>${esc(d.projeto)} · ${quando(d.emitido_em)}</small></div><span class="v-seta">${IC.seta}</span></a>`).join('')}</div>`
          : `<div class="v-vazio-g">${IC.doc}<b>Nenhum memorial emitido</b><p>Use “Emitir memorial” na barra do projeto, dentro do laboratório.</p></div>`}</section>`;
    }
    function seguranca() {
      const lista = cache.sessoes;
      return `<section class="v-painel"><header class="v-painel-cab"><div><h2>Como você entra</h2></div></header><div class="v-lista">
          <div class="v-item"><span class="v-item-ic">${IC.senha}</span><div class="v-item-txt"><b>Senha</b><small>Para trocar, peça ao administrador um novo link de acesso.</small></div></div>
          <div class="v-item"><span class="v-item-ic">${IC.celular}</span><div class="v-item-txt"><b>Verificação em duas etapas</b><small>Aplicativo autenticador</small></div><span class="v-status">Ativada</span></div></div></section>
        <section class="v-painel"><header class="v-painel-cab"><div><h2>Seus dispositivos</h2><p class="v-nota">Onde sua conta está conectada agora.</p></div>
          ${lista && lista.length > 1 ? '<button type="button" class="v-btn v-sec v-peq v-auto" data-outras>Sair dos outros</button>' : ''}</header>${falha('sessoes')}
          ${lista ? `<div class="v-lista">${lista.map(x => { const a = aparelho(x.agente); return `<div class="v-item"><span class="v-item-ic">${a.movel ? IC.celular : IC.tela}</span><div class="v-item-txt"><b>${esc(a.nome)}</b>${x.atual ? '<span class="v-selo">Este dispositivo</span>' : ''}<small>Entrou em ${quando(x.criada_em)} · ativo em ${quando(x.ultima_atividade)}</small></div></div>`; }).join('')}</div>` : '<p class="v-vazio">Carregando…</p>'}</section>`;
    }

    function ligar(sec, alvo) {
      const recarregar = async qual => { await carregar(qual); numeros(); mostrar(); };
      if (sec === 'perfil') {
        const f = alvo.querySelector('[data-perfil]'); let escolha = u.avatar || '';
        const assinatura = () => {
          const fd = new FormData(f), nome = String(fd.get('nome') || '').trim() || u.nome, emp = String(fd.get('empresa') || '').trim();
          alvo.querySelector('[data-assinatura]').innerHTML = `${S.avatar({ nome, avatar: escolha }, 'v-av-a')}<div><span>Responsável técnico</span><b>${esc(nome)}</b><small>${esc([emp, u.email].filter(Boolean).join(' · '))}</small></div>`;
          alvo.querySelector('[data-previa]').innerHTML = S.avatar({ nome, avatar: escolha }, 'v-av-p');
          alvo.querySelectorAll('[data-icone]').forEach(b => b.setAttribute('aria-checked', String(escolha === 'icone:' + b.dataset.icone)));
        };
        assinatura(); f.addEventListener('input', assinatura);
        alvo.querySelectorAll('[data-icone]').forEach(b => b.addEventListener('click', () => { escolha = 'icone:' + b.dataset.icone; assinatura(); }));
        alvo.querySelector('[data-iniciais]').addEventListener('click', () => { escolha = ''; assinatura(); });
        alvo.querySelector('[data-arquivo]').addEventListener('change', async ev => {
          const arq = ev.target.files && ev.target.files[0]; ev.target.value = ''; if (!arq) return;
          try { escolha = await reduzirImagem(arq); assinatura(); aviso(''); } catch (e) { aviso(e.message); }
        });
        enviar(f, async fd => {
          const r = await S.pedir('conta/perfil', { nome: String(fd.get('nome') || '').trim(), empresa: String(fd.get('empresa') || '').trim(), avatar: escolha });
          u = r.usuario; S.guardar({ ...S.sessao(), usuario: u }); atualizarCabecalho(); assinatura();
          aviso('Perfil salvo. Os próximos memoriais e relatórios já saem com estes dados.', 'ok');
        });
      }
      if (sec === 'projetos' && cache.projetos) {
        alvo.querySelector('[data-novo]').addEventListener('click', async () => {
          const nome = await dialogo({ titulo: 'Novo projeto', texto: 'Criado com os dados que estão neste navegador.', valor: 'Estudo ' + new Date().toLocaleDateString('pt-BR'), confirmar: 'Criar' });
          if (!nome) return;
          try { const r = await S.pedir('projetos/criar', { nome, dados: S.dadosLocais() }); S.definirProjeto({ id: r.id, nome: r.nome, versao: r.versao }); recarregar('projetos'); } catch (e) { aviso(e.message); }
        });
        alvo.querySelectorAll('[data-abrir]').forEach(b => b.addEventListener('click', async () => { try { const r = await S.pedir('projetos/abrir', { id: b.dataset.abrir }); S.aplicarDados(r.dados); S.definirProjeto({ id: r.id, nome: r.nome, versao: r.versao }); location.href = volta || '01-lancamento.html'; } catch (e) { aviso(e.message); } }));
        alvo.querySelectorAll('[data-ren]').forEach(b => b.addEventListener('click', async () => {
          const nome = await dialogo({ titulo: 'Renomear projeto', valor: b.dataset.nome, confirmar: 'Salvar' }); if (!nome || nome === b.dataset.nome) return;
          try { await S.pedir('projetos/renomear', { id: b.dataset.ren, nome }); const a = S.projetoAtivo(); if (a && a.id === b.dataset.ren) S.definirProjeto({ ...a, nome }); recarregar('projetos'); } catch (e) { aviso(e.message); }
        }));
        alvo.querySelectorAll('[data-exc]').forEach(b => b.addEventListener('click', async () => {
          const ok = await dialogo({ titulo: `Excluir “${b.dataset.nome}”?`, texto: 'Os memoriais já emitidos continuam no histórico.', confirmar: 'Excluir', perigo: true }); if (!ok) return;
          try { await S.pedir('projetos/excluir', { id: b.dataset.exc }); const a = S.projetoAtivo(); if (a && a.id === b.dataset.exc) S.definirProjeto(null); recarregar('projetos'); } catch (e) { aviso(e.message); }
        }));
      }
      if (sec === 'seguranca') {
        const b = alvo.querySelector('[data-outras]');
        if (b) b.addEventListener('click', async () => {
          const ok = await dialogo({ titulo: 'Sair dos outros dispositivos?', texto: 'Você continua conectado só neste navegador.', confirmar: 'Sair dos outros' }); if (!ok) return;
          try { const r = await S.pedir('conta/encerrar-outras'); await recarregar('sessoes'); aviso(`${qtd(r.encerradas, 'sessão encerrada', 'sessões encerradas')}.`, 'ok'); } catch (e) { aviso(e.message); }
        });
      }
    }
  }

  if (convite) fluxoConvite(); else if (S.sessao()) minhaConta(); else telaEntrar();
})();
