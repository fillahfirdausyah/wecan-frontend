import React from "react";
import "./style.css";

import Moment from "react-moment";
import "moment/locale/id";

import CurrencyFormat from "react-currency-format";

function CardDonationHistory({ data }) {
  return (
    <div className="donation-history-content">
      <img src={`http://localhost:8000/image/campaign/${data.cover}`} alt="" />
      <div className="campaign-detail">
        <span className="campaign-title">{data.title}</span>
        <div className="campaign-donation-date">
          {/* <span>07 Des 2021</span> */}
          <Moment element="span" fromNow locale="id">
            {data.created_at}
          </Moment>
          {/* <span className="donation-amount">{data.amount}</span> */}
          <CurrencyFormat
            decimalSeparator={""}
            isNumericString={true}
            value={data.amount}
            displayType={"text"}
            thousandSeparator="."
            prefix="Rp"
            renderText={(value) => (
              <span className="donation-amount">{value}</span>
            )}
          />
        </div>
      </div>
      <div className="donation-status">Berhasil</div>
    </div>
  );
}

export default CardDonationHistory;
