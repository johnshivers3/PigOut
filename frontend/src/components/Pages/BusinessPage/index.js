import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as businessActions from "../../../store/business";
import Map from "../Map";
import * as mockData from "../../../assets/SampleDonutData.json";
import "./BusinessPage.css";

export const BusinessPage = () => {
  const {yelpId} = useParams()
  const business = useSelector((state) => state.business.selected);
  const [currentBusiness, setCurrentBusiness] = useState();


  useEffect(() => {
   setCurrentBusiness(business);
  }, [business]);

  return (
    <>
      <div className="business-main">
        {business && ((business.id === yelpId) ? (
          <>
            <div
              className="business-image-header"
              style={{ background: `url(${business.image_url}) center` }}
            >
              <div className="overlay">
                <h1>{business.name}</h1>
              </div>
            </div>

            <div className="business-info-div">
              <h2>{business.name}</h2>
              <button id="review-biz-btn">
                <Link to={`/review/${business.id}`}>
                  Review {`${business.name}`}
                </Link>
              </button>
              <p>
                <em>Rating:</em> {business.rating}
              </p>
              <p>
                <em>Price:</em> {business.price}
              </p>
              <p>
                <em>Services:</em>
              </p>
              {business.transactions &&
                (business.transactions.length > 0
                  ? business.transactions.map((transaction) => (
                      <p key={transaction}>{transaction}</p>
                    ))
                  : null)}
              <p>
                <em>Location:</em> {business.location.display_address}
              </p>
              <p>
                <em>Call:</em> {business.display_phone}
              </p>
              <div className="yelp-link">
                Find
                <Link
                  to={{ pathname: `${business.url}` }}
                  target="_blank"
                >
                  <h3>{business.name}</h3>
                </Link>
                on Yelp
              </div>
            </div>
            <div className="map-div">
              <Map coordinates={business.coordinates} />
            </div>
          </>
        ) : <h1>Loading...</h1>)}
      </div>
    </>
  );
};

export default BusinessPage;
