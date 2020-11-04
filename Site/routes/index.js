var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const loginCookieMiddlewares = require('../middlewares/loginCookieMiddlewares');
/* GET home page. */
router.get('/',loginCookieMiddlewares, indexController.index)


module.exports = router;
