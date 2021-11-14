import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as mainActions from "./../../../store/main";
import * as searchActions from "./../../../store/search";

import "./BigCityBar.css";

export const BigCityBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getBigCity = async (pos) => {
    await dispatch(mainActions.locationAction(pos));

    await dispatch(searchActions.getResults("donuts", pos));
    history.push("/results");
  };

  return (
    <div className="big-city-bar">
      <div className="city-div">
        <h3 onClick={() => getBigCity({ lat: 37.7936467, lng: -122.3989378 })}>
          San Francisco
        </h3>
        <h3
          onClick={() =>
            getBigCity({ lat: 40.71031815, lng: -74.0049683704861 })
          }
        >
          New York
        </h3>
        <h3 onClick={() => getBigCity({ lat: 29.7559698, lng: -95.3573194 })}>
          Houston
        </h3>
        <h3 onClick={() => getBigCity({ lat: 34.043001, lng: -118.246633 })}>
          Los Angeles
        </h3>
        <h3 onClick={() => getBigCity({ lat: 41.8786351, lng: -87.6250549 })}>
          Chicago
        </h3>
        <h3
          onClick={() =>
            getBigCity({ lat: 39.9116647, lng: -75.2357076675119 })
          }
        >
          Philadelphia
        </h3>
        <h3 onClick={() => getBigCity({ lat: 47.620422, lng: -122.349358 })}>
          Seattle
        </h3>
      </div>
    </div>
  );
};
export default BigCityBar;
