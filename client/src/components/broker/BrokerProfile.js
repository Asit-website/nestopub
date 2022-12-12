
import React,{useContext,useState} from 'react';
import { GlobalState } from '../../GlobalState';
import BrokerItem from './BrokerItem';
const BrokerProfile = () => {
  const [profilePop,setProfilePop] = useState(false);
    const state = useContext(GlobalState);
    const [user,setUser] = state.BrokerApi.user;
  return (
    <>
       <div style={{height:'100vh'}}>
           <BrokerItem user={user} setUser={setUser} profilePop={profilePop} setProfilePop={setProfilePop}/>
       </div> 
    </>
  )
}

export default BrokerProfile