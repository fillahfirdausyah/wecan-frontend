import React from "react";
import "./style.css";

function FundraiserInfo({ data }) {
  return (
    <div className="fundraiser-container">
      <h3>Informasi Penggalangan Dana</h3>
      <div className="fundraiser-info-container">
        <div className="fundraiser-title">Penggalang Dana</div>
        <div className="fundraiser-user-container">
          <div className="fundraiser-avatar">
            <img
              src="https://assets.kitabisa.cc/images/icons/icon_anonymous-user.png"
              alt=""
            />
          </div>
          <div className="fundraiser-info">
            <div className="fundraiser-name-container">
              <div className="fundraiser-name">
                <p>{data.name}</p>
                <img
                  src="https://assets.kitabisa.cc/images/icons/icon_verified.svg"
                  alt=""
                />
              </div>
            </div>
            <span className="fundraiser-status">Identitas terverifikasi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundraiserInfo;
