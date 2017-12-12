const express = require('express');
const router = express.Router();

var usuarios = require('./api/usuario.route');
var clientes = require('./api/cliente.route');
var administradores = require('./api/administrador.route');

router.use('/usuarios', usuarios);
router.use('/clientes', clientes);
router.use('/administradores', administradores);

module.exports = router;
