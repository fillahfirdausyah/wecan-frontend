import React, { useContext, useState, createContext, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentToken, setCurrentToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    let theToken = localStorage.getItem("token");
    if (theToken == null) {
      setCurrentToken("");
    } else {
      setCurrentToken(theToken);
    }
  }, []);

  function login(token, userInfo) {
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setCurrentToken(token);
    setIsAuth(true);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setUserAuth({});
  }

  const value = {
    login,
    currentToken,
    isAuth,
    logout,
    userAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
