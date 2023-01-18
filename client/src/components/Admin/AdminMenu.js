import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';

import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    ProSidebarProvider,
  } from "react-pro-sidebar";
const AdminMenu = () => {
 const state = useContext(GlobalState);
 const [user] = state.BrokerApi.user;
  return (
    <>
    <h2 className='admin-text'>Admin DashBoard</h2>
    <h3 className='text-center text-lg'><span>Welcome</span>: {user.name}</h3>
    <div className='admin-menu'>
         <ProSidebarProvider>
          <Sidebar className="menuside">
            <Menu className="menuside">
                <MenuItem routerLink={<NavLink to="/dashboard/manageBrok"/>}  className="menu-item">Manage Brokers</MenuItem>
                <MenuItem routerLink={<NavLink to="/dashboard/manageProperties"/>}  className="menu-item">List Properties</MenuItem>
                <MenuItem routerLink={<NavLink to="/dashboard/manageProp"/>} className="menu-item"> Manage Properties </MenuItem>
              <MenuItem className="menu-item"> Documentation </MenuItem>
              <MenuItem className="menu-item"> Calendar </MenuItem>
            </Menu>
          </Sidebar>
        </ProSidebarProvider>
    </div>
    </>
  )
}

export default AdminMenu