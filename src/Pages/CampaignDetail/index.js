import React from "react";
import "./style.css";

import { MdKeyboardArrowDown } from "react-icons/md";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import CardInfo from "../../Component/CampaignDetail/CardInfo";
import FundraiserInfo from "../../Component/CampaignDetail/FundraiserInfo";
import Story from "../../Component/CampaignDetail/Story";
import CardPyrayers from "../../Component/CampaignDetail/Prayers";
import DonationCard from "../../Component/CampaignDetail/DonationCard";

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
        <Story />
        <hr className="section-breaker" />
        <div className="card-prayers-wrapper">
          <div className="prayers-section-header">
            <h4>Doa-doa #OrangBaik</h4>
          </div>
          <CardPyrayers />
          <CardPyrayers />
          <CardPyrayers />
        </div>
        <div className="see-all-prayers-button btn-primary">
          Lihat Semua{" "}
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
        <hr className="section-breaker" />
        <div className="donation-card-wrapper">
          <h4>Donasi (2463)</h4>
          <div className="donation-card-container">
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
          </div>
        </div>
        <div className="see-all-prayers-button btn-primary">
          Lihat Semua{" "}
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
        <hr className="section-breaker" />
        <div className="button-container">
          <button className="btn btn-donate-now w-100">Donasi Sekarang!</button>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetailPage;
