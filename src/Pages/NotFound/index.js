import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

import TopNav from "../../Component/TopNav";
import Search from "../../Component/Search";

function NotFoundPage() {
  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <Search />
      </TopNav>
      <div className="main-page-wrapper not-found">
        <div className="not-found-iamge-container">
          <img src="https://kitabisa.com/images/error-locker.svg" alt="" />
        </div>
        <h3>Maaf, halaman tidak ditemukan</h3>
        <p>Halaman yang anda cari tidak ditemukan</p>
        <Link className="btn btn-outline-primary w-100" to="/">
          Beranda
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
