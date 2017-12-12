const Cliente = require('../models/cliente.model');

exports.getClientes = async function(query) {
    try {
        var clientes;
        await Cliente.find(query).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).exec(function (err, clientesData) {
            if (err) return console.log(err.message);
            clientes = clientesData;
        });
        return clientes;
    } catch (e) {
        throw Error('Error al listar los clientes de mongo');
    }
}

exports.createCliente = async function(cliente) {
    var newCliente = new Cliente({
        nomCliente: cliente.nomCliente,
        apeCliente: cliente.apeCliente,
        estadoCliente: cliente.estadoCliente,
        usuario: cliente.usuario
    });

    try {
        var savedCliente = await newCliente.save();
        return savedCliente;
    } catch (e) {
        throw Error("Error al crear Cliente");
    }
}
