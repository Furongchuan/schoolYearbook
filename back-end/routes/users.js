var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users')
const { response, getCode } = require('../middlewares')

router.post('/register', usersController.register, response)
router.post('/login', usersController.login, response)
router.get('/code', getCode)

module.exports = router;