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
  isLong as isLongExpect,
  isNaN as isNaNExpect,
  isFinite as isFiniteExpect,
  isSafeInteger as isSafeIntegerExpect,
  isLongObject as isLongObjectExpect,
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
  isPromise as isPromiseExpect,
  isPromiseLike as isPromiseLikeExpect,
  isGenerator as isGeneratorExpect,
  isError as isErrorExpect,
  isBuffer as isBufferExpect,
  isDuplex as isDuplexExpect,
  isReadable as isReadableExpect,
  isStream as isStreamExpect,
  isWritable as isWritableExpect,
} from '../src';
import {
  boolean as isBooleanCompatibleExpect,
  number as isNumberCompatibleExpect,
  string as isStringCompatibleExpect,
  symbol as isSymbolCompatibleExpect,
  undefined as isUndefinedCompatibleExpect,
  bigInt as isBigIntCompatibleExpect,
  null as isNullCompatibleExpect,
  int32 as isInteger32CompatibleExpect,
  Long as isLongObjectCompatibleExpect,
  long as isLongCompatibleExpect,
  double as isDoubleCompatibleExpect,
  NaN as isNaNCompatibleExpect,
  finite as isFiniteCompatibleExpect,
  primitive as isPrimitiveCompatibleExpect,
  array as isArrayCompatibleExpect,
  function as isFunctionCompatibleExpect,
  generatorFunction as isGeneratorFunctionCompatibleExpect,
  asyncFunction as isAsyncFunctionCompatibleExpect,
  object as isObjectCompatibleExpect,
  class as isClassCompatibleExpect,
  regExp as isRegExpCompatibleExpect,
  date as isDateCompatibleExpect,
  promise as isPromiseCompatibleExpect,
  generator as isGeneratorCompatibleExpect,
  error as isErrorCompatibleExpect,
  buffer as isBufferCompatibleExpect,
  duplex as isDuplexCompatibleExpect,
  readable as isReadableCompatibleExpect,
  stream as isStreamCompatibleExpect,
  writable as isWritableCompatibleExpect,
} from '../src';
import { isBoolean, isNumber, isString, isSymbol, isUndefined, isBigInt, isNull, isNullable, isInteger, isInteger32, isLong, isDouble, isPrimitive, isFinite, isNaN, isSafeInteger } from '../src/types/primitive';
import { isArray, isFunction, isGeneratorFunction, isAsyncFunction, isAsyncGeneratorFunction, isObject, isClass, isRegExp, isDate, isPromiseLike, isGenerator, isError, isPromise } from '../src/types/std';
import { isBuffer, isDuplex, isReadable, isStream, isWritable } from '../src/types/node';
import { isLongObject } from '../src/types/external';
import { is as realIs } from '../src/is';

describe('test/index.test.ts', () => {

  it('check default export', async () => {
    assert.strictEqual(is, realIs);
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
    assert.strictEqual(isLongExpect, isLong);
    assert.strictEqual(isNaNExpect, isNaN);
    assert.strictEqual(isFiniteExpect, isFinite);
    assert.strictEqual(isDoubleExpect, isDouble);
    assert.strictEqual(isSafeIntegerExpect, isSafeInteger);
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
    assert.strictEqual(isPromiseExpect, isPromise);
    assert.strictEqual(isPromiseLikeExpect, isPromiseLike);
    assert.strictEqual(isGeneratorExpect, isGenerator);
    assert.strictEqual(isErrorExpect, isError);
    assert.strictEqual(isBufferExpect, isBuffer);
    assert.strictEqual(isDuplexExpect, isDuplex);
    assert.strictEqual(isReadableExpect, isReadable);
    assert.strictEqual(isStreamExpect, isStream);
    assert.strictEqual(isWritableExpect, isWritable);
    assert.strictEqual(isLongObjectExpect, isLongObject);
  });

  it('check compatible method', async () => {
    assert.strictEqual(isBooleanCompatibleExpect, isBoolean);
    assert.strictEqual(isNumberCompatibleExpect, isNumber);
    assert.strictEqual(isStringCompatibleExpect, isString);
    assert.strictEqual(isSymbolCompatibleExpect, isSymbol);
    assert.strictEqual(isUndefinedCompatibleExpect, isUndefined);
    assert.strictEqual(isBigIntCompatibleExpect, isBigInt);
    assert.strictEqual(isNullCompatibleExpect, isNull);
    assert.strictEqual(isInteger32CompatibleExpect, isInteger32);
    assert.strictEqual(isLongCompatibleExpect, isLong);
    assert.strictEqual(isLongObjectCompatibleExpect, isLongObject);
    assert.strictEqual(isNaNCompatibleExpect, isNaN);
    assert.strictEqual(isFiniteCompatibleExpect, isFinite);
    assert.strictEqual(isDoubleCompatibleExpect, isDouble);
    assert.strictEqual(isPrimitiveCompatibleExpect, isPrimitive);
    assert.strictEqual(isArrayCompatibleExpect, isArray);
    assert.strictEqual(isFunctionCompatibleExpect, isFunction);
    assert.strictEqual(isGeneratorFunctionCompatibleExpect, isGeneratorFunction);
    assert.strictEqual(isAsyncFunctionCompatibleExpect, isAsyncFunction);
    assert.strictEqual(isObjectCompatibleExpect, isObject);
    assert.strictEqual(isClassCompatibleExpect, isClass);
    assert.strictEqual(isRegExpCompatibleExpect, isRegExp);
    assert.strictEqual(isDateCompatibleExpect, isDate);
    assert.strictEqual(isPromiseCompatibleExpect, isPromiseLike);
    assert.strictEqual(isGeneratorCompatibleExpect, isGenerator);
    assert.strictEqual(isErrorCompatibleExpect, isError);
    assert.strictEqual(isBufferCompatibleExpect, isBuffer);
    assert.strictEqual(isDuplexCompatibleExpect, isDuplex);
    assert.strictEqual(isReadableCompatibleExpect, isReadable);
    assert.strictEqual(isStreamCompatibleExpect, isStream);
    assert.strictEqual(isWritableCompatibleExpect, isWritable);
  });
});
