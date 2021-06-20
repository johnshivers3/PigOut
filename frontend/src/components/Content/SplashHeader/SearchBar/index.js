import { PreCategories } from "../PreCatgories";
import "./SearchBar.css";
export const SearchBar = () => {
  return (
    <>
      <h2>Search bar</h2>
      <div className="search-bar">
        <div>
          CATEGORY
          <input />
        </div>
        <div>
          LOCATION
          <input />
        </div>
      </div>
      <PreCategories />
    </>
  );
};
