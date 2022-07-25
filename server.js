var express = require('express')
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors:{
        origin:"http://localhost:3000",
        methods: ["GET", "POST"]
    }
});;
const moment = require("moment");
var port = 3005;

const mysql = require('mysql')

let db_con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"deneme"
})

db_con.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("We are connected")
})

io.on('connect',(socket)=>{
    console.log('bağlandım')
    socket.on('veri',(bilgi)=>{
        const data={
            nem:bilgi[0],
            sicaklik:bilgi[1],
            tarih:moment().format('MMMM Do YYYY, h:mm:ss a')
        }
        io.emit("canliveri",data)
        var sql= `INSERT INTO nemsicaklik(nem,sicaklik,zaman) VALUES(${bilgi[0]},${bilgi[1]},now())`
        db_con.query(sql,(err,result)=>{
            if(err)throw err;
            console.log("recorded")
        })

    })
})


http.listen(port)