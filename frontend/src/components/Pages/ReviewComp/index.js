import { useState, useEffect } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as mockData from "../../../assets/SampleDonutData.json";
import * as reviewActions from "../../../store/review";

import "./ReviewComp.css";

import Icon from "../../Icon";
import star from '../../../assets/star.svg'

export const ReviewComp = () => {
  const [rating, setRating] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answerLimit, setAnswerLimit] = useState(false);
  const [draft, setDraft] = useState("true");
  const [thanks, setThanks] = useState(false);
  const [success, setSuccess] = useState("false");
  const [action, setAction] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const pastReview = useSelector((state) => state.review.selected);
  const business = useSelector((state) => state.business.selected);
  const businessId = business?.id;
  // const { businessId } = useParams();

  // const business = mockData.businesses.find(
  //   (business) => business.id === businessId
  // );

  useEffect(() => {
    if (sessionUser) {
      (async () => {
        await dispatch(reviewActions.getReview(sessionUser.id, businessId));
      })();
    }
    if (
      pastReview &&
      businessId === pastReview.businessId &&
      sessionUser?.id === pastReview.userId
    ) {
      setRating(+pastReview.rating);
      setAnswer(pastReview.answer);
    }
    // eslint-disable-next-line
  }, [businessId, sessionUser, dispatch, success]);

  useEffect(() => {
    if (draft === "false") {
      setThanks(true);
    }
  }, [thanks, draft]);
  const handleRating = (e) => {
    setRating(e.target.value);
  };

  useEffect(()=>{
    (() => {answer.length >= 225 ? setAnswerLimit(true) : setAnswerLimit(false)})()
  },[answer])

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

      }, business);
      setSuccess("true");
      setTimeout(setSuccess("false"), 3000);
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
      setTimeout(setSuccess("false"), 3000);
    }
    if (action === "delete") {
      await reviewActions.deleteReview({ userId: sessionUser.id, businessId });
      setSuccess("true");
      setTimeout(setSuccess("false"), 3000);
    }
    history.push(`/business/${businessId}`);
  };
  return (
    <div id="review-comp-main">
      {success === "true" ? <h2>Success@@++</h2> : null}
      <div className="review-form-container">
        {!thanks ? (
          <h2 className="top-message">{`Let us know what you think of ${business?.name}!`}</h2>
        ) : (
          <h2 className="top-message">{`Thanks for your review of ${business?.name}!`}</h2>
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
              onClick={(e)=>{handleRating(e)}}
            >

            </button>
            <button
              type="button"
              value={2}
              className={+rating >= 2 ? "selected" : ""}
              onClick={(e)=>{handleRating(e)}}
            >

            </button>
            <button
              type="button"
              value={3}
              className={+rating >= 3 ? "selected" : ""}
              onClick={(e)=>{handleRating(e)}}
            >

            </button>
            <button
              type="button"
              value={4}
              className={+rating >= 4 ? "selected" : ""}
              onClick={(e)=>{handleRating(e)}}
            >

            </button>
            <button
              type="button"
              value={5}
              className={+rating > 4 ? "selected" : ""}
              onClick={(e)=>{handleRating(e)}}
            >

            </button>
          </div>

          {sessionUser !== undefined && (
            <div className="answer-div">
              <div>
                <label htmlFor="answer">Tell us about your experience:</label>
              </div>
              <textarea
                placeholder="Did you PigOut?"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                name="answer"
                rows="5"
              />
              <p>{answer.length} / 255 {answerLimit ? "Whoa, keep it short." : null}</p>
            </div>
          )}
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
              disabled={answerLimit}
            >
              Submit
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default ReviewComp;
