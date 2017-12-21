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

exports.filterUsuarios = async function(query) {
    try {
        var usuarios;
        await Usuario.find(query).populate('nivelUsuario', null, {codNivelUsuario: -1}).exec(function(err, usuariosData) {
            if (err) return console.log(err.message);
            usuarios = usuariosData.filter(function(usuario) {
                return usuario.nivelUsuario;
            });
        });
        return usuarios;
    } catch (e) {
        throw Error('Error al listar los usuarios de mongo');
    }
}

exports.createUsuario = async function(usuario) {
    var newUsuario;

    await NivelUsuario.findOne({codNivelUsuario: 0}).exec(function (err, nivelCliente) {
        if (err) return console.log(err.message);
        newUsuario = new Usuario({
            nomUsuario: usuario.nomUsuario,
            emailUsuario: usuario.emailUsuario,
            urlImgUsuario: usuario.urlImgUsuario,
            estadoUsuario: usuario.estadoUsuario,
            nivelUsuario: nivelCliente._id
        });
    });
    try {
        var savedUsuario = await newUsuario.save();
        await Usuario.findOne(savedUsuario).populate('nivelUsuario').exec(function(err, data) {
            savedUsuario = data;
        });
        console.log(savedUsuario);
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
exports.updateUsuario = async function(usuario) {
    var id = usuario._id;

    try {
        var oldUsuario = await Usuario.findById(id);
    } catch (e) {
        throw Error("Error al buscar Usuario");
    }

    if (!oldUsuario) {
        return false;
    }

    oldUsuario.nomUsuario = usuario.nomUsuario;
    oldUsuario.emailUsuario = usuario.emailUsuario;
    oldUsuario.urlImgUsuario = usuario.urlImgUsuario;
    oldUsuario.estadoUsuario = usuario.estadoUsuario;
    oldUsuario.nivelUsuario = usuario.nivelUsuario;

    try {
        var savedUsuario = await oldUsuario.save();
        return savedUsuario;
    } catch (e) {
        throw Error("Error al actualizar Usuario");
    }
}
