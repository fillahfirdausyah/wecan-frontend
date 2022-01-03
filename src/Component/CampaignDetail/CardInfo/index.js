import React from "react";
import "./style.css";

import ProgressBar from "@ramonak/react-progress-bar";

function CardInfo() {
  return (
    <div className="card-campaign-detail-info">
      <div className="hero-image-container">
        <img
          src="https://img.kitabisa.cc/size/664x357/08309532-2469-4c9b-8315-1a978412effd.jpg"
          alt=""
        />
      </div>
      <div className="content-wrapper">
        <h1>Darurat Bencana! Sedekah bantu Warga di Aceh</h1>
        <div className="donation">
          <span className="donation-received">Rp 32.022.226</span>
          <div className="donation-goal">Terkumpul dari Rp 50.000.000</div>
        </div>
        <div className="progressbar">
          <ProgressBar
            completed={65}
            bgColor="#61dafb"
            customLabel=" "
            height="4px"
          />
        </div>
        <div className="info">
          <span>
            <strong>2170</strong> Donasi
          </span>
          <span>
            <strong>6</strong> hari lagi
          </span>
        </div>
        <div className="button-container">
          <button className="btn btn-donate-now w-100">Donasi Sekarang!</button>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
