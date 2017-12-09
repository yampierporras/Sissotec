var Usuario = require('../models/usuario.model');

exports.getUsuarios = async function(query) {
    try {
        var usuarios;
        await Usuario.find(query, function(err, usuariosData){
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
        estadoUsuario: usuario.estadoUsuario
    });

    try {
        var savedUsuario = await newUsuario.save();

        return savedUsuario;
    } catch (e) {
        throw Error("Error while Creating Usuario")
    }
}
