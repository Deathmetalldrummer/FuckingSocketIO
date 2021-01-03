const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:4200',
        methods: ["GET", "POST"],
        credentials: true
    },
    transports: ['websocket']
});
const port = 4000;
server.listen(port, function () {
    console.log(port);
});

app.get('/f', (req, res) => {
    res.send({data: 'F'})
});
io.on('connection', function (socket) {
    console.log('Успешное соединение', socket.id);
    socket.on('disconnect', function (data) {
        console.log('Отстыковка');
    });

    socket.on('fuck', function (data) {
        console.log(data);
        io.emit('fuck',{my: data});
    });
});

