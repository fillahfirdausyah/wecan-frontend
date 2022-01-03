import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";

function DonationPage() {
  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Darurat Bencana! Sedekah bantu Warga di Aceh" />
      </TopNav>
      <div className="main-page-wrapper donation-amount">
        <div className="donation-amount-container">
          <div className="donation-amount-wrapper">
            <p>Masukan Nominal Donasi</p>
            <div className="donation-input-container">
              <span>Rp</span>
              <form className="donation-input-form">
                <input
                  type="number"
                  className="donation-input"
                  placeholder="0"
                />
              </form>
            </div>
            <p className="wallet-balance">
              Saldo dompet kebaikan: Rp 1.000.000
            </p>
          </div>
        </div>
        <hr className="section-breaker" />
        <div className="user-info-container">
          <span className="user-name">Fillah Akbar Firdausyah</span>
          <span className="user-email">fillahfirdausyah22@gmail.com</span>
          <label htmlFor="donation-anonim">
            <span>Sembunyikan nama saya (donasi anonim)</span>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </label>
        </div>
        <p className="title-comment">Berdoa di donasi ini</p>
        <div className="comment-container">
          <textarea name="" placeholder="Tulis doa mu di sini"></textarea>
        </div>
        <div className="button-subtmit-container">
          <div className="button-submit-inner">
            <button>
              <span>Lanjutkan Pembayaran</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
