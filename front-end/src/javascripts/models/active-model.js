import request from '@utils/request'
// 建立websocket连接
const connectionWebsocket = () => {
  let socket = new WebSocket('ws://localhost:3000/ws/chat');
  return socket;
}

const postFile = (data) => {
  return request({
    url: '/api/v1/file/upload/file',
    type: 'post',
    data,
    processData: false,
    contentType: false,
})
}

const getFile = () => {
  return request({
    url: '/api/v1/file/get/file',
})
}
export  {
  connectionWebsocket,
  postFile,
  getFile
}