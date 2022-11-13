import { useEffect, useState } from 'react'
import axios from 'axios';
const BrokerApi = () => {
const [brok,setBrok] = useState([]);
const [callback,setCallback] = useState(false);
useEffect(()=>{
  const getBrok = async() =>{
     const res = await axios.get('/api/broker');
     setBrok(res.data);
  }
  getBrok();
},[callback])
  
  return{
    brok:[brok,setBrok],
    callback:[callback,setCallback]
  }
}

export default BrokerApi