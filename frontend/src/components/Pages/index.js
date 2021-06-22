import "./Pages.css";
import {BusinessPage} from './BusinessPage'
import {ProfilePage} from './ProfilePage'
// import {ReviewPage} from './ReviewPage'
// import {SearchPage} from './SearchPage'
import { Switch, Route } from "react-router-dom";
export const Pages = () => {
  return (
    <>
      {/* <h1>Pages</h1> */}
      <div className="pages-container">
      <Switch>
        {/* <Route path='/api/search'>
          <SearchPage/>
        </Route> */}
        <Route path='/api/business/:id'>
          <BusinessPage/>
        </Route>
        {/* <Route path='/api/review'>
          <ReviewPage/>
        </Route> */}
        <Route path='/api/profile'>
          <ProfilePage/>
        </Route>
        <Route >
          <h1>Not Home</h1>
        </Route>
      </Switch>
      </div>
    </>
  );
};

export default Pages;
