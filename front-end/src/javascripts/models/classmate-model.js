
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
function useWebsocket() {
    let socket = new WebSocket('ws://localhost:3000/sockjs-node/websocket');
    socket.addEventListener('open', function (event) {
        console.log('socket is open')
    });
    socket.addEventListener('close', function (event) {
        console.log('socket is close')
    });
    socket.addEventListener('message', function (event) {
        console.log('Message from server', event.data);
    })
}

export  {
    getClassmateItems,
    postChatMessage,
    useWebsocket
}