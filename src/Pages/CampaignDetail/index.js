import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import CardInfo from "../../Component/CampaignDetail/CardInfo";
import FundraiserInfo from "../../Component/CampaignDetail/FundraiserInfo";

function CampaignDetailPage() {
  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav
          campaignDetail={true}
          title="Darurat Bencana! Sedekah bantu warga aceh"
        />
      </TopNav>
      <div className="main-page-wrapper campaign-detail">
        <CardInfo />
        <hr className="section-breaker" />
        <FundraiserInfo />
        <hr className="section-breaker" />
      </div>
    </div>
  );
}

export default CampaignDetailPage;
