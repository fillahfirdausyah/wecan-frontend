import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";
import MenuItem from "../../Component/MenuItem";

import { IoWalletOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { GoInfo } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";

function UserPage() {
  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Account" />
      </TopNav>
      <div className="user-page">
        <div className="profile-section">
          <img
            src="https://i.pinimg.com/736x/12/1c/55/121c55b356c4dd0ad7a743b70770d323.jpg"
            alt=""
          />
          <div className="profile-content">
            <span className="user-fullname">Fillah Akbar Firdausyah</span>
            <button className="btn btn-sm btn-outline-primary btn-edit-profile">
              Edit Profile
            </button>
          </div>
        </div>
        <MenuItem title="Dompet Kebaikan" wallet={true}>
          <IoWalletOutline className="menu-item-icon" />
        </MenuItem>
        <MenuItem title="Pengaturan">
          <BsGear className="menu-item-icon" />
        </MenuItem>
        <MenuItem title="Riwayat Donasi">
          <AiOutlineHistory className="menu-item-icon" />
        </MenuItem>
        <MenuItem title="Tentang Kita">
          <GoInfo className="menu-item-icon" />
        </MenuItem>
        <MenuItem title="Akhiri Sesi">
          <FiLogOut className="menu-item-icon" />
        </MenuItem>
      </div>
      <BottomNav />
    </div>
  );
}

export default UserPage;
