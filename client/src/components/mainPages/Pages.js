import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/Login";
// import LoginSteeper from "./auth/LoginSteeper";
import Notfound from "./Notfound";
import BrokerProfile from "../broker/BrokerProfile";
import { GlobalState } from "../../GlobalState";


const Pages = ({setPop,resetPop,setResetPop,stepPop,setStepPop}) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
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
        <Route exact path="/brokerProfile" element={isLogged ? <BrokerProfile/> : <Notfound/>}/>
        <Route path="*" exact element={<Notfound/>}/>
      </Routes>
    </>
  );
};

export default Pages;
