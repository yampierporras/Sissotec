const Area = require('../models/area.model');

exports.getAreas = async function(query) {
    try {
        var areas;
        await Area.find(query).exec(function (err, areasData) {
            if (err) return console.log(err.message);
            areas = areasData;
        });
        return areas;
    } catch (e) {
        throw Error('Error al listar las areas de mongo');
    }
}
