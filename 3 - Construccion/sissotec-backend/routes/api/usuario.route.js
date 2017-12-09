var express = require('express');
var router = express.Router();

var UsuarioController = require('../../controllers/usuario.controller');

router.get('/', UsuarioController.getUsuarios);
router.post('/', UsuarioController.createUsuario);
// router.put('/', UsuarioController.updateUsuario);
// router.delete('/', UsuarioController.removeUsuario);

module.exports = router;
