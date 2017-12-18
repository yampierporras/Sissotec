const ClienteService = require('../services/cliente.service');

exports.getClientes = async function(req, res, next) {
    try {
        var clientes = await ClienteService.getClientes({});
        return res.status(200).json({
            status: 200,
            data: clientes,
            message: 'Listado de clientes exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createCliente = async function(req, res, next) {
    var cliente = {
        nomCliente: req.body.nomCliente,
        apeCliente: req.body.apeCliente,
        estadoCliente: req.body.estadoCliente,
        usuario: req.body.usuario._id
    };

    try {
        var createdCliente = await ClienteService.createCliente(cliente);
        return res.status(201).json({
            status: 201,
            data: createdCliente,
            message: "Creacion de cliente exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.readCliente = async function(req, res, next) {
    try {
        var cliente = await ClienteService.readCliente({usuario:req.params.idUsuario});
        return res.status(202).json({
            status: 202,
            data: cliente,
            message: 'Consulta de cliente exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.updateCliente = async function(req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({status: 400., message: "Id tiene que estar presente"});
    }

    var cliente = {
        _id: req.body._id,
        nomCliente: req.body.nomCliente,
        apeCliente: req.body.apeCliente,
        estadoCliente: req.body.estadoCliente,
        usuario: req.body.usuario._id
    }

    try {
        var updatedCliente = await ClienteService.updateCliente(cliente);
        return res.status(200).json({
            status: 200,
            data: updatedCliente,
            message: "Actualizacion de cliente exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message});
    }
}
