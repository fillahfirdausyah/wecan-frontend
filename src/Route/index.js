import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
