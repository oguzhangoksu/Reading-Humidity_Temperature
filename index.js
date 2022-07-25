const { spawn } = require('child_process')
const io=require('socket.io-client');
const socket = io.connect('http://192.168.1.36:3005');
var myarray="";
socket.on('connect',(data,error)=>{
    if(error)throw error
    console.log('bağlandım')
})
setInterval(()=>{
    console.log("girdi2")
    var pythonOne = spawn('python', ['input.py'])
    pythonOne.stdout.on('data', (data) => {
        myarray=data.toString().replace("\n","").split(",")
    })

    pythonOne.on('close',(code)=>{
        socket.emit('veri', myarray)
    })


},100)

