const express = require('express')
const router = express.Router()
const personalController = require('../controllers/personal')
const { response } = require('../middlewares')

router.get('/science', personalController.getPresonalItems, response)
router.post('/updata', personalController.postUpdataInfo, response)
module.exports = router