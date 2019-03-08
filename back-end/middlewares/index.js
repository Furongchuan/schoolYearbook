const status = require('../modules/status');
const multer = require('multer');
const path = require('path');
const svgCaptcha = require('svg-captcha');
const { Encrypt, Decrypt } = require('../modules/crypto')


// 处理响应的数据格式的
const jsonFormat = (req, res, next) => {
    res.setHeader('encoding','utf-8')
    
    res.setHeader('content-type', 'application/json; charset=utf8')
    next()
}

// 处理响应
// state 此次请求的状态
const response = (state, req, res, next) => {
    res.render('default', {  
        data: JSON.stringify(res.responseData || {}), 
        status: status[state]
    })
    
}

// 验证码
const getCode = (req, res, next) => {
    var codeConfig = {
        size: 5,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        height: 44 
    }
    var captcha = svgCaptcha.create(codeConfig);
    // req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
    let text = captcha.text.toLowerCase()  // 真正的验证码内容
    
    let mark = Encrypt(text) // 加密之后的标记
    
    var codeData = {
        img:captcha.data, // svg图片
        mark: mark
    }
    res.send({
        code: 200,
        data: codeData
    })
}


module.exports = {
    jsonFormat,
    response,
    getCode
}