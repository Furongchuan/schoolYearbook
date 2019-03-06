const classmateModel = require('../../models/classmate')
const moment = require('moment')

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
  wsChatMessage
}