'use strict';

const path = require('path');
const fs = require('fs');
const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');
const t = require('core-util-is');
const is = require('..');

const nowDate = new Date();
const nowNumber = Date.now();
const shortString = '一点点点中文abc';
const longString = fs.readFileSync(path.join(__dirname, '../index.js'), 'utf8');
const smallBuffer = Buffer.alloc(100);
const bigBuffer = Buffer.alloc(1024 * 1024);
const newRegExpInstance = new RegExp('foobar');
const regExpInstance = /foobar/;

console.log('is.regExp(nowDate): %s', is.regExp(nowDate));
console.log('is.regExp(nowNumber): %s', is.regExp(nowNumber));
console.log('is.regExp(shortString): %s', is.regExp(shortString));
console.log('is.regExp(longString): %s', is.regExp(longString));
console.log('is.regExp(smallBuffer): %s', is.regExp(smallBuffer));
console.log('is.regExp(bigBuffer): %s', is.regExp(bigBuffer));
console.log('is.regExp(newRegExpInstance): %s', is.regExp(newRegExpInstance));
console.log('is.regExp(regExpInstance): %s', is.regExp(regExpInstance));

console.log('t.isRegExp(nowDate): %s', t.isRegExp(nowDate));
console.log('t.isRegExp(nowNumber): %s', t.isRegExp(nowNumber));
console.log('t.isRegExp(shortString): %s', t.isRegExp(shortString));
console.log('t.isRegExp(longString): %s', t.isRegExp(longString));
console.log('t.isRegExp(smallBuffer): %s', t.isRegExp(smallBuffer));
console.log('t.isRegExp(bigBuffer): %s', t.isRegExp(bigBuffer));
console.log('t.isRegExp(newRegExpInstance): %s', t.isRegExp(newRegExpInstance));
console.log('t.isRegExp(regExpInstance): %s', t.isRegExp(regExpInstance));


const suite = new Benchmark.Suite();

suite
.add('is.regExp(nowDate)', () => {
  is.regExp(nowDate);
})
.add('is.regExp(nowNumber)', () => {
  is.regExp(nowNumber);
})
.add('is.regExp(shortString)', () => {
  is.regExp(shortString);
})
.add('is.regExp(longString)', () => {
  is.regExp(longString);
})
.add('is.regExp(smallBuffer)', () => {
  is.regExp(smallBuffer);
})
.add('is.regExp(bigBuffer)', () => {
  is.regExp(bigBuffer);
})
.add('is.regExp(newRegExpInstance)', () => {
  is.regExp(newRegExpInstance);
})
.add('is.regExp(regExpInstance)', () => {
  is.regExp(regExpInstance);
})

.add('t.isRegExp(nowDate)', () => {
  t.isRegExp(nowDate);
})
.add('t.isRegExp(nowNumber)', () => {
  t.isRegExp(nowNumber);
})
.add('t.isRegExp(shortString)', () => {
  t.isRegExp(shortString);
})
.add('t.isRegExp(longString)', () => {
  t.isRegExp(longString);
})
.add('t.isRegExp(smallBuffer)', () => {
  t.isRegExp(smallBuffer);
})
.add('t.isRegExp(bigBuffer)', () => {
  t.isRegExp(bigBuffer);
})
.add('t.isRegExp(newRegExpInstance)', () => {
  t.isRegExp(newRegExpInstance);
})
.add('t.isRegExp(regExpInstance)', () => {
  t.isRegExp(regExpInstance);
})

.on('cycle', event => {
  benchmarks.add(event.target);
})
.on('start', event => {
  console.log('\n  is.regExp(obj) Benchmark\n  node version: %s, date: %s\n  Starting...',
    process.version, Date());
})
.on('complete', () => {
  benchmarks.log();
})
.run({ 'async': false });

// node version: v8.1.4, date: Wed Jul 19 2017 14:16:26 GMT+0800 (CST)
//   Starting...
//   16 tests completed.
//
//   is.regExp(nowDate)            x 29,425,671 ops/sec ±1.73% (84 runs sampled)
//   is.regExp(nowNumber)          x 37,842,887 ops/sec ±1.18% (83 runs sampled)
//   is.regExp(shortString)        x 37,180,999 ops/sec ±1.16% (81 runs sampled)
//   is.regExp(longString)         x 37,835,144 ops/sec ±1.02% (85 runs sampled)
//   is.regExp(smallBuffer)        x 24,988,153 ops/sec ±1.51% (83 runs sampled)
//   is.regExp(bigBuffer)          x 25,006,147 ops/sec ±1.14% (86 runs sampled)
//   is.regExp(newRegExpInstance)  x 37,693,104 ops/sec ±1.06% (86 runs sampled)
//   is.regExp(regExpInstance)     x 37,186,261 ops/sec ±1.69% (83 runs sampled)
//   t.isRegExp(nowDate)           x 12,413,210 ops/sec ±1.74% (85 runs sampled)
//   t.isRegExp(nowNumber)         x 16,211,510 ops/sec ±1.78% (85 runs sampled)
//   t.isRegExp(shortString)       x 11,914,968 ops/sec ±1.01% (88 runs sampled)
//   t.isRegExp(longString)        x 12,012,244 ops/sec ±1.44% (87 runs sampled)
//   t.isRegExp(smallBuffer)       x  3,727,496 ops/sec ±1.54% (82 runs sampled)
//   t.isRegExp(bigBuffer)         x  3,820,998 ops/sec ±1.01% (88 runs sampled)
//   t.isRegExp(newRegExpInstance) x 14,799,622 ops/sec ±1.01% (86 runs sampled)
//   t.isRegExp(regExpInstance)    x 14,935,675 ops/sec ±0.88% (89 runs sampled)
