import React from "react";
import "./style.css";

import CurrencyFormat from "react-currency-format";

import { FaChevronRight } from "react-icons/fa";

function MenuItem({ children, title, wallet, data }) {
  return (
    <div className="menu-item">
      {/* <IoWalletOutline className="menu-item-icon" /> */}
      {children}
      <span className="menu-name">{title}</span>
      {/* {wallet ? <span className="wallet-balance">{data.balance}</span> : ""} */}
      {wallet ? (
        <CurrencyFormat
          decimalSeparator={""}
          isNumericString={true}
          value={data.balance}
          displayType={"text"}
          thousandSeparator="."
          prefix={"Rp "}
          renderText={(value) => (
            <span className="wallet-balance">{value}</span>
          )}
        />
      ) : (
        ""
      )}
      <div className="btn-more">
        <FaChevronRight className="icon-more" />
      </div>
    </div>
  );
}

export default MenuItem;
