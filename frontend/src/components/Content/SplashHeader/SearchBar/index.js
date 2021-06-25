import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PreCategories } from "../PreCatgories";
import * as sessionActions from "../../../../store/session";

import "./SearchBar.css";
export const SearchBar = () => {
  const [myLocation, setMyLocation] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (myLocation === true) dispatch(sessionActions.getLocation());
  }, [myLocation, dispatch]);
  return (
    <>
      {/* <h2>Search bar</h2> */}
      <div className="search-bar">
        <div>
          <label htmlFor="term">CATEGORY</label>
          <input name="term" />
        </div>
        <div>
          <label htmlFor="location">LOCATION</label>

          <input name="location" />
          <button onClick={() => setMyLocation(true)} type="button">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </div>
      </div>
      <PreCategories />
    </>
  );
};
