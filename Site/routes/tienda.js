const express = require('express')
const router = express.Router();
const tiendaController = require('../controllers/tiendaController')
const logMiddleware = require('../middlewares/logMiddleware')

/* GET home page. */
router.get('/', tiendaController.tienda);
router.get('/carrito', logMiddleware, tiendaController.carrito);
router.post('/search',tiendaController.search)
router.get('/:id', tiendaController.detalle);


module.exports = router