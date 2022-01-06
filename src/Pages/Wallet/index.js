import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";
import { useHistory } from "react-router-dom";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";

import { FaMoneyBillWave } from "react-icons/fa";

function WalletPage() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    const getWallet = async () => {
      try {
        let res = await api.get("/api/wallet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (Object.keys(res.data).length > 0) {
          setWallet(res.data);
        } else {
          history.push("/wallet/make");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getWallet();
  }, []);

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Dompet Kebaikan" />
      </TopNav>
      <div className="main-page-wrapper wallet-page">
        <div className="wallet-amount-container">
          <div className="wrapper">
            <p>Total Saldo</p>
          </div>
          <div className="wrapper">
            <span>
              <sup>Rp</sup>
            </span>
            <span className="saldo">0</span>
          </div>
        </div>

        <div className="wallet-box-container">
          <div className="wrapper">
            <FaMoneyBillWave />
            <p>Isi Saldo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletPage;
