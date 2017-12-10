var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nivelUsuarioPrivilegioSchema = new Schema({
    idNivelUsuario: { type: Schema.Types.ObjectId, ref: 'NivelUsuario' },
    idPrivilegio: { type: Schema.Types.ObjectId, ref: 'Privilegio' }
});
const NivelUsuarioPrivilegio = mongoose.model('NivelUsuarioPrivilegio', nivelUsuarioPrivilegioSchema, 'nivelusuarioprivilegio');
// Mongoose Model, Schema Name, Collection MongoDb Name.

module.exports = NivelUsuarioPrivilegio;
