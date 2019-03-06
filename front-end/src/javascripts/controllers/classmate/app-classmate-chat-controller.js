
import appClassmateChat from '@views/routes/app-classmate-chat.html'

import { postChatMessage,useWebsocket } from '@models/classmate-model'

const render = (req, res, next) => {
    res.render(appClassmateChat)
    bindEvents() // 绑定各种事件
    useWebsocket(); // websocket连接
}

function bindEvents () {
    $('#send').on('click',async () => {
        let message = $('#message').val();
        $('#message').val('');
        let name = 'abc';
        let data = await postChatMessage({ message, name})
        console.log(data)
    })
}

export default {
    render
}