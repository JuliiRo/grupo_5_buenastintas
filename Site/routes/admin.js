var express = require('express');
const adminController = require('../controllers/adminController');
var router = express.Router();
const upImagesBebidas = require('../middlewares/upImagesBebidas')
const adminMW = require('../middlewares/adminMW')
/* Vista de todos los productos*/
router.get('/', adminMW ,adminController.show)
/* GET agregar. */
router.get('/agregar',adminMW , adminController.agregar)
/* POST agregar. */
router.post('/agregar',upImagesBebidas.any(), adminController.agregarProducto)
/* Ver / Editar */
router.get('/show/:id/:flap?',adminMW ,adminController.showEdit);
/* Editar producto */
router.put('/edit/:id',upImagesBebidas.any(), adminController.editar)
/* Eliminar producto */
router.delete('/eliminar/:id',adminMW , adminController.delete)

module.exports = router;