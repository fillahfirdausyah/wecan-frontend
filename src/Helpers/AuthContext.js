import React, { useContext, useState, createContext, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentToken, setCurrentToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    let theToken = localStorage.getItem("token");
    if (theToken == null) {
      setCurrentToken("");
    } else {
      setCurrentToken(theToken);
    }
  }, []);

  function login(token) {
    localStorage.setItem("token", token);
    setCurrentToken(token);
    setIsAuth(true);
  }

  const value = {
    login,
    currentToken,
    isAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
