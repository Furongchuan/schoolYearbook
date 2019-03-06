const express = require('express')
const router = express.Router()
const expressWs = require('express-ws')
const classmateController = require('../controllers/activity')
// const { response } = require('../middlewares')
expressWs(router);

// 聊天室websocket
router.ws('/chat',classmateController.wsChatMessage)

module.exports = router