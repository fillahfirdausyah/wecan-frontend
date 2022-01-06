import React from "react";

import api from "../../Helpers/ApiEndpoint";
import { useHistory } from "react-router-dom";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";

import { FaWallet } from "react-icons/fa";

function MakeWalletpage() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const makeWallet = () => {
    api
      .get("/api/wallet/make", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        history.push("/wallet");
      });
  };

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Buat dompet kebaikan" />
      </TopNav>
      <div className="main-page-wrapper">
        <div className="notify-container">
          <h4>Anda belum membuka dompet kebaikan</h4>
          <div className="wallet-box-container">
            <div className="wrapper" onClick={makeWallet}>
              <FaWallet className="icon" />
              <p>Buka Dompet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeWalletpage;
