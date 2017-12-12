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
