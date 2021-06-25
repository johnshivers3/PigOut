import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreCategories } from "../PreCatgories";
import * as sessionActions from "../../../../store/session";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Autocomplete } from "@react-google-maps/api";

import "./SearchBar.css";
export const SearchBar = () => {
  const [myLocation, setMyLocation] = useState(false);
  const currentLocation = useSelector((state) => state.session.location);
  const dispatch = useDispatch();
  useEffect(() => {
    if (myLocation === true) dispatch(sessionActions.getLocation());
  }, [myLocation, dispatch]);
  return (
    <>
      <div className="search-bar">
        <div>
          <label htmlFor="term">SEARCH</label>
          {/* <Autocomplete
          apiKey={process.env.REACT_APP_GOOGLE_KEY}
          > */}
          <input name="term" placeholder="Find somewhere to PigOut"></input>

          {/* </Autocomplete> */}
        </div>
        <div>
          <label htmlFor="location">LOCATION</label>

          <input
            name="location"
            placeholder={myLocation ? "Current Location" : "Search by Location"}
          ></input>

          <button
            onClick={async (e) => {
              e.preventDefault();
              await setMyLocation(true);
            }}
            type="button"
          >
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <PreCategories />
    </>
  );
};
