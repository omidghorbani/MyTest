'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _idPlugin = require('./idPlugin');

var _idPlugin2 = _interopRequireDefault(_idPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var register = function register(_db, name, model) {
  var conf = {
    _id: false,
    versionKey: false,
    collection: name
  };
  var schema = new _mongoose2.default.Schema(model, conf);
  schema.plugin(_idPlugin2.default);
  return _db.model(name, schema);
};

exports.default = { register: register };