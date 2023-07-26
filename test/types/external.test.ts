import * as Long from 'long';
import assert from 'node:assert';
import { expectType } from 'ts-expect';
import { isLongObject } from '../../src/types/external';

describe('test/external.test.ts', () => {
  describe('isLongObject', () => {
    it('should check value', () => {
      assert.strictEqual(isLongObject(Long.fromNumber(Math.pow(2, 31))), true);
      assert.strictEqual(isLongObject(Long.fromString('1024102410241024')), true);

      assert.strictEqual(isLongObject(123), false);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isLongObject(val)) {
        expectType<{ high: number, low: number }>(val);
      }
    });
  });

});
