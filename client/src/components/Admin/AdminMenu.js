import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    ProSidebarProvider,
  } from "react-pro-sidebar";
const AdminMenu = () => {
  return (
    <>
    <h2 className='admin-text'>Admin DashBoard</h2>
    <div className='admin-menu'>
         <ProSidebarProvider>
          <Sidebar className="menuside">
            <Menu className="menuside">
                <MenuItem routerLink={<NavLink to="/dashboard/manageBrok"/>}  className="menu-item">Manage Brokers</MenuItem>
                <MenuItem routerLink={<NavLink to="/dashboard/manageProperties"/>}  className="menu-item">Manage Properties</MenuItem>
                <MenuItem className="menu-item"> Line charts </MenuItem>
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