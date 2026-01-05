const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });

const players = {};

wss.on("connection", ws => {
  const id = Math.random().toString(36).substr(2, 9);

  players[id] = { x: 0, y: 0, angle: 0 };

  ws.on("message", msg => {
    const data = JSON.parse(msg);
    players[id] = data;
  });

  ws.on("close", () => {
    delete players[id];
  });

  ws.send(JSON.stringify({ id }));

  setInterval(() => {
    ws.send(JSON.stringify(players));
  }, 50);
});

console.log("Server running on port 3000");
