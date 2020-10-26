var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const localUserCheck = require('../middlewares/localUserCheck');
/* GET home page. */
router.get('/',localUserCheck, indexController.index)

module.exports = router;
