const assert = require('assert');
const is = require('..');

describe('asyncFunction', () => {
  it('should true', () => {
    var asyncFun = async function() {
      await 1;
      return 2;
    };
    assert(is.asyncFunction(asyncFun) === true);
  });

  it('should false', () => {
    var asyncFun = async function() {};
    var fun = () => {};
    var obj = {};
    assert(is.generatorFunction(asyncFun()) === false);
    assert(is.generatorFunction(fun) === false);
    assert(is.generatorFunction(obj) === false);
  });
});
