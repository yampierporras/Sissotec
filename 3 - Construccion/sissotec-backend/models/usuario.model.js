var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nomUsuario: String,
    emailUsuario: String,
    urlImgUsuario: String,
    estadoUsuario: Boolean
});
const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;
