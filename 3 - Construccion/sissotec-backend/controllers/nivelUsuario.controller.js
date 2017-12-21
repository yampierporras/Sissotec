const NivelUsuarioService = require('../services/nivelUsuario.service');

exports.readNivelUsuario = async function(req, res, next) {
    try {
        var nivelUsuario = await NivelUsuarioService.readNivelUsuario({codNivelUsuario:req.params.codigo});
        return res.status(202).json({
            status: 202,
            data: nivelUsuario,
            message: 'Consulta de nivel usuario exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
