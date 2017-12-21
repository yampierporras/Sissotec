const express = require('express');
const router = express.Router();

const CategoriaController = require('../../controllers/categoria.controller');

router.get('/', CategoriaController.getCategorias);
router.get('/:idArea', CategoriaController.getCategoriasPorArea);

module.exports = router;
