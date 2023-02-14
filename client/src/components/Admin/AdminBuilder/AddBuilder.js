import React,{useContext, useState,useEffect} from 'react';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';
import AdminMenu from '../AdminMenu';
const AddBuilder = ({setAuthFlag}) => {
    useEffect(()=>{
        setAuthFlag(false);
      },[]);
    const state = useContext(GlobalState);
    const [callback,setCallback] = state.BrokerApi.callback;
    const [builderDetails,setBuilderDetails] = useState({
        builderName:"",
        builderPhone:"",
        builderEmail:"",
        role:2
     });
  
     const handleBuilderInput = (e) =>{
        setBuilderDetails({...builderDetails,[e.target.name]: e.target.value})
     }
  
     const handleBuilder = async(e) =>{
          e.preventDefault();
        try {
           let resp = await axios.post("/api/registerBuilder", { ...builderDetails });
               localStorage.setItem('nestoBroker', JSON.stringify(resp.data.user));
               localStorage.setItem("firstlogin", true);
              setCallback(!callback);
              alert(resp.data.msg);
              setBuilderDetails({
                 builderName:"",
                 builderPhone:"",
                 builderEmail:"",
              });
  
        } 
        catch (error) {
          alert(error.response.data.msg);
        }
     }
  return (
     <>
       <AdminMenu/>
        <div className="builderRegister">
        <h2>Builder Register</h2>
        <form onSubmit={handleBuilder}>
           <input type="text" placeholder='name' value={builderDetails.builderName}
           onChange={handleBuilderInput} name="builderName" required />
           <br />
           <input className='mt-2' type="text" placeholder='phone' value={builderDetails.builderPhone}
            onChange={handleBuilderInput} name="builderPhone" required />
             <br />
           <input className='mt-2' type="text" placeholder='email' value={builderDetails.builderEmail}
            onChange={handleBuilderInput} name="builderEmail" required />
            <input hidden placeholder='role'   type="text" value={builderDetails.role} onChange={handleBuilderInput}
            name="role"  />
            <br />
            <br />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
        </form>
    </div>
     </>
  )
}

export default AddBuilder