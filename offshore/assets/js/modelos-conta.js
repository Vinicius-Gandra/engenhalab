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
    name: 'T-98', eye: 0.5, mass: 98000, volume: 13.24, diameter: 1.07, length: 16.7, coneLength: 2.1, fallArea: 1.036, fins: 4, geometry: 'arquivo local',
    fallPar: { cdBottom: 1.96, cdTop: 0, ca: 0.6 },
    truePar: { alphaT: 0.35, cdSoil: 1.3, nc: 0, ncFin: 7.5, beta: 0.17, rateRef: 0.17, st: 2.5 }
  };

  function aplicar(L) {
    if (!L || !L.MODELS) return;
    if (!acesso) return;
    // a sensibilidade passa a acompanhar o modelo: 2,5 no T-98 e 1,2 nos demais
    for (var m in L.MODELS) if (L.MODELS[m].truePar && L.MODELS[m].truePar.st === undefined) L.MODELS[m].truePar.st = 1.2;
    L.MODELS[98] = T98;
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
