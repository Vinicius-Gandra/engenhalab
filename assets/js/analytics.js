/* A coleta só inicia após uma escolha explícita do visitante. */
(function () {
  'use strict';
  var config = window.ENGENHALAB_ANALYTICS || {};
  var id = config.measurementId || '';
  var pages = config.pages || {};
  var path = location.pathname;
  if (!Object.hasOwn(pages, path) || window.top !== window.self) return;
  var storageKey = 'engenhalab.analytics-choice.v1';
  var maxAge = 180 * 86400000;
  var started = false;
  var banner;
  var sessionChoice = null;
  function choice() {
    if (sessionChoice) return sessionChoice;
    try {
      var saved = JSON.parse(localStorage.getItem(storageKey));
      return saved && Date.now() - saved.at >= 0 && Date.now() - saved.at < maxAge &&
        ['granted', 'denied'].includes(saved.value) ? saved.value : null;
    } catch (_) { return null; }
  }
  function tag() { window.dataLayer.push(arguments); }
  function referrer() {
    try {
      var url = new URL(document.referrer);
      return url.origin === location.origin && Object.hasOwn(pages, url.pathname) ?
        url.origin + url.pathname : url.origin + '/';
    } catch (_) { return ''; }
  }
  function start() {
    if (started || !['engenhalab.com.br', 'www.engenhalab.com.br'].includes(location.hostname) ||
        !/^G-[A-Z0-9]{7,}$/.test(id) || choice() !== 'granted') return;
    started = true;
    window['ga-disable-' + id] = false;
    window.dataLayer = window.dataLayer || [];
    tag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    tag('js', new Date());
    tag('set', { page_location: location.origin + path, page_referrer: referrer(), page_title: pages[path] });
    tag('config', id, {
      send_page_view: false, allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: maxAge / 1000, cookie_flags: 'SameSite=Lax;Secure'
    });
    tag('event', 'page_view', { page_location: location.origin + path, page_referrer: referrer(), page_title: pages[path] });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    script.referrerPolicy = 'origin';
    document.head.appendChild(script);
  }
  function clearCookies() {
    var domains = [null, location.hostname, '.' + location.hostname];
    if (location.hostname.endsWith('.engenhalab.com.br')) domains.push('.engenhalab.com.br');
    var segments = location.pathname.split('/');
    var paths = ['/'];
    for (var i = 1; i < segments.length; i++) paths.push(segments.slice(0, i).join('/') || '/');
    document.cookie.split(';').forEach(function (item) {
      var name = item.trim().split('=')[0];
      if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) return;
      domains.forEach(function (domain) {
        paths.forEach(function (cookiePath) {
          document.cookie = name + '=; Max-Age=0; Path=' + cookiePath + '; SameSite=Lax; Secure' + (domain ? '; Domain=' + domain : '');
        });
      });
    });
  }
  function save(value) {
    sessionChoice = value;
    try { localStorage.setItem(storageKey, JSON.stringify({ value: value, at: Date.now() })); } catch (_) { /* A escolha continua válida nesta página. */ }
    if (value === 'granted') {
      if (started) {
        window['ga-disable-' + id] = false;
        tag('consent', 'update', { analytics_storage: 'granted' });
      } else start();
    } else {
      window['ga-disable-' + id] = true;
      if (started) tag('consent', 'update', { analytics_storage: 'denied' });
      clearCookies();
    }
    if (banner) banner.hidden = true;
  }
  function button(text, action) {
    var el = document.createElement('button');
    el.type = 'button'; el.textContent = text; el.addEventListener('click', action); return el;
  }
  function openPreferences() {
    if (!banner) return;
    banner.hidden = false;
    banner.querySelector('button').focus();
  }
  function init() {
    if (!/^G-[A-Z0-9]{7,}$/.test(id)) return;
    var style = document.createElement('link'); style.rel = 'stylesheet'; style.href = '/assets/css/analytics.css'; document.head.appendChild(style);
    banner = document.createElement('section');
    banner.className = 'el-consent'; banner.setAttribute('aria-label', 'Preferências de estatísticas');
    var copy = document.createElement('p');
    copy.textContent = 'Podemos medir visitas e tempo de uso para melhorar o EngenhaLab? ';
    var privacy = document.createElement('a'); privacy.href = '/privacidade.html'; privacy.textContent = 'Saiba mais'; copy.appendChild(privacy);
    banner.appendChild(copy);
    var actions = document.createElement('div'); actions.className = 'el-consent-actions';
    actions.appendChild(button('Recusar', function () { save('denied'); }));
    actions.appendChild(button('Permitir estatísticas', function () { save('granted'); }));
    banner.appendChild(actions); banner.hidden = choice() !== null; document.body.appendChild(banner);
    var settings = button('Privacidade', openPreferences); settings.className = 'el-privacy-settings';
    var footer = document.querySelector('footer');
    (footer || document.body).appendChild(settings);
    if (!footer) settings.classList.add('el-privacy-floating');
    window.EngenhaAnalytics = Object.freeze({ openPreferences: openPreferences });
    start();
  }
  window.addEventListener('storage', function (event) {
    if (event.key !== storageKey) return;
    sessionChoice = null;
    if (choice() !== 'granted') { window['ga-disable-' + id] = true; clearCookies(); }
    else if (started) { window['ga-disable-' + id] = false; tag('consent', 'update', { analytics_storage: 'granted' }); }
    else start();
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
}());
