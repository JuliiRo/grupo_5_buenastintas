const express = require('express')
const router = express.Router();
const tiendaController = require('../controllers/tiendaController')
const logMiddleware = require('../middlewares/logMiddleware')

/* GET home page. */
router.get('/', tiendaController.tienda);
router.get('/carrito', logMiddleware, tiendaController.carrito);
router.post('/search',tiendaController.search)
router.get('/:id', tiendaController.detalle);
router.get('/categoria/:id', tiendaController.categoria)


module.exports = router