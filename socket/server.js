const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080);

const WebSocket = require("ws");

const socket = new WebSocket.Server({
  port: 8081,
});

socket.on("connection", (ws, req) => {
  ws.on("message", (msg) => {
    console.log("유저가 보냄: " + msg);
    ws.send("ㅇㅇ");
  });
});
