var express = require('express');
const adminController = require('../controllers/adminController');
var router = express.Router();

/* GET home page. */
router.get('/', adminController.agregar)
/* Ver / Editar */
router.get('/show/:id/:flap?',adminController.show);
/* Editar producto */
router.put('/edit/:id', adminController.editar)
/* Eliminar producto */
router.delete('/delete/:id', adminController.eliminar)

module.exports = router;