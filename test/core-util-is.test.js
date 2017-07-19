'use strict';

// convert from https://github.com/isaacs/core-util-is/blob/master/test.js
const assert = require('assert');
const is = require('..');

describe('core-util-is.test.js', () => {
  it('should work', () => {
    assert.equal(is.array([]), true);
    assert.equal(is.array({}), false);

    assert.equal(is.boolean(null), false);
    assert.equal(is.boolean(true), true);
    assert.equal(is.boolean(false), true);

    assert.equal(is.null(null), true);
    assert.equal(is.null(undefined), false);
    assert.equal(is.null(false), false);
    assert.equal(is.null(), false);

    assert.equal(is.nullOrUndefined(null), true);
    assert.equal(is.nullOrUndefined(undefined), true);
    assert.equal(is.nullOrUndefined(false), false);
    assert.equal(is.nullOrUndefined(), true);

    assert.equal(is.number(null), false);
    assert.equal(is.number('1'), false);
    assert.equal(is.number(1), true);

    assert.equal(is.string(null), false);
    assert.equal(is.string('1'), true);
    assert.equal(is.string(1), false);

    assert.equal(is.symbol(null), false);
    assert.equal(is.symbol('1'), false);
    assert.equal(is.symbol(1), false);
    assert.equal(is.symbol(Symbol()), true);

    assert.equal(is.undefined(null), false);
    assert.equal(is.undefined(undefined), true);
    assert.equal(is.undefined(false), false);
    assert.equal(is.undefined(), true);

    assert.equal(is.regExp(null), false);
    assert.equal(is.regExp('1'), false);
    assert.equal(is.regExp(new RegExp()), true);
    assert.equal(is.regExp(/foo/), true);
    assert.equal(is.regexp(null), false);
    assert.equal(is.regexp('1'), false);
    assert.equal(is.regexp(new RegExp()), true);
    assert.equal(is.regexp(/foo/), true);

    assert.equal(is.object({}), true);
    assert.equal(is.object([]), true);
    assert.equal(is.object(new RegExp()), true);
    assert.equal(is.object(new Date()), true);

    assert.equal(is.date(null), false);
    assert.equal(is.date('1'), false);
    assert.equal(is.date(new Date()), true);

    assert.equal(is.error(null), false);
    assert.equal(is.error({ err: true }), false);
    assert.equal(is.error(new Error()), true);

    assert.equal(is.function(null), false);
    assert.equal(is.function({}), false);
    assert.equal(is.function(function() {}), true);

    assert.equal(is.primitive(null), true);
    assert.equal(is.primitive(''), true);
    assert.equal(is.primitive(0), true);
    assert.equal(is.primitive(new Date()), false);

    assert.equal(is.buffer(null), false);
    assert.equal(is.buffer({}), false);
    assert.equal(is.buffer(new Buffer(0)), true);
  });
});
