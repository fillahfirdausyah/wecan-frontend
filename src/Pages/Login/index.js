import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";

function LoginPage() {
  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Masuk" />
      </TopNav>
      <div className="main-page-wrapper login-page">
        <div className="px-8 py-6">
          <div>
            <h3 className="login-caption">
              Masuk untuk berdonasi dan mengakses fitur lainya
            </h3>
          </div>
          <div className="login-form-wrapper">
            <form>
              <div className="my-10">
                <div className="username-email position-relative">
                  <input type="text" />
                  <label className="input-label">Username Atau Email</label>
                </div>
              </div>
              <div className="my-10">
                <div className="username-email position-relative">
                  <input type="password" />
                  <label className="input-label">Password</label>
                </div>
              </div>
            </form>
          </div>
          <div className="btn-login">
            <button className="btn btn-primary w-100">Masuk</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
