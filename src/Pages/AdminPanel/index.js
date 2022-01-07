import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";
import { Badge } from "react-bootstrap";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";
import CardTopup from "../../Component/CardTopup";
import CardCampaign from "../../Component/CardCampaign";

function AdminPanelpage() {
  const token = localStorage.getItem("token");
  const [sectionActive, setSectionActive] = useState("topup");
  const [campaignData, setCampaignData] = useState([]);
  const [topupData, setTopupData] = useState([]);

  useEffect(() => {
    api
      .get("/api/campaign/pending", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCampaignData(res.data));

    api
      .get("/api/topup/pending", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTopupData(res.data));
  }, []);

  const changeSectionTopup = () => {
    setSectionActive("topup");
  };

  const changeSectionCampaign = () => {
    setSectionActive("campaign");
  };

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Admin Panel" />
      </TopNav>
      <div className="main-page-wrapper my-campaign">
        <div className="my-campaign-header">
          <h3>Admin</h3>
        </div>
        <div className="nav-tab-wrapper">
          <div className="nav-tab-container">
            <span
              className={sectionActive == "topup" ? "active" : ""}
              onClick={changeSectionTopup}
            >
              Topup{" "}
              {topupData.length > 0 ? (
                <Badge className="mx-1" bg="success">
                  {topupData.length}
                </Badge>
              ) : (
                ""
              )}
            </span>
            <span
              className={sectionActive == "campaign" ? "active" : ""}
              onClick={changeSectionCampaign}
            >
              Campaign
              {campaignData.length > 0 ? (
                <Badge className="mx-1" bg="success">
                  {campaignData.length}
                </Badge>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
        <hr className="section-breaker" />
        <div className="my-campaign-content-wrapper">
          {sectionActive == "topup" ? (
            <TopUpSection data={topupData} />
          ) : (
            <CampaignSection data={campaignData} />
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

function TopUpSection({ data }) {
  return (
    <>
      {data.map((x) => (
        <div key={x.id}>
          <CardTopup data={x} />
        </div>
      ))}
    </>
  );
}

function CampaignSection({ data }) {
  return (
    <>
      {data.map((x) => (
        <div key={x.id}>
          <CardCampaign data={x} />
        </div>
      ))}
    </>
  );
}

export default AdminPanelpage;
