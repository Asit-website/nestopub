import React, { useContext } from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/Login";
// import LoginSteeper from "./auth/LoginSteeper";
import Notfound from "./Notfound";
import BrokerProfile from "../broker/BrokerProfile";
import { GlobalState } from "../../GlobalState";
import AdminDashBoard from "../Admin/AdminDashBoard";
import BrokerManage from "../Admin/BrokerManage";
import CustomerManagement from "../broker/CustomerManagement";

import BrokerProperty from "../broker/BrokerProperty";
import VisitManagement from "../broker/VisitManagement";
import PaymentHistory from "../broker/PaymentHistory";
import MyProfile from "../broker/MyProfile";
import Contact from "../Contact";

const Pages = ({setPop,resetPop,setResetPop,stepPop,setStepPop}) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
  const [isAdmin] = state.BrokerApi.isAdmin;
  const adminstartor = () =>{
    return(
      <Login resetPop={resetPop} setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop}/>
    )
  }
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home  setPop={setPop} />
          }
        />
        <Route path="/login" element={<Login resetPop={resetPop} setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop} />} />
        <Route path="/brokerProfile/visitManagement" element={<VisitManagement/>}/>
        <Route path="/brokerProfile/paymentHistory" element={<PaymentHistory/>}/>
        <Route path="/brokerProfile/myProfile" element={<MyProfile/>}/>
        <Route path="/brokerProfile" element={ isLogged ? <BrokerProfile/> : adminstartor()}/>
        <Route path="/brokerProfile/customerManagement" element={isLogged ? <CustomerManagement/> : adminstartor()}/>
        <Route path="/brokerProperty" element={<BrokerProperty/>}/>
        <Route path="/dashboard" element={isAdmin ? <AdminDashBoard/> : <Notfound/>}/>
        <Route path="/dashboard/manageBrok" element={ isAdmin ? <BrokerManage/> : <Notfound/>}/>

         <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  );
};

export default Pages;
