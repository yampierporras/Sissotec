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

exports.filterUsuarios = async function(req, res, next) {
    try {
        var usuarios = await UsuarioService.filterUsuarios({
            "emailUsuario": { "$regex": req.params.filterText }
        });

        return res.status(200).json({
            status: 200,
            data: usuarios,
            message: 'Listado de usuarios filtrados Exitoso'
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
        estadoUsuario: req.body.estadoUsuario
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

exports.readUsuario = async function(req, res, next) {
    try {
        var usuario = await UsuarioService.readUsuario({emailUsuario:req.params.emailUsuario});
        return res.status(202).json({
            status: 202,
            data: usuario,
            message: 'Consulta de usuario exitoso'
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updateUsuario = async function(req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({status: 400., message: "Id tiene que estar presente"});
    }

    var usuario = {
        _id: req.body._id,
        nomUsuario: req.body.nomUsuario,
        emailUsuario: req.body.emailUsuario,
        urlImgUsuario: req.body.urlImgUsuario,
        estadoUsuario: req.body.estadoUsuario,
        nivelUsuario: req.body.nivelUsuario._id
    }

    try {
        var updatedUsuario = await UsuarioService.updateUsuario(usuario);
        return res.status(200).json({
            status: 200,
            data: updatedUsuario,
            message: "Actualizacion de usuario exitoso"
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
