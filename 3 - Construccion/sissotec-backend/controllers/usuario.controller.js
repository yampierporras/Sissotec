var UsuarioService = require('../services/usuario.service');

exports.getUsuarios = async function(req, res, next) {
    try {
        var usuarios = await UsuarioService.getUsuarios({});
        // console.log(usuarios);
        return res.status(200).json({
            status: 200,
            data: usuarios,
            message: 'Listado de usuarios exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createUsuario = async function(req, res, next) {
    var usuario = {
        nomUsuario: req.body.nomUsuario,
        emailUsuario: req.body.emailUsuario,
        urlImgUsuario: req.body.urlImgUsuario,
        estadoUsuario: req.body.estadoUsuario,
        nivelUsuario: req.body.nivelUsuario
    };

    try {
        var createdUsuario = await UsuarioService.createUsuario(usuario);
        return res.status(201).json({
            status: 201,
            data: createdUsuario,
            message: "Creacion de usuario exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
