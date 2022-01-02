import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";

function MakeCampaignPage() {
  return (
    <>
      <div className="max-w-screen-sm">
        <TopNav>
          <HeaderNav title="Buat Campagin" />
        </TopNav>
        <div className="main-page-wrapper">
          <div className="make-campaign">
            <div className="info-fundaiser-form">
              <div className="campaign-form-controll">
                <h3>Nama Penggalang Dana</h3>
                <input
                  type="text"
                  className="info-form"
                  placeholder="Nama Penggalang Dana"
                />
              </div>
            </div>
            <hr className="form-breaker" />
            <div className="info-fundaiser-form">
              <div className="campaign-form-controll mb-3">
                <h3>Nama campaign</h3>
                <input
                  type="text"
                  className="info-form"
                  placeholder="Nama Campaign"
                />
              </div>
              <div className="campaign-form-controll mb-3">
                <h3>Target dana terkumpul</h3>
                <input type="number" className="info-form" placeholder="Rp.." />
              </div>
              <div className="campaign-form-controll mb-3">
                <h3>Lama galang dana berlangsung</h3>
                <input type="date" className="info-form" placeholder="Rp.." />
              </div>
              <div className="campaign-form-controll mb-3">
                <h3>Cerita</h3>
                <textarea name=""></textarea>
              </div>
              <div className="campaign-form-controll">
                <h3>Foto galang dana</h3>
                <input type="file" className="info-form" placeholder="Rp.." />
              </div>
            </div>
            <hr className="form-breaker" />
            <button type="submit" className="btn btn-primary w-100">
              Buat Campaign
            </button>
          </div>
        </div>
        <BottomNav />
      </div>
    </>
  );
}

export default MakeCampaignPage;
