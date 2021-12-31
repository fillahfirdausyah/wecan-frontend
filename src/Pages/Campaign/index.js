import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import CardCampaign from "../../Component/CardCampaign";

function CampaignPage() {
  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Campaign" />
      </TopNav>
      <div className="list-campaign">
        <CardCampaign />
        <CardCampaign />
        <CardCampaign />
        <CardCampaign />
        <CardCampaign />
        <CardCampaign />
      </div>
    </div>
  );
}

export default CampaignPage;
