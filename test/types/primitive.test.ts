import assert from 'node:assert';
import { expectNever, expectType } from 'ts-expect';
import { isBigInt, isBoolean, isNull, isNullable, isNumber, isPrimitive, isString, isSymbol, isUndefined, isInteger, isInteger32, isNaN, isFinite, isLong, isDouble } from '../../src/types/primitive';

describe('test/primitive.test.ts', () => {
  describe('isString', () => {
    it('should check value', () => {
      assert.strictEqual(isString('1'), true);
      assert.strictEqual(isString(1), false);
      assert.strictEqual(isString(null), false);
      assert.strictEqual(isString(undefined), false);
      assert.strictEqual(isString(), false);
      assert.strictEqual(isString(new String('1')), false);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isString(val)) {
        expectType<string>(val);
      }
    });
  });

  describe('isNumber', () => {
    it('should check value', () => {
      assert.strictEqual(isNumber(1), true);
      assert.strictEqual(isNumber('1'), false);
      assert.strictEqual(isNumber(null), false);
      assert.strictEqual(isNumber(undefined), false);
      assert.strictEqual(isNumber(), false);
      assert.strictEqual(isNumber(new Number(1)), false);
    });

    it('should check type', () => {
      const val: unknown = 1;
      if (isNumber(val)) {
        expectType<number>(val);
      }
    });
  });

  describe('isBigInt', () => {
    it('should check value', () => {
      assert.strictEqual(isBigInt(1n), true);
      assert.strictEqual(isBigInt(1), false);
      assert.strictEqual(isBigInt('1'), false);
      assert.strictEqual(isBigInt(null), false);
      assert.strictEqual(isBigInt(undefined), false);
      assert.strictEqual(isBigInt(), false);
    });

    it('should check type', () => {
      const val: unknown = 1n;
      if (isBigInt(val)) {
        expectType<bigint>(val);
      }
    });
  });

  describe('isBoolean', () => {
    it('should check value', () => {
      assert.strictEqual(isBoolean(true), true);
      assert.strictEqual(isBoolean(false), true);
      assert.strictEqual(isBoolean('1'), false);
      assert.strictEqual(isBoolean(null), false);
      assert.strictEqual(isBoolean(undefined), false);
      assert.strictEqual(isBoolean(), false);
      assert.strictEqual(isBoolean(1), false);
      assert.strictEqual(isBoolean(new Boolean(true)), false);
    });

    it('should check type', () => {
      const val: unknown = true;
      if (isBoolean(val)) {
        expectType<boolean>(val);
      }
    });
  });

  describe('isSymbol', () => {
    it('should check value', () => {
      assert.strictEqual(isSymbol(Symbol('1')), true);
      assert.strictEqual(isSymbol('1'), false);
      assert.strictEqual(isSymbol(null), false);
      assert.strictEqual(isSymbol(undefined), false);
      assert.strictEqual(isSymbol(), false);
      assert.strictEqual(isSymbol(1), false);
    });

    it('should check type', () => {
      const val: unknown = Symbol('1');
      if (isSymbol(val)) {
        expectType<symbol>(val);
      }
    });
  });

  describe('isUndefined', () => {
    it('should check value', () => {
      assert.strictEqual(isUndefined(undefined), true);
      assert.strictEqual(isUndefined(), true);
      assert.strictEqual(isUndefined('1'), false);
      assert.strictEqual(isUndefined(1), false);
      assert.strictEqual(isUndefined(null), false);
    });

    it('should check type', () => {
      const val: unknown = undefined;
      if (isUndefined(val)) {
        expectType<undefined>(val);
      }
    });
  });

  describe('isNull', () => {
    it('should check value', () => {
      assert.strictEqual(isNull(null), true);
      assert.strictEqual(isNull(undefined), false);
      assert.strictEqual(isNull(), false);
      assert.strictEqual(isNull('1'), false);
      assert.strictEqual(isNull(1), false);
    });

    it('should check type', () => {
      const val: unknown = null;
      if (isNull(val)) {
        expectType<null>(val);
      }
    });
  });

  describe('isNullable', () => {
    it('should check value', () => {
      assert.strictEqual(isNullable(null), true);
      assert.strictEqual(isNullable(undefined), true);
      assert.strictEqual(isNullable(), true);
      assert.strictEqual(isNullable('1'), false);
      assert.strictEqual(isNullable(1), false);
    });

    it('should check type', () => {
      const val: unknown = null;
      if (isNullable(val)) {
        if (isNull(val)) {
          expectType<null>(val);
        } else if (isUndefined(val)) {
          expectType<undefined>(val);
        } else {
          expectNever(val);
        }
      }
    });
  });

  describe('isPrimitive', () => {
    it('should check value', () => {
      assert.strictEqual(isPrimitive('1'), true);
      assert.strictEqual(isPrimitive(null), true);
      assert.strictEqual(isPrimitive(1), true);
      assert.strictEqual(isPrimitive(undefined), true);
      assert.strictEqual(isPrimitive(), true);
      assert.strictEqual(isPrimitive(true), true);
      assert.strictEqual(isPrimitive(1n), true);
      assert.strictEqual(isPrimitive(Symbol('1')), true);
      assert.strictEqual(isPrimitive(new Date()), false);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isPrimitive(val)) {
        if (isString(val)) {
          expectType<string>(val);
        } else if (isNull(val)) {
          expectType<null>(val);
        } else if (isNumber(val)) {
          expectType<number>(val);
        } else if (isUndefined(val)) {
          expectType<undefined>(val);
        } else if (isBoolean(val)) {
          expectType<boolean>(val);
        } else if (isBigInt(val)) {
          expectType<bigint>(val);
        } else if (isSymbol(val)) {
          expectType<symbol>(val);
        } else {
          expectNever(val);
        }
      }
    });
  });

  describe('Number', () => {
    describe('isInteger', () => {
      it('should check value', () => {
        assert.strictEqual(isInteger(0), true);
        assert.strictEqual(isInteger(-100), true);
        assert.strictEqual(isInteger(100), true);
        assert.strictEqual(isInteger(Math.pow(2, 31)), true);
        assert.strictEqual(isInteger(Math.pow(2, 50)), true);
        assert.strictEqual(isInteger(-Math.pow(2, 31)), true);
        assert.strictEqual(isInteger(-Math.pow(2, 50)), true);

        assert.strictEqual(isInteger(0.1), false);
        assert.strictEqual(isInteger(-0.1), false);
        assert.strictEqual(isInteger(-111110.1), false);
        assert.strictEqual(isInteger(11110.12312321), false);
        assert.strictEqual(isInteger(''), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isInteger(val)) {
          expectType<number>(val);
        }
      });
    });

    describe('isInteger32', () => {
      it('should check value', () => {
        assert.strictEqual(isInteger32(0), true);
        assert.strictEqual(isInteger32(-100), true);
        assert.strictEqual(isInteger32(100), true);
        assert.strictEqual(isInteger32(Math.pow(2, 31) - 1), true);
        assert.strictEqual(isInteger32(-Math.pow(2, 31)), true);

        assert.strictEqual(isInteger32(Math.pow(2, 31)), false);
        assert.strictEqual(isInteger32(Math.pow(2, 50)), false);
        assert.strictEqual(isInteger32(-Math.pow(2, 31) - 1), false);
        assert.strictEqual(isInteger32(-Math.pow(2, 50)), false);
        assert.strictEqual(isInteger32(-Math.pow(2, 63)), false);
        assert.strictEqual(isInteger32(0.1), false);
        assert.strictEqual(isInteger32(-0.1), false);
        assert.strictEqual(isInteger32(-111110.1), false);
        assert.strictEqual(isInteger32(11110.12312321), false);
        assert.strictEqual(isInteger32('1.1'), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isInteger32(val)) {
          expectType<number>(val);
        }
      });
    });

    describe('isNaN', () => {
      it('should check value', () => {
        assert.strictEqual(isNaN(NaN), true);
        assert.strictEqual(isNaN(Number.NaN), true);
        assert.strictEqual(isNaN(0 / 0), true);

        assert.strictEqual(isNaN(undefined), false);
        assert.strictEqual(isNaN({}), false);
        assert.strictEqual(isNaN(true), false);
        assert.strictEqual(isNaN(null), false);
        assert.strictEqual(isNaN(37), false);
        assert.strictEqual(isNaN('37'), false);
        assert.strictEqual(isNaN('37.37'), false);
        assert.strictEqual(isNaN(''), false);
        assert.strictEqual(isNaN(' '), false);
        assert.strictEqual(isNaN('NaN'), false);
        assert.strictEqual(isNaN('blabla'), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isNaN(val)) {
          expectType<number>(val);
        }
      });
    });

    describe('isFinite', () => {
      it('should check value', () => {
        assert.strictEqual(isFinite(37), true);

        assert.strictEqual(isFinite(NaN), false);
        assert.strictEqual(isFinite(Number.NaN), false);
        assert.strictEqual(isFinite(0 / 0), false);
        assert.strictEqual(isFinite(undefined), false);
        assert.strictEqual(isFinite({}), false);
        assert.strictEqual(isFinite(true), false);
        assert.strictEqual(isFinite(null), false);
        assert.strictEqual(isFinite('37'), false);
        assert.strictEqual(isFinite('37.37'), false);
        assert.strictEqual(isFinite(''), false);
        assert.strictEqual(isFinite(' '), false);
        assert.strictEqual(isFinite('NaN'), false);
        assert.strictEqual(isFinite('blabla'), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isFinite(val)) {
          expectType<number>(val);
        }
      });
    });

    describe('isLong', () => {
      it('should check value', () => {
        assert.strictEqual(isLong(Math.pow(2, 31)), true);
        assert.strictEqual(isLong(Math.pow(2, 50)), true);
        assert.strictEqual(isLong(-Math.pow(2, 31) - 1), true);
        assert.strictEqual(isLong(-Math.pow(2, 50)), true);
        assert.strictEqual(isLong(-Math.pow(2, 63)), true);

        assert.strictEqual(isLong(0.1), false);
        assert.strictEqual(isLong(-0.1), false);
        assert.strictEqual(isLong(-111110.1), false);
        assert.strictEqual(isLong(11110.12312321), false);
        assert.strictEqual(isLong('1.1'), false);
        assert.strictEqual(isLong(0), false);
        assert.strictEqual(isLong(-100), false);
        assert.strictEqual(isLong(100), false);
        assert.strictEqual(isLong(Math.pow(2, 31) - 1), false);
        assert.strictEqual(isLong(-Math.pow(2, 31)), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isLong(val)) {
          expectType<number>(val);
        }
      });
    });

    describe('isDouble', () => {
      it('should check value', () => {
        assert.strictEqual(isDouble(0.1), true);
        assert.strictEqual(isDouble(-0.1), true);
        assert.strictEqual(isDouble(-111110.1), true);
        assert.strictEqual(isDouble(11110.12312321), true);

        assert.strictEqual(isDouble(0), false);
        assert.strictEqual(isDouble(-100), false);
        assert.strictEqual(isDouble(100), false);
        assert.strictEqual(isDouble(Math.pow(2, 31)), false);
        assert.strictEqual(isDouble(Math.pow(2, 50)), false);
        assert.strictEqual(isDouble(-Math.pow(2, 31)), false);
        assert.strictEqual(isDouble(-Math.pow(2, 50)), false);
        assert.strictEqual(isDouble(Number.NaN), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isDouble(val)) {
          expectType<number>(val);
        }
      });
    });
  });

});
