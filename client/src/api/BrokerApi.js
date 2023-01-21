import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BrokerApi = (token) => {
   const [isLogged, setIsLogged] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [isBuilder,setIsBuilder] = useState(false);
   const [user, setUser] = useState([]);
   const [callback, setCallback] = useState(false);
   const [saved,setSaved] = useState([]);
   // const navigate = useNavigate();
   useEffect(() => {
      if (token) {
         const getBroker = async () => {
            try {
               const res = await axios.get('/api/infor', {
                  headers: { Authorization: token }
               });
               setIsLogged(true);
               setUser(res.data);
               // console.log('sdfdsf');
               res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
               res.data.role === 2 ? setIsBuilder(true) : setIsBuilder(false);
               setSaved(res.data.saved);
               // console.log(res.data.saved)
               
            }
            catch (error) {
               alert(error.response.data.msg);
            }
         }

         getBroker();
      }
   }, [token, callback]);

   
    const savedProperty = async(property) =>{
       if(!isLogged){
         alert("to saved The property You have to logged in");
       }
         const check = saved.every(item=>{
            return item._id !== property._id
         });

         if(check){
            setSaved([...saved,{...property,quantity:1}]);
            await axios.patch('/api/save',{saved:[...saved,{...property,quantity:1}]},{
                headers: {Authorization:token} 
            })
         }

         else{
            isLogged  &&   alert("this Property Saved sucessfully")   
         }
    }

   return {
      isLogged: [isLogged, setIsLogged],
      isAdmin: [isAdmin, setIsAdmin],
      user: [user, setUser],
      callback: [callback, setCallback],
      isBuilder: [isBuilder,setIsBuilder],
      savedProperty:savedProperty,
      saved:[saved,setSaved]

   }
}

export default BrokerApi