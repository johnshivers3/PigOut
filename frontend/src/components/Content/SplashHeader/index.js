import { MainLogo } from "./MainLogo";
import { SplashUserNavBar } from "./SplashUserNavBar";
import { SearchBar } from "./SearchBar";
import  Navigation  from "../../Navigation/index.js";
import "./SplashHeader.css";
export const SplashHeader = () => {
  return (
    <div className="splash-header">
      {/* <h1>*SplashHeader*</h1>
      <p>***Image background changes at interval</p> */}
        {/* <Navigation/> */}
      <div className="overlay">
        <MainLogo />
        <SplashUserNavBar />
        <SearchBar />
      </div>
    </div>
  );
};
