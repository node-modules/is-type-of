const assert = require('assert');
const is = require('..');
const fs = require('fs');

const declareContent = fs.readFileSync(__dirname + '/../index.d.ts', { encoding: 'utf-8' });
const declareTypes = declareContent
  .split('\n')
  .filter(line => line.startsWith('export'))
  .map(exportLine => {
    const regexs = [/^export function (\w+)/, /^export { \w+ as (\w+) }/, /^export let (\w+)/];
    const match = regexs.map(reg => exportLine.match(reg)).find(v => v);
    return match && match[1];
  })
  .filter(Boolean);

const methods = Object.keys(is);

describe('type declare', () => {
  it('should declare all methods', () => {
    const notDeclare = methods.filter(m => !declareTypes.includes(m));
    assert(notDeclare.length === 0);
  });

  it('should not declare more methods', () => {
    const moreDeclare = declareTypes.filter(d => !methods.includes(d));
    assert(moreDeclare.length === 0);
  });
});
  