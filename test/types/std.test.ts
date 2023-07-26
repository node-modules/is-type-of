import assert from 'node:assert';
import { expectType } from 'ts-expect';
import { isArray, isFunction, isGeneratorFunction, isAsyncFunction, isAsyncGeneratorFunction, isObject, isClass, isRegExp, isDate, isPromiseLike, isGenerator, isError, isPromise } from '../../src/types/std';
import { Class, isInstanceOf } from '../../src/types/util';

describe('test/object.test.ts', () => {

  describe('isInstanceOf', () => {
    it('should check value', () => {
      class A {}
      class AA extends A {}
      class B {}
      const a = new A();
      const aa = new AA();
      assert.strictEqual(isInstanceOf(a, A), true);
      assert.strictEqual(isInstanceOf(aa, A), true);
      assert.strictEqual(isInstanceOf(aa, AA), true);

      assert.strictEqual(isInstanceOf(a, B), false);
      assert.strictEqual(isInstanceOf(a, Date), false);
    });

    it('should check type', () => {
      class A {
        a: number;
      }
      class B {
        b: number;
      }
      function test(c: A | B) {
        expectType<A | B>(c);
        if (isInstanceOf(c, A)) {
          expectType<A>(c);
        } else {
          expectType<B>(c);
        }
      }
      test(new A());
    });
  });

  describe('Array', () => {
    describe('isArray', () => {
      it('should check value', () => {
        assert.strictEqual(isArray([]), true);
        assert.strictEqual(isArray(new Array([ 1, 2, 3 ])), true);

        assert.strictEqual(isArray({}), false);
        assert.strictEqual(isArray(), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isArray<string>(val)) {
          expectType<Array<string>>(val);
        }
      });
    });
  });

  describe('Function', () => {
    describe('isFunction', () => {
      it('should check value', () => {
        assert.strictEqual(isFunction(function() {}), true);
        assert.strictEqual(isFunction(() => {}), true);
        assert.strictEqual(isFunction(async () => {}), true);
        assert.strictEqual(isFunction(function* () {}), true);
        assert.strictEqual(isFunction(async function* () {}), true);

        assert.strictEqual(isFunction(null), false);
        assert.strictEqual(isFunction({}), false);
        assert.strictEqual(isFunction(), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isFunction(val)) {
          expectType<Function>(val);
        }
      });
    });

    describe('isGeneratorFunction', () => {
      it('should check value', () => {
        const gen1 = function* () {
          yield 1;
          return 2;
        };
        assert.strictEqual(isGeneratorFunction(gen1), true);

        const gen2 = function* () {};
        const fun = () => {};
        const obj = {};
        assert.strictEqual(isGeneratorFunction(gen2()), false);
        assert.strictEqual(isGeneratorFunction(fun), false);
        assert.strictEqual(isGeneratorFunction(obj), false);
        assert.strictEqual(isGeneratorFunction(), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isGeneratorFunction(val)) {
          expectType<Function>(val);
          expectType<GeneratorFunction>(val);
        }
      });
    });

    describe('isAsyncFunction', () => {
      it('should check value', () => {
        const asyncFun1 = async function() {
          await 1;
          return 2;
        };
        assert.strictEqual(isAsyncFunction(asyncFun1), true);

        const asyncFun2 = async function() {};
        assert.strictEqual(isAsyncFunction(asyncFun2()), false);
        const fun = () => {};
        assert.strictEqual(isAsyncFunction(fun), false);
        const obj = {};
        assert.strictEqual(isAsyncFunction(obj), false);
        assert.strictEqual(isAsyncFunction(), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isAsyncFunction(val)) {
          expectType<Function>(val);
          // expectType<AsyncFunction>(val);
        }
      });
    });

    describe('isAsyncGeneratorFunction', () => {
      it('should check value', () => {
        const asyncGenFun1 = async function* () {
          yield 1;
          await 1;
          return 2;
        };
        assert.strictEqual(isAsyncGeneratorFunction(asyncGenFun1), true);

        const asyncFun2 = async function() {};
        const fun = () => {};
        const obj = {};
        assert.strictEqual(isAsyncGeneratorFunction(asyncFun2()), false);
        assert.strictEqual(isAsyncGeneratorFunction(fun), false);
        assert.strictEqual(isAsyncGeneratorFunction(obj), false);
        assert.strictEqual(isAsyncGeneratorFunction(), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isAsyncGeneratorFunction(val)) {
          expectType<Function>(val);
          expectType<AsyncGeneratorFunction>(val);
        }
      });
    });
  });

  describe('Object', () => {
    describe('isObject', () => {
      it('should check value', () => {
        assert.strictEqual(isObject({}), true);
        assert.strictEqual(isObject([]), true);
        assert.strictEqual(isObject(new RegExp('')), true);
        assert.strictEqual(isObject(new Date()), true);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isAsyncGeneratorFunction(val)) {
          expectType<Function>(val);
          expectType<AsyncGeneratorFunction>(val);
        }
      });
    });

    describe('isClass', () => {
      // @ts-ignore
      it('should check value', () => {
        /* eslint-disable */
        class Foo{};
        assert.strictEqual(isClass(Foo), true);
        assert.strictEqual(isClass(class {}), true);
        assert.strictEqual(isClass(class{}), true);
        assert.strictEqual(isClass(class{  }), true);
        assert.strictEqual(isClass(class{constructor(){}}), true);
        assert.strictEqual(isClass(class {constructor(){}}), true);
        assert.strictEqual(isClass(class OK2{}), true);
        assert.strictEqual(isClass(class OK{constructor(){}}), true);
        assert.strictEqual(isClass(class _{constructor(){}}), true);
        assert.strictEqual(isClass(class _F___ {constructor(){}}), true);
        assert.strictEqual(isClass(class B extends(Foo){}), true);
        assert.strictEqual(isClass(class{constructor(app: any){console.log(app);}configDidLoad(){}}), true);
        const _classCallCheck = function (instance: any, Constructor: any) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
        function Babel() {
          // @ts-ignore
          _classCallCheck(this, Babel);
        };
        assert.strictEqual(isClass(Babel), true);

        assert.strictEqual(isClass(), false);
        assert.strictEqual(isClass(''), false);
        assert.strictEqual(isClass(1), false);
        assert.strictEqual(isClass(null), false);
        assert.strictEqual(isClass({}), false);
        assert.strictEqual(isClass(function () {}), false);
        assert.strictEqual(isClass(async () => {}), false);
        assert.strictEqual(isClass(Foo.constructor), false);
        const obj = {
          m() {},
        };
        assert.strictEqual(isClass(obj.m), false);
        /* eslint-disable */
      });

      it('should check type', () => {
        const val: unknown = class {};
        if (isClass(val)) {
          expectType<Class>(val);
          const v = new val();
          expectType<InstanceType<Class>>(v);
        }
      });
    });

    describe('isRegExp', () => {
      it('should check value', () => {
        assert.strictEqual(isRegExp(null), false);
        assert.strictEqual(isRegExp('1'), false);
        assert.strictEqual(isRegExp(new RegExp('')), true);
        assert.strictEqual(isRegExp(/foo/), true);

        assert.strictEqual(isRegExp(null), false);
        assert.strictEqual(isRegExp('1'), false);
        assert.strictEqual(isRegExp(new RegExp('')), true);
        assert.strictEqual(isRegExp(/foo/), true);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isRegExp(val)) {
          expectType<RegExp>(val);
        }
      });
    });

    describe('isDate', () => {
      it('should check value', () => {
        assert.strictEqual(isDate(null), false);
        assert.strictEqual(isDate('1'), false);
        assert.strictEqual(isDate(new Date()), true);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isDate(val)) {
          expectType<Date>(val);
        }
      });
    });

    describe('isError', () => {
      it('should check value', () => {
        class CustomError extends Error {
          constructor(message: string) {
            super(message);
            Error.captureStackTrace(this, CustomError);
          }
        }

        assert.strictEqual(isError(null), false);
        assert.strictEqual(isError({ err: true }), false);
        assert.strictEqual(isError(new Error()), true);
        assert.strictEqual(isError(new TypeError()), true);
        assert.strictEqual(isError(new RangeError()), true);
        assert.strictEqual(isError(new ReferenceError()), true);
        assert.strictEqual(isError(new CustomError('c')), true);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isError(val)) {
          expectType<Error>(val);
        }

        class CustomError extends Error {
          constructor(message: string) {
            super(message);
          }
          getName(): string {
            return this.name;
          }
        }
        let val2: Error;
        val2 = new CustomError('a');

        expectType<Error>(val2);
        if (isInstanceOf(val2, CustomError)) {
          expectType<CustomError>(val2);
          expectType<Error>(val2);
          expectType<string>(val2.getName());
        }
      });
    });

    describe('isGenerator', () => {
      it('should check value', () => {
        const gen = function* () {
          yield 1;
          return 2;
        };
        assert.strictEqual(isGenerator(gen()), true);

        const fun = () => {};
        const obj = {};
        assert.strictEqual(isGenerator(gen), false);
        assert.strictEqual(isGenerator(fun), false);
        assert.strictEqual(isGenerator(obj), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isGenerator(val)) {
          expectType<Generator>(val);
        }
      });
    });

    describe('isPromise', () => {
      it('should check value', () => {
        assert.strictEqual(isPromise(Promise.resolve()), true);
        assert.strictEqual(isPromise((async () => {})()), true);

        const pro = {
          then: () => {},
        };
        const hasthen = { then: 1 };
        const obj = {};
        const number = 1;
        assert.strictEqual(isPromise(pro), false);
        assert.strictEqual(isPromise(hasthen), false);
        assert.strictEqual(isPromise(obj), false);
        assert.strictEqual(isPromise(number), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isPromise<string>(val)) {
          expectType<Promise<any>>(val);
        }
      });
    });

    describe('isPromiseLike', () => {
      it('should check value', () => {
        const pro = {
          then: () => {},
        };
        assert.strictEqual(isPromiseLike(pro), true);
        assert.strictEqual(isPromiseLike(Promise.resolve()), true);
        assert.strictEqual(isPromiseLike((async () => {})()), true);

        const hasthen = { then: 1 };
        const obj = {};
        const number = 1;
        assert.strictEqual(isPromiseLike(hasthen), false);
        assert.strictEqual(isPromiseLike(obj), false);
        assert.strictEqual(isPromiseLike(number), false);
      });

      it('should check type', () => {
        const val: unknown = 1;
        if (isPromiseLike(val)) {
          expectType<PromiseLike<any>>(val);
        }
        if (isPromise(val)) {
          expectType<PromiseLike<any>>(val);
          expectType<Promise<any>>(val);
        }
      });
    });

  });

});
