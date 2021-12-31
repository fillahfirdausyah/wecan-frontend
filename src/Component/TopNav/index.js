import React from "react";
import "./style.css";

function TopNav({ children }) {
  return (
    <div className="top-nav">
      <header className="bg-primary">
        <div className="header-conten-wrapper">{children}</div>
      </header>
    </div>
  );
}

export default TopNav;
