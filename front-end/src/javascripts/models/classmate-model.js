
import request from '@utils/request'

// 获取同学录信息
const getClassmateItems = () => {
    return request({
        url: '/api/v1/classmate/items'
    })
}

// 发送聊天信息
const postChatMessage = (data) => {
    return request({
        url: '/api/v1/classmate/chat',
        type: 'post',
        data,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
}
// 简历websocket连接
function connectionWebsocket() {
    let socket = new WebSocket('ws://localhost:3000/ws/chat');
    return socket;
}

export  {
    getClassmateItems,
    postChatMessage,
    connectionWebsocket
}