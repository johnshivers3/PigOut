import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
// import SignupFormPage from "../SignUpFormPage";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        {/* <NavLink to="/login">Log In</NavLink> */}
        <LoginFormModal/>
        {/* <SignupFormPage/> */}
        <NavLink to="/users/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
