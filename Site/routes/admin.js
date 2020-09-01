var express = require('express');
const adminController = require('../controllers/adminController');
var router = express.Router();

/* GET home page. */
router.get('/', adminController.admin)

module.exports = router;