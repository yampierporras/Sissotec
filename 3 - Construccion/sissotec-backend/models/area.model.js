var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areaSchema = new Schema({
    nomArea: String,
    desArea: String
});

const Area = mongoose.model('Area', areaSchema, 'area');

module.exports = Area;

// {
//     "nomArea":"Academico",
//     "desArea":"void"
// }
// {
//     "nomArea":"Redes",
//     "desArea":"void"
// }
// {
//     "nomArea":"Financiero",
//     "desArea":"void"
// }
// {
//     "nomArea":"Contraseñas",
//     "desArea":"void"
// }
// {
//     "nomArea":"Tecnico",
//     "desArea":"void"
// }
// {
//     "nomArea":"Base de datos",
//     "desArea":"void"
// }
