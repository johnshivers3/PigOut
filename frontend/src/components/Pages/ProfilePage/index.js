import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as profileActions from "../../../store/profile";
import SuggestionCards from "../../Content/SuggestionsContainer/SuggestionsCards";
import "./ProfilePage.css";

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
            </div>
          </>
        );
      case "reviews":
        return (
          <>
            <div className="profile-main-content">
              <h1>Reviews</h1>
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
