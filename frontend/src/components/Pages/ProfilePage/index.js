import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SuggestionCards from '../../Content/SuggestionsContainer/SuggestionsCards'
import './ProfilePage.css'
export const ProfilePage = () => {
  const state = useSelector(state=>state)

  return (
    <div className='profile-main-container'>
      <div className='profile-left-side-bar'>
        <button>Manage Profile</button>
        <button>Your Check-Ins</button>
        <button>Your Reviews</button>
        <button>Your Saved Businesses</button>
        <button>Your Collections</button>
      </div>
      <div className='profile-main-content'></div>
      <div className='profile-right-side-bar'>

      </div>
    </div>
  )
}

export default ProfilePage;
