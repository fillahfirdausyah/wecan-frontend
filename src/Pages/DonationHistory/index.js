import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import CardDonationHistory from "../../Component/CardDonationHistory";
import BottomNav from "../../Component/BottomNav";

function DonationHistoryPage() {
  const token = localStorage.getItem("token");
  const [donationHistory, setDonationHistory] = useState([]);

  useEffect(() => {
    api
      .get("/api/donation/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setDonationHistory(res.data));
  }, []);

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Donasi Saya" />
      </TopNav>
      <div className="main-page-wrapper donation-history">
        <div className="donation-history-container">
          <div className="donation-history-header">
            <h4 className="riwayat-donasi">Riwayat Donasi</h4>
          </div>
          {donationHistory.map((x) => (
            <div key={x.id}>
              <CardDonationHistory data={x} />
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default DonationHistoryPage;
