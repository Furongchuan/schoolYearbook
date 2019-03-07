const express = require('express')
const router = express.Router()
const classmateController = require('../controllers/classmate')
const { response } = require('../middlewares')

// 获取同学录信息
router.get('/items', classmateController.getClassmateItems, response)

module.exports = router