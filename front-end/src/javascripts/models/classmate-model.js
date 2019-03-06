
import request from '@utils/request'

// 获取同学录信息
const getClassmateItems = (data) => {
    return request({
        url: '/api/v1/classmate/items',
        data
    })
}


// 建立websocket连接
function connectionWebsocket() {
    let socket = new WebSocket('ws://localhost:3000/ws/chat');
    return socket;
}

export  {
    getClassmateItems,
    connectionWebsocket
}