import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
const ClientCard = ({user1}) => {
  const state = useContext(GlobalState)
  const [isLogged] = state.BrokerApi.isLogged;
  const [user] =  state.BrokerApi.user
  console.log(user1._id);
  console.log(user._id);
  return (
    <div>
       <p>{user1.BuyName}</p>
        <p>{user1.BuyerMobile}</p>
        <p>{user1.BuyerLocation}</p>
    </div>
  )
}

export default ClientCard