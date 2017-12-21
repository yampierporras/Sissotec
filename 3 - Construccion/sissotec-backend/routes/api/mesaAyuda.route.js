const express = require('express');
const router = express.Router();

const MesaAyudaController = require('../../controllers/mesaAyuda.controller');

router.get('/', MesaAyudaController.getMesasAyuda);
router.get('/:idUsuario', MesaAyudaController.readMesaAyuda);
router.post('/', MesaAyudaController.createMesaAyuda);
router.put('/', MesaAyudaController.updateMesaAyuda);

module.exports = router;
