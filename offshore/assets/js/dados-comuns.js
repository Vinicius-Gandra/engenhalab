/* Laboratório offshore · dados comuns
   Torpedo, solo, lâmina e profundidade vêm do projeto de Lançamento e cravação.
   Nas demais páginas esses campos saem do formulário e aparecem num resumo só de leitura. */
(function () {
  'use strict';
  var PROJETO = 'offshore-project-v8';
  var CASO_CAP = 'capacidade-axial-caso-v1';
  var MODELO_CAP = 'capacidade-axial-modelo-v1';

  // geometria pública dos modelos (a mesma exibida em Lançamento e na Estaca 3D)
  var MODELOS = {
    24: { nome: 'T-24', d: 0.762, l: 13.35, aletas: 0, volume: 3.381 },
    35: { nome: 'T-35', d: 0.762, l: 13.85, aletas: 4, volume: 4.594104307352 },
    66: { nome: 'T-66', d: 1.1755, l: 14, aletas: 4, volume: 9.249,
      trechos: [{ length: 9.0, finStart: 0.658, finEnd: 0.658 }, { length: 5.0, finStart: 0, finEnd: 0 }], volumeCap: 8.319 },
    120: { nome: 'T-120', d: 1.219, l: 20.93, aletas: 4, volume: 16.21 }
  };
  // trechos de referência do T-120 (padrão da página de capacidade axial)
  var TRECHOS_120 = [
    { length: 6.485, finStart: 0, finEnd: 0 },
    { length: 1.385, finStart: 0.3, finEnd: 1.219 },
    { length: 10.26, finStart: 1.219, finEnd: 1.219 },
    { length: 1.485, finStart: 1.219, finEnd: 0 },
    { length: 0.485, finStart: 0, finEnd: 0 }
  ];
  var VOLUME_120 = 16.5;

  function ler(chave) { try { var v = JSON.parse(localStorage.getItem(chave) || 'null'); return v && typeof v === 'object' ? v : null; } catch (e) { return null; } }
  function gravar(chave, v) { try { localStorage.setItem(chave, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  function num(x, alt) { return typeof x === 'number' && isFinite(x) ? x : alt; }
  function r3(x) { return Math.round(x * 1000) / 1000; }

  function projeto() {
    var p = ler(PROJETO) || {};
    var m = MODELOS[p.model] ? Number(p.model) : 120;
    return {
      modelo: m,
      embed: num(p.embed, 20),
      su0: num(p.su0, 1),
      k: num(p.suGradient, 1.15),
      gama: num(p.gammaSoil, 4),
      nc: num(p.nc, 9),
      lamina: num(p.water, 2000)
    };
  }

  function trechosDo(modelo) {
    if (MODELOS[modelo].trechos) return MODELOS[modelo].trechos.map(function (t) { return { length: t.length, finStart: t.finStart, finEnd: t.finEnd }; });
    if (modelo === 120) return TRECHOS_120.map(function (s) { return { length: s.length, finStart: s.finStart, finEnd: s.finEnd }; });
    var M = MODELOS[modelo], fl = M.l / MODELOS[120].l, fd = M.aletas ? M.d / MODELOS[120].d : 0;
    return TRECHOS_120.map(function (s) { return { length: r3(s.length * fl), finStart: r3(s.finStart * fd), finEnd: r3(s.finEnd * fd) }; });
  }

  /* Capacidade axial: o caso salvo recebe os dados do projeto antes de a página carregar. */
  function prepararCapacidade() {
    var P = projeto(), M = MODELOS[P.modelo];
    var caso = ler(CASO_CAP) || {
      innerDiameter: 0, alphaMode: 'auto', alphaFixed: 0.8, factor: 2.5,
      steelDensity: 7850, fluidDensity: 1000, compressionLoad: 2200, tensionLoad: 1400
    };
    caso.headDepth = P.embed; caso.diameter = M.d; caso.fins = M.aletas;
    caso.su0 = P.su0; caso.suGradient = P.k; caso.gammaSoil = P.gama; caso.nc = P.nc;
    if (!(caso.innerDiameter < M.d)) caso.innerDiameter = 0;
    var anterior = null; try { anterior = localStorage.getItem(MODELO_CAP); } catch (e) { /* sem armazenamento */ }
    var semTrechos = !Array.isArray(caso.segments) || !caso.segments.length;
    var soma = semTrechos ? 0 : caso.segments.reduce(function (s, t) { return s + (Number(t.length) || 0); }, 0);
    var trocou = anterior === null ? (P.modelo !== 120 && Math.abs(soma - 20.1) < 0.01) : String(P.modelo) !== anterior;
    if (anterior === null && !trocou) try { localStorage.setItem(MODELO_CAP, String(P.modelo)); } catch (e) { /* sem armazenamento */ }
    if (semTrechos || trocou) {
      caso.segments = trechosDo(P.modelo);
      caso.submergedVolume = P.modelo === 120 ? VOLUME_120 : r3(M.volumeCap || M.volume);
      try { localStorage.setItem(MODELO_CAP, String(P.modelo)); } catch (e) { /* sem armazenamento */ }
    }
    gravar(CASO_CAP, caso);
  }

  var PAGINAS = {
    'catenaria': {
      campos: [['su0', 'Su₀', 'kPa'], ['gradient', 'Gradiente k', 'kPa/m'], ['depth', 'Profundidade do olhal', 'm'], ['targetHeight', 'Lâmina d’água', 'm']]
    },
    'capacidade-axial': {
      antes: prepararCapacidade,
      campos: [['headDepth', 'Início enterrado', 'm'], ['diameter', 'Diâmetro externo', 'm'], ['fins', 'Aletas', ''], ['su0', 'Su₀', 'kPa'], ['suGradient', 'Gradiente k', 'kPa/m'], ['gammaSoil', 'γ′', 'kN/m³'], ['nc', 'Nc', '']],
      nota: function (P) { return P.modelo === 120 || MODELOS[P.modelo].trechos ? '' : 'Trechos e volume gerados em escala a partir do T-120. Ajuste se tiver a geometria do ' + MODELOS[P.modelo].nome + '.'; }
    },
    'carga-lateral': {
      campos: [['D', 'Diâmetro externo', 'm'], ['length', 'Comprimento enterrado', 'm'], ['su0', 'Su₀', 'kPa'], ['suGradient', 'Gradiente k', 'kPa/m'], ['gamma', 'γ′', 'kN/m³']]
    }
  };

  var pagina = (location.pathname.match(/\d+-([\w-]+)\.html$/) || [])[1];
  var cfg = PAGINAS[pagina];
  if (!cfg) return;
  if (cfg.antes) cfg.antes();

  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }

  function montar() {
    var form = document.querySelector('form#case-form, form#lateral-form');
    if (!form || form.querySelector('.dc-proj')) return;
    var P = projeto();
    var caixa = el('div', 'dc-proj');
    var cab = el('div', 'dc-cab');
    cab.appendChild(el('span', 'dc-tit', 'Dados do projeto'));
    var a = el('a', 'dc-link', 'Alterar em Lançamento e cravação →'); a.href = '01-lancamento.html';
    cab.appendChild(a);
    caixa.appendChild(cab);
    var dl = el('dl', 'dc-lista');
    function item(rot, val) { var d = el('div'); d.appendChild(el('dt', null, rot)); d.appendChild(el('dd', null, val)); dl.appendChild(d); }
    item('Torpedo', MODELOS[P.modelo].nome);
    cfg.campos.forEach(function (c) {
      var i = form.querySelector('[name="' + c[0] + '"]');
      if (!i) return;
      var rotulo = i.closest('label');
      if (rotulo) rotulo.classList.add('dc-oculto');
      i.readOnly = true; i.tabIndex = -1;
      item(c[1], (i.value || '—') + (c[2] ? ' ' + c[2] : ''));
    });
    caixa.appendChild(dl);
    var nota = cfg.nota && cfg.nota(P);
    if (nota) caixa.appendChild(el('p', 'dc-nota', nota));
    form.insertBefore(caixa, form.firstChild);
    // grupos que ficaram sem campo visível somem
    form.querySelectorAll('details.input-group').forEach(function (g) {
      var visiveis = g.querySelectorAll('.fields > label:not(.dc-oculto), .segment-inputs');
      if (!visiveis.length) g.classList.add('dc-oculto');
    });
  }

  // "Restaurar exemplo" volta ao T-120 da página; os dados do projeto são reaplicados
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('button');
    if (!b || pagina !== 'capacidade-axial' || !/restaurar/i.test(b.textContent)) return;
    setTimeout(function () { try { localStorage.removeItem(MODELO_CAP); } catch (e) { /* sem armazenamento */ } prepararCapacidade(); location.reload(); }, 60);
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(montar, 0); });
  else setTimeout(montar, 0);
})();
