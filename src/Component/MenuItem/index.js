import React from "react";
import "./style.css";

import { FaChevronRight } from "react-icons/fa";

function MenuItem({ children, title, wallet }) {
  return (
    <div className="menu-item">
      {/* <IoWalletOutline className="menu-item-icon" /> */}
      {children}
      <span className="menu-name">{title}</span>
      {wallet ? <span className="wallet-balance">Rp 1.000.000</span> : ""}
      <div className="btn-more">
        <FaChevronRight className="icon-more" />
      </div>
    </div>
  );
}

export default MenuItem;
