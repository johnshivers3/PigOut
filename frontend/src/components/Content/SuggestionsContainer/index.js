import { SuggestionsCards } from "./SuggestionsCards";
import * as mockData from "../../../assets/SampleDonutData.json";

import "./SuggestionsContainer.css";
export const SuggestionsContainer = () => {
  return (
    <>

      <div className="suggestions-container">
        {mockData.businesses.map((business, i) => (
          <div key={business.id} className="cards">
            <SuggestionsCards business={business} />
          </div>
        ))}
      </div>
    </>
  );
};
export default SuggestionsContainer;
