import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import * as profileActions from '../../../store/profile'
import SuggestionCards from "../../Content/SuggestionsContainer/SuggestionsCards";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const [profileView, setProfileView] = useState("manage");
  const [reviewsState, setReviewsState] = useState("manage");
  const [checkinsState, setCheckinsState] = useState("manage");
  const [savedBusinessState, setSavedBusinessState] = useState("manage");
  const [collectionsState, setCollectionsState] = useState("manage");


  const sessionUser = useSelector((state) => state.session.user);
  const userReviews = useSelector((state) => state.profile.reviews);
  const userCheckins = useSelector((state) => state.profile.checkins);
  const userCollections = useSelector((state) => state.profile.collections);
  const userSavedBusinesses = useSelector((state) => state.profile.saved);


  const getAll = async(id) => {
    // await dispatch(profileActions.getUserCheckIns(id))
    // await dispatch(profileActions.getUserCollections(id))
    await dispatch(profileActions.getUserReviews(id))
    await dispatch(profileActions.getUserSavedBusinesses(id))
  }
  useEffect(()=>{
    getAll(sessionUser.id)
  },[])

  if (!sessionUser) {
    return (
      <div className="no-auth-profile-main-container">
        <div className="no-auth-prompt">
          <h1>Login or Sign Up</h1>
        </div>
        <img
          alt="main_logo"
          id="main-logo"
          src="./main_logo_2-removebg.png"
        ></img>
      </div>
    );
  }


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
