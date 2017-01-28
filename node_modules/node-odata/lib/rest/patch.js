"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (req, MongooseModel) {
  return new Promise(function (resolve, reject) {
    return MongooseModel.findOne({ id: req.params.id }, function (err, entity) {
      if (err) {
        return reject(err);
      }
      return MongooseModel.update({ id: req.params.id }, _extends({}, entity, req.body), function (err1) {
        if (err1) {
          return reject(err1);
        }
        return resolve({ entity: req.body, originEntity: entity });
      });
    });
  });
};