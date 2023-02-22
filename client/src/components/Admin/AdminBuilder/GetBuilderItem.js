import React from 'react'
import axios from 'axios';
const GetBuilderItem = ({val,callback,setCallback,setAlert}) => {
      const handleDelete = async() =>{
        try {
            if(window.confirm("Do you want to delete")){
                const res = await axios.delete(`/api/deleteBuilder/${val._id}`);
                setAlert("error",res.data.msg);
                setCallback(!callback);
            }
        } 
        
        catch (error) {
             setAlert("error",error.response.data.msg);
        }
      }
  return (
    <>
         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 builderBhai">
                <th  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center">
                       <p>{val.builderName}</p>
                       <img className='rounded-full ml-1.5' width={25} height={25} src={val.images?.url} alt="" />
                  </div>
                </th>
                <td class="px-6 py-4">
                   <p>{val.builderEmail}</p>
                </td>
                <td class="px-6 py-4">
                    <p>{val.builderPhone}</p>
                </td>
                <td class="px-6 py-4">
                   <p>{val.role}</p>
                </td>
                <td className="px-6 py-4">
                    <i onClick={()=> handleDelete(val._id)} className="fa-solid fa-trash cursor-pointer"></i>
                </td>
            </tr>
    </>
  )
}

export default GetBuilderItem