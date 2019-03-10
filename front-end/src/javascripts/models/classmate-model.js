
import request from '@utils/request'

// 获取同学录信息
const getClassmateItems = (data) => {
    return request({
        url: '/api/v1/classmate/items',
        data
    })
}
// 获取院系名称
const getClassmateScienceName = () => {
    return request({
        url:'api/v1/personal/science'
    })
}

// 建立websocket连接
const connectionWebsocket = () => {
    let socket = new WebSocket('ws://localhost:3000/ws/chat');
    return socket;
}

export  {
    getClassmateItems,
    getClassmateScienceName,
    connectionWebsocket
}