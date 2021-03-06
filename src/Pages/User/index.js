import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";
import { useAuth } from "../../Helpers/AuthContext";
import { useHistory } from "react-router-dom";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";
import MenuItem from "../../Component/MenuItem";

import { Spinner } from "react-bootstrap";

import { IoWalletOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { MdOutlineCampaign, MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { GoInfo } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";

function UserPage() {
  const [userData, setUserData] = useState({});
  const [wallet, setWallet] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuth();
  const history = useHistory();
  let token = localStorage.getItem("token");

  useEffect(() => {
    const getInfo = async () => {
      try {
        setIsLoading(true);
        let userResult = await api.get("/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(userResult.data);

        let walletResult = await api.get("/api/wallet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWallet(walletResult.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getInfo();
  }, []);

  const logOut = () => {
    logout();
    history.push("/");
  };

  const toWalletPage = () => {
    history.push("/wallet");
  };

  const toAdminPanel = () => {
    history.push("/admin");
  };

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Account" />
      </TopNav>
      <div className="main-page-wrapper user-page">
        <div className="profile-section">
          <img
            src="https://assets.kitabisa.cc/images/icons/icon_anonymous-user.png"
            alt=""
          />
          <div className="profile-content">
            {isLoading ? (
              <Spinner
                animation="grow"
                size="sm"
                style={{
                  marginBottom: 15,
                }}
              />
            ) : (
              <span className="user-fullname">{userData.name}</span>
            )}
            <button className="btn btn-sm btn-outline-primary btn-edit-profile">
              Edit Profile
            </button>
          </div>
        </div>
        <MenuItem
          title="Dompet Kebaikan"
          wallet={true}
          data={wallet}
          isLoading={isLoading}
          theFunction={toWalletPage}
        >
          <IoWalletOutline className="menu-item-icon" />
        </MenuItem>
        {userData.role == "admin" ? (
          <>
            <MenuItem title="Admin Panel" theFunction={toAdminPanel}>
              <MdOutlineAdminPanelSettings className="menu-item-icon" />
            </MenuItem>
          </>
        ) : (
          ""
        )}
        <MenuItem title="Campaign Saya">
          <MdOutlineCampaign className="menu-item-icon" />
        </MenuItem>
        <MenuItem title="Riwayat Donasi">
          <AiOutlineHistory className="menu-item-icon" />
        </MenuItem>
        <MenuItem title="Tentang Kita">
          <GoInfo className="menu-item-icon" />
        </MenuItem>
        <MenuItem title="Pengaturan">
          <BsGear className="menu-item-icon" />
        </MenuItem>
        <MenuItem theFunction={logOut} title="Logout">
          <FiLogOut className="menu-item-icon" />
        </MenuItem>
      </div>
      <BottomNav />
    </div>
  );
}

export default UserPage;
