import { NavLink } from "react-router-dom"
import './SplashUserNavBar.css'
export const SplashUserNavBar = () => {
  return(
    <div className='splash-user-nav-bar'>
      <NavLink to='/api/review/create'>Write a Review</NavLink>
      <NavLink to='/api/business/create'>Don't see your favorite shop?</NavLink>
      <NavLink to='/api/profile'>Profile</NavLink>

    </div>
  )

}
