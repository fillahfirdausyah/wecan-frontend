import React from "react";
import "./style.css";

function CardDonationHistory() {
  return (
    <div className="donation-history-content">
      <img
        src="https://img.kitabisa.cc/size/664x357/08309532-2469-4c9b-8315-1a978412effd.jpg"
        alt=""
      />
      <div className="campaign-detail">
        <span className="campaign-title">
          Sedekah untuk pedagang lansia dijalan
        </span>
        <div className="campaign-donation-date">
          <span>07 Des 2021</span>
          <span className="donation-amount">Rp63.000</span>
        </div>
      </div>
      <div className="donation-status">Berhasil</div>
    </div>
  );
}

export default CardDonationHistory;
