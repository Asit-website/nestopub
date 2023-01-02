import axios from 'axios'
import React, { useContext, useState } from 'react';
import { GlobalState } from '../../GlobalState';
import Clientspop from './Clientspop';
const ClientCard = ({user1}) => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [callback,setCallback] = state.ClientApi.callback;
  const [editData, setEditData] = useState({});
  const [popAdd, setPopAdd] = useState(false);

  const editClient = (data) => {
    console.log(data);
    setEditData(data);
    setPopAdd(true);
};

  const dumpClient = async() =>{
     try {
        const res = await axios.delete(`/api/deleteClient/${user1._id}`,{
           headers:{Authorization:token}
        });
        alert(res.data.msg);
        alert(res.data.result);
        setCallback(!callback);
     } 
     
     catch (error) {
        alert(error.response.data.msg);
     }
  }
  return (
    <>
     {
                popAdd && <Clientspop setPopAdd={setPopAdd} isEdit={true} editData={editData} />
            }
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full buyerimg" src={user1.BuyerImages.url} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{user1.BuyName}</div>
    <p className="text-gray-700 text-base">
     {user1.BuyerMobile}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span onClick={() => editClient(user1)} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Update</span>
    <span onClick={() => dumpClient(user1._id)} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Delete</span>
  </div>
</div>
    </>
  )
}

export default ClientCard