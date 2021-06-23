import "./Pages.css";
import {BusinessPage} from './BusinessPage'
import {ProfilePage} from './ProfilePage'
import {ReviewPage} from './ReviewPage'
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
        <Route path='/business/:businessId'>
          <BusinessPage/>
        </Route>
        <Route path='/review/:businessId/'>
          <ReviewPage/>
        </Route>
        <Route path='/profile'>
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
