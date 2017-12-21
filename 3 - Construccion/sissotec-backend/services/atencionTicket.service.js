const AtencionTicket = require('../models/atencionTicket.model');
var Especialista = require('../models/especialista.model');

exports.getAtencionesTicket = async function(query) {
    try {
        var atencionesTicket;
        await AtencionTicket.find(query).populate({
            path: 'ticket',
            populate: [{
                path: 'categoria',
                populate: { path: 'area' }
            },{
                path: 'cliente',
                populate: { path: 'usuario' }
            }]
        }).populate({
            path: 'mesaAyuda',
            populate: { path: 'usuario'}
        }).populate({
            path: 'especialista',
            populate: [{ path: 'usuario' }, { path: 'areas' }]
        }).exec(function (err, atencionesTicketData) {
            if (err) return console.log(err.message);
            atencionesTicket = atencionesTicketData;
        });
        return atencionesTicket;
    } catch (e) {
        console.log(e.message);
        throw Error('Error al listar las atenciones Ticket de mongo');
    }
}

exports.getAtencionesTicketPorArea = async function(nombreArea) {
    try {
        var atencionesTicket;
        await AtencionTicket.find({}).populate({
            path: 'ticket',
            populate: [{
                path: 'categoria',
                populate: { path: 'area' }
            },{
                path: 'cliente',
                populate: { path: 'usuario' }
            }]
        }).populate({
            path: 'mesaAyuda',
            populate: { path: 'usuario'}
        }).populate({
            path: 'especialista',
            populate: [{ path: 'usuario' }, { path: 'areas' }]
        }).exec(function (err, atencionesTicketData) {
            if (err) return console.log(err.message);
            // atencionesTicket = atencionesTicketData;
            atencionesTicket = atencionesTicketData.filter(function(atencionTicket) {
                return atencionTicket.ticket.categoria.area.nomArea == nombreArea;
            });
        });
        return atencionesTicket;
    } catch (e) {
        console.log(e.message);
        throw Error('Error al listar las atenciones Ticket por area de mongo');
    }
}

exports.createAtencionTicket = async function(atencionTicket) {
    var newAtencionTicket = new AtencionTicket({
        atendido: atencionTicket.atendido,
        horaGenerada: atencionTicket.horaGenerada,
        horaAtendida: atencionTicket.horaAtendida,
        observación: atencionTicket.observación,
        conformidad: atencionTicket.conformidad,
        estadoTicket: atencionTicket.estadoTicket,
        ticket: atencionTicket.ticket,
        mesaAyuda: atencionTicket.mesaAyuda,
        especialista: atencionTicket.especialista
    });

    try {
        var savedAtencionTicket = await newAtencionTicket.save();
        return savedAtencionTicket;
    } catch (e) {
        throw Error("Error al crear Atencion Ticket");
    }
}

exports.readAtencionTicket = async function(query) {
    try {
        var atencionTicket;
        await AtencionTicket.findOne(query).populate({
            path: 'ticket',
            populate: [{
                path: 'categoria',
                populate: { path: 'area' }
            },{
                path: 'cliente',
                populate: { path: 'usuario' }
            }]
        }).populate({
            path: 'mesaAyuda',
            populate: { path: 'usuario'}
        }).populate({
            path: 'especialista',
            populate: [{ path: 'usuario' }, { path: 'areas' }]
        }).exec(function(err, atencionTicketData) {
            if (err) return console.log(err.message);
            atencionTicket = atencionTicketData;
        });
        return atencionTicket;
    } catch (e) {
        throw Error('Error al consultar Atencion Ticket');
    }
}

exports.updateAtencionTicket = async function(atencionTicket) {
    var id = atencionTicket._id;

    try {
        var oldAtencionTicket = await AtencionTicket.findById(id);
    } catch (e) {
        throw Error("Error al buscar Atencion Ticket");
    }

    if (!oldAtencionTicket) {
        return false;
    }

    oldAtencionTicket.atendido = atencionTicket.atendido;
    oldAtencionTicket.horaGenerada = atencionTicket.horaGenerada;
    oldAtencionTicket.horaAtendida = atencionTicket.horaAtendida;
    oldAtencionTicket.observación = atencionTicket.observación;
    oldAtencionTicket.conformidad = atencionTicket.conformidad;
    oldAtencionTicket.estadoTicket = atencionTicket.estadoTicket;
    oldAtencionTicket.ticket = atencionTicket.ticket;
    oldAtencionTicket.mesaAyuda = atencionTicket.mesaAyuda;
    oldAtencionTicket.especialista = atencionTicket.especialista;

    try {
        var updatedAtencionTicket = await oldAtencionTicket.save();
        await AtencionTicket.findOne(updatedAtencionTicket).populate({
            path: 'ticket',
            populate: [{
                path: 'categoria',
                populate: { path: 'area' }
            },{
                path: 'cliente',
                populate: { path: 'usuario' }
            }]
        }).populate({
            path: 'mesaAyuda',
            populate: { path: 'usuario'}
        }).populate({
            path: 'especialista',
            populate: [{ path: 'usuario' }, { path: 'areas' }]
        }).exec(function(err, data) {
            updatedAtencionTicket = data;
        });
        return updatedAtencionTicket;
    } catch (e) {
        throw Error("Error al actualizar Atencion Ticket");
    }
}
