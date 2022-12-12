import React, { useState,useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import HomePop from '../home/HomePop';
import handSack from '../../../images/handSack.jpg';
import ResetPassword from './ResetPassword';
import axios from "axios";
import { GlobalState } from '../../../GlobalState';
const Login = ({resetPop,setResetPop,stepPop,setStepPop}) => {
  const [user,setUser] = useState({
    firmName:"",
    mobile:""
  })

  const [user1,setUser1] = useState({
    individualName:"",
    mobile1:""
  })

  const state = useContext(GlobalState);

  const [tabIndex, setTabIndex] = useState(1);


  const [callback,setCallback] = state.BrokerApi.callback;

  const navigate = useNavigate();

  const inputChange = (e) =>{
     const {name,value} = e.target;
     setUser({...user,[name]:value});
  }

  const inputChange1 = (e) =>{
    const {name,value} = e.target;
    setUser1({...user1,[name]:value});
  }
  var css = {
    background: "#EBF7FF",
    border: "1.5px solid #0678C4",
    width: "220px",
    height: "60px",
    color: "#1B84C9",
    opacity: "1",
    fontFamily:"Bold"
  };

  var secondCss = {
    border: "1.5px solid #000000",
    opacity: "0.6",
    width: "220px",
    height: "60px",
    color: "#101010",
    fontFamily: "Regular",
  };

  const tabChange = (e) => {
    e.preventDefault();
    setTabIndex(1);
    for (var prop in secondCss) {
      document.getElementById("camp").style[prop] = secondCss[prop];
    }
    for (var prop in css) {
      document.getElementById("barier").style[prop] = css[prop];
    }
  };

  const tabAnother = (e) => {
    e.preventDefault();
    setTabIndex(2);
    for (var prop in css) {
      document.getElementById("camp").style[prop] = css[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("barier").style[prop] = secondCss[prop];
    }
  };


  const loginSubmit = async (e) =>{
    e.preventDefault();
    try {
    const res =  await axios.post('/api/loginBroker',{...user});
    console.log(res);
      localStorage.setItem("firstlogin", true);
      navigate("/");
      alert(res.data.msg);
    } 
    
    catch (error) {
      alert(error.response.data.msg)
    }
  
  }

  const loginSubmit1 = async(e) =>{
    e.preventDefault();
    try {
    const res =  await axios.post('/api/individual',{...user1});
      localStorage.setItem("firstlogin", true);
      window.location.href="/brokerProfile"
      alert(res.data.msg);
    } 
    
    catch (error) {
      alert(error.response.data.msg)
    }
  
  }
  return (
    <>
    <div  className='Login'>
        <div className="Login_image">
          <img src={handSack} alt="recta" />
        </div>
        <div className="form-wraper-login">
          <h2>Welcome to Nestohub</h2>
          <div className="steeper-button1">
                  <button id="barier" onClick={tabChange} className="broking">
                    Broking Firm{" "}
                  </button>
                  <button
                    id="camp"
                    onClick={tabAnother}
                    className="broker-individual"
                  >
                    Individual broker
                  </button>
                </div>
                {
                  tabIndex === 1 && (
                    <>
                    <form onSubmit={loginSubmit} className='firmas'>
                <div className="input-form">
                    <input value={user.firmName} onChange={inputChange} name='firmName' type="text" placeholder='Name' />
                </div>
                <div className="input-form">
                    <input value={user.mobile} onChange={inputChange} name='mobile' type="text" placeholder='Email / Phone No.' />
                </div>
                <div className="input-form">
                    {/* <input type="text" placeholder='Password' /> */}
                    <p onClick={() => setResetPop(true)} className='res'>Reset Passward ?</p>
                </div>
                <button type='submit'>Login</button>
            </form>
                    </>
                  )
                }

                {
                  tabIndex === 2 && (
                    <>
                    <form onSubmit={loginSubmit1} className='firmas'>
                <div className="input-form">
                    <input value={user1.individualName} onChange={inputChange1} name='individualName' type="text" placeholder='Name' />
                </div>
                <div className="input-form">
                    <input value={user1.mobile1} onChange={inputChange1} name='mobile1' type="text" placeholder='Email / Phone No.' />
                </div>
                <div className="input-form">
                    {/* <input type="text" placeholder='Password' /> */}
                    <p onClick={() => setResetPop(true)} className='res'>Reset Passward ?</p>
                </div>
                <button type='submit'>Login</button>
            </form>
                    </>
                  )
                }
        
        </div>
    </div>
  {
    resetPop && <ResetPassword setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop}/>
  }
    </>
  )
}

export default Login