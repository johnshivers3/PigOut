import { PreCategories } from "../PreCatgories";
import "./SearchBar.css";
export const SearchBar = () => {
  return (
    <>
      {/* <h2>Search bar</h2> */}
      <div className="search-bar">
        <div>
          <label htmlFor='term'>CATEGORY</label>
          <input name='term'/>
        </div>
        <div>

          <label htmlFor='location'>LOCATION</label>

          <input name='location'/>
        </div>
      </div>
      <PreCategories />
    </>
  );
};
