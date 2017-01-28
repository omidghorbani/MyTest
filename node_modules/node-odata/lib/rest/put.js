'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _updateEntity(resolve, reject, MongooseModel, req, entity) {
  MongooseModel.findByIdAndUpdate(entity.id, req.body, function (err) {
    if (err) {
      return reject(err);
    }
    var newEntity = req.body;
    newEntity.id = entity.id;
    return resolve({ entity: newEntity, originEntity: entity });
  });
}

function _createEntity(resolve, reject, MongooseModel, req, entity) {
  var uuidReg = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidReg.test(req.params.id)) {
    return reject({ status: 400 }, { text: 'Id is invalid.' });
  }
  var newEntity = new MongooseModel(req.body);
  newEntity._id = req.params.id;
  return newEntity.save(function (err) {
    if (err) {
      return reject(err);
    }
    return resolve({ status: 201, entity: newEntity, originEntity: entity });
  });
}

exports.default = function (req, MongooseModel) {
  return new Promise(function (resolve, reject) {
    MongooseModel.findOne({ _id: req.params.id }, function (err, entity) {
      if (err) {
        return reject(err);
      }
      return entity ? _updateEntity(resolve, reject, MongooseModel, req, entity) : _createEntity(resolve, reject, MongooseModel, req, entity);
    });
  });
};