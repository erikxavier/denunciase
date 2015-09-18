var mongoose = require('mongoose');

var Usuario = new mongoose.Schema({
	nomeUsuario: {type:String, required:true, unique:true},
	senha: String,
	email: String	
});

module.exports = mongoose.model('Usuario', Usuario);