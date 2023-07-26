import {
  isString,
  isNumber,
  isBoolean,
  isSymbol,
  isUndefined,
  isNull,
  isNullable,
  isBigInt,
  isPrimitive,
  isInteger,
  isInteger32,
  isNaN,
  isFinite,
  isLong,
  isDouble,
  isSafeInteger,
} from './types/primitive';
import {
  isArray,
  isFunction,
  isGeneratorFunction,
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isDate,
  isError,
  isRegExp,
  isClass,
  isPromiseLike,
  isObject,
  isGenerator,
} from './types/std';
import {
  isBuffer,
  isStream,
  isReadable,
  isWritable,
  isDuplex,
} from './types/node';
import { isLongObject } from './types/external';

export const is = {
  // Primitive
  boolean: isBoolean,
  number: isNumber,
  string: isString,
  symbol: isSymbol,
  undefined: isUndefined,
  null: isNull,
  nullOrUndefined: isNullable,
  nullable: isNullable,
  bigInt: isBigInt,
  bigint: isBigInt,
  primitive: isPrimitive,
  int: isInteger,
  integer: isInteger,
  int32: isInteger32,
  long: isLong,
  double: isDouble,
  finite: isFinite,
  NaN: isNaN,
  safeInteger: isSafeInteger,

  // Standard Object
  function: isFunction,
  generatorFunction: isGeneratorFunction,
  asyncFunction: isAsyncFunction,
  asyncGeneratorFunction: isAsyncGeneratorFunction,
  class: isClass,
  array: isArray,
  object: isObject,
  date: isDate,
  error: isError,
  regExp: isRegExp,
  generator: isGenerator,
  promise: isPromiseLike,
  promiseLike: isPromiseLike,

  // Node Object
  buffer: isBuffer,
  stream: isStream,
  readable: isReadable,
  writable: isWritable,
  duplex: isDuplex,

  // External Object
  Long: isLongObject,
};
