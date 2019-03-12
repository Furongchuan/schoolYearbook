const express = require('express')
const router = express.Router()
const personalController = require('../controllers/personal')
const { response, authLogin } = require('../middlewares')

router.get('/science', personalController.getPresonalItems, response)
router.post('/updata', personalController.postUpdataInfo, response)
router.post('/updataPassword', authLogin, personalController.postUpdataPassword, response)
module.exports = router