import React from "react";
import "./style.css";

import { IoHeartCircleSharp } from "react-icons/io5";
import { MdOutlineCampaign, MdOutlineAccountCircle } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { GoInfo } from "react-icons/go";

function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="navbar-home navbar-default-style active">
        <div className="menu-icon-container">
          <IoHeartCircleSharp className="icon" />
        </div>
        <span>Donasi</span>
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
      <div className="navbar-my-account navbar-default-style">
        <div className="menu-icon-container">
          <MdOutlineAccountCircle className="icon" />
        </div>
        <span>Akun</span>
      </div>
    </div>
  );
}

export default BottomNav;
