import React, { useState } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";

import { Spinner } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";
import CurrencyFormat from "react-currency-format";

function CardTopup({ data }) {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
  const acceptTopup = async () => {
    try {
      setIsLoading(true);
      let result = await api.get(
        `/api/topup/accept/${data.id}/${data.user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className="card-topup">
      <div className="user-info-wrapper">
        <h4 className="user-name">{data.name}</h4>
        <span className="topup-nominal">
          <sup>+Rp </sup>
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
      <div className="btn-action-wrapper">
        {isLoading ? (
          <button className="btn btn-primary">
            <Spinner animation="border" size="sm" />
          </button>
        ) : (
          <button onClick={acceptTopup} className="btn btn-primary">
            <BiCheck />
          </button>
        )}
      </div>
    </div>
  );
}

export default CardTopup;
