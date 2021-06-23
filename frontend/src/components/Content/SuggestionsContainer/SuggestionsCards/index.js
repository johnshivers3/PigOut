import { NavLink } from "react-router-dom";
import "./SuggestionsCards.css";
export const SuggestionsCards = ({ business,id }) => {
  return (
    <div className="suggestions-cards">
      {/* SuggestionsCard */}
      <NavLink to={`/api/business/${id}`}>
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
