import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PreCategories } from "../PreCatgories";
import * as sessionActions from "../../../../store/session";
import * as searchActions from "../../../../store/search";
import * as mainActions from "../../../../store/main";

import Geocode from "react-geocode";

import "./SearchBar.css";


Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const currentLocation = useSelector((state) => state.session.location);
  const inputLocation = useSelector((state) => state.main.location);
  const searchResults = useSelector((state) => state.search.results);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchLocation !== "") {
      try {
        const response = await Geocode.fromAddress(searchLocation);
        const location = response.results[0].geometry.location;
        await dispatch(mainActions.locationAction(location));
        await dispatch(searchActions.getResults(searchQuery, location));
      } catch (error) {
        console.error(error);
      }
      history.push(`/results`);
    } else {
      await dispatch(
        mainActions.locationAction({
          lat: 39.739071,
          lng: -75.539787,
        })
      );

      await dispatch(
        searchActions.getResults(searchQuery, {
          lat: 39.739071,
          lng: -75.539787,
        })
      );
      history.push(`/results`);
    }
  };

  // const getLatLng = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await Geocode.fromAddress(searchLocation);
  //     const location = response.results[0].geometry.location;
  //     dispatch(mainActions.locationAction(location));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      Find Breakfast, brunch and, lunch near you!
      <div className="search-bar">
        <div>
          <label htmlFor="term">SEARCH</label>

          <input
            name="term"
            placeholder="Find somewhere to PigOut"
            defaultValue={searchQuery}
            onKeyPress={(e) => (e.key === "Enter" ? handleSearch(e) : null)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">LOCATION</label>

          <input
            name="location"
            placeholder="Enter Location"
            defaultValue={searchLocation}
            onKeyPress={(e) => (e.key === "Enter" ? handleSearch(e) : null)}
            onChange={(e) => setSearchLocation(e.target.value)}
          ></input>
          <button className="search-button" onClick={handleSearch}>
            <i className="fas fa-search" onClick={handleSearch}></i>
          </button>
          {/* <button className="location-button" onClick={getLatLng} type="button">
            <i className="fas fa-map-marker-alt"></i>
          </button> */}
        </div>
      </div>
      {/* <PreCategories /> */}
    </>
  );
};
