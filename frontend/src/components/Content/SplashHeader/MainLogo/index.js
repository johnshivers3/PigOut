import { NavLink } from "react-router-dom";
export const MainLogo = () => {
  return (
    <div className="main-logo">
      <NavLink to="/">
        <h1>PigOut</h1>
      </NavLink>
    </div>
  );
};
