import React, { useState } from "react";

import api from "../../Helpers/ApiEndpoint";
import { useHistory } from "react-router-dom";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";

function TopupWalletPage() {
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const history = useHistory();
  const [balance, setBalance] = useState("");

  const topUpWallet = (e) => {
    e.preventDefault();

    api
      .post(
        "/api/wallet/topup",
        {
          user_id: userInfo.id,
          amount: balance,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        history.push("/wallet");
      });
  };

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Dompet Kebaikan" />
      </TopNav>
      <div className="main-page-wrapper">
        <form onSubmit={topUpWallet}>
          <div className="donation-amount-container">
            <div className="donation-amount-wrapper">
              <p>Masukan Nominal Topup</p>
              <div className="donation-input-container">
                <span>Rp</span>
                <div className="donation-input-form">
                  <input
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    type="number"
                    className="donation-input"
                    placeholder="0"
                    name="amount"
                  />
                </div>
              </div>
              <p className="wallet-balance">Saldo dompet kebaikan:</p>
            </div>
          </div>
          <div className="button-wrapper">
            <button type="submit" className="btn btn-primary w-100">
              Topup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TopupWalletPage;
