var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket) {
    // 因為 websocket 連線後不斷線所以 Instance 皆為同一個, 於連線的時候檢查 Cookie 再設置 Session 到 Connection Instance 就可以了
    // check cookie authentication
    console.log(socket.handshake.headers.cookie);

    // 
    socket.handshake.headers.sessionId = {
        session: socket.handshake.headers.cookie
    };

    // 
    socket.on('event', function(data) {
        // detect cookie
        console.log(socket.handshake.headers.sessionId);
        // debugger;
        io.emit('event', data + 1000);
        io.emit('event', socket.handshake.headers.sessionId);
    });

    // 
    socket.on('disconnect', function() {});
});


// connection_before_action
// ref: https://github.com/Automattic/socket.io/wiki/Authorizing
// ref: http://howtonode.org/socket-io-auth
// ref: https://github.com/ivpusic/socket.io-cookie
io.use(function(socket, next){
    if(socket.request.headers.cookie){
        // if session is valid
        next();
    }
    else{
        // if session is invalid
        next(new Error('Authentication error'));
    }
});

server.listen(3000);
