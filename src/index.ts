import { is } from './is';
import { isNull, isUndefined, isNaN } from './types/primitive';
import { isClass, isFunction } from './types/std';

export * from './types/primitive';
export * from './types/std';
export * from './types/node';
export * from './types/external';

export default is;

// Compatible API
export const boolean = is.boolean;
export const number = is.number;
export const string = is.string;
export const symbol = is.symbol;
export { isUndefined as undefined };
export { isNull as null };
export const nullOrUndefined = is.nullOrUndefined;
export const nullable = is.nullable;
export const bigInt = is.bigInt;
export const bigint = is.bigint;
export const int = is.int;
export const integer = is.integer;
export const int32 = is.int32;
export const long = is.long;
export const double = is.double;
export const finite = is.finite;
export { isNaN as NaN };
export const primitive = is.primitive;
export { isFunction as function };
export const generatorFunction = is.generatorFunction;
export const asyncFunction = is.asyncFunction;
export const asyncGeneratorFunction = is.asyncGeneratorFunction;
export { isClass as class };
export const array = is.array;
export const object = is.object;
export const date = is.date;
export const error = is.error;
export const regExp = is.regExp;
export const generator = is.generator;
export const promise = is.promise;
export const promiseLike = is.promiseLike;
export const buffer = is.buffer;
export const stream = is.stream;
export const readable = is.readable;
export const writable = is.writable;
export const duplex = is.duplex;
export const Long = is.Long;
