var express = require('express');
const adminController = require('../controllers/adminController');
var router = express.Router();
const upImagesBebidas = require('../middlewares/upImagesBebidas')
/* Vista de todos los productos*/
router.get('/', adminController.show)
/* GET agregar. */
router.get('/agregar', adminController.agregar)
/* POST agregar. */
router.post('/agregar',upImagesBebidas.any(), adminController.agregarProducto)
/* Ver / Editar */
router.get('/show/:id/:flap?',adminController.showEdit);
/* Editar producto */
router.put('/edit/:id',upImagesBebidas.any(), adminController.editar)
/* Eliminar producto */
router.delete('/eliminar/:id', adminController.delete)

module.exports = router;