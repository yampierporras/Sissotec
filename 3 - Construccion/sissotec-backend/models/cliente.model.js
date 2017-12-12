var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nomCliente: String,
    apeCliente: String,
    estadoCliente: Boolean,
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario'}
});

const Cliente = mongoose.model('Cliente', clienteSchema, 'cliente');

module.exports = Cliente;
