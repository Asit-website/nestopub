import React from 'react'
import ClamForm from './ClamForm'

const ClamPop = ({setClaimPop}) => {
  return (
    <div className='clients-pop'>
        <i onClick={()=>setClaimPop(false)}  className="fa-solid fa-xmark"></i>
        <div className="client-container client-container1">
           <ClamForm/>
        </div>
    </div>
  )
}

export default ClamPop