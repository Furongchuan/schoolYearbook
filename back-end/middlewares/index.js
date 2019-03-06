const status = require('../modules/status')


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

module.exports = {
    jsonFormat,
    response
}