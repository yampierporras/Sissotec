var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var especialistaSchema = new Schema({
    nomEspecialista: String,
    apeEspecialista: String,
    estadoEspecialista: Boolean,
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario'},
    areas: [{ type: Schema.Types.ObjectId, ref: 'Area' }]
});

const Especialista = mongoose.model('Especialista', especialistaSchema, 'especialista');

module.exports = Especialista;
