import "./ResultsCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const ResultsCards = ({ business }) => {
  return (
    <div className="results-cards">
      <div className="results-cards-top">
        <h3>{business.name}</h3>
      </div>
      <div className="card-content">
        <img
          alt="thumb"
          src={business.image_url}
          className="card-image"
        ></img>
        <div className="card-content-info">
          <div className="card-content-info-div">
            <div className="business-rating">
              {
                <>
                  {" "}
                  <p>
                    {business.rating > 0 ? (
                      <FontAwesomeIcon
                        className="sug-review-star"
                        icon={faStar}
                      />
                    ) : null}
                  </p>
                  <p>
                    {business.rating > 1 ? (
                      <FontAwesomeIcon
                        className="sug-review-star"
                        icon={faStar}
                      />
                    ) : null}
                  </p>
                  <p>
                    {business.rating > 2 ? (
                      <FontAwesomeIcon
                        className="sug-review-star"
                        icon={faStar}
                      />
                    ) : null}
                  </p>
                  <p>
                    {business.rating > 3 ? (
                      <FontAwesomeIcon
                        className="sug-review-star"
                        icon={faStar}
                      />
                    ) : null}
                  </p>
                  <p>
                    {business.rating > 4 ? (
                      <FontAwesomeIcon
                        className="sug-review-star"
                        icon={faStar}
                      />
                    ) : null}
                  </p>
                </>
              }
            </div>
          </div>
          <div className="card-content-info-div">
            <p name="price">{business.price}</p>
          </div>
          <div className="card-content-info-div location">
            <p name="address">{business.location.display_address[0]}</p>
            <p name="address">{business.location.display_address[1]}</p>
            <p name="address">{business.location?.display_address[2]}</p>
          </div>
          <div className="card-content-info-div">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultsCards;
