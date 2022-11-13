import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/Login";
// import LoginSteeper from "./auth/LoginSteeper";
import Notfound from "./Notfound";
const Pages = ({setPop,resetPop,setResetPop,stepPop,setStepPop}) => {
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

        <Route path="*" exact element={<Notfound/>}/>
      </Routes>
    </>
  );
};

export default Pages;
