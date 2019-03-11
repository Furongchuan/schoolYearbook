var express = require('express');
var router = express.Router();
const { fileUploadImage } = require('../controllers/file')
const { response, uploadImage } = require('../middlewares')

// uploadImage 接收图片，存储图片
// fileUploadImage 复制处理图片的路径等其他的信息
router.post('/upload/img', uploadImage, fileUploadImage, response);


module.exports = router;
