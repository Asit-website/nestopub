import React, { useEffect, useState } from 'react'
import axios from 'axios';
const BrokerApi = (token) => {
  const [isLogged,setIsLogged] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
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
              res.data.role === 1  ? setIsAdmin(true) : setIsAdmin(false);
            } 
            
            catch (error) {
              alert(error.response.data.msg)
            }
        }

          getBroker()
      }
  },[token,callback]);


  return {
       isLogged:[isLogged,setIsLogged],
       isAdmin:[isAdmin,setIsAdmin],
       user:[user,setUser],
       callback:[callback,setCallback]
  }
}

export default BrokerApi