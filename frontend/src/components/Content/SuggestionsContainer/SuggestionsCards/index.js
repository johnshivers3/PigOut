import { NavLink } from "react-router-dom";
import "./SuggestionsCards.css";
export const SuggestionsCards = ({ business}) => {
  return (
    <div className="suggestions-cards">
      {/* SuggestionsCard */}
      <NavLink to={`/business/${business.id}`}>
        <h3>{business.name}</h3>
      </NavLink>
      <img
        alt="thumb"
        src={business.image_url}
        height="200px"
        width="200px"
      ></img>
    </div>
  );
};
export default SuggestionsCards;
