import React from "react";
import "./style.css";

import { useAuth } from "../../Helpers/AuthContext";
import { useHistory } from "react-router-dom";

import CurrencyFormat from "react-currency-format";

import { FaChevronRight } from "react-icons/fa";

function MenuItem({ children, title, wallet, data, isLogout }) {
  const { logout } = useAuth();
  const history = useHistory();

  const logOut = () => {
    logout();
    history.push("/");
  };

  return (
    <>
      {isLogout ? (
        <div className="menu-item" onClick={logOut}>
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
      ) : (
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
      )}
    </>
  );
}

export default MenuItem;
