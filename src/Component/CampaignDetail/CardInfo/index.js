import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";
import CurrencyFormat from "react-currency-format";
import Moment from "react-moment";
import "moment/locale/id";

function CardInfo({ data }) {
  const presentage = (data.collected / data.goal) * 100;
  return (
    <div className="card-campaign-detail-info">
      <div className="hero-image-container">
        <img
          src={`http://localhost:8000/image/campaign/${data.cover}`}
          alt=""
        />
      </div>
      <div className="content-wrapper">
        <h1>{data.title}</h1>
        <div className="donation">
          <span className="donation-received">
            <CurrencyFormat
              decimalSeparator={""}
              isNumericString={true}
              value={data.collected}
              displayType={"text"}
              thousandSeparator="."
              prefix={"Rp "}
              renderText={(value) => <>{value}</>}
            />
          </span>
          <div className="donation-goal">
            Terkumpul dari{" "}
            <CurrencyFormat
              decimalSeparator={""}
              isNumericString={true}
              value={data.goal}
              displayType={"text"}
              thousandSeparator="."
              prefix={"Rp "}
              renderText={(value) => <>{value}</>}
            />
          </div>
        </div>
        <div className="progressbar">
          <ProgressBar
            completed={presentage}
            bgColor="#61dafb"
            customLabel=" "
            height="4px"
          />
        </div>
        <div className="info">
          <span>
            <strong>2170</strong> Donasi
          </span>
          <div>
            <Moment diff={new Date()} element="strong" unit="days" locale="id">
              {data.over}
            </Moment>
            <span>&nbsp; hari lagi</span>
          </div>
        </div>
        <div className="button-container">
          <Link
            to={`/campaign/${data.url}/donation`}
            className="btn btn-donate-now w-100"
          >
            Donasi Sekarang!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
