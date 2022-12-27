const socket=io('http://localhost:8000');

const form=document.querySelector('.msgBox form');
const formInput=document.querySelector('.msgBox form input');
const formBtn=document.querySelector('.msgBox form button');
const container=document.querySelector('.container');

const name=prompt("Enter your name: ");
socket.emit('new-user-joined',name);
console.log(name)