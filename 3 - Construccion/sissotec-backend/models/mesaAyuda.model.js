var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mesaAyudaSchema = new Schema({
    nomMesaAyuda: String,
    apeMesaAyuda: String,
    estadoMesaAyuda: Boolean,
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario'}
});

const MesaAyuda = mongoose.model('MesaAyuda', mesaAyudaSchema, 'mesaAyuda');

module.exports = MesaAyuda;
