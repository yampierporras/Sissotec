const MesaAyudaService = require('../services/mesaAyuda.service');

exports.getMesasAyuda = async function(req, res, next) {
    try {
        var mesasAyuda = await MesaAyudaService.getMesasAyuda({});
        return res.status(200).json({
            status: 200,
            data: mesasAyuda,
            message: 'Listado de trabajadores de mesa de ayuda exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createMesaAyuda = async function(req, res, next) {
    var mesaAyuda = {
        nomMesaAyuda: req.body.nomMesaAyuda,
        apeMesaAyuda: req.body.apeMesaAyuda,
        estadoMesaAyuda: req.body.estadoMesaAyuda,
        usuario: req.body.usuario._id
    };

    try {
        var createdMesaAyuda = await MesaAyudaService.createMesaAyuda(mesaAyuda);
        return res.status(201).json({
            status: 201,
            data: createdMesaAyuda,
            message: "Creacion de trabajador de mesa de ayuda exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.readMesaAyuda = async function(req, res, next) {
    try {
        var mesaAyuda = await MesaAyudaService.readMesaAyuda({usuario:req.params.idUsuario});
        return res.status(202).json({
            status: 202,
            data: mesaAyuda,
            message: 'Consulta de trabajador de mesa de ayuda exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.updateMesaAyuda = async function(req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({status: 400., message: "Id tiene que estar presente"});
    }

    var mesaAyuda = {
        _id: req.body._id,
        nomMesaAyuda: req.body.nomMesaAyuda,
        apeMesaAyuda: req.body.apeMesaAyuda,
        estadoMesaAyuda: req.body.estadoMesaAyuda,
        usuario: req.body.usuario._id
    }

    try {
        var updatedMesaAyuda = await MesaAyudaService.updateMesaAyuda(mesaAyuda);
        return res.status(200).json({
            status: 200,
            data: updatedMesaAyuda,
            message: "Actualizacion de trabajador de mesa de ayuda exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message});
    }
}
