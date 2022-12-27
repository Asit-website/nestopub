import React, { useContext, useState } from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import HomePop from "../mainPages/home/HomePop";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
const Header = ({ pop, setPop }) => {
  const state = useContext(GlobalState);
  const [isLogged] = state.BrokerApi.isLogged;
  const [isAdmin] = state.BrokerApi.isAdmin;
  const [user] = state.BrokerApi.user;

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
          <NavLink to="/login" exact onClick={closeMenu}>
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

  return (
    <>
      <div className={navColor ? "header activeH" : "header"}>
        <nav className="navbar">
       
          <NavLink to="/" exact className="logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/login" exact onClick={closeMenu}>
                {isAdmin ? "Admin Here" : "Why Join Nestohub?"}
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="!#" onClick={closeMenu}>
                Agent Case Studies
              </a>
            </li>
            <li className="nav-item">
              <span onClick={() => setPop(true)}>
                {" "}
                <button className="btn-primary ">Register Now for FREE</button>
              </span>
            </li>
            {isAdmin && adminRouter()}
            {isLogged ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    onClick={() => {
                      closeMenu();
                      logoutUser();
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
                {user.role === 1 ? null : (
                  <NavLink to="#!">
                    <li className="nav-item">
                      {" "}
                      <span className="wel">Welcome</span>
                      {user.firmName}
                      {user.individualName}
                    </li>
                  </NavLink>
                )}
              </>
            ) : (
              <li className="nav-item nav-item1">
                <NavLink to="/login" exact onClick={closeMenu}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {pop && <HomePop type={same} setType={setSame} setPop={setPop} />}
    </>
  );
};

export default Header;
