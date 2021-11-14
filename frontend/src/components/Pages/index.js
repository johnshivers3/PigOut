import React from "react";

import "./Pages.css";
import { BusinessPage } from "./BusinessPage";
import { ProfilePage } from "./ProfilePage";
import { Switch, Route } from "react-router-dom";
export const Pages = () => {
  return (
    <>
      <div id="pages-container">
        <Switch>
          <Route path="/business/:yelpId/">
            <BusinessPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route>
            <h1>Not Home</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Pages;
