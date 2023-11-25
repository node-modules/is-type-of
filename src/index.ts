import { is } from './is.js';
import { isNull, isUndefined, isNaN } from './types/primitive.js';
import { isClass, isFunction } from './types/std.js';

export * from './types/primitive.js';
export * from './types/std.js';
export * from './types/node.js';
export * from './types/external.js';
export { isInstanceOf } from './types/util.js';

export default is;

// Compatible API, recommand to use `is`

/**
 * @deprecated
 * @see {is.boolean}
 */
export const boolean = is.boolean;

/**
 * @deprecated
 * @see {is.number}
 */
export const number = is.number;

/**
 * @deprecated
 * @see {is.string}
 */
export const string = is.string;

/**
 * @deprecated
 * @see {is.symbol}
 */
export const symbol = is.symbol;

/**
 * @deprecated
 * @see {is.undefined}
 */
export { isUndefined as undefined };

/**
 * @deprecated
 * @see {is.null}
 */
export { isNull as null };

/**
 * @deprecated
 * @see {is.nullable}
 */
export const nullOrUndefined = is.nullable;

/**
 * @deprecated
 * @see {is.bigInt}
 */
export const bigInt = is.bigInt;

/**
 * @deprecated
 * @see {is.bigInt}
 */
export const bigint = is.bigInt;

/**
 * @deprecated
 * @see {is.integer}
 */
export const int = is.integer;

/**
 * @deprecated
 * @see {is.integer32}
 */
export const int32 = is.integer32;

/**
 * @deprecated
 * @see {is.long}
 */
export const long = is.long;

/**
 * @deprecated
 * @see {is.double}
 */
export const double = is.double;

/**
 * @deprecated
 * @see {is.finite}
 */
export const finite = is.finite;

/**
 * @deprecated
 * @see {is.NaN}
 */
export { isNaN as NaN };

/**
 * @deprecated
 * @see {is.primitive}
 */
export const primitive = is.primitive;

/**
 * @deprecated
 * @see {is.function}
 */
export { isFunction as function };

/**
 * @deprecated
 * @see {is.generatorFunction}
 */
export const generatorFunction = is.generatorFunction;

/**
 * @deprecated
 * @see {is.asyncFunction}
 */
export const asyncFunction = is.asyncFunction;

/**
 * @deprecated
 * @see {is.class}
 */
export { isClass as class };

/**
 * @deprecated
 * @see {is.array}
 */
export const array = is.array;

/**
 * @deprecated
 * @see {is.object}
 */
export const object = is.object;

/**
 * @deprecated
 * @see {is.date}
 */
export const date = is.date;

/**
 * @deprecated
 * @see {is.error}
 */
export const error = is.error;

/**
 * @deprecated
 * @see {is.regExp}
 */
export const regExp = is.regExp;

/**
 * @deprecated
 * @see {is.regExp}
 */
export const regexp = is.regExp;

/**
 * @deprecated
 * @see {is.generator}
 */
export const generator = is.generator;

/**
 * @deprecated
 * @see {is.promiseLike}
 */
export const promise = is.promiseLike;

/**
 * @deprecated
 * @see {is.buffer}
 */
export const buffer = is.buffer;

/**
 * @deprecated
 * @see {is.stream}
 */
export const stream = is.stream;

/**
 * @deprecated
 * @see {is.readable}
 */
export const readable = is.readable;

/**
 * @deprecated
 * @see {is.writable}
 */
export const writable = is.writable;

/**
 * @deprecated
 * @see {is.duplex}
 */
export const duplex = is.duplex;

/**
 * @deprecated
 * @see {is.longObject}
 */
export const Long = is.longObject;
