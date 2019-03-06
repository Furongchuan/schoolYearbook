const classmateModel = require('../../models/classmate')
const moment = require('moment')
// 处理同学录信息列表获取
const getClassmateItems = async (req, res, next) => {
  try{
    // 利用res或者req来进行路由中间件间的传参
    let data = await classmateModel.getClassmateItems();
    // 处理数据格式
    res.responseData = data;
    next('success') // 去响应 传参只能传一个
  }catch(e){
    console.log('getClassmateItems',e)
    next('error')
  }
 
}
// 处理保存的聊天信息
const postChatMessage = async (req, res, next) => {
  let { name, message } = req.body;
  if( name && message ){
    try {
      let date = moment(Date.now()).format('Do MMM h:mm a');
      let data = await classmateModel.postChatMessage({ 
        name, message, date
      })
      next('success')
    }catch(e){
      console.log('postChatMessage',e)
      next('error')
    }
  }
}
// 聊天室websocket连接
const wsChatMessage = (ws, req) => {
  ws.send('你连接成功了')
  console.log(1)
  ws.on('message', (msg) => {
    console.log(msg)
  })
}


module.exports = {
  getClassmateItems,
  postChatMessage,
  wsChatMessage
}