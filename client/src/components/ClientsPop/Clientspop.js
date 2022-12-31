import React from 'react'
import ClientForm from './ClientForm'
const Clientspop = ({setPopAdd, isEdit, editData}) => {
  return (
    <div className='clients-pop'>
        <i onClick={()=>setPopAdd(false)}  className="fa-solid fa-xmark"></i>
        <div className="client-container">
           <ClientForm isEdit={isEdit} editData={editData} setPopAdd={setPopAdd} />
        </div>
    </div>
  )
};

export default Clientspop;
