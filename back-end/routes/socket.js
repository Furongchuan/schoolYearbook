const express = require('express')
const router = express.Router()
const expressWs = require('express-ws')
const classmateController = require('../controllers/classmate')
// const { response } = require('../middlewares')
expressWs(express);

// 聊天室websocket
router.ws('/websocket',classmateController.wsChatMessage)

module.exports = router