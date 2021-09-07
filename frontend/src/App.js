import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { SplashHeader } from "./components/Content/SplashHeader";
import { SuggestionsContainer } from "./components/Content/SuggestionsContainer";
import { ResultsContainer } from "./components/Content/ResultsContainer";
import { Footer } from "./components/Content/Footer";
import { Pages } from "./components/Pages";
import mockData from "./assets/SampleDonutData.json";

function App() {
  const dispatch = useDispatch();
  let position = useSelector((state) => state.session.location);
  const suggestions = useSelector((state) => state.search.suggestions);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch, position]);

  return (
    <>
      {isLoaded && (
        <>
          <Navigation isLoaded={isLoaded} />

          <Switch>
            <Route exact path="/">
              <SplashHeader />
              <SuggestionsContainer
                suggestions={
                  suggestions !== null ? suggestions : mockData.businesses
                }
              />
            </Route>
            <Route path="/results">
              <SplashHeader />
              <ResultsContainer />
            </Route>
            <Route>
              <Pages />
            </Route>
            <Route>Page Not Found</Route>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
