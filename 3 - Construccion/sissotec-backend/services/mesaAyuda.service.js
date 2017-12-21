const MesaAyuda = require('../models/mesaAyuda.model');

exports.getMesasAyuda = async function(query) {
    try {
        var mesasAyuda;
        await MesaAyuda.find(query).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).exec(function (err, mesasAyudaData) {
            if (err) return console.log(err.message);
            mesasAyuda = mesasAyudaData;
        });
        return mesasAyuda;
    } catch (e) {
        throw Error('Error al listar los trabajadores de mesa de ayuda de mongo');
    }
}

exports.createMesaAyuda = async function(mesaAyuda) {
    var newMesaAyuda = new MesaAyuda({
        nomMesaAyuda: mesaAyuda.nomMesaAyuda,
        apeMesaAyuda: mesaAyuda.apeMesaAyuda,
        estadoMesaAyuda: mesaAyuda.estadoMesaAyuda,
        usuario: mesaAyuda.usuario
    });

    try {
        var savedMesaAyuda = await newMesaAyuda.save();
        return savedMesaAyuda;
    } catch (e) {
        throw Error("Error al crear trabajador de Mesa de Ayuda");
    }
}

exports.readMesaAyuda = async function(query) {
    try {
        var mesaAyuda;
        await MesaAyuda.findOne(query).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).exec(function(err, mesaAyudaData) {
            if (err) return console.log(err.message);
            mesaAyuda = mesaAyudaData;
        });
        return mesaAyuda;
    } catch (e) {
        throw Error('Error al consultar trabjador de Mesa de Ayuda');
    }
}

exports.updateMesaAyuda = async function(mesaAyuda) {
    var id = mesaAyuda._id;

    try {
        var oldMesaAyuda = await MesaAyuda.findById(id);
    } catch (e) {
        throw Error("Error al buscar trabajador de Mesa de Ayuda");
    }

    if (!oldMesaAyuda) {
        return false;
    }

    oldMesaAyuda.nomMesaAyuda = mesaAyuda.nomMesaAyuda;
    oldMesaAyuda.apeMesaAyuda = mesaAyuda.apeMesaAyuda;
    oldMesaAyuda.estadoMesaAyuda = mesaAyuda.estadoMesaAyuda;
    oldMesaAyuda.usuario = mesaAyuda.usuario;

    try {
        var savedMesaAyuda = await oldMesaAyuda.save();
        return savedMesaAyuda;
    } catch (e) {
        throw Error("Error al actualizar trabajador de Mesa de Ayuda");
    }
}
