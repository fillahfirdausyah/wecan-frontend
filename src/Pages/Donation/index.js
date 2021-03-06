import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";
import { useParams, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { Spinner } from "react-bootstrap";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";

function DonationPage() {
  let token = localStorage.getItem("token");
  const history = useHistory();
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [wallet, setWallet] = useState({});

  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        setIsLoading(true);
        let userResult = await api.get("/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(userResult.data);
        let walletResult = await api.get("/api/wallet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWallet(walletResult.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getDataFromApi();
  }, []);

  const payDonation = async (e) => {
    e.preventDefault();
    const data = {
      amount,
      content: comment,
    };
    try {
      setIsLoading(true);
      let res = await api.post(`/api/campaign/donation/pay/${name}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.status == "success") {
        history.push(`/campaign/${name}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Darurat Bencana! Sedekah bantu Warga di Aceh" />
      </TopNav>
      <div className="main-page-wrapper donation-amount">
        <form onSubmit={payDonation}>
          <div className="donation-amount-container">
            <div className="donation-amount-wrapper">
              <p>Masukan Nominal Donasi</p>
              <div className="donation-input-container">
                <span>Rp</span>
                <div className="donation-input-form">
                  <input
                    value={amount}
                    type="number"
                    className="donation-input"
                    placeholder="0"
                    name="amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
              <p className="wallet-balance">
                Saldo dompet kebaikan:{" "}
                {isLoading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  <CurrencyFormat
                    decimalSeparator={""}
                    isNumericString={true}
                    value={wallet.balance}
                    displayType={"text"}
                    thousandSeparator="."
                    prefix={"Rp "}
                    renderText={(value) => <>{value}</>}
                  />
                )}
              </p>
            </div>
          </div>
          <hr className="section-breaker" />
          <div className="user-info-container">
            <span className="user-name">{userData.name}</span>
            <span className="user-email">{userData.email}</span>
            <label htmlFor="donation-anonim">
              <span>Sembunyikan nama saya (donasi anonim)</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </label>
          </div>
          <p className="title-comment">Berdoa di donasi ini</p>
          <div className="comment-container">
            <textarea
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tulis doa mu di sini"
            ></textarea>
          </div>
          <div className="button-subtmit-container">
            <div className="button-submit-inner">
              {amount > wallet.balance ? (
                <button disabled>
                  <span>Saldo anda tidak cukup</span>
                </button>
              ) : (
                <button>
                  {isLoading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    <span>Lanjutkan Pembayaran</span>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationPage;
