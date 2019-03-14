
import appActivityChat from '@views/routes/app-activity-chat.html'
import appActivityChatInfo from'@views/routes/app-activity-chat-info.html'
import { connectionWebsocket } from '@models/active-model'

const render = (req, res, next) => { 
    
    websocketEstablishment(req, res, next);
}
function websocketEstablishment (req, res, next) {
    let scienceName = JSON.parse(localStorage.user).scienceName
    let socket = connectionWebsocket(); // websocket连接
    socket.addEventListener('open', function (event) {
        res.render(appActivityChat)  
        socket.send(JSON.stringify({
            scienceName
        }))
        $('#send').click('click', (e) => {
            sendMessage(socket,scienceName)
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
    // console.log(data)
    let items = {
        arr:[],
        scienceName:'',
        userID: JSON.parse(localStorage.user).id
    }
    if(Array.isArray(data)) {
        items.arr = data;
    }else if(typeof data === 'object'){
        data.username = JSON.parse(localStorage.user).username 
        items.arr.push(data)
    }
    $('.direct-chat-messages').append(
        template.compile(appActivityChatInfo)({
            items: items
        })
    ) 
}
// 发送信息
function sendMessage(socket,scienceName) {
    let name = JSON.parse(localStorage.user).username;
    let _id = JSON.parse(localStorage.user).id;
    let message = $('#message').val();
    $('#message').val('');
    socket.send(JSON.stringify({
        name, message, scienceName, _id
    }))
}
export default {
    render
}