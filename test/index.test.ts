import assert from 'node:assert';
import is from '../src';
import {
  isBoolean as isBooleanExpect,
  isNumber as isNumberExpect,
  isString as isStringExpect,
  isSymbol as isSymbolExpect,
  isUndefined as isUndefinedExpect,
  isBigInt as isBigIntExpect,
  isNull as isNullExpect,
  isNullable as isNullableExpect,
  isInteger as isIntegerExpect,
  isInteger32 as isInteger32Expect,
  isLongObject as isLongExpect,
  isDouble as isDoubleExpect,
  isPrimitive as isPrimitiveExpect,
  isArray as isArrayExpect,
  isFunction as isFunctionExpect,
  isGeneratorFunction as isGeneratorFunctionExpect,
  isAsyncFunction as isAsyncFunctionExpect,
  isAsyncGeneratorFunction as isAsyncGeneratorFunctionExpect,
  isObject as isObjectExpect,
  isClass as isClassExpect,
  isRegExp as isRegExpExpect,
  isDate as isDateExpect,
  isPromiseLike as isPromiseLikeExpect,
  isGenerator as isGeneratorExpect,
  isError as isErrorExpect,
  isBuffer as isBufferExpect,
  isDuplex as isDuplexExpect,
  isReadable as isReadableExpect,
  isStream as isStreamExpect,
  isWritable as isWritableExpect,
} from '../src';
import { isBoolean, isNumber, isString, isSymbol, isUndefined, isBigInt, isNull, isNullable, isInteger, isInteger32, isLong, isDouble, isPrimitive, isFinite, isNaN } from '../src/types/primitive';
import { isArray, isFunction, isGeneratorFunction, isAsyncFunction, isAsyncGeneratorFunction, isObject, isClass, isRegExp, isDate, isPromiseLike, isGenerator, isError } from '../src/types/std';
import { isBuffer, isDuplex, isReadable, isStream, isWritable } from '../src/types/node';
import { isLongObject } from '../src/types/external';

describe('test/index.test.ts', () => {

  it('check default export', async () => {
    assert.strictEqual(is.boolean, isBoolean);
    assert.strictEqual(is.number, isNumber);
    assert.strictEqual(is.string, isString);
    assert.strictEqual(is.symbol, isSymbol);
    assert.strictEqual(is.undefined, isUndefined);
    assert.strictEqual(is.null, isNull);
    assert.strictEqual(is.nullOrUndefined, isNullable);
    assert.strictEqual(is.nullable, isNullable);
    assert.strictEqual(is.bigInt, isBigInt);
    assert.strictEqual(is.bigint, isBigInt);
    assert.strictEqual(is.int, isInteger);
    assert.strictEqual(is.integer, isInteger);
    assert.strictEqual(is.int32, isInteger32);
    assert.strictEqual(is.long, isLong);
    assert.strictEqual(is.double, isDouble);
    assert.strictEqual(is.finite, isFinite);
    assert.strictEqual(is.NaN, isNaN);
    assert.strictEqual(is.primitive, isPrimitive);
    assert.strictEqual(is.function, isFunction);
    assert.strictEqual(is.generatorFunction, isGeneratorFunction);
    assert.strictEqual(is.asyncFunction, isAsyncFunction);
    assert.strictEqual(is.asyncGeneratorFunction, isAsyncGeneratorFunction);
    assert.strictEqual(is.class, isClass);
    assert.strictEqual(is.array, isArray);
    assert.strictEqual(is.object, isObject);
    assert.strictEqual(is.date, isDate);
    assert.strictEqual(is.error, isError);
    assert.strictEqual(is.regExp, isRegExp);
    assert.strictEqual(is.generator, isGenerator);
    assert.strictEqual(is.promise, isPromiseLike);
    assert.strictEqual(is.promiseLike, isPromiseLike);
    assert.strictEqual(is.buffer, isBuffer);
    assert.strictEqual(is.stream, isStream);
    assert.strictEqual(is.readable, isReadable);
    assert.strictEqual(is.writable, isWritable);
    assert.strictEqual(is.duplex, isDuplex);
    assert.strictEqual(is.Long, isLongObject);
  });

  it('check method', async () => {
    assert.strictEqual(isBooleanExpect, isBoolean);
    assert.strictEqual(isNumberExpect, isNumber);
    assert.strictEqual(isStringExpect, isString);
    assert.strictEqual(isSymbolExpect, isSymbol);
    assert.strictEqual(isUndefinedExpect, isUndefined);
    assert.strictEqual(isBigIntExpect, isBigInt);
    assert.strictEqual(isNullExpect, isNull);
    assert.strictEqual(isNullableExpect, isNullable);
    assert.strictEqual(isIntegerExpect, isInteger);
    assert.strictEqual(isInteger32Expect, isInteger32);
    assert.strictEqual(isLongExpect, isLongObject);
    assert.strictEqual(isDoubleExpect, isDouble);
    assert.strictEqual(isPrimitiveExpect, isPrimitive);
    assert.strictEqual(isArrayExpect, isArray);
    assert.strictEqual(isFunctionExpect, isFunction);
    assert.strictEqual(isGeneratorFunctionExpect, isGeneratorFunction);
    assert.strictEqual(isAsyncFunctionExpect, isAsyncFunction);
    assert.strictEqual(isAsyncGeneratorFunctionExpect, isAsyncGeneratorFunction);
    assert.strictEqual(isObjectExpect, isObject);
    assert.strictEqual(isClassExpect, isClass);
    assert.strictEqual(isRegExpExpect, isRegExp);
    assert.strictEqual(isDateExpect, isDate);
    assert.strictEqual(isPromiseLikeExpect, isPromiseLike);
    assert.strictEqual(isGeneratorExpect, isGenerator);
    assert.strictEqual(isErrorExpect, isError);
    assert.strictEqual(isBufferExpect, isBuffer);
    assert.strictEqual(isDuplexExpect, isDuplex);
    assert.strictEqual(isReadableExpect, isReadable);
    assert.strictEqual(isStreamExpect, isStream);
    assert.strictEqual(isWritableExpect, isWritable);
  });

});
