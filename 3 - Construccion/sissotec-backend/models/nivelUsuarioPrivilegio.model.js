var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nivelUsuarioPrivilegioSchema = new Schema({
    nivelUsuario: { type: Schema.Types.ObjectId, ref: 'NivelUsuario' },
    privilegio: { type: Schema.Types.ObjectId, ref: 'Privilegio' }
});
const NivelUsuarioPrivilegio = mongoose.model('NivelUsuarioPrivilegio', nivelUsuarioPrivilegioSchema, 'nivelusuarioprivilegio');
// Mongoose Model, Schema Name, Collection MongoDb Name.

module.exports = NivelUsuarioPrivilegio;
