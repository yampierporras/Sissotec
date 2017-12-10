var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NivelUsuario =  require('../models/nivelUsuario.model');

var usuarioSchema = new Schema({
    nomUsuario: String,
    emailUsuario: String,
    urlImgUsuario: String,
    estadoUsuario: Boolean,
    nivelUsuario: { type: Schema.Types.ObjectId, ref: 'NivelUsuario' }
});
const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuario');

module.exports = Usuario;
