import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Notfound = ({setAuthFlag}) => {
  useEffect(()=>{
    setAuthFlag(false);
  },[]);
  return (
    <div className="notFound">
      <h1> 404 | Not Found</h1>
      <NavLink className="notFound-Link" to="/">Back to Home Page</NavLink>
    </div>
  );
};

export default Notfound;
