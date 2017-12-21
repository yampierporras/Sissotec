const Especialista = require('../models/especialista.model');

exports.getEspecialistas = async function(query) {
    try {
        var especialistas;
        await Especialista.find(query).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).populate({
            path: 'areas'
        }).exec(function (err, especialistasData) {
            if (err) return console.log(err.message);
            especialistas = especialistasData;
        });
        return especialistas;
    } catch (e) {
        throw Error('Error al listar los especialistas de mongo');
    }
}

exports.createEspecialista = async function(especialista) {
    var newEspecialista = new Especialista({
        nomEspecialista: especialista.nomEspecialista,
        apeEspecialista: especialista.apeEspecialista,
        estadoEspecialista: especialista.estadoEspecialista,
        usuario: especialista.usuario,
        areas: especialista.areas
    });

    try {
        var savedEspecialista = await newEspecialista.save();
        return savedEspecialista;
    } catch (e) {
        throw Error("Error al crear Especialista");
    }
}

exports.readEspecialista = async function(query) {
    try {
        var especialista;
        await Especialista.findOne(query).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).populate({
            path: 'areas'
        }).exec(function(err, especialistaData) {
            if (err) return console.log(err.message);
            especialista = especialistaData;
        });
        return especialista;
    } catch (e) {
        throw Error('Error al consultar especialista');
    }
}

exports.updateEspecialista = async function(especialista) {
    var id = especialista._id;

    try {
        var oldEspecialista = await Especialista.findById(id);
    } catch (e) {
        console.log(e.message);
        throw Error("Error al buscar Especialista");
    }

    if (!oldEspecialista) {
        return false;
    }

    oldEspecialista.nomEspecialista = especialista.nomEspecialista;
    oldEspecialista.apeEspecialista = especialista.apeEspecialista;
    oldEspecialista.estadoEspecialista = especialista.estadoEspecialista;
    oldEspecialista.usuario = especialista.usuario;
    oldEspecialista.areas = especialista.areas;

    try {
        var updatedEspecialista = await oldEspecialista.save();
        await Especialista.findOne(updatedEspecialista).populate({
            path: 'usuario',
            populate: { path: 'nivelUsuario' }
        }).populate({
            path: 'areas'
        }).exec(function(err, data) {
            updatedEspecialista = data;
        });
        return updatedEspecialista;
    } catch (e) {
        console.log(+e.message);
        throw Error("Error al actualizar Cliente");
    }
}
