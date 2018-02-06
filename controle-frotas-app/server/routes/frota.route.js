const express = require("express");
const router = express.Router();
const frotaController = require("../controllers/frota.controller");

router.get("/veiculos", frotaController.getVeiculos);
router.post("/veiculos", frotaController.postVeiculo);
router.delete("/veiculos/:id", frotaController.deleteVeiculo);
router.put("/veiculos/:id", frotaController.updateVeiculo);

module.exports = router;
