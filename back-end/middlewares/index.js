const status = require('../modules/status');
const multer = require('multer');
const path = require('path');
const svgCaptcha = require('svg-captcha');
const jwt = require('jsonwebtoken')
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

// token验证是否登录中间件
const authLogin = (req, res, next) => {
    let token = req.method === 'GET' ? req.query.token : req.body.token;
    if ( !token ) {
        res.render('default', {  
            data: JSON.stringify({}), 
            status: status['not login']
        })
        return false
    }
    try {
        token = Decrypt(token)
        let tokenInfo = jwt.verify(token, 'true')
        let now = Date.now() / 1000
        let expires = 60 * 60 * 2 // 2个小时过期时间
        if ( now - tokenInfo.iat > expires ) {
            res.render('default', {  
                data: JSON.stringify({}), 
                status: status['not login']
            })
            return false;
        }
        next(tokenInfo)
    } catch (e) {
        res.render('default', {  
            data: JSON.stringify({}), 
            status: status['not login']
        })
        return false
    }
}

module.exports = {
    jsonFormat,
    response,
    getCode,
    authLogin
}