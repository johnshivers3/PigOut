import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as searchActions from "./store/search";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import Header from "./components/Content/Header";
import { SplashHeader } from "./components/Content/SplashHeader";
import { SuggestionsContainer } from "./components/Content/SuggestionsContainer";
// import { BigCityBar } from "./components/Content/BigCityBar";
// import { HotContainer } from "./components/Content/HotContainer";
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
    if (position !== null) {
      return dispatch(searchActions.getSuggestions(position));
    } else {
      return dispatch(
        searchActions.getSuggestions({
          latitude: 39.7895732,
          longitude: -75.681463,
        })
      );
    }
  }, [dispatch, position]);
  // useEffect(() => {
  //   return async () =>
  //     await navigator.permissions.query({ name: "geolocation" });
  // }, []);
  return (
    <>
      {isLoaded && (
        <>
          <Navigation isLoaded={isLoaded} />
          {/* <Header /> */}
          <Switch>
            <Route exact path="/">
              <SplashHeader />
              <SuggestionsContainer
                suggestions={
                  suggestions !== null ? suggestions : mockData.businesses
                }
              />
              {/* <BigCityBar />
              <HotContainer /> */}
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
