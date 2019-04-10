const express = require('express')
const router = express.Router()
const { getClassmateItems, postClassmatePhoto }= require('../controllers/classmate')
const { response } = require('../middlewares')

// 获取同学录信息
router.get('/items', getClassmateItems, response)
router.post('/photo', postClassmatePhoto, response)
module.exports = router