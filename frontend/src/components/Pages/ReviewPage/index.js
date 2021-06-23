import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as mockData from "../../../assets/SampleDonutData.json";

import "./ReviewPage.css";

export const ReviewPage = () => {
  const [rating, setRating] = useState();
  const [answer, setAnswer] = useState("");
  const [draft, setDraft] = useState(true);

  const { businessId } = useParams();
  const business = mockData.businesses.find(
    (business) => business.id === businessId
  );

  return (
    <div className="review-main">
      <div
        className="review-image-header"
        style={{ background: `url(${business.image_url}) center` }}
      >
        <div className="overlay">
          <h1>Review</h1>
        </div>
      </div>
      <h2>{`Let us know what you think of ${business.name}!`}</h2>
    </div>
  );
};

export default ReviewPage;
