import { set } from "js-cookie";
import { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import * as mockData from "../../../assets/SampleDonutData.json";

import "./ReviewPage.css";

export const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [answer, setAnswer] = useState("");
  const [draft, setDraft] = useState(true);

  const { businessId } = useParams();
  const business = mockData.businesses.find(
    (business) => business.id === businessId
  );
  const onSubmit = (e) => {
    e.preventDefault();
    setDraft(false);
    console.log({
      rating,
      answer,
    });
    <Redirect to={`/`} />;
  };

  return (
    <div className="review-main">
      <div
        className="review-image-header"
        style={{ background: `url(${business.image_url}) center` }}
      >
        <div className="overlay">
          <h1>Review</h1>
        </div>
      </div>
      <div className="review-form-container">
        <h2>{`Let us know what you think of ${business.name}!`}</h2>
        <form className="review-form" onSubmit={onSubmit}>
          <div className="rating-buttons">
            <div>
              <label htmlFor="rating">Rating:</label>
            </div>
            <button value={1} onClick={(e) => setRating(e.target.value)}>
              1
            </button>
            <button value={2} onClick={(e) => setRating(e.target.value)}>
              2
            </button>
            <button value={3} onClick={(e) => setRating(e.target.value)}>
              3
            </button>
            <button value={4} onClick={(e) => setRating(e.target.value)}>
              4
            </button>
            <button value={5} onClick={(e) => setRating(e.target.value)}>
              5
            </button>
          </div>
          <div className="answer-div">
            <div>
              <label htmlFor="answer">Tell us about your experience:</label>
            </div>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
            />
          </div>
          <div></div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
