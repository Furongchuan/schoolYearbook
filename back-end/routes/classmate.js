const express = require('express')
const router = express.Router()
const classmateController = require('../controllers/classmate')
const { response } = require('../middlewares')

// 获取同学录信息
router.get('/items', classmateController.getClassmateItems, response)
// 发送聊天信息
router.post('/chat', classmateController.postChatMessage, response)

module.exports = router