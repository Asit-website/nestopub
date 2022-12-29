import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../GlobalState";
import "../Admin/admin.css";
import AdminMenu from "./AdminMenu";
const AdminDashBoard = ({setAuthFlag}) => {
  useEffect(()=>{
    setAuthFlag(false);
  },[]);
  return (
    <>
      <div className="adminDashboard">
        <AdminMenu/>
      </div>
    </>
  );
};

export default AdminDashBoard;
