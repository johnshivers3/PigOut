import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import * as businessActions from "../../../store/business";
import Map from "../Map";
import * as mockData from "../../../assets/SampleDonutData.json";
import "./BusinessPage.css";

export const BusinessPage = () => {
  const { businessId } = useParams();
  const [currentBusiness, setCurrentBusiness] = useState();

  const business = mockData.businesses.find(
    (business) => business.id === businessId
  );

  // const yelpBusiness = async (id) => {
  //   const response = await fetch(`https://api.yelp.com/v3/businesses/${id}`,{
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
  //     }
  //   })
  //   if(response.ok ){
  //     const yelpBiz = await response.json()
  //     return yelpBiz
  //   } else {
  //     throw new Error('Bad Request')
  //   }
  // }

  useEffect(() => {
    setCurrentBusiness(business);
    // console.log(yelpBusiness(id));
  }, []);

  return (
    <>
      {currentBusiness ? (
        <div className="business-main">
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
            <p>
              <em>Rating:</em> {currentBusiness.rating}
            </p>
            <p>
              <em>Price:</em> {currentBusiness.price}
            </p>
            <p>
              <em>Services:</em>
            </p>
            {currentBusiness.transactions.length > 0
              ? currentBusiness.transactions.map((transaction) => (
                  <p key={transaction}>{transaction}</p>
                ))
              : null}
            <p>
              <em>Location:</em> {currentBusiness.location.display_address}
            </p>
            <p>
              <em>Call:</em> {currentBusiness.display_phone}
            </p>
            <button id="review-biz-btn">
              <Link to={`/review/${currentBusiness.id}`}>
                Review {`${currentBusiness.name}`}
              </Link>
            </button>
            <div className="yelp-link">
              Find
              <Link to={{ pathname: `${currentBusiness.url}` }} target="_blank">
                <h3>{currentBusiness.name}</h3>
              </Link>
              on Yelp
            </div>
          </div>
          <div className="map-div">
            {/* <Map coordinates={business.coordinates} /> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BusinessPage;
