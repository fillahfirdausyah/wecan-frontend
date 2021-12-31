import React from "react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import "./style.css";

import TopNav from "../TopNav";

function Search() {
  return (
    <TopNav>
      <div className="search-wrapper">
        <div className="top-nav-brand">
          <Link to="/">
            <img
              src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png"
              alt=""
            />
          </Link>
        </div>
        <div className="top-nav-search">
          {/* <div className="input-search-wrapper"> */}
          <input type="text" placeholder="Cari Campaign" />
          <HiSearch className="input-search-icon" />
          {/* </div> */}
        </div>
      </div>
    </TopNav>
  );
}

export default Search;
