const AdministradorService = require('../services/administrador.service');

exports.getAdministradores = async function(req, res, next) {
    try {
        var administradores = await AdministradorService.getAdministradores({});
        return res.status(200).json({
            status: 200,
            data: administradores,
            message: 'Listado de administradores exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createAdministrador = async function(req, res, next) {
    var administrador = {
        nomAdministrador: req.body.nomAdministrador,
        apeAdministrador: req.body.apeAdministrador,
        estadoAdministrador: req.body.estadoAdministrador,
        usuario: req.body.usuario._id
    };

    try {
        var createdAdministrador = await AdministradorService.createAdministrador(administrador);
        return res.status(201).json({
            status: 201,
            data: createdAdministrador,
            message: "Creacion de administrador exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.readAdminitrador = async function(req, res, next) {
    try {
        var administrador = await AdministradorService.readAdminitrador({usuario:req.params.idUsuario});
        return res.status(202).json({
            status: 202,
            data: administrador,
            message: 'Consulta de adminitrador exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
