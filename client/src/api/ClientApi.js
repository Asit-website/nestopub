import React,{ useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
const ClientApi = (token) => {
    const [clientLog,setClientLog] = useState([]);
    const [callback,setCallback] = useState(false);
    const [result,setResult] = useState(0);
    const [page,setPage] = useState(1);
    useEffect(()=>{
      if(token){
        
        const Client = async() =>{
          try {
            const res = await axios.get(`/api/getClient?limit=${page*5}`,{
              headers: {Authorization:token}
             });
             setClientLog(res.data.clients);
             setResult(res.data.result);
          } 
          
          catch (error) {
            alert(error.response.data.msg)
          }
          
     }
     Client();
      }
     

    },[callback,token,page])

    return{
        clientLog:[clientLog,setClientLog],
        callback:[callback,setCallback],
        page:[page,setPage],
        result:[result,setResult]
    }
}
 
export default ClientApi;