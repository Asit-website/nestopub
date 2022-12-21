import React,{useEffect, useState} from 'react';
import axios from 'axios'
const IndividualApi = () => {
   const [broker,setBroker] = useState();
   const [callback,setCallback] = useState(false);
   const [result,setResult] = useState(0);
   const [page,setPage] = useState(1);
   useEffect(()=>{
      const individual = async() =>{
        const res = await axios.get(`/api/getBrok?limit=${page*4}`);
        setBroker(res.data.broker);
        setResult(res.data.result);
      }

      individual();
   },[callback,page]);

  return{
     broker:[broker,setBroker],
     callback:[callback,setCallback],
     page:[page,setPage],
     result:[result,setResult]
  }
    
  
}

export default IndividualApi;