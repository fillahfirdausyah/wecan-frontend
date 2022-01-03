import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";
import CardCampaign from "../../Component/CardCampaign";

function MyCampaignPage() {
  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Campaign Saya" />
      </TopNav>
      <div className="main-page-wrapper my-campaign">
        <div className="my-campaign-header">
          <h3>Campaign Saya</h3>
          <Link className="btn btn-primary btn-sm" to="/make/campaign">
            Galang Dana
          </Link>
        </div>
        <div className="nav-tab-wrapper">
          <div className="nav-tab-container">
            <span className="active">Sedang Berlangsung</span>
            <span>Selesai</span>
          </div>
        </div>
        <div className="my-campaign-content-wrapper">
          <CardCampaign />
          <CardCampaign />
          <CardCampaign />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default MyCampaignPage;
