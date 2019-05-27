var express = require('express');
var router = express.Router();
const { fileUploadImage, fileUploadFile, getFile } = require('../controllers/file')
const { response, uploadImage,uploadFile  } = require('../middlewares')

// uploadImage 接收图片，存储图片
// fileUploadImage 复制处理图片的路径等其他的信息
router.post('/upload/img', uploadImage, fileUploadImage, response);
router.post('/upload/file', uploadFile, fileUploadFile, response);
router.get('/get/file', getFile, response)
module.exports = router;
