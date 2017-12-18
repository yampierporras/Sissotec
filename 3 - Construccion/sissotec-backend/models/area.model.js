var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areaSchema = new Schema({
    nomArea: String,
    desArea: String
});

const Area = mongoose.model('Area', areaSchema, 'area');

module.exports = Area;
