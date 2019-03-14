// 建立websocket连接
const connectionWebsocket = () => {
  let socket = new WebSocket('ws://localhost:3000/ws/chat');
  return socket;
}

export  {
  connectionWebsocket
}