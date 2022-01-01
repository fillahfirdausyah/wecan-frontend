import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./style.css";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdOutlineCampaign, MdOutlineAccountCircle } from "react-icons/md";
import { CgList } from "react-icons/cg";
import { GoInfo } from "react-icons/go";

function BottomNav() {
  const location = useLocation();
  const { pathname } = location;
  // const splitLocation = pathname.split("/");

  return (
    <div className="bottom-nav">
      <div
        className={
          pathname == "/"
            ? "navbar-home navbar-default-style active"
            : "navbar-home navbar-default-style"
        }
      >
        <NavLink to="/">
          <div className="menu-icon-container">
            <IoHeartCircleSharp className="icon" />
          </div>
          <span>Donasi</span>
        </NavLink>
      </div>
      <div className="navbar-make-campaign navbar-default-style">
        <div className="menu-icon-container">
          <MdOutlineCampaign className="icon" />
        </div>
        <span>Galang Dana</span>
      </div>
      <div className="navbar-my-donation navbar-default-style">
        <div className="menu-icon-container">
          <CgList className="icon" />
        </div>
        <span>Donasi Saya</span>
      </div>
      <div className="navbar-about-us navbar-default-style">
        <div className="menu-icon-container">
          <GoInfo className="icon" />
        </div>
        <span>Tentang Kami</span>
      </div>
      <div
        className={
          pathname == "/user"
            ? "navbar-home navbar-default-style active"
            : "navbar-home navbar-default-style"
        }
      >
        <NavLink to="/user">
          <div className="menu-icon-container">
            <MdOutlineAccountCircle className="icon" />
          </div>
          <span>Akun</span>
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNav;
