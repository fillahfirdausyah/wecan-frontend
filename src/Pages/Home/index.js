import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import Search from "../../Component/Search";
import InfoCampaignSlider from "../../Component/InfoCampaignSlider";
import ActionKind from "../../Component/ActionKind";
import WideCardSlider from "../../Component/WideCardSlider";
import BottomNav from "../../Component/BottomNav";

function HomePage() {
  const history = useHistory();

  const toCampaign = () => {
    history.push("/campaign/all");
  };

  return (
    <div className="max-w-screen-sm">
      <Search />
      <div className="main-page-wrapper home-page">
        <div className="header-info">
          <h3>Ingin Berdonasi?</h3>
          <div className="button-wrapper">
            <button onClick={toCampaign} className="btn btn-primary donate-now">
              Berdonasi Sekarang
            </button>
          </div>
        </div>
        <hr className="section-breaker" />
        <InfoCampaignSlider />
        <hr className="section-breaker" />
        {/* Action */}
        <ActionKind />
        <hr className="section-breaker" />
        {/* Wide Card Slider */}
        <WideCardSlider />
        <hr className="section-breaker" />
      </div>
      <BottomNav />
    </div>
  );
}

export default HomePage;
