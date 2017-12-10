const express = require('express');
const router = express.Router();

var usuarios = require('./api/usuario.route');
var clientes = require('./api/cliente.route');

router.use('/usuarios', usuarios);
router.use('/clientes', clientes);

module.exports = router;
