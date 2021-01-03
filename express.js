const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const server = app.listen(port, function () {
    console.log(`Example app listening on port ${port}.`);
});
const io = require('socket.io').listen(server);

const corsOptions = {
    origin: '*',
    headers: 'origin, content-type, accept',
    optionsSuccessStatus: 200
}

io.on('connection', (socket) => {
    console.log('a user connected', socket);
});
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/f', cors(corsOptions), (req, res) => {
    res.send({data: 'F'})
});
app.get('/u', cors(corsOptions), (req, res) => {
    res.send({data: 'U'})
});
app.get('/c', (req, res) => {
    res.send({data: 'C'})
});
app.get('/k', (req, res) => {
    res.send({data: 'K'})
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});


