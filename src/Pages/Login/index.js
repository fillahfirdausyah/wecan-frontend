import React, { useState } from "react";
import "./style.css";

import { useLocation, useHistory, Link } from "react-router-dom";
import { useAuth } from "../../Helpers/AuthContext";
import api from "../../Helpers/ApiEndpoint";

import { Spinner } from "react-bootstrap";
import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";

function LoginPage() {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const history = useHistory();

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const userData = {
        username,
        password,
      };

      let theData = await api.post("/api/login", userData);
      login(theData.data.token);
      history.push("/user");
    } catch (err) {
      setErr(true);
      setTimeout(() => setErr(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

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
          {err ? (
            <div className="alert alert-danger-custom" role="alert">
              Username/Email atau Password salah!
            </div>
          ) : (
            ""
          )}
          <form onSubmit={loginHandler}>
            <div className="login-form-wrapper">
              <div className="my-10">
                <div className="username-email position-relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="input-label">Username Atau Email</label>
                </div>
              </div>
              <div className="my-10">
                <div className="username-email position-relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="input-label">Password</label>
                </div>
              </div>
            </div>
            <div className="btn-login">
              {isLoading ? (
                <button className="btn btn-primary w-100">
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button className="btn btn-primary w-100">Masuk</button>
              )}
            </div>
            <p>Atau</p>
            <div className="btn-login">
              <Link to="/register" className="btn btn-info w-100">
                Daftar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
