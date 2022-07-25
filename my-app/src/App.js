
import './App.css';
import { useEffect, useState } from 'react';
import Graph from './Graph'
import Cardlar from './Cardlar';


const io=require('socket.io-client');
const socket = io.connect("http://192.168.1.36:3005");


function App() {


  const [canliVeri,setCanliVeri]= useState([])
  const [nem,setNem]=useState('');
  const [sicaklik,setSicaklik]=useState(''); 
  const [bilgiler,setBilgiler]=useState([]);



  socket.on('connect',(error,result)=>{
    if(error) throw error;
    console.log("bağlandım")
  })
  socket.on("canliveri",(bilgi)=>{
    setCanliVeri(bilgi)
    setNem(bilgi.nem)
    setSicaklik(bilgi.sicaklik)

    setBilgiler([...bilgiler,bilgi])
    
  })
  useEffect(()=>{
 
  },[bilgiler])





return(
  <div className='Ana'>
    <Graph bilgiler={bilgiler}/>
    <Cardlar canliVeri={canliVeri}/>
  </div>
)




 
}

export default App;
