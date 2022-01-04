import React from "react";
import "./style.css";

import { useHistory } from "react-router-dom";

import Moment from "react-moment";
import "moment/locale/id";

import CurrencyFormat from "react-currency-format";
import ProgressBar from "@ramonak/react-progress-bar";

function CardLink({ data }) {
  const current = (data.collected / data.goal) * 100;
  const today = new Date();
  const history = useHistory();

  const redirectTo = (url) => {
    history.push(`/campaign/${url}`);
  };

  return (
    <div className="card-link" onClick={() => redirectTo(data.url)}>
      <div className="wide-card-container">
        <div className="large-list-container">
          <figure className="large-list-figure">
            <img
              src={`http://localhost:8000/image/campaign/${data.cover}`}
              alt=""
            />
          </figure>
          <div className="large-list-content">
            <div className="large-list-title">
              <span>{data.title}</span>
            </div>
            <div className="large-list-progressbar">
              <ProgressBar
                completed={current}
                bgColor="#61dafb"
                customLabel=" "
                height="4px"
              />
            </div>
            <div className="large-list-count">
              <div className="donation-collected">
                <CurrencyFormat
                  decimalSeparator={""}
                  isNumericString={true}
                  value={data.collected}
                  displayType={"text"}
                  thousandSeparator="."
                  prefix={"Rp "}
                  renderText={(value) => <span>{value}</span>}
                />
              </div>
              <div className="donation-dayleft">
                <Moment diff={today} element="span" unit="days" locale="id">
                  {data.over}
                </Moment>
                <p>&nbsp;hari lagi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLink;
