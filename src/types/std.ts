// Javascript Standard Object

import { types, debuglog } from 'node:util';
import { hasOwnProperty, isInstanceOf } from './util.js';
import type { Class } from './util.js';

const debug = debuglog('is-type-of:std');

// Array

/**
 * returns true if val is array, it won't check items of array
 */
export function isArray<T = any>(val?: unknown): val is Array<T> {
  return Array.isArray(val);
}

// Function

/**
 * returns true if val is function
 */
export function isFunction<T extends Function>(val?: unknown): val is T {
  return typeof val === 'function';
}

/**
 * returns true if val is generator function
 */
export function isGeneratorFunction(val?: unknown): val is GeneratorFunction {
  return types.isGeneratorFunction(val);
}

/**
 * returns true if val is async function
 */
export function isAsyncFunction(val?: unknown): val is Function {
  return types.isAsyncFunction(val);
}

/**
 * returns true if val is async generator function
 */
export function isAsyncGeneratorFunction(val?: unknown): val is AsyncGeneratorFunction {
  if (!isFunction(val)) return false;
  return val.constructor && val.constructor.name === 'AsyncGeneratorFunction';
}

// Object

/**
 * returns true if val is object
 */
export function isObject(val?: unknown): val is object {
  return typeof val === 'object' && val !== null;
}

/**
 * returns true if val is class
 * *Note:* "class" is supported in ECMAScript 6, and if the code is using some compiler or transpiler, the checking might fail
 */
export function isClass<T extends Class>(val?: unknown): val is T {
  if (!isFunction(val)) return false;
  const fnStr = Function.prototype.toString.call(val);
  if (/^class[\s{]/.test(fnStr)) return true;
  debug('[isClass] fnStr: %s', fnStr);
  const fnBody = fnStr.replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
  debug('[isClass] fnBody: %s', fnBody);
  return (/classCallCheck\(/.test(fnBody) || /TypeError\("Cannot call a class as a function"\)/.test(fnBody));
}

/**
 * returns true if val is regular expression
 */
export function isRegExp(val?: unknown): val is RegExp {
  return isInstanceOf(val, RegExp);
}

/**
 * returns true if val is instance of Date
 */
export function isDate(val?: unknown): val is Date {
  return isInstanceOf(val, Date);
}

/**
 * returns true if val is instance of Error
 */
export function isError(val?: unknown): val is Error {
  return isInstanceOf(val, Error);
}

/**
 * returns true if val is generator
 */
export function isGenerator(val?: unknown): val is Generator {
  return types.isGeneratorObject(val);
}

/**
 * returns true if val is promise
 */
export function isPromise<T = any>(val?: unknown): val is Promise<T> {
  return types.isPromise(val);
}

/**
 * returns true if val is like promise, if the object has `then` property, the checking will pass.
 */
export function isPromiseLike<T = any>(val?: unknown): val is PromiseLike<T> {
  if (isPromise(val)) return true;
  if (!isObject(val)) return false;
  return hasOwnProperty(val, 'then') && typeof val.then === 'function';
}
