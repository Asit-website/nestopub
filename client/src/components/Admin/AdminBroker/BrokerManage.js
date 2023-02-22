import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
import AdminMenu from '../AdminMenu'
import BrokerJi from './BrokerJi';
import LoadMoreBroker from './LoadMoreBroker';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BrokerManage = ({ setAuthFlag,setAlert }) => {
  useEffect(() => {
    setAuthFlag(false);
  }, []);

  const state = useContext(GlobalState);
  const [broker, setBroker] = state.IndividualApi.broker;
  console.log(broker);
  const [callback, setCallback] = state.IndividualApi.callback;
  const [isAdmin] = state.BrokerApi.isAdmin;



  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = async (id) => {
    broker.forEach(broker => {
      if (broker._id === id) broker.checked = !broker.checked
    })

    setBroker([...broker]);
  }

  const DeleteProfile = async (id) => {
    try {
      const res = await axios.delete(`/api/deleteBroker/${id}`);
      if(window.confirm("do you want to delete this")){
        setAlert("error", res.data.msg);
        setCallback(!callback); 
      }
      
     
    } catch (error) {
        setAlert("error",error.response.data.msg);
    }
  };

  const checkAll = () => {
    broker.forEach(broker => {
      broker.checked = !isCheck;
    })

    setBroker([...broker])
    setIsCheck(!isCheck);
  };

  const deleteAll = () => {
    broker.forEach(broker => {
      if (broker.checked) {
        return DeleteProfile(broker._id);
      }
    })
  };

  return (
    <>
      <AdminMenu />
      <NavLink to="/dashboard"><h2 className='main'>Go to the Main Dashboard</h2></NavLink>
      <h2 className='broker-text'>Brokers</h2>
      {
        isAdmin &&
        <div className="delete-all">
          <span>Select all</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Delete All</button>
        </div>
      }
      <div id="fit"></div>
      <div className='broker-item'>
        {
          broker.map(broker => {
            return (

              <BrokerJi key={broker._id} broker={broker} setBroker={setBroker} callback={callback} setCallback={setCallback} isAdmin={isAdmin} DeleteProfile={DeleteProfile} handleCheck={handleCheck} />

            )
          })
        }
      </div>

      <LoadMoreBroker />
      {
        broker.length === 0 && <h2 className='no-broker'>No Broker To Display</h2>
      }
    </>
  );
};

export default BrokerManage;
