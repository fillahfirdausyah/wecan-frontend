import React from "react";
import "./style.css";

function TopNav({ children }) {
  return (
    <div className="top-nav">
      <header className="bg-primary">{children}</header>
    </div>
  );
}

export default TopNav;
