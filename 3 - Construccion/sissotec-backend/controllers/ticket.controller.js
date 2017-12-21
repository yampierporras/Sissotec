const TicketService = require('../services/ticket.service');

exports.getTickets = async function(req, res, next) {
    try {
        var clientes = await TicketService.getTickets({});
        return res.status(200).json({
            status: 200,
            data: clientes,
            message: 'Listado de tickets exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createTicket = async function(req, res, next) {
    var ticket = {
        detalleTicket: req.body.detalleTicket,
        categoria: req.body.categoria._id,
        cliente: req.body.cliente._id
    };

    try {
        var createdTicket = await TicketService.createTicket(ticket);
        return res.status(201).json({
            status: 201,
            data: createdTicket,
            message: "Creacion de ticket exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
