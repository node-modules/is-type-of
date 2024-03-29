import assert from 'node:assert';
import { is } from '../src/is.js';
import { isBoolean, isNumber, isString, isSymbol, isUndefined, isBigInt, isNull, isNullable, isInteger, isInteger32, isLong, isDouble, isPrimitive, isFinite, isNaN } from '../src/types/primitive.js';
import { isArray, isFunction, isGeneratorFunction, isAsyncFunction, isAsyncGeneratorFunction, isObject, isClass, isRegExp, isDate, isPromiseLike, isGenerator, isError, isPromise } from '../src/types/std.js';
import { isBuffer, isDuplex, isReadable, isStream, isWritable } from '../src/types/node.js';
import { isLongObject } from '../src/types/external.js';

describe('is', () => {

  it('check is export', async () => {
    assert.strictEqual(is.boolean, isBoolean);
    assert.strictEqual(is.number, isNumber);
    assert.strictEqual(is.string, isString);
    assert.strictEqual(is.symbol, isSymbol);
    assert.strictEqual(is.undefined, isUndefined);
    assert.strictEqual(is.null, isNull);
    assert.strictEqual(is.nullable, isNullable);
    assert.strictEqual(is.bigInt, isBigInt);
    assert.strictEqual(is.integer, isInteger);
    assert.strictEqual(is.integer32, isInteger32);
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
    assert.strictEqual(is.promise, isPromise);
    assert.strictEqual(is.promiseLike, isPromiseLike);
    assert.strictEqual(is.buffer, isBuffer);
    assert.strictEqual(is.stream, isStream);
    assert.strictEqual(is.readable, isReadable);
    assert.strictEqual(is.writable, isWritable);
    assert.strictEqual(is.duplex, isDuplex);
    assert.strictEqual(is.longObject, isLongObject);
  });

});
