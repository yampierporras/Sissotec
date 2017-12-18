var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nivelUsuarioSchema = new Schema({
    codNivelUsuario: Number,
    nomNivelUsuario: String,
    privilegios: [{ type: Schema.Types.ObjectId, ref: 'Privilegio' }]
});
const NivelUsuario = mongoose.model('NivelUsuario', nivelUsuarioSchema, 'nivelusuario');
// Mongoose Model, Schema Name, Collection MongoDb Name.

module.exports = NivelUsuario;

// {
//     codNivelUsuario: -1,
//     nomNivelUsuario: 'Sin asignar'
// }
// {
//     codNivelUsuario: 0,
//     nomNivelUsuario: 'Cliente'
// }
// {
//     codNivelUsuario: 1,
//     nomNivelUsuario: 'Mesa de Ayuda'
// }
// {
//     codNivelUsuario: 2,
//     nomNivelUsuario: 'Especialista'
// }
// {
//     codNivelUsuario: 3,
//     nomNivelUsuario: 'Administrador'
// }
