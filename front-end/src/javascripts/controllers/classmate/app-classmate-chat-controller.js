
import appClassmateChat from '@views/routes/app-classmate-chat.html'

import { postChatMessage,connectionWebsocket } from '@models/classmate-model'

const render = (req, res, next) => {
    res.render(appClassmateChat)
    websocketEstablishment();
}


function websocketEstablishment () {
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
        console.log('Message from server', JSON.parse(event.data));
    })
}
// 发送信息
function sendMessage(socket) {
    let name = 'abc';
    let message = $('#message').val();
    $('#message').val('');
    socket.send(JSON.stringify({
        name, message
    }))
}
export default {
    render
}