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

exports.readCliente = async function(query) {
    try {
        var cliente;
        await Cliente.findOne(query).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).exec(function(err, clienteData) {
            if (err) return console.log(err.message);
            cliente = clienteData;
        });
        return cliente;
    } catch (e) {
        throw Error('Error al consultar cliente');
    }
}

exports.updateCliente = async function(cliente) {
    var id = cliente._id;

    try {
        var oldCliente = await Cliente.findById(id);
    } catch (e) {
        // throw Error("Error al buscar Cliente");
        console.log('1'+e.message);
    }

    if (!oldCliente) {
        return false;
    }

    oldCliente.nomCliente = cliente.nomCliente;
    oldCliente.apeCliente = cliente.apeCliente;
    oldCliente.estadoCliente = cliente.estadoCliente;
    oldCliente.usuario = cliente.usuario;

    try {
        var savedCliente = await oldCliente.save();
        await Cliente.findOne(savedCliente).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).exec(function(err, data) {
            savedCliente = data;
        });
        return savedCliente;
    } catch (e) {
        // throw Error("Error al actualizar Cliente");
        console.log('2'+e.message);
    }
}
