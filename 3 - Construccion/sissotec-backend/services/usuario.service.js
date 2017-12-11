var Usuario = require('../models/usuario.model');
var NivelUsuario = require('../models/nivelUsuario.model');

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
    var newUsuario;

    await NivelUsuario.findOne({codNivelUsuario: 0}).exec(function (err, nivel) {
        if (err) return console.log(err.message);
        newUsuario = new Usuario({
            nomUsuario: usuario.nomUsuario,
            emailUsuario: usuario.emailUsuario,
            urlImgUsuario: usuario.urlImgUsuario,
            estadoUsuario: usuario.estadoUsuario,
            nivelUsuario: nivel._id
        });
    });
    try {
        var savedUsuario = await newUsuario.save();
        return savedUsuario;
    } catch (e) {
        throw Error("Error al crear Usuario");
    }
}

exports.readUsuario = async function(query) {
    try {
        var usuario;
        await Usuario.findOne(query).populate('nivelUsuario').exec(function(err, usuarioData) {
            if (err) return console.log(err.message);
            usuario = usuarioData;
        });
        return usuario;
    } catch (e) {
        throw Error('Error al consultar usuario');
    }
}
