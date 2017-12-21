const Categoria = require('../models/categoria.model');

exports.getCategorias = async function(query) {
    try {
        var categorias;
        await Categoria.find(query).populate('area').exec(function (err, categoriasData) {
            if (err) return console.log(err.message);
            categorias = categoriasData;
        });
        return categorias;
    } catch (e) {
        throw Error('Error al listar las categorias de mongo');
    }
}
