const AtencionTicketService = require('../services/atencionTicket.service');

exports.getAtencionesTicket = async function(req, res, next) {
    try {
        var atencionesTicket = await AtencionTicketService.getAtencionesTicket({});
        return res.status(200).json({
            status: 200,
            data: atencionesTicket,
            message: 'Listado de atenciones Ticket exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getAtencionesTicketPorArea = async function(req, res, next) {
    try {
        var atencionesTicket = await AtencionTicketService.getAtencionesTicketPorArea(req.params.nombreArea);
        return res.status(200).json({
            status: 200,
            data: atencionesTicket,
            message: 'Listado de atenciones Ticket exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createAtencionTicket = async function(req, res, next) {
    var atencionTicket = {
        atendido: req.body.atendido,
        horaGenerada: req.body.horaGenerada,
        horaAtendida: req.body.horaAtendida,
        observación: req.body.observación,
        conformidad: req.body.conformidad,
        estadoTicket: req.body.estadoTicket,
        ticket: req.body.ticket._id,
        mesaAyuda: req.body.mesaAyuda._id,
        especialista: req.body.especialista._id
    };

    try {
        var createdAtencionTicket = await AtencionTicketService.createAtencionTicket(atencionTicket);
        return res.status(201).json({
            status: 201,
            data: createdAtencionTicket,
            message: "Creacion de Atencion Ticket exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.readAtencionTicket = async function(req, res, next) {
    try {
        var atencionTicket = await AtencionTicketService.readAtencionTicket({_id:req.params.idAtencionTicket});
        return res.status(202).json({
            status: 202,
            data: atencionTicket,
            message: 'Consulta de atencion Ticket exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
exports.updateAtencionTicket = async function(req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({status: 400., message: "Id tiene que estar presente"});
    }

    var atencionTicket = {
        atendido: req.body.atendido,
        horaGenerada: req.body.horaGenerada,
        horaAtendida: req.body.horaAtendida,
        observación: req.body.observación,
        conformidad: req.body.conformidad,
        estadoTicket: req.body.estadoTicket,
        ticket: req.body.ticket._id,
        mesaAyuda: req.body.mesaAyuda._id,
        especialista: req.body.especialista._id
    }

    try {
        var updatedAtencionTicket = await AtencionTicketService.updateAtencionTicket(atencionTicket);
        return res.status(200).json({
            status: 200,
            data: updatedAtencionTicket,
            message: "Actualizacion de dAtencion Ticket exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message});
    }
}
