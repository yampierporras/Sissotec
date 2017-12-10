var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var privilegioSchema = new Schema({
    nomPrivilegio: String
});
const Privilegio = mongoose.model('Privilegio', privilegioSchema, 'privilegio');

module.exports = Privilegio;
