const express = require('express');
const router = express.Router();

var usuarios = require('./api/usuario.route');

router.use('/usuarios', usuarios)

module.exports = router;
