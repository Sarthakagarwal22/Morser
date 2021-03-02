const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
var favicon = require('serve-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
// const ws = require('ws');

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(favicon(path.join(__dirname, "../favicon.ico")));
let fileLoc = '';
server.listen(port);
let connectedRooms = {};
let mapSocket = {};
console.log(`Using port ${port}`)

if (process.env.NODE_ENV === 'production') fileLoc = path.join(__dirname, '../client/build/index.html');
else fileLoc = path.join(__dirname, '../client/public/index.html');

app.get('/sender', (req, res) => {
    res.sendFile(fileLoc);
});

app.get('/receiver', (req, res) => {
    res.sendFile(fileLoc);
});

app.get('/stayUp', (req, res) => {
    console.log('Kept Active by user')
    res.send('I am Up!');
});

io.on('connection', socket => {
    console.log('Got a new connection');

    io.emit('this', { will: 'be recieved by everyone' });

    socket.on('register', msg => {
        const id = msg.id;
        console.log(`Registering room #${id} for ${socket.id}`);
        socket.join(`Room #${id}`);
        mapSocket[socket.id] = id;

        if (!(id in connectedRooms)) {
            connectedRooms[id] = {};
            connectedRooms[id].roomies = {};
        }
        connectedRooms[id].roomies[socket.id] = socket.id;
        socket.emit('sync', connectedRooms[id]);
        console.log('Registered')
    });

    // Actively sync player status
    socket.on('sync', msg => {
        const id = mapSocket[socket.id]
        try {
            for (const key in msg) {
                connectedRooms[id][key] = msg[key];
            }
        } catch (err) {
            console.log(err);
        }
        connectedRooms[id].ts = (new Date()).getTime();
        socket.to(`Room #${id}`).emit('sync', Object.assign(connectedRooms[id]), { currUrl: undefined });
    });

    // Passively sync video url
    socket.on('sendCode', msg => {
        socket.to(`Room #${msg.id}`).emit('sendMorseCode', msg.message);
    });
})