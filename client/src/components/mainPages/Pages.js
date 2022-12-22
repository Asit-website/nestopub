import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/Login";
// import LoginSteeper from "./auth/LoginSteeper";
import Notfound from "./Notfound";
import BrokerProfile from "../broker/BrokerProfile";
import { GlobalState } from "../../GlobalState";
import AdminDashBoard from "../Admin/AdminDashBoard";
import BrokerManage from "../Admin/BrokerManage";


const Pages = ({setPop,resetPop,setResetPop,stepPop,setStepPop}) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
  const [isAdmin] = state.BrokerApi.isAdmin;
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
        <Route exact path="/brokerProfile" element={<BrokerProfile/>}/>

        <Route exact path="/dashboard" element={isAdmin ? <AdminDashBoard/> : <Notfound/>}/>
        <Route exact path="/dashboard/manageBrok" element={ isAdmin ? <BrokerManage/> : <Notfound/>}/>
        <Route path="*" exact element={<Notfound/>}/>
      </Routes>
    </>
  );
};

export default Pages;
