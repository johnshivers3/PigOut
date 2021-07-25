import "./SuggestionsCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
          <div className="card-content-info-div">
            <div className="business-rating">
              <em>Rating:</em>
              {
                <>
                  {" "}
                  <p>
                    {business.rating > 0 ? (
                      <FontAwesomeIcon className="sug-review-star" icon={faStar} />
                    ) : null}
                  </p>
                  <p>
                    {business.rating > 1 ? (
                      <FontAwesomeIcon className="sug-review-star" icon={faStar} />
                    ) : null}
                  </p>
                  <p>
                    {business.rating > 2 ? (
                      <FontAwesomeIcon className="sug-review-star" icon={faStar} />
                    ) : null}
                  </p>
                  <p>
                    {business.rating > 3 ? (
                      <FontAwesomeIcon className="sug-review-star" icon={faStar} />
                    ) : null}
                  </p>
                  <p>
                    {business.rating > 4 ? (
                      <FontAwesomeIcon className="sug-review-star" icon={faStar} />
                    ) : null}
                  </p>
                </>
              }
            </div>
          </div>
          <div className="card-content-info-div">
            <label htmlFor="price">Price:</label>
            <p name="price">{business.price}</p>
          </div>
          <div className="card-content-info-div location">
            <label htmlFor="address">Location: </label>
            <p name="address">{business.location.display_address}</p>
          </div>
          <div className="card-content-info-div">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuggestionsCards;
