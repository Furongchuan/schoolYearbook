const express = require('express')
const router = express.Router()
const { getClassmateItems, postClassmatePhoto, getPhotoItems, postClassmatePhotoText }= require('../controllers/classmate')
const { response } = require('../middlewares')

// 获取同学录信息
router.get('/items', getClassmateItems, response)
router.get('/photoItem', getPhotoItems, response)
router.post('/photo', postClassmatePhoto, response)
router.post('/photoText', postClassmatePhotoText, response)
module.exports = router