import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import axios from 'axios';
import {
    Sidebar,
    Menu,
    MenuItem,
    ProSidebarProvider,
  } from "react-pro-sidebar";
const AdminMenu = () => {
 const state = useContext(GlobalState);
 const [user] = state.BrokerApi.user;

 const logoutUser = async () => {
  await axios.get("/api/logout");
  localStorage.removeItem("firstlogin");
  window.location.href = "/";
};
  return (
    <>
    <div>
    {/* <h2 className='admin-text text-center'>Admin DashBoard</h2>
    <h3 className='text-center text-lg'><span>Welcome</span>: {user.name}</h3> */}
    </div>
    <div className='admin-menu'>
         <ProSidebarProvider>
          <Sidebar className="menuside">
            <Menu className="menuside">
               <NavLink className={`${window.location.pathname==='/dashboard/manageBrok' ? "item-o" : "menu-item"}`} to="/dashboard/manageBrok"><MenuItem   className={`${window.location.pathname==="/dashboard/manageBrok" ? "item-o" : "menu-item"}`}>Manage Brokers</MenuItem></NavLink>
               <NavLink className={`${window.location.pathname==="/dashboard/manageProperties" ? "item-o" : "menu-item"}`} to="/dashboard/manageProperties"><MenuItem className={`${window.location.pathname==="/dashboard/manageProperties" ? "item-o" : "menu-item"}`}>List Properties</MenuItem></NavLink>
               <NavLink className={`${window.location.pathname==="/dashboard/manageProp" ? "item-o" : "menu-item"}`} to="/dashboard/manageProp"><MenuItem className={`${window.location.pathname==="/dashboard/manageProp" ? "item-o" : "menu-item"}`}> Manage Properties </MenuItem></NavLink>

             <NavLink className={`${window.location.pathname==="/dashboard/addBuilder" ? "item-o" : "menu-item"}`} to="/dashboard/addBuilder"><MenuItem className={`${window.location.pathname==="/dashboard/addBuilder" ? "item-o" : "menu-item"}`}>RegisterBuilder</MenuItem></NavLink>

             <NavLink className={`${window.location.pathname==="/dashboard/getBuilder" ? "item-o" : "menu-item"}`}  to="/dashboard/getBuilder"><MenuItem className={`${window.location.pathname==="/dashboard/getBuilder" ? "item-o" : "menu-item"}`}>Manage Builders</MenuItem></NavLink>

             <NavLink className={`${window.location.pathname==="/dashboard/adminProfile" ? "item-o" : "menu-item"}`}  to="/dashboard/adminProfile"><MenuItem className={`${window.location.pathname==="/dashboard/adminProfile" ? "item-o" : "menu-item"}`}>MyProfile</MenuItem></NavLink>
             <NavLink className="menu-item"  to="#!"><MenuItem className="menu-item">SignOut</MenuItem></NavLink>
            </Menu>
          </Sidebar>
        </ProSidebarProvider>
    </div>
    </>
  )
}

export default AdminMenu