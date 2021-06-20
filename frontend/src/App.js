import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Header from "./components/Content/Header";
import { SplashHeader } from "./components/Content/SplashHeader";
import { SuggestionsContainer } from "./components/Content/SuggestionsContainer";
import { BigCityBar } from "./components/Content/BigCityBar";
import { HotContainer } from "./components/Content/HotContainer";
import { Footer } from "./components/Content/Footer";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <>
          <Navigation isLoaded={isLoaded} />
          <Header></Header>
          <SplashHeader />
          <SuggestionsContainer />
          <BigCityBar />
          <HotContainer />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
