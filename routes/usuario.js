var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuario');

/* GET users listing. */
router.post('/', usuarioController.cadastrar);
router.get('/', function(req, res) {
	res.send('Atingiu /user');	
})      

module.exports = router;
