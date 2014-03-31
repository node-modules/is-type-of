/*!
 * is-type-of - index.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var utils = require('core-util-is');

/**
 * Expose all methods in core-util-is
 */

Object.keys(utils).forEach(function(m) {
  var name = m.slice(2);
  name = name[0].toLowerCase() + name.slice(1);
  exports[name] = utils[m];
});

exports.generator = function (obj) {
  return obj && 'function' == typeof obj.next && 'function' == typeof obj.throw;
};

exports.generatorFunction = function (obj) {
   return obj && obj.constructor && 'GeneratorFunction' == obj.constructor.name;
};

exports.promise = function (obj) {
  return obj && 'function' == typeof obj.then;
};

var MAX_INT_31 = Math.pow(2, 31);

exports.int = function (obj) {
  return utils.isNumber(obj) && obj % 1 === 0;
};

exports.int32 = function (obj) {
  return exports.int(obj) && (obj < MAX_INT_31 && obj >= -MAX_INT_31);
};

exports.long = function (obj) {
  return exports.int(obj) && (obj >= MAX_INT_31 || obj < -MAX_INT_31);
};

exports.double = function (obj) {
  return utils.isNumber(obj) && !isNaN(obj) && obj % 1 !== 0;
};

