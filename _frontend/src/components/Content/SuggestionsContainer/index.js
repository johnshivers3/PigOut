
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SuggestionsCards } from "./SuggestionsCards";
import * as searchActions from "../../../store/search";
import * as businessActions from "../../../store/business";

import "./SuggestionsContainer.css";

export const SuggestionsContainer = ({ suggestions }) => {
  const dispatch = useDispatch();
  let position = useSelector((state) => state.session.location);

  useEffect(() => {
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
  const handleClick = async (id) => {
    await dispatch(businessActions.getBusiness(id));
  };
  return (
    <>
      <h1 id="suggestion-heading">Try these places out!</h1>
      <div className="suggestions-container">
        {suggestions?.map((business) => (
          <div key={business.id} className="cards">
            <Link
              onClick={async () => await handleClick(business.id)}
              to={`/business/${business.id}`}
            >
              <SuggestionsCards business={business} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default SuggestionsContainer;
