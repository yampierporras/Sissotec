const express = require('express');
const router = express.Router();

const NivelUsuarioController = require('../../controllers/nivelUsuario.controller');

// router.get('/', ClienteController.getClientes);
router.get('/:codigo', NivelUsuarioController.readNivelUsuario);
// router.post('/', ClienteController.createCliente);
// router.put('/', ClienteController.updateCliente);

module.exports = router;
