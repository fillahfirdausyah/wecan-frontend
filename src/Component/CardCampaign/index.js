import React, { useState } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";

import Moment from "react-moment";
import "moment/locale/id";

import CurrencyFormat from "react-currency-format";
import ProgressBar from "@ramonak/react-progress-bar";
import { Badge, Spinner } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";

function CardCampaign({ data }) {
  const current = (data.collected / data.goal) * 100;
  const today = new Date();
  const [isToggle, setIsToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = localStorage.getItem("token");

  const changeToggle = () => setIsToggle(!isToggle);

  const acceptCampaign = async () => {
    try {
      setIsLoading(true);
      await api.get(`/api/campaign/accept/${data.url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  return (
    <>
      <div className="card-campaign">
        <figure>
          <div className="image-campaign-wrapper">
            <img
              src={`https://api-wecan.herokuapp.com/image/campaign/${data.cover}`}
              alt=""
            />
          </div>
        </figure>
        <div className="info-campagin-content">
          <span className="title-campaign">
            <span className="title-wrapper">{data.title}</span>
            <Badge bg={data.status == "pending" ? "warning" : "success"}>
              {data.status}
            </Badge>
            {userInfo.role == "admin" ? (
              <div className="btn-action-wrapper">
                <BsThreeDotsVertical
                  className="btn-action"
                  onClick={changeToggle}
                />
                <div
                  className={
                    isToggle
                      ? "dropdown-btn-action"
                      : "dropdown-btn-action hidden"
                  }
                >
                  {isLoading ? (
                    <button
                      onClick={acceptCampaign}
                      className="btn btn-primary btn-sm w-100 mb-2"
                    >
                      <Spinner animation="border" size="sm" />
                    </button>
                  ) : (
                    <button
                      onClick={acceptCampaign}
                      className="btn btn-primary btn-sm w-100 mb-2"
                    >
                      Terima
                    </button>
                  )}
                  <button className="btn btn-danger btn-sm w-100">Tolak</button>
                </div>
              </div>
            ) : (
              ""
            )}
          </span>
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
