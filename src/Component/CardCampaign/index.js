import React from "react";
import "./style.css";

import ProgressBar from "@ramonak/react-progress-bar";

function CardCampaign() {
  return (
    <>
      <div className="card-campaign">
        <figure>
          <div className="image-campaign-wrapper">
            <img
              src="https://imgix.kitabisa.com/af55dd04-2e0c-44f6-98a1-1913fd64f0a2.jpg"
              alt=""
            />
          </div>
        </figure>
        <div className="info-campagin-content">
          <span className="title-campaign">
            Pahala Mengalir Wakaf Air Untuk Santri Pelosok
          </span>
          <div className="info-fundraiser">
            <span>Sinergi Kebaikan Umat</span>
            <img
              src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
              alt=""
            />
          </div>
          <div className="info-progressbar-campaign">
            <ProgressBar
              completed={99}
              bgColor="#61dafb"
              customLabel=" "
              height="3px"
            />
          </div>
          <div className="list-count-campaign">
            <div className="dontation-collected">
              <span>Terkumpul</span>
              <span className="balance">Rp 100.000.000</span>
            </div>
            <div className="day-left-campaign">
              <span>Sisa hari</span>
              <span className="balance">
                <strong>14</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="list-border"></div>
    </>
  );
}

export default CardCampaign;
