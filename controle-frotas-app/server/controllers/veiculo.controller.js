const httpUtil = require("../util/http.util");
const marcaModel = require("../models/marcas.model");
const modeloModel = require("../models/modelos.model");

exports.getMarcas = function(req, res, next) {
  marcaModel
    .find({})
    .sort({ nome: 1 })
    .exec(function(err, data) {
      if (err) {
        res.status(500).json(httpUtil.respError(err));
      } else {
        res.json(httpUtil.respOK(data));
      }
    });
};

exports.getModelos = function(req, res, next) {
  modeloModel
    .find({ id_marca: req.params.id_marca })
    .sort({ nome: 1 })
    .exec(function(err, data) {
      if (err) {
        res.status(500).json(httpUtil.respError(err));
      } else {
        res.json(httpUtil.respOK(data));
      }
    });
};
