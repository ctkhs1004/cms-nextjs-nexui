const WebSocket = require('ws');
const jwt = require('jsonwebtoken');

const server = new WebSocket.Server({ port: 8081 });

server.on('connection', (ws) => {
  ws.on('message', (message) => {
    try {
      const decodedToken = jwt.verify(message, 'nsec12345');
      console.log('User authenticated:', decodedToken.userId);
      // 以下は認証済みユーザーとしての処理

    } catch (error) {
      ws.close();
    }
  });
});
