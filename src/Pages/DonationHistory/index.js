import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
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
          <div className="donation-history-content">
            <img
              src="https://img.kitabisa.cc/size/664x357/08309532-2469-4c9b-8315-1a978412effd.jpg"
              alt=""
            />
            <div className="campaign-detail">
              <span className="campaign-title">
                Sedekah untuk pedagang lansia dijalan
              </span>
              <div className="campaign-donation-date">
                <span>07 Des 2021</span>
                <span className="donation-amount">Rp63.000</span>
              </div>
            </div>
            <div className="donation-status">Berhasil</div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default DonationHistoryPage;
