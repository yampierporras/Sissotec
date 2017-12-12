const Administrador = require('../models/administrador.model');

exports.getAdministradores = async function(query) {
    try {
        var administradores;
        await Administrador.find(query).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).exec(function (err, administradoresData) {
            if (err) return console.log(err.message);
            administradores = administradoresData;
        });
        return administradores;
    } catch (e) {
        throw Error('Error al listar los administradores de mongo');
    }
}

exports.createAdministrador = async function(administrador) {
    var newAdministrador = new Administrador({
        nomAdministrador: administrador.nomAdministrador,
        apeAdministrador: administrador.apeAdministrador,
        estadoAdministrador: administrador.estadoAdministrador,
        usuario: administrador.usuario
    });

    try {
        var savedAdministrador = await newAdministrador.save();
        return savedAdministrador;
    } catch (e) {
        throw Error("Error al crear Administrador");
    }
}

exports.readAdminitrador = async function(query) {
    try {
        var adminitrador;
        await Administrador.findOne(query).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).exec(function(err, administradorData) {
            if (err) return console.log(err.message);
            adminitrador = administradorData;
        });
        return adminitrador;
    } catch (e) {
        throw Error('Error al consultar administrador');
    }
}
