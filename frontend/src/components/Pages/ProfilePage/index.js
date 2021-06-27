import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SuggestionCards from "../../Content/SuggestionsContainer/SuggestionsCards";
import "./ProfilePage.css";


export const ProfilePage = () => {

  const sessionUser = useSelector((state) => state.session.user);

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
  return (
    <div className="profile-main-container">
      <div className="profile-left-side-bar">
        <button className="left-side-bar-btn">Manage Profile</button>
        <button className="left-side-bar-btn">Your Check-Ins</button>
        <button className="left-side-bar-btn">Your Reviews</button>
        <button className="left-side-bar-btn">Your Saved Businesses</button>
        <button className="left-side-bar-btn">Your Collections</button>
      </div>
      <div className="profile-main-content"></div>
      <div className="profile-right-side-bar"></div>
    </div>
  );
};

export default ProfilePage;
