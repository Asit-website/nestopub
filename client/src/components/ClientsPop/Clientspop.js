import React from 'react'
import ClientForm from './ClientForm'
const Clientspop = ({setPopAdd}) => {
  return (
    <div className='clients-pop'>
        <i onClick={()=>setPopAdd(false)}  className="fa-solid fa-xmark"></i>
        <div className="client-container">
           <ClientForm/>
        </div>
    </div>
  )
}

export default Clientspop