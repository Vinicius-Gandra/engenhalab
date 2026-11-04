/* Laboratório offshore · modelos liberados com o acesso
   Carregado antes de core.js. O T-98 entra na lista de modelos só para quem entrou com acesso
   ao laboratório offshore; sem acesso, um projeto que estava no T-98 volta ao T-120. */
(function () {
  'use strict';
  var PROJETO = 'offshore-project-v8';
  function ler(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  // mesma regra de Sessao.temLab('offshore')
  function comAcesso() {
    var s = ler('engenha-offshore-sessao');
    if (!s || !s.usuario || !(s.expira * 1000 > Date.now())) return false;
    var u = s.usuario;
    return u.papel === 'admin' || (Array.isArray(u.labs) ? u.labs : ['offshore']).indexOf('offshore') >= 0;
  }
  var acesso = comAcesso(), salvo = ler(PROJETO);
  var T98 = {
    name: 'T-98', eye: 0, mass: 98000, volume: 11.1, diameter: 1.067, length: 17, coneLength: 2.1, fallArea: 1.182, fins: 4, geometry: 'arquivo local',
    fallPar: { cdBottom: 1.87, cdTop: 0, ca: 0.6 },
    // padrão de referência do T-98: solo Su = 5 + 2z kPa, St 3, aletas de 0,08 m
    truePar: { alphaT: 0.33, cdSoil: 0.63, nc: 13.6, ncFin: 7.5, beta: 0.123, rateRef: 0.17, st: 3, rhoSoil: 1.613, su0: 5, suGradient: 2, finT: 0.08 }
  };
  // campos que só o T-98 traz no padrão: ao sair dele, voltam ao que a pessoa tinha antes de escolhê-lo
  var PROPRIOS = ['st', 'rhoSoil', 'su0', 'suGradient', 'finT'], ANTES = 'offshore-antes-t98';
  function gravar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  function envolver(L) {
    var salvar = L.saveProject;
    L.saveProject = function (patch) {
      var de = Number(L.project && L.project.model), para = patch && patch.model !== undefined ? Number(patch.model) : de;
      if (para === 98 && de !== 98) { var a = {}; PROPRIOS.forEach(function (k) { a[k] = L.project[k]; }); gravar(ANTES, a); }
      if (de === 98 && para !== 98) {
        var volta = ler(ANTES) || {}, d = L.DEFAULT || {}, extra = {};
        PROPRIOS.forEach(function (k) { if (patch[k] === undefined) extra[k] = volta[k] !== undefined ? volta[k] : d[k]; });
        patch = Object.assign(extra, patch);
      }
      return salvar.call(L, patch);
    };
  }

  function aplicar(L) {
    if (!L || !L.MODELS) return;
    if (!acesso) return;
    L.MODELS[98] = T98;
    envolver(L);
    // core.js troca um modelo que ainda não conhecia pelo T-120: devolve o projeto salvo
    if (salvo && Number(salvo.model) === 98 && L.project && Number(L.project.model) !== 98) { try { L.saveProject(salvo); } catch (e) { /* projeto inválido: fica o T-120 */ } }
    document.addEventListener('DOMContentLoaded', function () {
      var h = document.querySelector('.lx-compare h2');
      if (h) h.textContent = h.textContent.replace('quatro', 'cinco');
      var a = window.AjudaOffshore && window.AjudaOffshore.modelo;
      if (a) a.oque = 'Os cinco torpedos do laboratório: T-24, T-35, T-66, T-98 e T-120, com massa, comprimento e aletas próprios.';
    });
  }

  // Lab é criado por core.js logo a seguir: completa a lista assim que ele existir
  if (window.Lab) aplicar(window.Lab);
  else Object.defineProperty(window, 'Lab', {
    configurable: true,
    get: function () { return undefined; },
    set: function (v) { Object.defineProperty(window, 'Lab', { value: v, writable: true, configurable: true, enumerable: true }); aplicar(v); }
  });

  // saiu da conta com a página aberta: recarrega sem o modelo
  document.addEventListener('engenha-sessao', function () { if (acesso && !comAcesso()) location.reload(); });
})();
