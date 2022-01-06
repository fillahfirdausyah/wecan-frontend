import React, { useState } from "react";

import api from "../../Helpers/ApiEndpoint";
import { useHistory } from "react-router-dom";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import { Spinner } from "react-bootstrap";

function RegisterPage() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await api.post("/api/register", data);
      history.push("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Daftar" />
      </TopNav>
      <div className="main-page-wrapper">
        <div className="px-8 py-6">
          <div>
            <h3 className="login-caption">Daftar untuk memulai donasi</h3>
          </div>
          <form onSubmit={register}>
            <div className="login-form-wrapper">
              <div className="my-10">
                <div className="username-email position-relative">
                  <input
                    autoComplete="off"
                    onChange={handleChange}
                    name="name"
                    value={data.name}
                    required
                    type="text"
                  />
                  <label className="input-label">Nama Lengkap</label>
                </div>
              </div>
              <div className="my-10">
                <div className="username-email position-relative">
                  <input
                    autoComplete="off"
                    onChange={handleChange}
                    name="username"
                    value={data.username}
                    required
                    type="text"
                  />
                  <label className="input-label">Username</label>
                </div>
              </div>
              <div className="my-10">
                <div className="username-email position-relative">
                  <input
                    autoComplete="off"
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                    required
                    type="email"
                  />
                  <label className="input-label">Email</label>
                </div>
              </div>
              <div className="my-10">
                <div className="username-email position-relative">
                  <input
                    autoComplete="off"
                    onChange={handleChange}
                    name="password"
                    value={data.password}
                    required
                    type="password"
                  />
                  <label className="input-label">Password</label>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div className="btn-login">
                <button className="btn btn-primary w-100">
                  <Spinner animation="border" role="status" size="sm" />
                </button>
              </div>
            ) : (
              <div className="btn-login">
                <button className="btn btn-primary w-100">Daftar</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
