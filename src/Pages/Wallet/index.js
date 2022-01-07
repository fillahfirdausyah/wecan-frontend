import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";
import { useHistory, Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import Moment from "react-moment";
import "moment/locale/id";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";
import { Badge } from "react-bootstrap";

function WalletPage() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [wallet, setWallet] = useState({});
  const [trsaction, setTransaction] = useState([]);

  useEffect(() => {
    const getWallet = async () => {
      try {
        let res = await api.get("/api/wallet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (Object.keys(res.data).length > 0) {
          setWallet(res.data);
        } else {
          history.push("/wallet/make");
        }
      } catch (err) {
        console.log(err);
      }
    };

    const getTopupTransaction = async () => {
      try {
        let res = await api.get("/api/topup/transaction", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (Object.keys(res.data).length > 0) {
          setTransaction(res.data);
        } else {
          console.log("tidak ada transaksi");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getWallet();
    getTopupTransaction();
  }, []);

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Dompet Kebaikan" />
      </TopNav>
      <div className="main-page-wrapper wallet-page">
        <div className="wallet-amount-container">
          <div className="wrapper">
            <p>Total Saldo</p>
          </div>
          <div className="wrapper">
            <span>
              <sup>Rp</sup>
            </span>
            <span className="saldo">
              <CurrencyFormat
                decimalSeparator={""}
                isNumericString={true}
                value={wallet.balance}
                displayType={"text"}
                thousandSeparator="."
                renderText={(value) => <>{value}</>}
              />
            </span>
          </div>
        </div>

        <div className="wallet-box-container">
          <Link to="/wallet/topup" className="btn btn-primary">
            Isi Saldo
          </Link>
        </div>
        <hr className="section-breaker" />
        <div className="transaction-history-wrapper">
          {trsaction.map((x) => (
            <div key={x.id}>
              <CardTransaction data={x} />
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

function CardTransaction({ data }) {
  return (
    <div className="card-wallet-transaction">
      <div className="left-section">
        <div className="top-section">
          <span className="transaction-title">Topup</span>
          <Badge
            bg={data.status == "pending" ? "warning" : "success"}
            style={{ color: "white" }}
          >
            {data.status}
          </Badge>
        </div>
        {/* <span className="wallet-transaction-date">4 jan 2022</span> */}
        <Moment element="span" fromNow locale="id">
          {data.created_at}
        </Moment>
      </div>
      <div className="right-section">
        <span>
          <sup>+ Rp </sup>
          <CurrencyFormat
            decimalSeparator={""}
            isNumericString={true}
            value={data.amount}
            displayType={"text"}
            thousandSeparator="."
            renderText={(value) => <>{value}</>}
          />
        </span>
      </div>
    </div>
  );
}

export default WalletPage;
