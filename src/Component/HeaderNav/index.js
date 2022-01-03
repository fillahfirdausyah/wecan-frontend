import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import { HiArrowLeft } from "react-icons/hi";

function HeaderNav({ title, campaignDetail }) {
  const history = useHistory();

  return (
    <>
      {campaignDetail ? (
        <>
          <div className="header-nav detail-campaign">
            <button onClick={(e) => history.goBack()} className="btn-back">
              <HiArrowLeft className="icon" />
            </button>
            <span className="detail-campaign">{title}</span>
          </div>
        </>
      ) : (
        <>
          <div className="header-nav">
            <button onClick={(e) => history.goBack()} className="btn-back">
              <HiArrowLeft className="icon" />
            </button>
            <span>{title}</span>
          </div>
        </>
      )}
    </>
  );
}

export default HeaderNav;
