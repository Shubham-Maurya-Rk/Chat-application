const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const users = {};

app.use(express.static("C:\\Shubham\\Shubham Projects\\Whatsapp clone\\public"));
app.get('/', (req, res) => {
    res.sendFile('C:\\Shubham\\Shubham Projects\\Whatsapp clone\\index.html');
});

//socket.io setup

const io = require('socket.io')(server);
io.on("connection",(socket)=>{
    socket.on("new-user-joined",name=>{
        users[socket.id]=name;
        console.log(users);
        socket.broadcast.emit("user-joined",name);
    })
    socket.on('send',(data)=>{
        socket.broadcast.emit("message",{"username":users[socket.id],"msg":data["msg"]});
    })
    socket.on('disconnect',()=>{
        socket.broadcast.emit("left",users[socket.id]);
        delete users[socket.id];
    })
})

//socket.io setup ends

server.listen(3000,()=>{
    console.log("Server connected at: 3000");
})