import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";

function MakeCampaignPage() {
  return (
    <>
      <div className="max-w-screen-sm">
        <TopNav>
          <HeaderNav title="Buat Campagin" />
        </TopNav>
        <div className="main-page-wrapper make-campaign">
          <h1>Make Campaign Page</h1>
        </div>
        <BottomNav />
      </div>
    </>
  );
}

export default MakeCampaignPage;
