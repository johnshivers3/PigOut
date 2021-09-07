import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Geocode from "react-geocode";

import { ResultsCards } from "./ResultsCards";

import * as businessActions from "../../../store/business";
import * as searchActions from "../../../store/search";

import "./ResultsContainer.css";

export const ResultsContainer = () => {
  const results = useSelector((state) => state.search.results);
  const query = useSelector((state) => state.search.query);
  const location = useSelector((state) => state.main.location);
  const [locationDisplay, setLocationDisplay] = useState()

  const dispatch = useDispatch();

  useEffect(() => {
    if (location)
      (async () => {
        const response = await Geocode.fromLatLng(location.lat, location.lng);
        setLocationDisplay(response.results[0]?.formatted_address)
      })();

  }, [location,locationDisplay]);

  const handleClick = async (id) => {
    await dispatch(businessActions.getBusiness(id));
  };
  return (
    <>
      <h1 id="suggestion-heading">Search Results {query ? `for '${query}'` : null}</h1>
      {location && <h1 id="suggestion-heading"> near {locationDisplay}</h1>}
      <div className="suggestions-container">
        {results?.map((business) => (
          <div key={business.id} className="cards">
            <Link
              onClick={async () => await handleClick(business.id)}
              to={`/business/${business.id}`}
            >
              <ResultsCards business={business} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default ResultsContainer;
