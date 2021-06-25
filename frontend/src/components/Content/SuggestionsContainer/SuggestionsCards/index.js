import "./SuggestionsCards.css";

export const SuggestionsCards = ({ business }) => {
  return (
    <div className="suggestions-cards">
      <div className="suggestions-cards-top">
        <h3>{business.name}</h3>
      </div>
      <div className="card-content">
        <img
          alt="thumb"
          src={business.image_url}
          height="200px"
          width="200px"
        ></img>
        <div className="card-content-info">
          <p>Rating: {business.rating}</p>
          <p>Price: {business.price}</p>
          <p>Location: {business.location.display_address}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default SuggestionsCards;
