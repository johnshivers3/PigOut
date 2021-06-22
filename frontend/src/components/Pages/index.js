import "./Pages.css";
import {BusinessPage} from './BusinessPage'
// import {ProfilePage} from './ProfilePage'
// import {ReviewPage} from './ReviewPage'
// import {SearchPage} from './SearchPage'
import { Switch, Route } from "react-router-dom";
export const Pages = () => {
  return (
    <>
      <h1>Profile</h1>
      <div className="profile-container">
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route path='/api/business'>
          <BusinessPage/>
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
