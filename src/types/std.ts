// Standard Object

import { types, debuglog } from 'node:util';
import { hasOwnProperty, isInstanceOf } from './util';
import type { Class } from './util';

const debug = debuglog('is-type-of:std');

// Array
export function isArray<T = any>(val?: unknown): val is Array<T> {
  return Array.isArray(val);
}

// Function
export function isFunction<T extends Function>(val?: unknown): val is T {
  return typeof val === 'function';
}

export function isGeneratorFunction(val?: unknown): val is GeneratorFunction {
  return types.isGeneratorFunction(val);
}

export function isAsyncFunction(val?: unknown): val is Function {
  return types.isAsyncFunction(val);
}

export function isAsyncGeneratorFunction(val?: unknown): val is AsyncGeneratorFunction {
  if (!isFunction(val)) return false;
  return val.constructor && val.constructor.name === 'AsyncGeneratorFunction';
}

// Object
export function isObject(val?: unknown): val is object {
  return typeof val === 'object' && val !== null;
}

export function isClass<T extends Class>(val?: unknown): val is T {
  if (!isFunction(val)) return false;
  const fnStr = Function.prototype.toString.call(val);
  if (/^class[\s{]/.test(fnStr)) return true;
  debug('[isClass] fnStr: %s', fnStr);
  const fnBody = fnStr.replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
  debug('[isClass] fnBody: %s', fnBody);
  return (/classCallCheck\(/.test(fnBody) || /TypeError\("Cannot call a class as a function"\)/.test(fnBody));
}

export function isRegExp(val?: unknown): val is RegExp {
  return isInstanceOf(val, RegExp);
}

export function isDate(val?: unknown): val is Date {
  return isInstanceOf(val, Date);
}

export function isError(val?: unknown): val is Error {
  return isInstanceOf(val, Error);
}

export function isGenerator(val?: unknown): val is Generator {
  return types.isGeneratorObject(val);
}

export function isPromise<T = any>(val?: unknown): val is Promise<T> {
  return types.isPromise(val);
}

export function isPromiseLike<T = any>(val?: unknown): val is PromiseLike<T> {
  if (isPromise(val)) return true;
  if (!isObject(val)) return false;
  return hasOwnProperty(val, 'then') && typeof val.then === 'function';
}
