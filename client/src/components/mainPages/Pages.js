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
import BrokerPropertyDetails from "../broker/BrokerPropertyDetails";

const Pages = ({setPop,resetPop,setResetPop,stepPop,setStepPop}) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
  const [isAdmin] = state.BrokerApi.isAdmin;
  const adminstartor = () =>{
    return(
      <Login  resetPop={resetPop} setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop}/>
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
        <Route exact path="/login" element={<Login resetPop={resetPop} setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop} />} />
        <Route exact path="/brokerProfile/visitManagement" element={<VisitManagement/>}/>
        <Route exact path="/brokerProfile/paymentHistory" element={<PaymentHistory/>}/>
        <Route exact path="/brokerProfile/myProfile" element={<MyProfile/>}/>
        <Route exact path="/brokerProfile" element={ isLogged ? <BrokerProfile/> : adminstartor()}/>
        <Route exact path="/brokerProfile/customerManagement" element={isLogged ? <CustomerManagement/> : adminstartor()}/>
        <Route exact path="/brokerProfile/property" element={<BrokerProperty/>}/>
        <Route exact path="/brokerProfile/propertyDetails" element={<BrokerPropertyDetails/>}/>

        <Route exact path="/dashboard" element={isAdmin ? <AdminDashBoard/> : <Notfound/>}/>
        <Route exact path="/dashboard/manageBrok" element={ isAdmin ? <BrokerManage/> : <Notfound/>}/>

         <Route exact path="/contact" element={<Contact/>}/>
        <Route path="*" exact element={<Notfound/>}/>
      </Routes>
    </>
  );
};

export default Pages;
