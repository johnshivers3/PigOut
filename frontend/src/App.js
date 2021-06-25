import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as searchActions from "./store/search"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import Header from "./components/Content/Header";
import { SplashHeader } from "./components/Content/SplashHeader";
import { SuggestionsContainer } from "./components/Content/SuggestionsContainer";
// import { BigCityBar } from "./components/Content/BigCityBar";
// import { HotContainer } from "./components/Content/HotContainer";
import { Footer } from "./components/Content/Footer";
import {Pages} from './components/Pages'

function App() {
  const dispatch = useDispatch();
  let suggestions;
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <>
          <Navigation isLoaded={isLoaded} />
          {/* <Header /> */}
          <Switch>
            <Route exact path="/">
              <SplashHeader />
              <SuggestionsContainer suggestions={suggestions}/>
              {/* <BigCityBar />
              <HotContainer /> */}
            </Route>
            <Route>
              <Pages/>
            </Route>
            <Route>
              Page Not Found
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
