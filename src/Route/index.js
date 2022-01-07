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
        <Route path="/admin" exact>
          <AdminPanelpage />
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
        <Route path="/make/campaign" exact>
          <MakeCampaignPage />
        </Route>
        <Route path="/campaign/:name" exact>
          <CampaignDetailPage />
        </Route>
        <Route path="/wallet" exact>
          <WalletPage />
        </Route>
        <Route path="/wallet/Make" exact>
          <MakeWalletpage />
        </Route>
        <Route path="/wallet/topup" exact>
          <TopupWalletPage />
        </Route>
        <ProtectedRoute
          path="/campaign/:name/donation"
          component={DonationPage}
        />
        <ProtectedRoute path="/user" component={UserPage} />
        <ProtectedRoute path="/my-campaign" component={MyCampaignPage} />
        <ProtectedRoute path="/my-donations" component={DonationHistoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
