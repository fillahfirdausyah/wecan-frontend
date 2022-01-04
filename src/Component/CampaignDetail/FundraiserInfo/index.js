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
              src="https://i.pinimg.com/736x/12/1c/55/121c55b356c4dd0ad7a743b70770d323.jpg"
              alt=""
            />
          </div>
          <div className="fundraiser-info">
            <div className="fundraiser-name-container">
              <div className="fundraiser-name">
                <p>{data.username}</p>
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
