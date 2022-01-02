import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import CardDonationHistory from "../../Component/CardDonationHistory";
import BottomNav from "../../Component/BottomNav";

function DonationHistoryPage() {
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
          <CardDonationHistory />
          <CardDonationHistory />
          <CardDonationHistory />
          <CardDonationHistory />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default DonationHistoryPage;
