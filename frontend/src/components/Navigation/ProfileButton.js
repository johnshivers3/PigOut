import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { csrfFetch } from "../../store/csrf";
function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const [profilePic, setProfilePic] = useState()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </li>
          {/* {user.image && (
              <img style={{ width: "150px" }} alt="profile" src={user.image} />
            )} */}

          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
    </>
  );
}

export default ProfileButton;
