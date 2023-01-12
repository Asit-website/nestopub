import React, { useContext, useState } from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import HomePop from "../mainPages/home/HomePop";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import SearchClient from "../ClientsPop/SearchClient";
const Header1 = ({ pop, setPop }) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
  const [isAdmin] = state.BrokerApi.isAdmin;
  // const [user] = state.BrokerApi.user;
  // const user=state.user1;
  const user=JSON.parse(localStorage.getItem('nestoBroker'));

  const [broker] = state.IndividualApi.broker;

  // console.log(user);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const [navColor, setNavColor] = useState(false);
  const [same, setSame] = useState("popup-container");

  const logoutUser = async () => {
    await axios.get("/api/logout");
    localStorage.removeItem("firstlogin");
    window.location.href = "/";
  };

  // ============admin router===============
  const adminRouter = () => {
    return (
      <>
        <li className="nav-item">
          <NavLink to="/login" onClick={closeMenu}>
            Why Nestohub?
          </NavLink>
        </li>
      </>
    );
  };
  const changeNavColor = () => {
    if (window.scrollY >= 0) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", changeNavColor);

  const roundedImg = {
    width:"40px !important",
    height:"40px",
    borderRadius:"50%"
  }

  return (
    <>
      <div className={navColor ? "header activeH" : "header"}>
        <nav className="navbar navbar1">

          <NavLink to="/" className="logo head2-logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>

          <div className="flex justify-between items-center w-full ml-16">
            <div className="flex head21 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer mr-2 bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              
             <NavLink to="/brokerProfile/myProfile"><p className="text-lg font-semibold">{"Hey"} {user.firmName}{user.individualName}</p></NavLink>

            </div>
            <div className="flex head22">
              <div className="head2-input">
                {/* <form>
                  <label htmlFor="head2-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="head2-search" className="block w-full p-4 py-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                  </div>
                </form> */}
                <SearchClient/>
              </div>
              <div className="head2-noti cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
                <div className="head2-noti1">
                  1
                </div>
              </div>
              <div className="flex head2-user">
                <button onClick={()=>{
                  document.getElementById('head2-drop').classList.toggle('hidden');
                }} className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
                  <span className="sr-only">Open user menu</span>
                  <img style={roundedImg} className="mr-2 w-8 h-8 rounded-full" src={user.images[0]} alt="user photo" />
                  <p className="font-semibold">{user.firmName}{user.individualName}</p> 
                  <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>

                <div id="head2-drop" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                   <NavLink to="/brokerProfile/myProfile"><div className="font-medium ">{user.firmName}{user.individualName}</div></NavLink>
                    {/* <div className="truncate">name@flowbite.com</div> */}
                  </div>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                    <li>
                      <NavLink to="/brokerProfile/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div className="py-1" onClick={logoutUser}>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {pop && <HomePop type={same} setType={setSame} setPop={setPop} />}
    </>
  );
};

export default Header1;
