var express = require('express');
var router = express.Router();
var routeUsuario = require('./usuario');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', routeUsuario);

module.exports = router;
