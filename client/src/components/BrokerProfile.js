
import React,{useContext, useEffect, useState} from 'react';
import { GlobalState } from '../GlobalState';

const BrokerProfile = () => {
    // const param = useParams();
    const state = useContext(GlobalState);
    const [user] = state.BrokerApi.user;
    console.log(user.firmName);
  return (
    <>
       <div style={{height:'100vh'}}>
          <p>{user.firmName}</p>
          <p>{user.authorizedName}</p>
          <p>{user.city}</p>
          <p>{user.mobile}</p>
       </div> 
    </>
  )
}

export default BrokerProfile