const express = require('express')
const router = express.Router();
const tiendaController = require('../controllers/tiendaController')

/* GET home page. */
router.get('/', tiendaController.tienda);

module.exports = router