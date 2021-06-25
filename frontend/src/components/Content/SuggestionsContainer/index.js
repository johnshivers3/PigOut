import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { SuggestionsCards } from "./SuggestionsCards";
import * as mockData from "../../../assets/SampleDonutData.json";
import * as businessActions from "../../../store/business";

import "./SuggestionsContainer.css";



export const SuggestionsContainer = () => {
  const dispatch = useDispatch();

  const handleClick = async (id) => {
     dispatch(businessActions.getBusiness(id));
  };
  return (
    <>
      <div className="suggestions-container">
        {mockData.businesses.map((business) => (
          <div key={business.id} className="cards">
            <NavLink
              onClick={() => handleClick(business.id)}
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
