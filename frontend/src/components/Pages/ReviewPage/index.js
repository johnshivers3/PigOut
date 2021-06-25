import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as mockData from "../../../assets/SampleDonutData.json";
import * as reviewActions from "../../../store/review";
import "./ReviewPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [answer, setAnswer] = useState("");
  const [draft, setDraft] = useState("true");
  const [thanks, setThanks] = useState(false);
  const [success, setSuccess] = useState("false");
  const [action, setAction] = useState("");
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const pastReview = useSelector((state) => state.review.selected);
  // const business = useSelector(state=>state.business.selected)
  const { businessId } = useParams();

  const business = mockData.businesses.find(
    (business) => business.id === businessId
  );

  useEffect(() => {
    if (sessionUser) {
      (async () => {
        await dispatch(reviewActions.getReview(sessionUser.id, businessId));
      })();
    }

    if (pastReview) {
      setRating(+pastReview.rating);
      setAnswer(pastReview.answer);
    }
  }, [businessId, sessionUser, dispatch]);

  useEffect(() => {
    if (draft === "false") {
      setThanks(true);
      // setAnswer("");
    }
  }, [thanks, draft]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "add") {
      setDraft("false");
      await reviewActions.addReview({
        userId: sessionUser.id,
        businessId,
        rating,
        answer,
        draft: false,
      });
    }
    if (action === "edit") {
      setDraft("false");
      await reviewActions.editReview({
        userId: sessionUser.id,
        businessId,
        rating,
        answer,
        draft: false,
        updatedAt: new Date(),
      });
      setSuccess("true");
    }
    if (action === "delete") {
      await reviewActions.deleteReview({ userId: sessionUser.id, businessId });
    }
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
        {!thanks ? (
          <h2>{`Let us know what you think of ${business.name}!`}</h2>
        ) : (
          <h2>{`Thanks for your review of ${business.name}!`}</h2>
        )}
        <form className="review-form" onSubmit={onSubmit}>
          <div className="rating-buttons">
            <div>
              <label htmlFor="rating">Rating:</label>
            </div>
            <button
              type="button"
              value={1}
              className={+rating >= 1 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button
              type="button"
              value={2}
              className={+rating >= 2 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button
              type="button"
              value={3}
              className={+rating >= 3 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button
              type="button"
              value={4}
              className={+rating >= 4 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button
              type="button"
              value={5}
              className={+rating === 5 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          </div>
          <div className="answer-div">
            <div>
              {success === "true" ? <h2>SUCCESS</h2> : null}
              <label htmlFor="answer">Tell us about your experience:</label>
            </div>
            <textarea
              placeholder="Did you PigOut?"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
            />
          </div>
          {!sessionUser && <h3>Sign up to leave a review!</h3>}
          {sessionUser && draft === "false" ? (
            <>
              <button
                className="review-edit-btn"
                onClick={() => setAction("edit")}
                type="submit"
              >
                Edit
              </button>
              <button
                className="review-edit-btn"
                onClick={() => setAction("delete")}
                type="submit"
              >
                Delete
              </button>
            </>
          ) : null}
          {sessionUser && draft === "true" ? (
            <button
              className="review-submit-btn"
              onClick={() => setAction("add")}
              type="submit"
            >
              Submit
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
