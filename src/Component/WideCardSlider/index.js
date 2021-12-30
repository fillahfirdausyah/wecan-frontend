import React from "react";
import "./style.css";

import CardLink from "../CardLink";

function WideCardSlider() {
  return (
    <div className="template-horizontal-wide-card-slider">
      <h3>Penggalangan Dana Mendesak</h3>
      <div className="template-slider-container">
        <div className="content-slider-container">
          <CardLink />
          <CardLink />
          <CardLink />
        </div>
      </div>
    </div>
  );
}

export default WideCardSlider;
