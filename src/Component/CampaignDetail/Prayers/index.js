import React from "react";
import "./style.css";

import Moment from "react-moment";
import "moment/locale/id";

import { AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";

function CardPyrayers({ data }) {
  return (
    <div>
      <div className="card-prayers-container">
        <div>
          <div className="card-prayers-header">
            <figure>
              <img
                src="https://assets.kitabisa.cc/images/icons/icon_anonymous-user.png"
                alt=""
              />
            </figure>
            <div className="card-prayers-user-info">
              <p>{data.username}</p>
              <div className="card-prayers-user-subinfo">
                <Moment element="span" fromNow locale="id">
                {data.created_at}
                </Moment>
                {/* <span>42 menit yang lalu</span> */}
              </div>
            </div>
          </div>
          <div className="card-prayers-content">
            <p className="card-prayers-body">{data.content}</p>
            <p className="card-prayers-counter">
              <span>10 orang </span>
              mengaminkan doa ini
            </p>
          </div>
        </div>
        <div>
          <hr />
          <div className="card-prayers-action-container">
            <div className="card-prayers-action-button">
              <AiOutlineHeart />
              <p>Amin</p>
            </div>
            <div className="card-prayers-action-button">
              <RiShareForwardFill />
              <p>Bagikan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPyrayers;
