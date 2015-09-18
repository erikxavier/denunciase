var express = require('express');
var Usuario = require('../models/usuario');

var UsuarioController = {
	cadastrar: function (req, res, next) {
		if (req.body.txtLogin) {
			Usuario.findOne({ nomeUsuario: req.body.txtLogin },
				function (err, user) {
					if (user)
						res.json({ err: "Usuário já existe!" });
					else {
						var usuario = new Usuario({
							nomeUsuario: req.body.txtLogin,
							senha: req.body.txtSenha,
							email: req.body.txtEmail
						});
						usuario.save(function (err, rest) {
							if (err) res.json({ err: err });
							res.json({ cadastrado: rest });
						})
					}
				})									
		}
	},
	buscar: function (req, res, next) {
		res.json({ nome: "erik" });
	}
}

module.exports = UsuarioController;
//txtLogin, txtSenha, txtConfSenha, txtEmail