var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var administradorSchema = new Schema({
    nomAdministrador: String,
    apeAdministrador: String,
    estadoAdministrador: Boolean,
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario'}
});

const Administrador = mongoose.model('Administrador', administradorSchema, 'administrador');

module.exports = Administrador;
