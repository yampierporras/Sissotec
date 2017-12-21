const AreaService = require('../services/area.service');

exports.getAreas = async function(req, res, next) {
    try {
        var areas = await AreaService.getAreas({});
        return res.status(200).json({
            status: 200,
            data: areas,
            message: 'Listado de areas exitoso'
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
