const io=require('socket.io')(8000);
const users={};

io.on('connection',(socket)=>{
    socket.on('new-user-joined',name=>{
        console.log(name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send',msg=>{
        socket.broadcast.emit('receive',{message:msg,name:user[socket.id]});
    });

});