import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import "./style.css";

function CardLink({ data }) {
  const collected = data.collected;
  const goal = data.goal;

  const current = (collected / goal) * 100;

  return (
    <div className="card-link">
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
                <span>{data.collected}</span>
              </div>
              <div className="donation-dayleft">
                <span>{data.over}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLink;
