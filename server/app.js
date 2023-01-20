const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const { Socket } = require('socket.io');
const Server = require("socket.io").Server;
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin:"*"
    }
});

io.on("connection", (socket) => {
    console.log("We are Connected");

    socket.on("chat" , chat => {
        io.emit('chat', chat);
    })
    socket.on('disconnect', () => {
        console.log('Disconnected');
    });
});

app.get('/', (req, res) => res.send('Hello World!'));
server.listen(port, () => console.log(`Example app listening on port ${port}!`));