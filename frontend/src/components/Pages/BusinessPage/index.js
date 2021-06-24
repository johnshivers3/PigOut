import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as businessActions from "../../../store/business";
import Map from "../Map";
import * as mockData from "../../../assets/SampleDonutData.json";
import "./BusinessPage.css";

export const BusinessPage = () => {
  const { businessId } = useParams();
  const [currentBusiness, setCurrentBusiness] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getYelpInfo = async (businessId) => {
      return await dispatch(businessActions.getBusiness(businessId));
    };
    const yelpInfo = getYelpInfo(businessId);
    return setCurrentBusiness(yelpInfo);
  }, []);

  return (
    <>
      <div className="business-main">
        {currentBusiness !== null && (
          <>
            <div
              className="business-image-header"
              style={{ background: `url(${currentBusiness.image_url}) center` }}
            >
              <div className="overlay">
                <h1>{currentBusiness.name}</h1>
              </div>
            </div>

            <div className="business-info-div">
              <h2>{currentBusiness.name}</h2>
              <button id="review-biz-btn">
                <Link to={`/review/${currentBusiness.id}`}>
                  Review {`${currentBusiness.name}`}
                </Link>
              </button>
              <p>
                <em>Rating:</em> {currentBusiness.rating}
              </p>
              <p>
                <em>Price:</em> {currentBusiness.price}
              </p>
              <p>
                <em>Services:</em>
              </p>
              {currentBusiness.transactions &&
                (currentBusiness.transactions.length > 0
                  ? currentBusiness.transactions.map((transaction) => (
                      <p key={transaction}>{transaction}</p>
                    ))
                  : null)}
              <p>
                {/* <em>Location:</em> {currentBusiness.location.display_address} */}
              </p>
              <p>
                <em>Call:</em> {currentBusiness.display_phone}
              </p>
              <div className="yelp-link">
                Find
                <Link
                  to={{ pathname: `${currentBusiness.url}` }}
                  target="_blank"
                >
                  <h3>{currentBusiness.name}</h3>
                </Link>
                on Yelp
              </div>
            </div>
            {/* <div className="map-div">
              <Map coordinates={currentBusiness.coordinates} />
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default BusinessPage;
