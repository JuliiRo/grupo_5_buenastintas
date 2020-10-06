var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const loginCookieMiddleware = require('../middlewares/loginCookieMiddlewares')

/* GET home page. */
router.get('/',loginCookieMiddleware ,indexController.index)

module.exports = router;
