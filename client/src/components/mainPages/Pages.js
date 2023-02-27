import React, { useContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/Login";
import Notfound from "./Notfound";
import BrokerProfile from "../broker/BrokerProfile";
import { GlobalState } from "../../GlobalState";
import AdminDashBoard from "../Admin/AdminDashBoard";
import BrokerManage from "../Admin/AdminBroker/BrokerManage";
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
import AddBuilder from "../Admin/AdminBuilder/AddBuilder";
import GetBuilder from "../Admin/AdminBuilder/getBuilder";
import AdminProfile from "../Admin/AdminProfile";

const Pages = ({ setAuthFlag, setPop, resetPop, setResetPop, stepPop, setStepPop, claimPop, setClaimPop, setAlert }) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
  const [user] = state.BrokerApi.user;
  let isLogged1 = state.isLogged1;
  if (isLogged) {
    isLogged1 = true;
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
        <Route path="/" element={<Home setAuthFlag={setAuthFlag} setPop={setPop} />} />
        <Route path="/login" element={<Login setAuthFlag={setAuthFlag} resetPop={resetPop} setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop} setAlert={setAlert} />} />
        <Route path="/brokerProfile/visitManagement" element={isLogged ? <VisitManagement setAlert={setAlert} setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/paymentHistory" element={isLogged ? <PaymentHistory setAuthFlag={setAuthFlag} setAlert={setAlert} /> : adminstartor()} />
        <Route path="/brokerProfile/myProfile" element={isLogged ? <MyProfile setAuthFlag={setAuthFlag} claimPop={claimPop} setClaimPop={setClaimPop} setAlert={setAlert} /> : adminstartor()} />
        <Route path="/brokerProfile/chat" element={isLogged ? <BrokerChat cli={cli} setAuthFlag={setAuthFlag} setAlert={setAlert} /> : adminstartor()} />

        <Route path="/brokerProfile/dashboard" element={isLogged1 ? <BrokerProfile setAuthFlag={setAuthFlag} setAlert={setAlert} /> : adminstartor()} />

        <Route path="/brokerProfile/customerManagement" element={isLogged ? <CustomerManagement setAuthFlag={setAuthFlag} setAlert={setAlert} /> : adminstartor()} />
        <Route path="/brokerProfile/brokerProperty" element={isLogged ? <BrokerProperty setAuthFlag={setAuthFlag} setAlert={setAlert} /> : adminstartor()} />
        <Route path="/brokerProfile/support" element={isLogged ? <Support setAlert={setAlert} setAuthFlag={setAuthFlag} /> : adminstartor()} />
        <Route path="/brokerProfile/propertyDetails/:id" element={isLogged ? <BrokerPropertyDetails setAuthFlag={setAuthFlag} /> : adminstartor()} />


        {/* ===========================admin============================================= */}
        <Route path="/dashboard" element={isAdmin ? <AdminDashBoard setAuthFlag={setAuthFlag} /> : <Notfound setAuthFlag={setAuthFlag} />} />
        <Route path="/dashboard/manageBrok" element={isAdmin ? <BrokerManage setAuthFlag={setAuthFlag} setAlert={setAlert} /> : <Notfound setAuthFlag={setAuthFlag} />} />
        <Route path="/dashboard/manageProperties" element={isAdmin ? <ManageProperties setAuthFlag={setAuthFlag} setAlert={setAlert} /> : <Notfound setAuthFlag={setAuthFlag} />} />

        <Route path="/dashboard/manageProp" element={isAdmin ? <ManageProperties1 setAuthFlag={setAuthFlag} setAlert={setAlert} /> : <Notfound setAuthFlag={setAuthFlag} />} />

        <Route path="/dashboard/addBuilder" element={isAdmin ? <AddBuilder setAlert={setAlert} setAuthFlag={setAuthFlag} /> : <Notfound setAuthFlag={setAuthFlag}/>}/>
        <Route path="/dashboard/getBuilder" element={isAdmin ? <GetBuilder setAlert={setAlert} setAuthFlag={setAuthFlag}/> : <Notfound setAuthFlag={setAuthFlag}/>}/>
         
        <Route path="/dashboard/adminProfile" element={isAdmin ? <AdminProfile setAlert={setAlert} setAuthFlag={setAuthFlag}/> : <Notfound setAuthFlag={setAuthFlag}/>}/>

        {/* ========================end admin========================================= */}

        <Route path="/contact" element={<Contact setAlert={setAlert} setAuthFlag={setAuthFlag} />} />
        <Route path="/properties" element={<Propertyies setAuthFlag={setAuthFlag} />} />
        <Route path="/detail/:id" element={<DetailsProperty setAuthFlag={setAuthFlag} />} />

        <Route path="/brokerProfile/propertySaved" element={<SavedProperty />} />
        <Route path="*" element={<Notfound setAuthFlag={setAuthFlag} />} />
      </Routes>
    </>
  );
};

export default Pages;
