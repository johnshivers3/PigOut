import { useState, useEffect } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import * as mockData from "../../../assets/SampleDonutData.json";

import "./ReviewPage.css";

export const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [answer, setAnswer] = useState("");
  const [draft, setDraft] = useState(true);
  const history = useHistory()

  const { businessId } = useParams();
  const business = mockData.businesses.find(
    (business) => business.id === businessId
  );
  // useEffect(()=>{},[rating,answer])
  const onSubmit = (e) => {
    e.preventDefault();
    setDraft(false);
    setAnswer("");
    setRating(0);
    history.push('/')
    console.log(rating, answer);
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
            <button
              type="button"
              value={1}
              className={+rating === 1 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              1
            </button>
            <button
              type="button"
              value={2}
              className={+rating === 2 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              2
            </button>
            <button
              type="button"
              value={3}
              className={+rating === 3 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              3
            </button>
            <button
              type="button"
              value={4}
              className={+rating === 4 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              4
            </button>
            <button
              type="button"
              value={5}
              className={+rating === 5 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
