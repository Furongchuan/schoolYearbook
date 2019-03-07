const express = require('express')
const router = express.Router()
const personalController = require('../controllers/personal')
const { response } = require('../middlewares')

router.get('/science', personalController.getPresonalItems, response)

module.exports = router