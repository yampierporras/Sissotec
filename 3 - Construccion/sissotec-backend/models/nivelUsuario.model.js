var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nivelUsuarioSchema = new Schema({
    codNivelUsuario: int,//0:Cliente, 1:MesaAyuda, 2:Especialista, 3:Administrador, -1:SinAsignar
    nomNivelUsuario: String
});
const Privilegio = mongoose.model('privilegios', privilegioSchema);

module.exports = Privilegio;
