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

// 接收图片
const uploadImage = (req, res, next) => {
    // 控制图片存储位置与信息
    var storage = multer.diskStorage({
        // 控制存储位置
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../public/images/upload'))
        },
        filename: function (req, file, cb) {
            // 处理存储时的文件名字
            let extname = path.extname(file.originalname)
            let basename = path.basename(file.originalname, extname)
            
            let filename = basename + '-' + Date.now() + extname
            // 挂载在req.body上方便传递给下一个中间件
            req.body.img = '/images/upload/' + filename
            cb(null, filename)
        }
    })
    // 文件类型过滤
    let fileFilter = (req, file, cb) => {
        let flag = file.mimetype.startsWith('image/')
        cb(flag ? null : '请上传正确的图片格式', flag)
    }
    
    let upload = multer({ storage, fileFilter }).single('headImg') // 上传文件的中间件

    upload(req, res, (err) => {
        if ( err ) {
            console.log(err)
            req.error = err
            next()
        } else {
            next()
        }
    })

    
}

module.exports = {
    jsonFormat,
    response,
    getCode,
    authLogin,
    uploadImage
}