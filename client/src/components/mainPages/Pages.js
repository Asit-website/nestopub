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

const Pages = ({ setAuthFlag, setPop, resetPop, setResetPop, stepPop, setStepPop, claimPop, setClaimPop }) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
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
          exact
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
        <Route path="/brokerProfile/dashboard" element={isLogged ? <BrokerProfile setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/customerManagement" element={isLogged ? <CustomerManagement setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/brokerProperty" element={isLogged ? <BrokerProperty setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/propertyDetails/:id" element={isLogged ? <BrokerPropertyDetails setAuthFlag={setAuthFlag} /> : adminstartor()} />

        <Route path="/dashboard" element={isAdmin ? <AdminDashBoard setAuthFlag={setAuthFlag} /> : <Notfound setAuthFlag={setAuthFlag} />} />
        <Route path="/dashboard/manageBrok" element={isAdmin ? <BrokerManage setAuthFlag={setAuthFlag} /> : <Notfound setAuthFlag={setAuthFlag} />} />
        
        <Route path="/contact" element={<Contact setAuthFlag={setAuthFlag} />} />
        <Route path="*" element={<Notfound setAuthFlag={setAuthFlag} />} />
      </Routes>
    </>
  );
};

export default Pages;
