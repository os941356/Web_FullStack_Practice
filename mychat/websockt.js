const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 5501 });

server.on('connection', (socket) => {
  console.log('新的WebSocket連線已建立');

  socket.on('message', (message) => {
    console.log(`接收到用戶的訊息： ${message}`);
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});