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
        <h1>{business.name}</h1>
      </div>
      <div className="business-info-div">
        <h2>{business.name}</h2>
        <p>
          <em>Rating:</em> {business.rating}
        </p>
        <p>
          <em>Price:</em> {business.price}
        </p>
        <p>
          <em>Services:</em>
        </p>
        {business.transactions.length > 0 ? (
          business.transactions.map(xaction=>(
            <p key={xaction}>{xaction}</p>
          ))
        ):null}
        <p>
          <em>Location:</em> {business.location.display_address}
        </p>
        <p>
          <em>Call:</em> {business.display_phone}
        </p>
        <div className='yelp-link'>
          Find
          <Link to={{ pathname: `${business.url}` }} target="_blank">
            <h3>{business.name}</h3>
          </Link>
          on Yelp
        </div>
      </div>
      <div className="map-div">
        <Map coordinates={business.coordinates} />
      </div>
    </div>
  );
};

export default BusinessPage;
