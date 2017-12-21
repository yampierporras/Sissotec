const NivelUsuario = require('../models/nivelUsuario.model.js');

exports.readNivelUsuario = async function(query) {
    try {
        var nivelUsuario;
        await NivelUsuario.findOne(query).exec(function(err, nivelUsuarioData) {
            if (err) return console.log(err.message);
            nivelUsuario = nivelUsuarioData;
        });
        return nivelUsuario;
    } catch (e) {
        throw Error('Error al consultar nivel usuario');
    }
}
