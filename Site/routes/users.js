var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')
const upImagesUsers = require('../middlewares/upImagesUsers')

/* GET users listing. */
router.get('/', usersController.login)
router.get('/register', usersController.register)
router.post('/register',upImagesUsers.any(), usersController.agregarRegister)

module.exports = router;
