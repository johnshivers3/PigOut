import { SuggestionsCards } from "./SuggestionsCards";
import * as mockData from "../../../assets/SampleDonutData.json";

import "./SuggestionsContainer.css";
export const SuggestionsContainer = () => {
  return (
    <>
      <h2>Suggestions Container</h2>
      <div className="suggestions-container">
        {mockData.businesses.map((business) => (
          <div key={business.id} className="cards">
            <SuggestionsCards business={business} />
          </div>
        ))}
      </div>
    </>
  );
};
export default SuggestionsContainer;
