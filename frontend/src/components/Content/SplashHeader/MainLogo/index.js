import { NavLink } from "react-router-dom";
import './MainLogo.css'
export const MainLogo = () => {
  return (
    <div className="main-logo">
      <NavLink to="/">
        <h1>PigOut</h1>
      </NavLink>
    </div>
  );
};
