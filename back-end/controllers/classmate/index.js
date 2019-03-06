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

// 聊天室websocket连接
const wsChatMessage = async (ws, req) => {
  // 建立连接后发送聊天信息
  let chatMessage = await classmateModel.getChatMessage();
  console.log(chatMessage)
  ws.send(JSON.stringify(chatMessage));
  // 处理收到的的聊天信息
  ws.on('message', async (msg) => {
    let { name, message } = JSON.parse(msg);
    let date = moment(Date.now()).format('Do MMM h:mm a');
    let data = await classmateModel.postChatMessage({ 
      name, message, date
    })
    ws.send(msg)
  })
}


module.exports = {
  getClassmateItems,
  wsChatMessage
}