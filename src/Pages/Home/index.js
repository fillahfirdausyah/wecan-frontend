import React from "react";
import "./style.css";

import Search from "../../Component/Search";
import InfoCampaignSlider from "../../Component/InfoCampaignSlider";
import ActionKind from "../../Component/ActionKind";
import WideCardSlider from "../../Component/WideCardSlider";
import BottomNav from "../../Component/BottomNav";

function HomePage() {
  return (
    <div className="max-w-screen-sm">
      <Search />
      <div className="home-page">
        <div className="header-info">
          <h3>Ingin Berdonasi?</h3>
          <div className="button-wrapper">
            <button className="btn btn-primary donate-now">
              Berdonasi Sekarang
            </button>
          </div>
        </div>
        <hr className="section-breaker" />
        <InfoCampaignSlider />
        {/* Action */}
        <ActionKind />
        {/* Wide Card Slider */}
        <WideCardSlider />
      </div>
      <BottomNav />
    </div>
  );
}

export default HomePage;
