const EspecialistaService = require('../services/especialista.service');

exports.getEspecialistas = async function(req, res, next) {
    try {
        var especialistas = await EspecialistaService.getEspecialistas({});
        return res.status(200).json({
            status: 200,
            data: especialistas,
            message: 'Listado de especialistas exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createEspecialista = async function(req, res, next) {
    var especialista = {
        nomEspecialista: req.body.nomEspecialista,
        apeEspecialista: req.body.apeEspecialista,
        estadoEspecialista: req.body.estadoEspecialista,
        usuario: req.body.usuario._id,
        areas: req.body.areas
    };

    try {
        var createdEspecialista = await EspecialistaService.createEspecialista(especialista);
        return res.status(201).json({
            status: 201,
            data: createdEspecialista,
            message: "Creacion de especialista exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.readEspecialista = async function(req, res, next) {
    try {
        var especialista = await EspecialistaService.readEspecialista({usuario:req.params.idUsuario});
        return res.status(202).json({
            status: 202,
            data: especialista,
            message: 'Consulta de especialista exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.updateEspecialista = async function(req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({status: 400., message: "Id tiene que estar presente"});
    }

    var especialista = {
        _id: req.body._id,
        nomEspecialista: req.body.nomEspecialista,
        apeEspecialista: req.body.apeEspecialista,
        estadoEspecialista: req.body.estadoEspecialista,
        usuario: req.body.usuario._id,
        areas: req.body.areas
    }

    try {
        var updatedEspecialista = await EspecialistaService.updateEspecialista(especialista);
        return res.status(200).json({
            status: 200,
            data: updatedEspecialista,
            message: "Actualizacion de especialista exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message});
    }
}
