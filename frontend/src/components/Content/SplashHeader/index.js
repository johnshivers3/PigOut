import { MainLogo } from "./MainLogo";
import { SplashUserNavBar } from "./SplashUserNavBar";
import { SearchBar } from "./SearchBar";
import "./SplashHeader.css";
export const SplashHeader = () => {
  return (
    <div className="splash-header">
      {/* <h1>*SplashHeader*</h1>
      <p>***Image background changes at interval</p> */}
      <div className="overlay">
        <MainLogo />
        <SplashUserNavBar />
        <SearchBar />
      </div>
    </div>
  );
};
