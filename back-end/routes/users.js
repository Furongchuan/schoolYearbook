var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users')
const { response, getCode, authLogin } = require('../middlewares')

router.post('/register', usersController.register, response);
router.post('/login', usersController.login, response);
router.get('/code', getCode);
router.get('/auth', authLogin, usersController.auth, response);
// router.get('/info', authLogin, usersController.info, response);

module.exports = router;