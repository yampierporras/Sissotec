const express = require('express');
const router = express.Router();

var usuarios = require('./api/usuario.route');
var clientes = require('./api/cliente.route');
var mesasAyuda = require('./api/mesaAyuda.route');
var especialistas = require('./api/especialista.route');
var administradores = require('./api/administrador.route');
var areas = require('./api/area.route');
var categorias = require('./api/categoria.route');
var tickets = require('./api/ticket.route');
var atencionesTicket = require('./api/atencionTicket.route');
var nivelesUsuario = require('./api/nivelUsuario.route');

router.use('/usuarios', usuarios);
router.use('/clientes', clientes);
router.use('/mesasAyuda', mesasAyuda);
router.use('/especialistas', especialistas);
router.use('/administradores', administradores);
router.use('/areas', areas);
router.use('/categorias', categorias);
router.use('/tickets', tickets);
router.use('/atencionesTicket', atencionesTicket);
router.use('/nivelesUsuario', nivelesUsuario);

module.exports = router;
