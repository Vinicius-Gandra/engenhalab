/* Idioma: em inglês, esconde a página até os textos serem trocados (evita ver o português piscar) */
(function () {
  try {
    if (localStorage.getItem('vg-lang') !== 'en') return;
    var h = document.documentElement; h.lang = 'en'; h.setAttribute('data-lang-pending', '');
    var s = document.createElement('style'); s.textContent = 'html[data-lang-pending] body{visibility:hidden}'; document.head.appendChild(s);
    setTimeout(function () { h.removeAttribute('data-lang-pending'); }, 2500);
  } catch (e) { /* sem armazenamento */ }
})();
