import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { SuggestionsCards } from "./SuggestionsCards";
import * as mockData from "../../../assets/SampleDonutData.json";
import * as businessActions from "../../../store/business";

import "./SuggestionsContainer.css";

export const SuggestionsContainer = ({ suggestions }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, [suggestions]);
  const handleClick = async (id) => {
    await dispatch(businessActions.getBusiness(id));
  };
  return (
    <>
      <h1 id='suggestion-heading'>Try these places out!</h1>
      <div className="suggestions-container">
        {suggestions?.map((business) => (
          <div key={business.id} className="cards">
            <NavLink
              onClick={async () => await handleClick(business.id)}
              to={`/business/${business.id}`}
            >
              <SuggestionsCards business={business} />
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
export default SuggestionsContainer;
