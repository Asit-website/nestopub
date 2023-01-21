import React,{useState,useContext,useEffect} from 'react'
import { GlobalState } from '../../GlobalState';
import LoadMoreProperty from '../Property/LoadMoreProperty';
import AdminMenu from './AdminMenu';
import axios from 'axios';
import PropertyItem from '../Admin/PropertyItem';
const ManageProperties1 = () => {
    const [property, setProperty] = useState([]);
    const state = useContext(GlobalState);
   const [isAdmin] = state.BrokerApi.isAdmin;
   const [token] = state.token;
   const [callback,setCallback] = useState(false);
   const [page] = state.page
   const [result,setResult] = state.result;
   const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("");
   
   useEffect(() => {
    // console.log(category);
    getProperties(category, sortBy);
}, [page, category, sortBy]);

const getProperties = async (category, sortBy) => {
    const data = await state.getProperties(category, sortBy);
    // console.log(data);
    setProperty(data.property);
    setResult(data.result);
};
    
    const deleteAllProperty = async() =>{
        try {
           
            const res = await axios.delete('/api/deleteProperty',{
                headers: { Authorization: token }
            });
          if(window.confirm("do you want to delete All products")){
            alert(res.data.msg);
            setCallback(!callback);
          }
          
        } 
        
        catch (error) {
             console.log(error.response.data.msg);
        }
        
    }

  return (
     <>
<AdminMenu/>
<button onClick={()=> deleteAllProperty(property)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-10 mt-5">Delete All Property</button>
<div className="property-flex property-flex2">
                    {
                      property.map(((val) => {
                            return (
                                <>
                                <PropertyItem key={val._id} val={val} token={token} callback={callback} setCallback={setCallback}/>
                                </>
                            )
                        }))
                    }
                </div>
                <LoadMoreProperty />
                {
                    property.length === 0 && <h2>No property to display</h2>
                }
       
     </>
  )
}

export default ManageProperties1