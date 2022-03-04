import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import Fleet from "containers/Fleet/Fleet";
import Page404 from "containers/Page404/Page404";
import ListingStayMapPage from "containers/ListingStayPage/ListingStayMapPage";
import ListingStayDetailPage from "containers/ListingDetailPage/ListingStayDetailPage";
import Homepage from "containers/Homepage/Homepage";
import ListingCarDetailPage from "containers/ListingDetailPage/ListingCarDetailPage";
import CheckOutPage from "containers/CheckOutPage/CheckOutPage";
import PayPage from "containers/PayPage/PayPage";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageHome2 from "containers/Fleet/PageHome2";
import SiteHeader from "containers/SiteHeader";

export const pages: Page[] = [
  { path: "/", exact: true, component: Homepage },
  { path: "/our-fleet", exact: true, component: Fleet },
  { path: "/home-2", component: PageHome2 },
  { path: "/available-cars", component: ListingStayMapPage },
  { path: "/terms-conditions", component: ListingStayDetailPage },
  { path: "/home", component: Homepage },
  { path: "/rent-car", component: ListingCarDetailPage },
  { path: "/checkout", component: CheckOutPage },
  { path: "/pay-done", component: PayPage },
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  //
];

const Routes = () => {
  return (
    <BrowserRouter basename="/chisfis">
      <ScrollToTop />
      <SiteHeader />

      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
