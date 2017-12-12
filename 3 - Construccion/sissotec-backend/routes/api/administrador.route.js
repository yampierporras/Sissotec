const express = require('express');
const router = express.Router();

const AdministradorController = require('../../controllers/administrador.controller');

router.get('/', AdministradorController.getAdministradores);
router.get('/:idUsuario', AdministradorController.readAdminitrador);
router.post('/', AdministradorController.createAdministrador);

module.exports = router;
