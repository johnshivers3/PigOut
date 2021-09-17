import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import * as profileActions from "../../../store/profile";
import SuggestionCards from "../../Content/SuggestionsContainer/SuggestionsCards";
import "./ProfilePage.css";
import Icon from "../../Icon";
export const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [profileView, setProfileView] = useState("manage");
  const [reviewsState, setReviewsState] = useState("");
  const [checkinsState, setCheckinsState] = useState("");
  const [savedBusinessState, setSavedBusinessState] = useState("");
  const [collectionsState, setCollectionsState] = useState("");

  const sessionUser = useSelector((state) => state.session.user);
  const userReviews = useSelector((state) => state.profile.reviews);
  const userCheckins = useSelector((state) => state.profile.checkins);
  const userCollections = useSelector((state) => state.profile.collections);
  const userSavedBusinesses = useSelector((state) => state.profile.saved);

  if (!sessionUser) history.push("/");

  const dispatchId = sessionUser?.id;
  useEffect(() => {
    (async () => {
      await dispatch(profileActions.getUserCheckIns(dispatchId));
      await dispatch(profileActions.getUserCollections(dispatchId));
      await dispatch(profileActions.getUserReviews(dispatchId));
      await dispatch(profileActions.getUserSavedBusinesses(dispatchId));
    })();
  }, [dispatchId, dispatch]);

  const mainContent = (profileView) => {
    switch (profileView) {
      case "manage":
        return (
          <>
            <div className="profile-main-content">
              <h1>{sessionUser.username}</h1>
              <h2>{sessionUser.email}</h2>
              <h3>Set Default Location</h3>
              <input type="text"></input>
            </div>
          </>
        );
      case "checkins":
        return (
          <>
            <div className="profile-main-content">
              <h1>Check Ins</h1>
              {userCheckins &&
                userCheckins.map((checkin) => (
                  <div
                    className="content-div"
                    key={`${checkin.id} + ${checkin.userId} + ${checkin.businessId}`}
                  >
                    <div className="content-div-left">
                      <div className="business-title">
                        <Icon />
                        <h2>
                          <Link to={`/business/${checkin["Business"].yelpId}`}>
                            {checkin["Business"].title}
                          </Link>
                        </h2>
                      </div>
                      <div>
                        <h4>{checkin["Business"].address}</h4>
                        <h4>{checkin["Business"].city}</h4>
                        <h4>{checkin["Business"].state}</h4>
                        <h4>{checkin["Business"].zipCode}</h4>
                      </div>
                    </div>
                    <div className="content-div-right">
                      <h4 className="checkin-date">
                        Date Visited:{" "}
                        {new Date(checkin.createdAt).toLocaleDateString()}
                      </h4>
                    </div>
                    {console.log({ checkin: JSON.stringify(checkin) })}
                  </div>
                ))}
            </div>
          </>
        );
      case "reviews":
        return (
          <>
            <div className="profile-main-content">
              <h1>Reviews</h1>
              {userReviews &&
                userReviews.map((review) => (
                  <div
                    className="content-div"
                    key={`${review.id} + ${review.userId} + ${review.businessId}`}
                  >
                    <div className="content-div-left">
                      <div className="business-title">
                        <Icon />
                        <h2>
                          <Link to={`/business/${review["Business"].yelpId}`}>
                            {review["Business"].title}
                          </Link>
                        </h2>
                      </div>
                      <div>
                        <h4>{review["Business"].address}</h4>
                        <h4>{review["Business"].city}</h4>
                        <h4>{review["Business"].state}</h4>
                        <h4>{review["Business"].zipCode}</h4>
                      </div>
                    </div>
                    <div className="content-div-right">
                      <h4 className="review-date">
                        Date Reviewed:{" "}
                        {new Date(review.createdAt).toLocaleDateString()}
                      </h4>
                    </div>
                    {console.log({ review: JSON.stringify(review) })}
                  </div>
                ))}
            </div>
          </>
        );
      case "saved":
        return (
          <>
            <div className="profile-main-content">
              <h1>Saved</h1>
            </div>
          </>
        );
      case "collections":
        return (
          <>
            <div className="profile-main-content">
              <h1>Collections</h1>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-main-container">
      <div className="profile-left-side-bar">
        <button
          onClick={() => setProfileView("manage")}
          className="left-side-bar-btn"
        >
          Manage Profile
        </button>
        <button
          onClick={() => setProfileView("checkins")}
          className="left-side-bar-btn"
        >
          Your Check-Ins
        </button>
        <button
          onClick={() => setProfileView("reviews")}
          className="left-side-bar-btn"
        >
          Your Reviews
        </button>
        <button
          onClick={() => setProfileView("saved")}
          className="left-side-bar-btn"
        >
          Your Saved Businesses
        </button>
        <button
          onClick={() => setProfileView("collections")}
          className="left-side-bar-btn"
        >
          Your Collections
        </button>
      </div>
      {mainContent(profileView)}
      <div className="profile-right-side-bar">
        {/* <SuggestionCards/>
        <SuggestionCards/>
        <SuggestionCards/>
        <SuggestionCards/> */}
      </div>
    </div>
  );
};

export default ProfilePage;
