const activeModel = require('../../models/active')
const moment = require('moment')

// 聊天室websocket连接
const wsChatMessage = async (ws, req) => {
  // 建立连接后发送聊天信息
  
  // 处理收到的的聊天信息
  ws.on('message', async (msg) => {
    let { name, message, scienceName, _id} = JSON.parse(msg);
    if( !name || !message && scienceName) {
      try{
        let chatMessage = await activeModel.getChatMessage(scienceName);
        if( chatMessage.length ){
          let msg = chatMessage[0].chat
          ws.send(JSON.stringify(msg))
        }
        return
      }catch(e){
        console.log(e)
        return
      }
    }
    let date = moment(Date.now()).format('Do MMM h:mm a');
    let data = {
      scienceName,
      chat:[{name, date, message, _id}]
    }
    try{
      await activeModel.postChatMessage(data)
      ws.send(msg)
    }catch(e){
      console.log(e)
    }
    
  })
}

module.exports = {
  wsChatMessage
}