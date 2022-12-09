import React, { useEffect, useState } from 'react'
import axios from 'axios';
const BrokerApi = (token) => {
  const [isLogged,setIsLogged] = useState(false);
  const [user,setUser] = useState([]);
  const [callback,setCallback] = useState(false);
  useEffect(() =>{
      if(token){
        const getBroker = async() =>{
            try {
              const res = await axios.get('/api/infor',{
                headers: {Authorization:token}
            });

              setIsLogged(true);
              setUser(res.data);
            } 
            
            catch (error) {
              alert(error.response.data.msg)
            }
        }

          getBroker()
      }
  },[token]);


  return {
       isLogged:[isLogged,setIsLogged],
       user:[user,setUser],
       callback:[callback,setCallback]
  }
}

export default BrokerApi