/* Atualiza uma vez os coeficientes de cravação guardados no navegador para os padrões atuais de cada modelo. */
(function () {
  'use strict';
  var CHAVE = 'offshore-project-v8', MARCA = 'offshore-cravacao-rev', REV = '2';
  var PADRAO = { 24: { nc: 9, alphaT: 0.515, cdSoil: 2.4 }, 35: { nc: 9, alphaT: 0.515, cdSoil: 2.4 }, 66: { nc: 7, alphaT: 0.176, cdSoil: 2.4 }, 120: { nc: 12, alphaT: 0.3287, cdSoil: 0.23 } };
  try {
    if (localStorage.getItem(MARCA) === REV) return;
    var p = JSON.parse(localStorage.getItem(CHAVE) || 'null');
    if (p && typeof p === 'object') {
      var d = PADRAO[p.model] || PADRAO[120];
      for (var k in d) p[k] = d[k];
      localStorage.setItem(CHAVE, JSON.stringify(p));
    }
    localStorage.setItem(MARCA, REV);
  } catch (e) { /* sem armazenamento */ }
})();

/* Atualiza uma vez os coeficientes do trecho enterrado da catenária guardados no navegador, se ainda forem os antigos padrões. */
(function () {
  'use strict';
  var CHAVE = 'catenaria-lab-case-v1', MARCA = 'offshore-catenaria-rev', REV = '1';
  try {
    if (localStorage.getItem(MARCA) === REV) return;
    var c = JSON.parse(localStorage.getItem(CHAVE) || 'null');
    if (c && typeof c === 'object') {
      if (c.se === 2.95) c.se = 2;
      if (c.et === 10) c.et = 11.3;
      if (c.nc === 11) c.nc = 11.42;
      localStorage.setItem(CHAVE, JSON.stringify(c));
    }
    localStorage.setItem(MARCA, REV);
  } catch (e) { /* sem armazenamento */ }
})();
