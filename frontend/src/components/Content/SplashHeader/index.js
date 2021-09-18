import { MainLogo } from "./MainLogo";
import { ContactBar } from "./ContactBar";
import { SearchBar } from "./SearchBar";
import BigCityBar from './../BigCityBar'
import "./SplashHeader.css";
export const SplashHeader = () => {
  return (
    <div id="splash-header">
      {/* <h1>*SplashHeader*</h1>
      <p>***Image background changes at interval</p> */}
        {/* <Navigation/> */}
      <div id="overlay">
      {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="john-shivers-99ab30203" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/john-shivers-99ab30203?trk=profile-badge">John Shivers</a></div> */}

        <MainLogo />
        <ContactBar />
        <SearchBar />
        <BigCityBar/>
      </div>
    </div>
  );
};
