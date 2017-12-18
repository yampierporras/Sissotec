var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    detalleTicket: String,
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria'},
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente'}
});

const Ticket = mongoose.model('Ticket', ticketSchema, 'ticket');

module.exports = Ticket;
