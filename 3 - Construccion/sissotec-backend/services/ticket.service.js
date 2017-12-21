const Ticket = require('../models/ticket.model');

exports.getTickets = async function(query) {
    try {
        var tickets;
        await Ticket.find(query).populate({
            path: 'categoria',
            populate: { path: 'area' }
        }).populate({
            path: 'cliente',
            populate: { path: 'usuario' }
        }).exec(function (err, ticketsData) {
            if (err) return console.log(err.message);
            tickets = ticketsData;
        });
        return tickets;
    } catch (e) {
        throw Error('Error al listar los tickets de mongo');
    }
}

exports.createTicket = async function(ticket) {
    var newTicket = new Ticket({
        detalleTicket: ticket.detalleTicket,
        categoria: ticket.categoria,
        cliente: ticket.cliente
    });

    try {
        var savedTicket = await newTicket.save();
        return savedTicket;
    } catch (e) {
        throw Error("Error al crear Ticket");
    }
}
