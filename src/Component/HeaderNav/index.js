import React from "react";
import "./style.css";

import { HiArrowLeft } from "react-icons/hi";

function HeaderNav({ title }) {
  return (
    <div className="header-nav">
      <button className="btn-back">
        <HiArrowLeft className="icon" />
      </button>
      <span>{title}</span>
    </div>
  );
}

export default HeaderNav;
