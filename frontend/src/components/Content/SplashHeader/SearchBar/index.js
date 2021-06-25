import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreCategories } from "../PreCatgories";
import * as sessionActions from "../../../../store/session";
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
            <input name="term" placeholder="Find somewhere to PigOut" />
          {/* </Autocomplete> */}
        </div>
        <div>
          <label htmlFor="location">LOCATION</label>

          <input name="location" placeholder="Hockessin, DE" />
          <button
            onClick={(e) => {
              e.preventDefault();
              setMyLocation(true);
            }}
            type="button"
          >
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </div>
      </div>
      <PreCategories />
    </>
  );
};
