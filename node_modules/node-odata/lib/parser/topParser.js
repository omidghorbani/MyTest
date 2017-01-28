'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../utils');

// ?$top=10
// ->
// query.top(10)
exports.default = function (query, top, maxTop) {
  return new Promise(function (resolve) {
    if (isNaN(+top)) {
      return resolve();
    }
    var _top = (0, _utils.min)([maxTop, top]);
    if (_top <= 0) {
      return resolve();
    }
    query.limit(_top);
    return resolve();
  });
};