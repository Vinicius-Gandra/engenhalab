const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.resolve(__dirname, '../../assets/js/analytics.js'), 'utf8');

function setup({ saved = null, pathname = '/index.html', embedded = false, storageFails = false, measurementId = 'G-TEST123456' } = {}) {
  const listeners = {}, documentListeners = {}, writes = [], cookies = [];
  function element(tag) {
    return { tag, children: [], hidden: false, classList: { add() {} },
      appendChild(el) { this.children.push(el); }, setAttribute() {}, focus() {},
      addEventListener(name, fn) { this[name] = fn; },
      querySelector(tag) { for (const child of this.children) { if (child.tag === tag) return child; const found = child.querySelector(tag); if (found) return found; } return null; }
    };
  }
  const document = { head: element('head'), body: element('body'), readyState: 'complete',
    referrer: 'https://example.test/source?email=private@example.test#password',
    createElement: element, querySelector() { return null; }, addEventListener(name, fn) { documentListeners[name] = fn; } };
  Object.defineProperty(document, 'cookie', { get() { return '_ga=test; calculation=keep'; }, set(value) { cookies.push(value); } });
  const window = { ENGENHALAB_ANALYTICS: { measurementId, pages: { '/index.html': 'EngenhaLab' }, actions: { '/index.html': { 'export-csv': 'export_csv' } } },
    addEventListener(name, fn) { listeners[name] = fn; } };
  window.self = window; window.top = embedded ? {} : window;
  const context = { window, document, location: { origin: 'https://engenhalab.com.br', hostname: 'engenhalab.com.br', pathname, search: '?password=secret', hash: '#token=secret' }, URL,
    localStorage: { getItem() { if (storageFails) throw Error('Unavailable'); return saved; }, setItem(key, value) { if (storageFails) throw Error('Unavailable'); saved = value; writes.push([key, value]); } } };
  vm.runInNewContext(source, context);
  const scripts = () => document.head.children.filter(el => el.tag === 'script');
  const banner = document.body.children.find(el => el.tag === 'section');
  const buttons = banner ? banner.children[1].children : [];
  return { window, document, scripts, banner, buttons, writes, cookies, listeners, documentListeners };
}

test('não carrega o Google antes da escolha ou após recusa', () => {
  const view = setup(); assert.equal(view.scripts().length, 0);
  view.buttons[0].click(); assert.equal(view.scripts().length, 0); assert.equal(view.banner.hidden, true);
  assert.equal(view.window['ga-disable-G-TEST123456'], true);
  const denied = setup({ saved: JSON.stringify({ at: Date.now(), value: 'denied' }) });
  assert.equal(denied.scripts().length, 0); assert.equal(denied.banner.hidden, true);
});

test('coleta somente após permissão e retira consultas e fragmentos dos endereços', () => {
  const view = setup(); view.buttons[1].click(); assert.equal(view.scripts().length, 1);
  const commands = view.window.dataLayer.map(args => Array.from(args));
  const encoded = JSON.stringify(commands);
  assert.equal(encoded.includes('secret'), false); assert.equal(encoded.includes('private@example.test'), false);
  const pageContext = commands.find(args => args[0] === 'set')[1];
  assert.equal(pageContext.page_location, 'https://engenhalab.com.br/');
  assert.equal(pageContext.page_referrer, 'https://example.test/');
  assert.equal(commands.filter(args => args[0] === 'event' && args[1] === 'page_view').length, 1);
  assert.equal(commands.find(args => args[0] === 'config')[2].allow_google_signals, false);
  view.buttons[1].click(); assert.equal(view.scripts().length, 1);
  view.buttons[0].click(); assert.equal(view.window['ga-disable-G-TEST123456'], true);
  assert.ok(view.cookies.some(value => value.startsWith('_ga=')));
  assert.equal(view.cookies.some(value => value.startsWith('calculation=')), false);
});

test('escolha expirada, páginas privadas, iframes e configuração incompleta ficam sem coleta', () => {
  const expired = setup({ saved: JSON.stringify({ at: Date.now() - 181 * 86400000, value: 'granted' }) });
  assert.equal(expired.scripts().length, 0); assert.equal(expired.banner.hidden, false);
  for (const options of [{ pathname: '/Acesso.html' }, { pathname: '/maquinas-eletricas/relatorio-geral.html' }, { embedded: true }, { measurementId: '' }]) {
    const view = setup(options); assert.equal(view.scripts().length, 0); assert.equal(view.banner, undefined);
  }
});

test('recusa funciona mesmo com armazenamento indisponível', () => {
  const view = setup({ storageFails: true }); view.buttons[0].click();
  assert.equal(view.banner.hidden, true); assert.equal(view.scripts().length, 0);
});

test('páginas públicas têm integração única e relatórios e acesso ficam de fora', () => {
  const root = path.resolve(__dirname, '../..');
  const config = {}; vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/js/analytics-config.js'), 'utf8'), { window: config });
  for (const pathname of Object.keys(config.ENGENHALAB_ANALYTICS.pages)) {
    const file = path.join(root, pathname === '/' ? 'index.html' : pathname);
    const html = fs.readFileSync(file, 'utf8');
    assert.equal((html.match(/src="\/assets\/js\/analytics\.js"/g) || []).length, 1, pathname);
    assert.equal((html.match(/src="\/assets\/js\/analytics-config\.js"/g) || []).length, 1, pathname);
  }
  for (const name of ['Acesso.html', 'maquinas-eletricas/relatorio-geral.html', 'maquinas-eletricas/02-mecanica-relatorio.html']) {
    assert.equal(fs.readFileSync(path.join(root, name), 'utf8').includes('/assets/js/analytics.js'), false, name);
  }
});

test('eventos respeitam consentimento e ignoram informações não permitidas', () => {
  const view = setup();
  const event = { target: { closest: () => ({ id: 'export-csv' }) } };
  view.documentListeners.click(event);
  assert.equal(view.window.EngenhaAnalytics.trackAction('export_csv'), false);
  view.buttons[1].click();
  view.documentListeners.click(event);
  assert.equal(view.window.EngenhaAnalytics.trackAction('calculation_completed'), true);
  assert.equal(view.window.EngenhaAnalytics.trackAction('email=private'), false);
  const events = view.window.dataLayer.map(args => Array.from(args))
    .filter(args => args[0] === 'event' && args[1] === 'lab_action');
  assert.deepEqual(events.map(args => args[2].action), ['export_csv', 'calculation_completed']);
  assert.equal(events[0][2].laboratory, 'portal');
  assert.equal(JSON.stringify(events).includes('private'), false);
  view.buttons[0].click();
  assert.equal(view.window.EngenhaAnalytics.trackAction('export_csv'), false);
});

test('IDs dos controles monitorados existem nas páginas', () => {
  const root = path.resolve(__dirname, '../..');
  const config = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/js/analytics-config.js'), 'utf8'), { window: config });
  for (const [pathname, controls] of Object.entries(config.ENGENHALAB_ANALYTICS.actions)) {
    const html = fs.readFileSync(path.join(root, pathname), 'utf8');
    for (const id of Object.keys(controls)) assert.ok(html.includes('id="' + id + '"'), pathname + ' ' + id);
  }
});
