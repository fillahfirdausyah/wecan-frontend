import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    let theToken = localStorage.getItem("token");
    if (theToken !== null) {
      setToken(theToken);
    } else {
      setToken(null);
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token !== null) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
