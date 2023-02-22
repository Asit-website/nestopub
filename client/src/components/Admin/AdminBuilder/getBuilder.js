import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState';
import AdminMenu from '../AdminMenu';
import LoadMoreBuilder from './LoadMoreBuilder';
import GetBuilderItem from './GetBuilderItem';
const GetBuilder = ({setAlert}) => {
    const state = useContext(GlobalState);
    const [builder] = state.BuilderApi.builder;
    const [callback,setCallback] = state.BuilderApi.callback;
  
  return (
    <>
    <AdminMenu/>
     <div class="relative overflow-x-auto px-6 mt-6 buildrsi">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-[gainsboro] dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   <h3>Name</h3>
                </th>
                <th scope="col" class="px-6 py-3">
                   <h3>Email</h3>
                </th>
                <th scope="col" class="px-6 py-3">
                   <h3>Phone</h3>
                </th>
                <th scope="col" class="px-6 py-3">
                   <h3>Role</h3>
                </th>
                <th scope="col" class="px-6 py-3">
                   <h3>Action</h3>
                </th>
            </tr>
        </thead>
        <tbody>
     
       {
         builder.map((val,index)=>{
            return(
                <GetBuilderItem key={index} 
                val={val} 
                callback={callback} 
                setCallback={setCallback}
                setAlert={setAlert}
                />
            )
         })
       }
       
        </tbody>
       
    </table>
    <LoadMoreBuilder/>
   
</div>   
    </>
  )
}

export default GetBuilder;