import React,{useContext, useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { GlobalState } from '../GlobalState';
const ClientApi = (token) => {
    const [clientLog,setClientLog] = useState([]);
    const [callback,setCallback] = useState(false);
    useEffect(()=>{
      const Client = async() =>{
           const res = await axios.get('/api/getClient',{
            headers: {Authorization:token}
           });
           setClientLog(res.data);
      }

      Client();
    },[callback,token])

    return{
        clientLog:[clientLog,setClientLog],
        callback:[callback,setCallback]
    }
}

export default ClientApi;