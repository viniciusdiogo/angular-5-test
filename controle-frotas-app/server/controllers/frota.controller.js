const httpUtil = require("../util/http.util");
const veiculoModel = require("../models/veiculos.model");

const sampleData = [
  {
    combustivel: "Flex",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Golf",
    placa: "RFT-5847",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Ford",
    modelo: "Fista",
    placa: "CVF-1234",
    valor: "20000"
  },
  {
    combustivel: "Flex",
    imagem: null,
    marca: "Fiat",
    modelo: "Bravo",
    placa: "FFF-7894",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: null,
    marca: "Hyunday",
    modelo: "Sonata",
    placa: "HGP-3289",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Gol",
    placa: "LKJ-5498",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  },
  {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: "20000"
  },
  {
    combustivel: "Alcool",
    imagem: "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: "20000"
  }
];

exports.postVeiculo = function(req, res) {
  veiculoModel.insert(req.body, function(err, count) {
    if (err) {
      res.status(500).json(httpUtil.respError(err));
    } else {
      res.json(httpUtil.respOK(req.body));
    }
  });
};

exports.deleteVeiculo = function(req, res) {
  veiculoModel.remove({ placa: req.param.id }, function(err, count) {
    if (err) {
      res.status(500).json(httpUtil.respError(err));
    } else {
      res.json(httpUtil.respOK());
    }
  });
};

exports.updateVeiculo = function(req, res) {
  veiculoModel.remove({ placa: req.param.id }, function(err, count) {
    if (err) {
      res.status(500).json(httpUtil.respError(err));
    } else {
      res.json(httpUtil.respOK());
    }
  });
};

exports.getVeiculos = function(req, res, next) {
  res.json(httpUtil.respOK(sampleData));
  return;

  veiculoModel.find({}, function(err, data) {
    if (err) {
      res.status(500).json(httpUtil.respError(err));
    } else {
      res.json(httpUtil.respOK(data));
    }
  });
};

/*
exports.checkCPF = function(req, res, next) {
  const validationSchema = Joi.object({
    cpf: Joi.document().cpf()
  });

  // validates parameters
  const ret = Joi.validate({ cpf: req.query.cpf }, validationSchema, {
    allowUnknown: false,
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).json(httpUtil.respBadRequest('Parametro "cpf" invalido.'));
  } else {
    blacklistModel.find(getCPFFilter(req.query), function(err, items) {
      if (err) {
        res.status(500).json(httpUtil.respError(err));
      } else {
        if (items && items.length === 0) {
          res.json(httpUtil.respNotFound("CPF inexistente"));
        } else {
          res.json(httpUtil.respOK(items));
        }
      }
    });
  }
};
*/
