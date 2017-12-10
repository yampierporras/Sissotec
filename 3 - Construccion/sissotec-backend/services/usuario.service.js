var Usuario = require('../models/usuario.model');

exports.getUsuarios = async function(query) {
    try {
        var usuarios;
        await Usuario.find(query).populate('nivelUsuario').exec(function(err, usuariosData) {
            if (err) return console.log(err.message);
            usuarios = usuariosData;
        });
        return usuarios;
    } catch (e) {
        throw Error('Error al listar los usuarios de mongo');
    }
}

exports.createUsuario = async function(usuario) {
    var newUsuario = new Usuario({
        nomUsuario: usuario.nomUsuario,
        emailUsuario: usuario.emailUsuario,
        urlImgUsuario: usuario.urlImgUsuario,
        estadoUsuario: usuario.estadoUsuario,
        nivelUsuario: usuario.nivelUsuario
    });

    try {
        var savedUsuario = await newUsuario.save();

        return savedUsuario;
    } catch (e) {
        throw Error("Error al crear Usuario");
    }
}
