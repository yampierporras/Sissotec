const express = require('express');
const router = express.Router();

const EspecialistaController = require('../../controllers/especialista.controller');

router.get('/', EspecialistaController.getEspecialistas);
router.get('/:idUsuario', EspecialistaController.readEspecialista);
router.post('/', EspecialistaController.createEspecialista);
router.put('/', EspecialistaController.updateEspecialista);

module.exports = router;
