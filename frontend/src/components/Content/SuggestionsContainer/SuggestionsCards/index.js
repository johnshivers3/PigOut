import React from "react";

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
        <img className="card-image" alt="thumb" src={business.image_url}></img>
        <div className="card-content-info">
          <div className="card-content-info-div">
            {
              <div className="business-rating">
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
              </div>
            }
          </div>
          <div className="card-content-info-div">
            <p name="price">{business.price}</p>
          </div>
          <div className="card-content-info-div location">
            <p name="address">{business.location.display_address[0]}</p>
            <p name="address">{business.location.display_address[1]}</p>
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
