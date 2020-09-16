var express = require('express');
const adminController = require('../controllers/adminController');
var router = express.Router();

/* Vista de todos los productos*/
router.get('/', adminController.show)
/* GET agregar. */
router.get('/agregar', adminController.agregar)
/* POST agregar. */
router.post('/agregar', adminController.agregarProducto)
/* Ver / Editar */
router.get('/show/:id/:flap?',adminController.showEdit);
/* Editar producto */
router.put('/edit/:id', adminController.editar)
/* Eliminar producto */
router.delete('/delete/:id', adminController.eliminar)

module.exports = router;