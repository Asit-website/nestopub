import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import "../Admin/admin.css";
import AdminMenu from "./AdminMenu";
const AdminDashBoard = () => {
  return (
    <>
      <div className="adminDashboard">
        <AdminMenu/>
      </div>
    </>
  );
};

export default AdminDashBoard;
