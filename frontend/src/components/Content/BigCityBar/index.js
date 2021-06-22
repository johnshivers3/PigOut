import { NavLink } from "react-router-dom";
import "./BigCityBar.css";

export const BigCityBar = () => {
  return (
    <div className="big-city-bar">
      <h2> Big City Bar </h2>
      <p>links to search in a list of popular big cities</p>
      <div className='city-div'>
        <NavLink to='/'>San Francisco</NavLink>
        <NavLink to='/'>New York</NavLink>
        <NavLink to='/'>Houston</NavLink>
        <NavLink to='/'>Los Angeles</NavLink>
        <NavLink to='/'>Chicago</NavLink>
      </div>
    </div>
  );
};
export default BigCityBar;
