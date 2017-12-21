const CategoriaService = require('../services/categoria.service');

exports.getCategorias = async function(req, res, next) {
    try {
        var categorias = await CategoriaService.getCategorias({});
        return res.status(200).json({
            status: 200,
            data: categorias,
            message: 'Listado de categorias exitoso'
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getCategoriasPorArea = async function(req, res, next) {
    try {
        var categorias = await CategoriaService.getCategorias({area:req.params.idArea});
        // var categorias = await CategoriaService.getCategorias({prioridadCategoria: 0});
        return res.status(200).json({
            status: 200,
            data: categorias,
            message: 'Listado de categorias por area exitoso'
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
