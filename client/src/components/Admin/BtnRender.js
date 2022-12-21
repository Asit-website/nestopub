import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
const BtnRender = ({broker,DeleteProfile}) => {
    const state = useContext(GlobalState);
    const [isAdmin] = state.BrokerApi.isAdmin;
  return (
    <div>
    {
        isAdmin && (
            <>
            <button type="submit" onClick={() => DeleteProfile(broker._id)}>
                Delete Broker Profile
              </button>
            </>
        )
    }
        
    </div>
  )
}

export default BtnRender