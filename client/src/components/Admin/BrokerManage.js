import React,{useContext,useEffect,useState} from 'react';
import { GlobalState } from '../../GlobalState';
import AdminMenu from './AdminMenu'
import BrokerJi from './BrokerJi';
import LoadMoreBroker from './LoadMoreBroker';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';

const BrokerManage = ({setAuthFlag}) => {
  useEffect(()=>{
    setAuthFlag(false);
  },[]);
  const state = useContext(GlobalState);
    const [broker,setBroker] = state.IndividualApi.broker;
    const [callback,setCallback] = state.IndividualApi.callback;
    const [isAdmin] = state.BrokerApi.isAdmin;

    const navigate = useNavigate();

    const [isCheck,setIsCheck] = useState(false);
  
    const handleCheck = async(id)=>{
        broker.forEach(broker=>{
            if(broker._id===id) broker.checked = !broker.checked
        })
        
        setBroker([...broker]);
    }

    const DeleteProfile = async (id) => {
      try {
          const res = await axios.delete(`/api/deleteBroker/${id}`);
          
          navigate("/dashboard/manageBrok");
          let t = document.getElementById("fit");
          t.style.display="block";
          t.innerText=`${res.data.msg}`;
          t.innerHTML=`<div class="flertji"><i class="fa-solid fa-circle-check"></i><p>${res.data.msg}</p></div>`;
          setTimeout(() => {
            t.style.display="none";
          }, 5000);
          setCallback(!callback);
      } catch (error) {
        alert(error.response.data.msg);
      }
    };


    const checkAll = ()=>{
      broker.forEach(broker=>{
        broker.checked=!isCheck;
      })

      setBroker([...broker])
      setIsCheck(!isCheck);
  }

const deleteAll = ()=> {
    broker.forEach(broker=>{
        if(broker.checked){
           return DeleteProfile(broker._id);
        } 
    })
}
  return (
    <> 
        <AdminMenu/>
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
                broker.map(broker=>{
                    return(
                      
                        <BrokerJi key={broker._id} broker={broker} setBroker={setBroker} callback={callback} setCallback={setCallback} isAdmin={isAdmin} DeleteProfile={DeleteProfile} handleCheck={handleCheck}/>
                        
                    )
                })
             }
        </div>
        
        <LoadMoreBroker/>
        {
          broker.length === 0 && <h2 className='no-broker'>No Broker To Display</h2>
        }
    </>
  )
}

export default BrokerManage