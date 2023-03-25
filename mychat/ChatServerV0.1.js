const { client } = require('websocket');
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 5501 });

const clients = [];

//-------------------------------------------
server.on('listening', () => {
  console.log('MyChat服務器已啟動')
});

//-------------------------------------------
server.on('connection', (socket) => {

  console.log('新的WebSocket連線已建立');
  //-------將連入的client放到set中
  clients.push(socket);
  
  //-------每當有人加入就打印所有客戶端信息
  clients.forEach(function forEach(client){
    if (client.readyState === WebSocket.OPEN) {
      console.log('客户端信息：', client._socket.remoteAddress, client._socket.remotePort);
    }
  });



  socket.on('message',(message) => {
      console.log(`接收到用戶的訊息： ${message}`)
      client
    });
      


  socket.on('close',()=>{
    console.log('用戶已離線');
  });


  // socket.on('message', (message) => {
  //   console.log(`接收到用戶的訊息： ${message}`);
  //   server.clients.forEach((client) => {
  //     if (client.readyState === WebSocket.OPEN) {
  //       client.send(message);
  //     }
  //   });
  // });


});