'use strict';

const assert = require('assert');
const is = require('..');
const Long = require('long');
const semver = require('semver');

describe('is', () => {
  describe('finite', () => {
    it('should true', () => {
      assert(is.finite(37) === true);
    });

    it('should false', () => {
      assert(is.finite(NaN) === false);
      assert(is.finite(Number.NaN) === false);
      assert(is.finite(0 / 0) === false);
      assert(is.finite(undefined) === false);
      assert(is.finite({}) === false);

      assert(is.finite(true) === false);
      assert(is.finite(null) === false);

      assert(is.finite("37") === false);
      assert(is.finite("37.37") === false);
      assert(is.finite("") === false);
      assert(is.finite(" ") === false);
      assert(is.finite("NaN") === false);
      assert(is.finite("blabla") === false);
    });
  });
  describe('NaN', () => {
    it('should true', () => {
      assert(is.NaN(NaN) === true);
      assert(is.NaN(Number.NaN) === true);
      assert(is.NaN(0 / 0) === true);
    });

    it('should false', () => {
      assert(is.NaN(undefined) === false);
      assert(is.NaN({}) === false);

      assert(is.NaN(true) === false);
      assert(is.NaN(null) === false);
      assert(is.NaN(37) === false);

      assert(is.NaN("37") === false);
      assert(is.NaN("37.37") === false);
      assert(is.NaN("") === false);
      assert(is.NaN(" ") === false);
      assert(is.NaN("NaN") === false);
      assert(is.NaN("blabla") === false);
    });
  });
  describe('generator', () => {
    it('should true', () => {
      var gen = function *() {
        yield 1;
        return 2;
      };
      assert(is.generator(gen()) === true);
    });

    it('should false', () => {
      var gen = function *() {};
      var fun = () => {};
      var obj = {};
      assert(is.generator(gen) === false);
      assert(is.generator(fun) === false);
      assert(is.generator(obj) === false);
    });
  });

  describe('generatorFunction', () => {
    it('should true', () => {
      var gen = function *() {
        yield 1;
        return 2;
      };
      assert(is.generatorFunction(gen) === true);
    });

    it('should false', () => {
      var gen = function *() {};
      var fun = () => {};
      var obj = {};
      assert(is.generatorFunction(gen()) === false);
      assert(is.generatorFunction(fun) === false);
      assert(is.generatorFunction(obj) === false);
    });
  });

  describe('promise', () => {
    it('should true', () => {
      var pro = {
        then: () => {}
      };
      assert(is.promise(pro) === true);
    });

    it('should false', () => {
      var hasthen = {then: 1};
      var obj = {};
      var number = 1;
      assert(is.promise(hasthen) === false);
      assert(is.promise(obj) === false);
      assert(is.promise(number) === false);
    });
  });

  describe('class', () => {
    if (semver.gt(process.version.substring(1), '4.0.0')){
      it('should true', () => {
        class Foo{};
        assert(is.class(Foo) === true);
      });

      it('should false', () => {
        function Bar(){};
        assert(is.class(Bar) === false);
        assert(is.class({}) === false);
      });
    }
  });

  if(semver.gt(process.version.substring(1), '7.6.0')) {
    require('./async');
  };

  describe('int', () => {
    it('should true', () => {
      assert(is.int(0) === true);
      assert(is.int(-100) === true);
      assert(is.int(100) === true);
      assert(is.int(Math.pow(2, 31)) === true);
      assert(is.int(Math.pow(2, 50)) === true);
      assert(is.int(-Math.pow(2, 31)) === true);
      assert(is.int(-Math.pow(2, 50)) === true);
    });

    it('should false', () => {
      assert(is.int(0.1) === false);
      assert(is.int(-0.1) === false);
      assert(is.int(-111110.1) === false);
      assert(is.int(11110.12312321) === false);
      assert(is.int('1.1') === false);
    });
  });

  describe('int32', () => {
    it('should true', () => {
      assert(is.int32(0) === true);
      assert(is.int32(-100) === true);
      assert(is.int32(100) === true);
      assert(is.int32(Math.pow(2, 31) - 1) === true);
      assert(is.int32(-Math.pow(2, 31)) === true);
    });

    it('should false', () => {
      assert(is.int32(Math.pow(2, 31)) === false);
      assert(is.int32(Math.pow(2, 50)) === false);
      assert(is.int32(-Math.pow(2, 31) - 1) === false);
      assert(is.int32(-Math.pow(2, 50)) === false);
      assert(is.int32(-Math.pow(2, 63)) === false);
      assert(is.int32(0.1) === false);
      assert(is.int32(-0.1) === false);
      assert(is.int32(-111110.1) === false);
      assert(is.int32(11110.12312321) === false);
      assert(is.int32('1.1') === false);
    });
  });

  describe('long', () => {
    it('should true', () => {
      assert(is.long(Math.pow(2, 31)) === true);
      assert(is.long(Math.pow(2, 50)) === true);
      assert(is.long(-Math.pow(2, 31) - 1) === true);
      assert(is.long(-Math.pow(2, 50)) === true);
      assert(is.long(-Math.pow(2, 63)) === true);
    });

    it('should false', () => {
      assert(is.long(0.1) === false);
      assert(is.long(-0.1) === false);
      assert(is.long(-111110.1) === false);
      assert(is.long(11110.12312321) === false);
      assert(is.long('1.1') === false);
      assert(is.long(0) === false);
      assert(is.long(-100) === false);
      assert(is.long(100) === false);
      assert(is.long(Math.pow(2, 31) - 1) === false);
      assert(is.long(-Math.pow(2, 31)) === false);
    });
  });

  describe('Long', () => {
    it('should true', () => {
      assert(is.Long(Long.fromNumber(Math.pow(2, 31))) === true);
      assert(is.Long(Long.fromString('1024102410241024')) === true);
    });

    it('should false', () => {
      assert(is.Long(123) === false);
    });
  })

  describe('double', () => {
    it('should true', () => {
      assert(is.double(0.1) === true);
      assert(is.double(-0.1) === true);
      assert(is.double(-111110.1) === true);
      assert(is.double(11110.12312321) === true);
    });

    it('should false', () => {
      assert(is.double(0) === false);
      assert(is.double(-100) === false);
      assert(is.double(100) === false);
      assert(is.double(Math.pow(2, 31)) === false);
      assert(is.double(Math.pow(2, 50)) === false);
      assert(is.double(-Math.pow(2, 31)) === false);
      assert(is.double(-Math.pow(2, 50)) === false);
    });
  });
});
