import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";

import "../Admin/admin.css";
import AdminMenu from "./AdminMenu";
const AdminDashBoard = () => {
  const state = useContext(GlobalState);
    const [broker, setBroker] = state.IndividualApi.broker;
    const [callback] = state.IndividualApi.callback;
  return (
    <>
      <div className="adminDashboard">
        <h2 style={{textAlign:"center"}}>Admin DashBoard</h2>
        <AdminMenu/>
      </div>
   <h2>Number of  Broker Register: {broker.length}</h2>
    </>
  );
};

export default AdminDashBoard;
