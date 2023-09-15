const path = require('path');
const fs = require('fs');
const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');
const t = require('core-util-is');
const is = require('is-type-of');
// console.log(require.resolve('is-type-of'));

const nowDate = new Date();
const nowNumber = Date.now();
const shortString = '一点点点中文abc';
const longString = fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8');
const smallBuffer = Buffer.alloc(100);
const bigBuffer = Buffer.alloc(1024 * 1024);

console.log('is.date(nowDate): %s', is.date(nowDate));
console.log('is.date(nowNumber): %s', is.date(nowNumber));
console.log('is.date(shortString): %s', is.date(shortString));
console.log('is.date(longString): %s', is.date(longString));
console.log('is.date(smallBuffer): %s', is.date(smallBuffer));
console.log('is.date(bigBuffer): %s', is.date(bigBuffer));

console.log('t.isDate(nowDate): %s', t.isDate(nowDate));
console.log('t.isDate(nowNumber): %s', t.isDate(nowNumber));
console.log('t.isDate(shortString): %s', t.isDate(shortString));
console.log('t.isDate(longString): %s', t.isDate(longString));
console.log('t.isDate(smallBuffer): %s', t.isDate(smallBuffer));
console.log('t.isDate(bigBuffer): %s', t.isDate(bigBuffer));

const suite = new Benchmark.Suite();

suite
.add('is.date(nowDate)', () => {
  is.date(nowDate);
})
.add('is.date(nowNumber)', () => {
  is.date(nowNumber);
})
.add('is.date(shortString)', () => {
  is.date(shortString);
})
.add('is.date(longString)', () => {
  is.date(longString);
})
.add('is.date(smallBuffer)', () => {
  is.date(smallBuffer);
})
.add('is.date(bigBuffer)', () => {
  is.date(bigBuffer);
})

.add('t.isDate(nowDate)', () => {
  t.isDate(nowDate);
})
.add('t.isDate(nowNumber)', () => {
  t.isDate(nowNumber);
})
.add('t.isDate(shortString)', () => {
  t.isDate(shortString);
})
.add('t.isDate(longString)', () => {
  t.isDate(longString);
})
.add('t.isDate(smallBuffer)', () => {
  t.isDate(smallBuffer);
})
.add('t.isDate(bigBuffer)', () => {
  t.isDate(bigBuffer);
})

.on('cycle', event => {
  benchmarks.add(event.target);
})
.on('start', event => {
  console.log('\n  is.date(obj) Benchmark\n  node version: %s, date: %s\n  Starting...',
    process.version, Date());
})
.on('complete', () => {
  benchmarks.log();
})
.run({ 'async': false });

// node version: v8.1.4, date: Wed Jul 19 2017 11:34:05 GMT+0800 (CST)
//   Starting...
//   12 tests completed.
//
//   is.date(nowDate)      x 37,744,799 ops/sec ±0.89% (85 runs sampled)
//   is.date(nowNumber)    x 38,248,974 ops/sec ±0.91% (85 runs sampled)
//   is.date(shortString)  x 33,738,281 ops/sec ±7.17% (76 runs sampled)
//   is.date(longString)   x 36,753,097 ops/sec ±2.20% (83 runs sampled)
//   is.date(smallBuffer)  x 25,582,678 ops/sec ±2.28% (82 runs sampled)
//   is.date(bigBuffer)    x 25,195,852 ops/sec ±2.27% (83 runs sampled)
//   t.isDate(nowDate)     x 12,655,669 ops/sec ±1.99% (81 runs sampled)
//   t.isDate(nowNumber)   x 16,324,753 ops/sec ±2.10% (85 runs sampled)
//   t.isDate(shortString) x 10,995,505 ops/sec ±2.19% (83 runs sampled)
//   t.isDate(longString)  x 11,119,328 ops/sec ±1.35% (86 runs sampled)
//   t.isDate(smallBuffer) x  4,051,242 ops/sec ±1.09% (86 runs sampled)
//   t.isDate(bigBuffer)   x  3,990,640 ops/sec ±1.20% (85 runs sampled)
