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
} from './types/primitive.js';
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
  isPromise,
} from './types/std.js';
import {
  isBuffer,
  isStream,
  isReadable,
  isWritable,
  isDuplex,
} from './types/node.js';
import { isLongObject } from './types/external.js';

export const is = {
  // Primitive

  /**
   * @see {isBoolean}
   */
  boolean: isBoolean,

  /**
   * @see {isNumber}
   */
  number: isNumber,

  /**
   * @see {isString}
   */
  string: isString,

  /**
   * @see {isSymbol}
   */
  symbol: isSymbol,

  /**
   * @see {isUndefined}
   */
  undefined: isUndefined,

  /**
   * @see {isNull}
   */
  null: isNull,

  /**
   * @see {isNullable}
   */
  nullable: isNullable,

  /**
   * @see {isBigInt}
   */
  bigInt: isBigInt,

  /**
   * @see {isPrimitive}
   */
  primitive: isPrimitive,

  /**
   * @see {isInteger}
   */
  integer: isInteger,

  /**
   * @see {isInteger32}
   */
  integer32: isInteger32,

  /**
   * @see {isLong}
   */
  long: isLong,

  /**
   * @see {isDouble}
   */
  double: isDouble,

  /**
   * @see {isFinite}
   */
  finite: isFinite,

  /**
   * @see {isNaN}
   */
  NaN: isNaN,

  /**
   * @see {isSafeInteger}
   */
  safeInteger: isSafeInteger,

  // Standard Object

  /**
   * @see {isFunction}
   */
  function: isFunction,

  /**
   * @see {isGeneratorFunction}
   */
  generatorFunction: isGeneratorFunction,

  /**
   * @see {isAsyncFunction}
   */
  asyncFunction: isAsyncFunction,

  /**
   * @see {isAsyncGeneratorFunction}
   */
  asyncGeneratorFunction: isAsyncGeneratorFunction,

  /**
   * @see {isClass}
   */
  class: isClass,

  /**
   * @see {isArray}
   */
  array: isArray,

  /**
   * @see {isObject}
   */
  object: isObject,

  /**
   * @see {isDate}
   */
  date: isDate,

  /**
   * @see {isError}
   */
  error: isError,

  /**
   * @see {isRegExp}
   */
  regExp: isRegExp,

  /**
   * @see {isGenerator}
   */
  generator: isGenerator,

  /**
   * @see {isPromise}
   */
  promise: isPromise,

  /**
   * @see {isPromiseLike}
   */
  promiseLike: isPromiseLike,

  // Node Object

  /**
   * @see {isBuffer}
   */
  buffer: isBuffer,

  /**
   * @see {isStream}
   */
  stream: isStream,

  /**
   * @see {isReadable}
   */
  readable: isReadable,

  /**
   * @see {isWritable}
   */
  writable: isWritable,

  /**
   * @see {isDuplex}
   */
  duplex: isDuplex,

  // External Object

  /**
   * @see {isLongObject}
   */
  longObject: isLongObject,

};
