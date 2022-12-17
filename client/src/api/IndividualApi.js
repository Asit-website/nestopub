import React,{useEffect, useState} from 'react';
import axios from 'axios'
const IndividualApi = () => {
   const [broker,setBroker] = useState();
   const [callback,setCallback] = useState(false);
   useEffect(()=>{
      const individual = async() =>{
        const res = await axios.get('/api/getBrok');
        setBroker(res.data);
        console.log(res.data);
      }

      individual();
   },[callback]);

  return{
     broker:[broker,setBroker],
     callback:[callback,setCallback]
  }
    
  
}

export default IndividualApi