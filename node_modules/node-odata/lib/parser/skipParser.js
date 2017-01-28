'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../utils');

// ?$skip=10
// ->
// query.skip(10)
exports.default = function (query, skip, maxSkip) {
  return new Promise(function (resolve) {
    if (isNaN(+skip)) {
      return resolve();
    }
    var _skip = (0, _utils.min)([maxSkip, skip]);
    if (_skip <= 0) {
      return resolve();
    }
    query.skip(_skip);
    return resolve();
  });
};