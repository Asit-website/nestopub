import React,{useContext} from 'react';
import { GlobalState } from '../../GlobalState';
import AdminMenu from './AdminMenu'
import BrokerJi from './BrokerJi';
import axios from 'axios';
const BrokerManage = () => {
  const state = useContext(GlobalState);
    const [broker] = state.IndividualApi.broker;
    const [callback,setCallback] = state.IndividualApi.callback
    const DeleteProfile = async (e) => {
      try {
        if (window.confirm("do you want to delete your account")) {
          const res = await axios.delete(`/api/deleteBroker/${broker._id}`);
          window.location.href = "/dashboard";
          alert(res.data.msg);
        }
        setCallback(!callback)
      } catch (error) {
        alert(error.response.data.msg);
      }
    };
  return (
    <> <h2 style={{textAlign:"center"}}>Admin DashBoard</h2>
        <AdminMenu/>
        <h2 style={{textAlign:'center'}}>Broker</h2>

        <div className='broker-item'>
             {
                broker.map(broker=>{
                    return(
                        <BrokerJi broker={broker} DeleteProfile={DeleteProfile}/>
                    )
                })
             }
        </div>
    </>
  )
}

export default BrokerManage