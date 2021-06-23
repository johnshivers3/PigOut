import { NavLink } from "react-router-dom";
import "./SplashUserNavBar.css";
export const SplashUserNavBar = () => {
  return (
    <div className="splash-user-nav-bar">
      <NavLink to="/review/create">Write a Review</NavLink>
      <NavLink to="/business/create">
        Add your favorite donut shop
      </NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};
