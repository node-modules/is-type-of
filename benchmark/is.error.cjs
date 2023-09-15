const path = require('path');
const fs = require('fs');
const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');
const t = require('core-util-is');
const is = require('is-type-of');

const nowDate = new Date();
const nowNumber = Date.now();
const shortString = '一点点点中文abc';
const longString = fs.readFileSync(path.join(__dirname, '../index.js'), 'utf8');
const smallBuffer = Buffer.alloc(100);
const bigBuffer = Buffer.alloc(1024 * 1024);
const newRegExpInstance = new RegExp('foobar');
const regExpInstance = /foobar/;

class CustomError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, CustomError);
  }
}

const shortTypeError = new TypeError(shortString);
const longTypeError = new TypeError(longString);
const shortCustomError = new CustomError(shortString);
const longCustomError = new CustomError(longString);

console.log('is.error(nowDate): %s', is.error(nowDate));
console.log('is.error(nowNumber): %s', is.error(nowNumber));
console.log('is.error(shortString): %s', is.error(shortString));
console.log('is.error(longString): %s', is.error(longString));
console.log('is.error(smallBuffer): %s', is.error(smallBuffer));
console.log('is.error(bigBuffer): %s', is.error(bigBuffer));
console.log('is.error(newRegExpInstance): %s', is.error(newRegExpInstance));
console.log('is.error(regExpInstance): %s', is.error(regExpInstance));
console.log('is.error(shortTypeError): %s', is.error(shortTypeError));
console.log('is.error(longTypeError): %s', is.error(longTypeError));
console.log('is.error(shortCustomError): %s', is.error(shortCustomError));
console.log('is.error(longCustomError): %s', is.error(longCustomError));

console.log('t.isError(nowDate): %s', t.isError(nowDate));
console.log('t.isError(nowNumber): %s', t.isError(nowNumber));
console.log('t.isError(shortString): %s', t.isError(shortString));
console.log('t.isError(longString): %s', t.isError(longString));
console.log('t.isError(smallBuffer): %s', t.isError(smallBuffer));
console.log('t.isError(bigBuffer): %s', t.isError(bigBuffer));
console.log('t.isError(newRegExpInstance): %s', t.isError(newRegExpInstance));
console.log('t.isError(regExpInstance): %s', t.isError(regExpInstance));
console.log('t.isError(shortTypeError): %s', t.isError(shortTypeError));
console.log('t.isError(longTypeError): %s', t.isError(longTypeError));
console.log('t.isError(shortCustomError): %s', t.isError(shortCustomError));
console.log('t.isError(longCustomError): %s', t.isError(longCustomError));

const suite = new Benchmark.Suite();

suite
.add('is.error(nowDate)', () => {
  is.error(nowDate);
})
.add('is.error(nowNumber)', () => {
  is.error(nowNumber);
})
.add('is.error(shortString)', () => {
  is.error(shortString);
})
.add('is.error(longString)', () => {
  is.error(longString);
})
.add('is.error(smallBuffer)', () => {
  is.error(smallBuffer);
})
.add('is.error(bigBuffer)', () => {
  is.error(bigBuffer);
})
.add('is.error(newRegExpInstance)', () => {
  is.error(newRegExpInstance);
})
.add('is.error(regExpInstance)', () => {
  is.error(regExpInstance);
})
.add('is.error(shortTypeError)', () => {
  is.error(shortTypeError);
})
.add('is.error(longTypeError)', () => {
  is.error(longTypeError);
})
.add('is.error(shortCustomError)', () => {
  is.error(shortCustomError);
})
.add('is.error(longCustomError)', () => {
  is.error(longCustomError);
})

.add('t.isError(nowDate)', () => {
  t.isError(nowDate);
})
.add('t.isError(nowNumber)', () => {
  t.isError(nowNumber);
})
.add('t.isError(shortString)', () => {
  t.isError(shortString);
})
.add('t.isError(longString)', () => {
  t.isError(longString);
})
.add('t.isError(smallBuffer)', () => {
  t.isError(smallBuffer);
})
.add('t.isError(bigBuffer)', () => {
  t.isError(bigBuffer);
})
.add('t.isError(newRegExpInstance)', () => {
  t.isError(newRegExpInstance);
})
.add('t.isError(regExpInstance)', () => {
  t.isError(regExpInstance);
})
.add('t.isError(shortTypeError)', () => {
  t.isError(shortTypeError);
})
.add('t.isError(longTypeError)', () => {
  t.isError(longTypeError);
})
.add('t.isError(shortCustomError)', () => {
  t.isError(shortCustomError);
})
.add('t.isError(longCustomError)', () => {
  t.isError(longCustomError);
})

.on('cycle', event => {
  benchmarks.add(event.target);
})
.on('start', event => {
  console.log('\n  is.error(obj) Benchmark\n  node version: %s, date: %s\n  Starting...',
    process.version, Date());
})
.on('complete', () => {
  benchmarks.log();
})
.run({ 'async': false });

// node version: v8.1.4, date: Wed Jul 19 2017 14:48:31 GMT+0800 (CST)
//   Starting...
//   24 tests completed.
//
//   is.error(nowDate)            x 28,116,337 ops/sec ±5.42% (78 runs sampled)
//   is.error(nowNumber)          x 36,817,865 ops/sec ±1.92% (82 runs sampled)
//   is.error(shortString)        x 36,715,489 ops/sec ±1.97% (82 runs sampled)
//   is.error(longString)         x 36,129,682 ops/sec ±2.07% (81 runs sampled)
//   is.error(smallBuffer)        x 23,728,293 ops/sec ±3.16% (80 runs sampled)
//   is.error(bigBuffer)          x 24,072,056 ops/sec ±2.57% (82 runs sampled)
//   is.error(newRegExpInstance)  x 29,139,976 ops/sec ±3.27% (81 runs sampled)
//   is.error(regExpInstance)     x 30,037,776 ops/sec ±1.20% (83 runs sampled)
//   is.error(shortTypeError)     x 34,769,151 ops/sec ±1.35% (86 runs sampled)
//   is.error(longTypeError)      x 33,301,941 ops/sec ±2.24% (81 runs sampled)
//   is.error(shortCustomError)   x 32,532,898 ops/sec ±2.92% (82 runs sampled)
//   is.error(longCustomError)    x 34,155,274 ops/sec ±1.75% (84 runs sampled)
//   t.isError(nowDate)           x 12,137,434 ops/sec ±1.12% (85 runs sampled)
//   t.isError(nowNumber)         x 15,849,631 ops/sec ±1.13% (88 runs sampled)
//   t.isError(shortString)       x 11,304,206 ops/sec ±1.98% (82 runs sampled)
//   t.isError(longString)        x 10,395,919 ops/sec ±3.95% (77 runs sampled)
//   t.isError(smallBuffer)       x  3,846,410 ops/sec ±2.83% (83 runs sampled)
//   t.isError(bigBuffer)         x  3,823,055 ops/sec ±2.38% (84 runs sampled)
//   t.isError(newRegExpInstance) x 13,091,869 ops/sec ±1.05% (86 runs sampled)
//   t.isError(regExpInstance)    x 13,612,892 ops/sec ±1.18% (85 runs sampled)
//   t.isError(shortTypeError)    x 14,013,949 ops/sec ±1.62% (81 runs sampled)
//   t.isError(longTypeError)     x 14,188,227 ops/sec ±1.34% (87 runs sampled)
//   t.isError(shortCustomError)  x 14,319,689 ops/sec ±2.11% (83 runs sampled)
//   t.isError(longCustomError)   x 14,823,055 ops/sec ±1.23% (84 runs sampled)
