import './App.css';
import React, {useEffect, } from 'react'
function App() {

//const [datas, setData]= useState([{}]);


useEffect(()=>{
  fetch("http://localhost:5000/data",{
    method:"GET"
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
  })
},[])

  return (
    <div>
  
    </div>
  );
}

export default App;
