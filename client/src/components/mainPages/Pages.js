import React, { useContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/Login";
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
import BrokerChat from "../broker/BrokerChat";
import WebSocketHandler from "../../webSocket/WebSocket";
import Propertyies from "../Property/Propertyies";
import ManageProperties from "../Admin/ManageProperties";
import ManageProperties1 from "../Admin/ManageProperties1";
import DetailsProperty from "../Property/DetailsProperty";
import Support from "../broker/Support";
import SavedProperty from "../broker/SavedProperty";

const Pages = ({ setAuthFlag, setPop, resetPop, setResetPop, stepPop, setStepPop, claimPop, setClaimPop }) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
  let isLogged1=state.isLogged1;
  if(isLogged)
  {
    isLogged1=true;
  }
  
  const [isAdmin] = state.BrokerApi.isAdmin;
  const adminstartor = () => {
    return (
      <Login setAuthFlag={setAuthFlag} resetPop={resetPop} setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop} />
    )
  };
  const [cli, setCli] = useState(null);

  return (
    <>
      <WebSocketHandler setCli={setCli} />
      <Routes>
        <Route
          path="/"
          element={
            <Home setAuthFlag={setAuthFlag} setPop={setPop} />
          }
        />
        <Route path="/login" element={<Login setAuthFlag={setAuthFlag} resetPop={resetPop} setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop} />} />
        <Route path="/brokerProfile/visitManagement" element={isLogged ? <VisitManagement setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/paymentHistory" element={isLogged ? <PaymentHistory setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/myProfile" element={isLogged ? <MyProfile setAuthFlag={setAuthFlag} claimPop={claimPop} setClaimPop={setClaimPop} /> : adminstartor()} />
        <Route path="/brokerProfile/chat" element={isLogged ? <BrokerChat cli={cli} setAuthFlag={setAuthFlag} /> : adminstartor()} />

        {/* <Route path="/brokerProfile/dashboard" element={isLogged ? <BrokerProfile setAuthFlag={setAuthFlag} /> : adminstartor()} /> */}

        <Route path="/brokerProfile/dashboard" element={isLogged1 ? <BrokerProfile setAuthFlag={setAuthFlag} /> : adminstartor()} />

        <Route path="/brokerProfile/customerManagement" element={isLogged ? <CustomerManagement setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/brokerProperty" element={isLogged ? <BrokerProperty setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/support" element={<Support/>}/>
        <Route path="/brokerProfile/propertyDetails/:id" element={isLogged ? <BrokerPropertyDetails setAuthFlag={setAuthFlag} /> : adminstartor()} />

        <Route path="/dashboard" element={isAdmin ? <AdminDashBoard setAuthFlag={setAuthFlag} /> : <Notfound setAuthFlag={setAuthFlag} />} />
        <Route path="/dashboard/manageBrok" element={isAdmin ? <BrokerManage setAuthFlag={setAuthFlag} /> : <Notfound setAuthFlag={setAuthFlag} />} />
        <Route path="/dashboard/manageProperties" element={isAdmin ? <ManageProperties setAuthFlag={setAuthFlag} /> : <Notfound setAuthFlag={setAuthFlag} />} />

        <Route path="/dashboard/manageProp" element={ isAdmin ? <ManageProperties1 setAuthFlag={setAuthFlag}/> : <Notfound setAuthFlag={setAuthFlag}/>}/>
        
        <Route path="/contact" element={<Contact setAuthFlag={setAuthFlag} />} />
        <Route path="/properties" element={<Propertyies setAuthFlag={setAuthFlag}/>}/>
        <Route path="/detail/:id" element={<DetailsProperty setAuthFlag={setAuthFlag} />}/>

        <Route path="/brokerProfile/propertySaved" element={<SavedProperty/>}/>
        <Route path="*" element={<Notfound setAuthFlag={setAuthFlag} />} />
      </Routes>
    </>
  );
};

export default Pages;
