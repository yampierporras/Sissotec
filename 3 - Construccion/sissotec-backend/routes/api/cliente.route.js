const express = require('express');
const router = express.Router();

const ClienteController = require('../../controllers/cliente.controller');

router.get('/', ClienteController.getClientes);
router.post('/', ClienteController.createCliente);

module.exports = router;
