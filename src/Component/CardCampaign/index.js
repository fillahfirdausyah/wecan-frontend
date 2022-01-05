import React from "react";
import "./style.css";

import Moment from "react-moment";
import "moment/locale/id";

import CurrencyFormat from "react-currency-format";
import ProgressBar from "@ramonak/react-progress-bar";

function CardCampaign({ data }) {
  let current = (data.collected / data.goal) * 100;
  let today = new Date();

  return (
    <>
      <div className="card-campaign">
        <figure>
          <div className="image-campaign-wrapper">
            <img
              src={`http://localhost:8000/image/campaign/${data.cover}`}
              alt=""
            />
          </div>
        </figure>
        <div className="info-campagin-content">
          <span className="title-campaign">{data.title}</span>
          <div className="info-fundraiser">
            <span>Sinergi Kebaikan Umat</span>
            <img
              src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
              alt=""
            />
          </div>
          <div className="info-progressbar-campaign">
            <ProgressBar
              completed={current}
              bgColor="#61dafb"
              customLabel=" "
              height="3px"
            />
          </div>
          <div className="list-count-campaign">
            <div className="dontation-collected">
              <span>Terkumpul</span>
              {/* <span className="balance">{data.collected}</span> */}
              <CurrencyFormat
                decimalSeparator={""}
                isNumericString={true}
                value={data.collected}
                displayType={"text"}
                thousandSeparator="."
                prefix={"Rp "}
                renderText={(value) => <span className="balance">{value}</span>}
              />
            </div>
            <div className="day-left-campaign">
              <span>Sisa hari</span>
              <span className="balance">
                {/* <strong>14</strong> */}
                <Moment diff={today} element="strong" unit="days" locale="id">
                  {data.over}
                </Moment>
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
