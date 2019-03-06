
import appActivityChat from '@views/routes/app-activity-chat.html'
import appActivityChatInfo from'@views/routes/app-activity-chat-info.html'
import { connectionWebsocket } from '@models/classmate-model'

const render = (req, res, next) => { 
    res.render(appActivityChat)  
    websocketEstablishment(req, res, next);
}
function websocketEstablishment (req, res, next) {
    let socket = connectionWebsocket(); // websocket连接
    socket.addEventListener('open', function (event) {
        $('#send').click('click', (e) => {
            sendMessage(socket)
        })
        $('#message').keyup((e) => {
            if ( e.keyCode === 13 ) {
                $('#send').trigger("click")
            }
        })
        console.log('socket is open')
    });
    socket.addEventListener('close', function (event) {
        console.log('socket is close')
    });
    socket.addEventListener('message', function (event) {
        let data = JSON.parse(event.data)
        renderChatInfo(data)
    })
}
// 渲染聊天对话框
function renderChatInfo (data) {
    let arr = [];
    if(Array.isArray(data)) {
        arr = data;
    }else if(typeof data === 'object'){
        arr.push(data)
    }
    $('.direct-chat-messages').append(
        template.compile(appActivityChatInfo)({
            items: arr
        })
    ) 
}
// 发送信息
function sendMessage(socket) {
    let name = '大广';
    let message = $('#message').val();
    $('#message').val('');
    socket.send(JSON.stringify({
        name, message
    }))
}
export default {
    render
}