const Cliente = require('../models/cliente.model');

exports.getClientes = async function(query) {
    try {
        var clientes;
        await Cliente.find(query).populate('idUsuario').exec(function (err, clientesData) {
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
        apePatCliente: cliente.apePatCliente,
        apeMatCliente: cliente.apeMatCliente,
        idUsuario: cliente.idUsuario
    });

    try {
        var savedCliente = await newCliente.save();
        return savedCliente;
    } catch (e) {
        throw Error("Error al crear Cliente");
    }
}
