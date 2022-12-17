import React from 'react';
import axios from 'axios';
const BrokerJi = ({broker}) => {
  const DeleteProfile = async (e) => {
    try {
      if (window.confirm("do you want to delete your account")) {
        const res = await axios.delete(`/api/deleteBroker/${broker._id}`);
        window.location.href = "/dashboard";
        alert(res.data.msg);
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div>
       <div  className='broker-card'>
       {
        broker.firmName && (
          <>
         
          <p>{broker.firmName}</p>
         <p>{broker.city}</p>
         <p>{broker.authorizedName}</p>
         <p>{broker.mobile}</p>
         <button type="submit" onClick={() => DeleteProfile(broker._id)} >Delete Broker Profile</button>
         </>
        )
       }
          {
            broker.individualName && (
              <>
              <p>{broker.individualName}</p>
          <p>{broker.city1}</p>
          <p>{broker.mobile1}</p>
          <button type="submit" onClick={() => DeleteProfile(broker._id)}>Delete Broker Profile</button>
              </>
            )
          }
         
       </div>
    </div>
  )
}

export default BrokerJi