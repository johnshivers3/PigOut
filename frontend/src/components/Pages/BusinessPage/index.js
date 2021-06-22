import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Map from "../Map";
import * as mockData from "../../../assets/SampleDonutData.json";
import "./BusinessPage.css";

export const BusinessPage = () => {
  const { id } = useParams();
  const business = mockData.businesses[id];
  const length = mockData.businesses.length;
  return (
    <div className="business-main">
      <div
        className="business-image-header"
        style={{ background: `url(${business.image_url}) center` }}
      >
        <Link to={{ pathname: `${business.url}` }} target="_blank">
          <h1>{business.name}</h1>
        </Link>
      </div>
      <div className="business-info-div">
        <h2>{business.name}</h2>
        <p>
          <em>Rating: {business.rating}</em>
        </p>
        <p>
          <em>Price: {business.price}</em>
        </p>
        <p>
          <em>Call: {business.display_phone}</em>
        </p>
      </div>
      <div className='map-div'>
        <Map coordinates={business.coordinates} />
      </div>
    </div>
  );
};

export default BusinessPage;
