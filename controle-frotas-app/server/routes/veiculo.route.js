const express = require("express");
const router = express.Router();
const veiculoController = require("../controllers/veiculo.controller");

router.get("/marcas", veiculoController.getMarcas);
router.get("/marcas/:id_marca/modelos", veiculoController.getModelos);

module.exports = router;
