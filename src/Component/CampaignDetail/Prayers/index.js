import React from "react";
import "./style.css";

import { AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";

function CardPyrayers() {
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
              <p>Anonim</p>
              <div className="card-prayers-user-subinfo">
                <span>42 menit yang lalu</span>
              </div>
            </div>
          </div>
          <div className="card-prayers-content">
            <p className="card-prayers-body">
              semoga bermanfaat dan semoga saya diberi kelancaran dan kemudahan
              dalam proses pemberkasan cpns. aamiin
            </p>
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
