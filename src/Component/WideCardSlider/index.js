import React, { useEffect, useState } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";

import CardLink from "../CardLink";

function WideCardSlider() {
  const [campaign, setCampaign] = useState([]);
  useEffect(() => {
    api.get("api/campaign").then((res) => setCampaign(res.data.data));
  }, []);
  return (
    <div className="template-horizontal-wide-card-slider">
      <h3>Penggalangan Dana Mendesak</h3>
      <div className="template-slider-container">
        <div className="content-slider-container">
          {campaign.map((x, id) => (
            <div key={id}>
              <CardLink data={x} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WideCardSlider;
