import { useState, useEffect } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as mockData from "../../../assets/SampleDonutData.json";
import { csrfFetch } from "../../../store/csrf";
import * as reviewActions from "../../../store/review";
import "./ReviewPage.css";

export const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [answer, setAnswer] = useState("");
  const [draft, setDraft] = useState(true);
  const [thanks, setThanks] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const { businessId, action } = useParams();

  const business = mockData.businesses.find(
    (business) => business.id === businessId
  );

  // const prevReview = async () => {
  //   if (action === "edit") {
  //     const dbReview = await reviewActions.getReview({
  //       userId: +sessionUser.id,
  //       businessId,
  //     });
  //     if (dbReview) {
  //       setRating(dbReview.rating);
  //       setAnswer(dbReview.answer);
  //     }
  //   }
  // };
  useEffect(() => {
    if (!draft) {
      setThanks(true);
      setAnswer('')
    }
  }, [thanks, draft]);
  // useEffect(() => {
  //   const prevReview = async () => {
  //     if (action === "edit") {
  //       const dbReview = await reviewActions.getReview({
  //         userId: +sessionUser.id,
  //         businessId,
  //       });
  //       if (dbReview) {
  //         setRating(dbReview.rating);
  //         setAnswer(dbReview.answer);
  //       }
  //     }
  //   };
  // }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "add") {
      setDraft(false);
      const response = await reviewActions.addReview({
        userId: sessionUser.id,
        businessId,
        rating,
        answer,
        draft: false,
      });
    }
    if (action === "edit") {
      setDraft(false);
      const response = await reviewActions.editReview({
        userId: sessionUser.id,
        businessId,
        rating,
        answer,
        draft: false,
        updatedAt: new Date(),
      });
      console.log(response);
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
            <p>Draft:{`${draft}`}</p>
            <div>
              <label htmlFor="rating">Rating:</label>
            </div>
            <button
              type="button"
              value={1}
              className={+rating >= 1 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              1
            </button>
            <button
              type="button"
              value={2}
              className={+rating >= 2 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              2
            </button>
            <button
              type="button"
              value={3}
              className={+rating >= 3 ? "selected" : ""}
              onClick={(e) => setRating(e.target.value)}
            >
              3
            </button>
            <button
              type="button"
              value={4}
              className={+rating >= 4 ? "selected" : ""}
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
          {action === "edit" ? (
            <button className="review-edit-btn" type="submit">
              Edit
            </button>
          ) : (
            <button className="review-submit-btn" type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
