const express = require('express');
const router = express.Router();

const ClienteController = require('../../controllers/cliente.controller');

router.get('/', ClienteController.getClientes);
router.get('/:idUsuario', ClienteController.readCliente);
router.post('/', ClienteController.createCliente);
router.put('/', ClienteController.updateCliente);

module.exports = router;
