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
    <div>
         <ProSidebarProvider>
          <Sidebar className="menuside">
            <Menu className="menuside">
                <MenuItem routerLink={<NavLink to="/dashboard/manageBrok"/>}  className="menu-item">Manage Brokers</MenuItem>
                <MenuItem> Line charts </MenuItem>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
          </Sidebar>
        </ProSidebarProvider>

    </div>
  )
}

export default AdminMenu