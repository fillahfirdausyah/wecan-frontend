import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  CampaignPage,
  UserPage,
  MakeCampaignPage,
  MyCampaignPage,
  DonationHistoryPage,
  CampaignDetailPage,
  DonationPage,
  NotFoundPage,
  RegisterPage,
  WalletPage,
  MakeWalletpage,
  TopupWalletPage,
  AdminPanelpage,
  AboutUsPage,
} from "../Pages/index";

import ProtectedRoute from "./ProtectedRoute";
import ScrollToTop from "./ScrollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/aboutus" exact>
          <AboutUsPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/campaign/all" exact>
          <CampaignPage />
        </Route>
        <Route path="/campaign/:name" exact>
          <CampaignDetailPage />
        </Route>
        <ProtectedRoute
          path="/campaign/:name/donation"
          component={DonationPage}
        />
        <ProtectedRoute path="/user" component={UserPage} />
        <ProtectedRoute path="/make/campaign" component={MakeCampaignPage} />
        <ProtectedRoute path="/my-campaign" component={MyCampaignPage} />
        <ProtectedRoute path="/my-donations" component={DonationHistoryPage} />
        <ProtectedRoute path="/admin" component={AdminPanelpage} />
        <ProtectedRoute path="/wallet/topup" component={TopupWalletPage} />
        <ProtectedRoute path="/wallet/make" component={MakeWalletpage} />
        <ProtectedRoute path="/wallet" component={WalletPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
