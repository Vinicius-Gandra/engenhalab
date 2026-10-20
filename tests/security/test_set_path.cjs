const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const source = readFileSync(resolve(__dirname, '../../metalurgia/contabilidade-vanadio.html'), 'utf8');
const setter = source.slice(source.indexOf('function setPath('), source.indexOf('\nlet tm = 0;', source.indexOf('function setPath(')));

function editor() {
  const state = { per: [{ nome: 'Período', lots: [{ id: 'L1', t: 10 }] }], cfg: { metaY: [0.9] }, sig: {}, hf: {} };
  const context = vm.createContext({ DB: state, cur: 0 });
  vm.runInContext(setter, context);
  return { state, context };
}

test('mantém edição de texto, números, listas e porcentagens', () => {
  const { state, context } = editor();
  assert.equal(context.setPath('per.nome', 'Novo período'), true);
  assert.equal(context.setPath('lots.0.id', 'L2'), true);
  assert.equal(context.setPath('lots.0.t', '12.5'), true);
  assert.equal(context.setPath('cfg.metaY.0', '85', '100'), true);
  assert.equal(state.per[0].nome, 'Novo período');
  assert.deepEqual(state.per[0].lots[0], { id: 'L2', t: 12.5 });
  assert.equal(state.cfg.metaY[0], 0.85);
});

test('recusa propriedades de protótipo e caminhos inexistentes sem mutação', () => {
  const { state, context } = editor();
  const before = JSON.stringify(state);
  for (const path of ['__proto__.polluted', 'constructor.prototype.polluted', 'lots.0.__proto__.polluted', 'cfg.constructor.prototype.polluted', 'cfg.metaY.__proto__.polluted', 'lots.9.t', 'cfg.unknown', '', 'cfg..metaY', null]) {
    assert.equal(context.setPath(path, '1'), false, String(path));
  }
  assert.equal(context.setPath('lots.0.t', 'inválido'), false);
  assert.equal(JSON.stringify(state), before);
  assert.equal(vm.runInContext('Object.prototype.polluted', context), undefined);
  assert.equal(Object.prototype.polluted, undefined);
});
