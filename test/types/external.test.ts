import assert from 'node:assert';
import Long from 'long';
import { expectType } from 'ts-expect';
import { isLongObject } from '../../src/types/external.js';

describe('test/external.test.ts', () => {
  describe('isLongObject', () => {
    it('should check value', () => {
      assert.strictEqual(isLongObject(Long.fromNumber(Math.pow(2, 31))), true);
      assert.strictEqual(isLongObject(Long.fromString('1024102410241024')), true);
      assert.strictEqual(isLongObject(Long.fromString('1024102410241024')), true);

      assert.strictEqual(isLongObject(123), false);
      assert.strictEqual(isLongObject(), false);
      assert.strictEqual(isLongObject({}), false);
      assert.strictEqual(isLongObject({ high: 1 }), false);
      assert.strictEqual(isLongObject({ high: '1', low: '1' }), false);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isLongObject(val)) {
        expectType<{ high: number, low: number }>(val);
      }
    });
  });
});
