var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')
const upImagesUsers = require('../middlewares/upImagesUsers')
const loginValidator = require('../validators/loginValidator');

/* GET users listing. */

router.get('/register', usersController.register)
router.post('/register',upImagesUsers.any(), usersController.agregarRegister)

router.get('/login', usersController.login) //ejecuta el metodo para cargar la vista del formulario....
router.post('/login',loginValidator,usersController.processLogin) //ejecuta el metodo que procesa lo que se envía del formulario

router.get('/logout', usersController.logout)
module.exports = router;
