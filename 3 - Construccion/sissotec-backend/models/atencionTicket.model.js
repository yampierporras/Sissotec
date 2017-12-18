var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var atencionTicketSchema = new Schema({
    atendido: Number,
    horaGenerada: Date,
    horaAtendida: Date,
    observación: String,
    conformidad: Boolean,
    estadoTicket: Boolean,
    ticket: { type: Schema.Types.ObjectId, ref: 'Ticket'},
    mesaAyuda: { type: Schema.Types.ObjectId, ref: 'MesaAyuda'},
    especialista: { type: Schema.Types.ObjectId, ref: 'Especialista'}
});

const AtencionTicket = mongoose.model('AtencionTicket', atencionTicketSchema, 'atencionTicket');

module.exports = AtencionTicket;
