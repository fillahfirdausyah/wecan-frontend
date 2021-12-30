import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import "./style.css";

function CardLink() {
  return (
    <div className="card-link">
      <div className="wide-card-container">
        <div className="large-list-container">
          <figure className="large-list-figure">
            <img
              src="https://imgix.kitabisa.com/a7dfb782-d303-441a-86d0-75c6168ebbb1.jpg?ar=16:9&w=280&auto=format,compress"
              alt=""
            />
          </figure>
          <div className="large-list-content">
            <div className="large-list-title">
              <span>Banjir Rendam 2 Wilayah Di Riau, 1500 KK Terdampak</span>
            </div>
            <div className="large-list-progressbar">
              <ProgressBar
                completed={25}
                bgColor="#61dafb"
                customLabel=" "
                height="4px"
              />
            </div>
            <div className="large-list-count">
              <div className="donation-collected">
                <span>Rp 9.000.000</span>
              </div>
              <div className="donation-dayleft">
                <span>20 hari lagi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLink;
