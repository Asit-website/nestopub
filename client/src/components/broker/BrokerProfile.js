
import React,{useContext,useState} from 'react';
import { GlobalState } from '../../GlobalState';
import BrokerItem from './BrokerItem';
import BrokerItem1 from './BrokerItem1';
const BrokerProfile = () => {
  const [profilePop,setProfilePop] = useState(false);
    const state = useContext(GlobalState);
    const [user,setUser] = state.BrokerApi.user;
  return (
    <>
       <div>
           {/* <BrokerItem user={user} setUser={setUser} profilePop={profilePop} setProfilePop={setProfilePop}/> */}
           <BrokerItem1 />
       </div> 
    </>
  )
}

export default BrokerProfile;
