import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div className="session-links log">
          <LoginFormModal />
        </div>
        <div className="session-links sign">
          <SignUpFormModal />
        </div>
      </>
    );
  }

  return (

<nav>
      <NavLink id='nav-left' exact to="/">
      <img
        id="main-icon"
        alt="main-icon"
        src="/favicon.png"
      ></img>
        <h1>Home</h1>
      </NavLink>
      <ul>
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </nav>

  );
}

export default Navigation;
