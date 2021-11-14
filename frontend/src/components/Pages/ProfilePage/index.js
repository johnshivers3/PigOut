import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import * as profileActions from "../../../store/profile";
import "./ProfilePage.css";
import Icon from "../../Icon";
import MainLogo from "../../Content/SplashHeader/MainLogo";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [profileView, setProfileView] = useState("manage");

  const sessionUser = useSelector((state) => state.session.user);
  const userReviews = useSelector((state) => state.profile.reviews);
  const userCheckins = useSelector((state) => state.profile.checkins);
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
              <MainLogo className="profile-logo" />

              <h1>{sessionUser?.username ?? null}</h1>
              <h1>{sessionUser?.email ?? null}</h1>

              <h3>Check-Ins</h3>
              {userCheckins?.length > 0 ? (
                <h1>{userCheckins.length}</h1>
              ) : (
                "Go PigOut and check-in"
              )}
              <h3>Reviews</h3>
              {userReviews?.length > 0 ? (
                <h1>{userReviews.length}</h1>
              ) : (
                "Go PigOut and let us know how it was"
              )}
              <h3>Saved</h3>
              {userSavedBusinesses?.length > 0 ? (
                <h1>{userSavedBusinesses.length}</h1>
              ) : (
                "Save a business and plan a PigOut"
              )}
            </div>
          </>
        );
      case "checkins":
        return (
          <>
            <div className="profile-main-content">
              <MainLogo className="profile-logo" />

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
                        <h1>
                          <Link to={`/business/${checkin["Business"].yelpId}`}>
                            {checkin["Business"].title}
                          </Link>
                        </h1>
                      </div>
                      <div>
                        <h2>{checkin["Business"].address}</h2>
                        <h2>{checkin["Business"].city}</h2>
                        <h2>{checkin["Business"].state}</h2>
                        <h2>{checkin["Business"].zipCode}</h2>
                      </div>
                    </div>
                    <div className="content-div-right">
                      <h1 className="checkin-date">
                        Date Visited:{" "}
                        {new Date(checkin.createdAt).toLocaleDateString()}
                      </h1>
                    </div>
                  </div>
                ))}
            </div>
          </>
        );
      case "reviews":
        return (
          <>
            <div className="profile-main-content">
              <MainLogo className="profile-logo" />

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
                        <h1>
                          <Link to={`/business/${review.businessId}`}>
                            {review["Business"].title}
                          </Link>
                        </h1>
                      </div>
                      <div className="rating-answer-div">
                        <h2>Rating:</h2>
                        <p>{review.rating}</p>
                      </div>
                      <div className="rating-answer-div">
                        <h2>Review:</h2>
                        <p>{review.answer}</p>
                      </div>
                    </div>
                    <div className="content-div-right">
                      <h2 className="review-date">
                        Date Reviewed:{" "}
                        {new Date(review.createdAt).toLocaleDateString()}
                      </h2>
                    </div>
                  </div>
                ))}
            </div>
          </>
        );
      case "saved":
        return (
          <>
            <div className="profile-main-content">
              <MainLogo className="profile-logo" />

              <h1>Saved</h1>
              {userSavedBusinesses &&
                userSavedBusinesses.map((saved) => (
                  <div
                    className="content-div"
                    key={`${saved.id} + ${saved.userId} + ${saved.businessId}`}
                  >
                    <div className="content-div-left">
                      <div className="business-title">
                        <Icon />
                        <h1>
                          <Link to={`/business/${saved.businessId}`}>
                            {saved["Business"]?.title}
                          </Link>
                        </h1>
                      </div>
                    </div>
                    <div className="content-div-right">
                      <h1 className="saved-date">
                        Date saved:{" "}
                        {new Date(saved.createdAt).toLocaleDateString()}
                      </h1>
                    </div>
                    {console.log({ saved: JSON.stringify(saved) })}
                  </div>
                ))}
            </div>
          </>
        );
      // case "collections":
      //   return (
      //     <>
      //       <div className="profile-main-content">
      //         <h1>Collections</h1>
      //       </div>
      //     </>
      //   );
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
        {/* <button
          onClick={() => setProfileView("collections")}
          className="left-side-bar-btn"
        >
          Your Collections
        </button> */}
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
