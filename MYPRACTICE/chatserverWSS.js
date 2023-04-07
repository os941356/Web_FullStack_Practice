const { client } = require('websocket');
const WebSocket = require('ws');
const https = require('https');
const fs = require('fs');

// 读取 SSL 证书和密钥
const options = {
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt')
};

const server = https.createServer(options);
const wss = new WebSocket.Server({ server });

const clients = [];

//-------------伺服器啟動時打印
wss.on('listening', () => {
  console.log('MyChat服務器已啟動')
});

//-------------------------------------------
wss.on('connection', (socket) => {

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
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(`${message}`);
        }
        });
    });



  socket.on('close',()=>{
    console.log('用戶已離線');
  });
});

// 监听 HTTPS 服务器的端口
server.listen(5501, () => {
  console.log('HTTPS 服务器已启动');
});