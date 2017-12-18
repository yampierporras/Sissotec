var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaSchema = new Schema({
    nomCategoria: String,
    prioridadCategoria: Number,
    area: { type: Schema.Types.ObjectId, ref: 'Area'}
});

const Categoria = mongoose.model('Categoria', categoriaSchema, 'categoria');

module.exports = Categoria;
