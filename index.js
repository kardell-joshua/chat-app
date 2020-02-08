var PORT = process.env.PORT || 5000;
var express = require('express');
// creates the express js app
var app = express();

var http = require('http');

var server = http.Server(app);

// serves the static files in client html, css, js etc
app.use(express.static('client'));

server.listen(PORT, function() {
    console.log('Chat server running');
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('message', function(msg) {
        io.emit('message', msg);
    });
});