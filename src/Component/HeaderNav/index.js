import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import { HiArrowLeft } from "react-icons/hi";

function HeaderNav({ title }) {
  const history = useHistory();

  return (
    <div className="header-nav">
      <button onClick={(e) => history.goBack()} className="btn-back">
        <HiArrowLeft className="icon" />
      </button>
      <span>{title}</span>
    </div>
  );
}

export default HeaderNav;
