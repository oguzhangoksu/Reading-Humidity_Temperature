
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const Graph= (props)=>{

    var donecek=[]
    
    var data2=props.bilgiler
    console.log("asdas",data2[0])

        console.log("data2",data2)
        if(data2.length<100){
            
            donecek.push(
                <LineChart width={1000} height={500} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="nem" stroke="#8884d8" />
                <Line type="monotone" dataKey="sicaklik" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="tarih" />
                <YAxis domain={[20,50]}/>
                <Tooltip />
                </LineChart>
                )
        }
        else{
            console.log("100 oldu")
            data2.shift()
            
        }
  
   return(
        <div>
            {donecek[0]}
        </div>
        
    )
    
        
        
    
    
    
    
}
export default Graph;