import React, { useEffect, useState } from 'react'
import axios from 'axios';
const BrokerApi = (token) => {
  const [isLogged,setIsLogged] = useState(false);
  const [user,setUser] = useState([]);

  useEffect(() =>{
      if(token){
        const getBroker = async() =>{
            try {
              const res = await axios.get('/api/infor',{
                headers: {Authorization:token}
            });

              setIsLogged(true);
              setUser(res.data);
              console.log(res.data);
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
       user:[user,setUser]
  }
}

export default BrokerApi