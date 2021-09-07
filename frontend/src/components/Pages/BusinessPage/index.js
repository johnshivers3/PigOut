import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReviewComp } from "./../ReviewComp/";

import * as businessActions from "../../../store/business";
import * as profileActions from "../../../store/profile";
import * as sessionActions from "../../../store/session";
import Map from "../Map";
import * as mockData from "../../../assets/SampleDonutData.json";
import Icon from "../../Icon";

import "./BusinessPage.css";

export const BusinessPage = () => {
  const { yelpId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const business = useSelector((state) => state.business.selected);
  const reviews = useSelector((state) => state.business.selectReviews);
  const user = useSelector((state) => state.session.user);
  const [currentBusiness, setCurrentBusiness] = useState();
  const [currentReviews, setCurrentReviews] = useState();

  useEffect(() => {
    if (business === undefined) {
      const refreshBusiness = (yelpId) => {
        dispatch(businessActions.getBusiness(yelpId));
      };
      refreshBusiness(yelpId);
    }

    return () => {
      setCurrentBusiness(business);
    };
  }, [business, yelpId, dispatch]);

  useEffect(() => {
    if (business) {
      const refreshReview = async (business) => {
        await dispatch(businessActions.getReviews(business?.alias));
        await setCurrentReviews(reviews);
      };
      refreshReview(business);
    }
    return () => setCurrentReviews(reviews);
    // eslint-disable-next-line
  }, [currentBusiness, business, dispatch]);

  const handleBusinessPageClick = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "check-in":
        break;
      case "save":
        dispatch(profileActions.getUserCheckIns(user.id));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="business-main">
        {business &&
          (business.id === yelpId ? (
            <>
              <div
                className="business-image-header"
                style={{ background: `url(${business.photos[1]}) center/100%` }}
              >
                <div className="overlay">
                  <h1>{business.name}</h1>
                </div>
              </div>

              <div className="business-content">
                <div className="business-content-info">
                  <div className="business-info-div">
                    <h2>{business.name}</h2>
                    {user ? (
                      <div className="business-buttons">
                        <button
                          name="check-in"
                          onClick={handleBusinessPageClick}
                          value={business.id}
                        >
                          Check-In
                        </button>
                        <button
                          name="save"
                          onClick={handleBusinessPageClick}
                          value={business.id}
                        >
                          Save
                        </button>
                      </div>
                    ) : null}
                    <div className="business-rating">
                      <em>Rating:</em>
                      {
                        <>
                          {" "}
                        {business.rating > 0 ? <Icon /> : null}
                        {business.rating > 1 ? <Icon /> : null}
                        {business.rating > 2 ? <Icon /> : null}
                        {business.rating > 3 ? <Icon /> : null}
                        {business.rating > 4 ? <Icon /> : null}
                        </>
                      }
                    </div>
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
                      <em>Location:</em>
                      {business.location.display_address[0]}
                      {business.location.display_address[1]}
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
                    <div className="business-hours-div">
                      {business.hours[0].is_open_now ? (
                        <h2 className="is-open-now">🟢 OPEN</h2>
                      ) : (
                        <h2 className="is-open-now">🔴 CLOSED</h2>
                      )}
                      {business.hours[0].open.map((day) => {
                        switch (day.day) {
                          case 0: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Monday</h4>
                                <>
                                  <p>
                                    Open:{" "}
                                    {+day.start <= 1200
                                      ? `${day.start.slice(
                                          0,
                                          2
                                        )}:${day.start.slice(2)} a.m.`
                                      : `${
                                          +day.start.slice(0, 2) - 12
                                        }:${day.start.slice(2)} p.m.`}
                                  </p>
                                  <p>
                                    Close:{" "}
                                    {+day.end < 1200
                                      ? `${day.end.slice(0, 2)}:${day.end.slice(
                                          2
                                        )} a.m.`
                                      : `${
                                          +day.end.slice(0, 2) - 12
                                        }:${day.end.slice(2)} p.m.`}
                                  </p>
                                </>
                              </div>
                            );
                          }
                          case 1: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Tuesday</h4>

                                <p>
                                  Open:{" "}
                                  {+day.start <= 1200
                                    ? `${day.start.slice(
                                        0,
                                        2
                                      )}:${day.start.slice(2)} a.m.`
                                    : `${
                                        +day.start.slice(0, 2) - 12
                                      }:${day.start.slice(2)} p.m.`}
                                </p>
                                <p>
                                  Close:{" "}
                                  {+day.end < 1200
                                    ? `${day.end.slice(0, 2)}:${day.end.slice(
                                        2
                                      )} a.m.`
                                    : `${
                                        +day.end.slice(0, 2) - 12
                                      }:${day.end.slice(2)} p.m.`}
                                </p>
                              </div>
                            );
                          }
                          case 2: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Wednesday</h4>

                                <p>
                                  Open:{" "}
                                  {+day.start <= 1200
                                    ? `${day.start.slice(
                                        0,
                                        2
                                      )}:${day.start.slice(2)} a.m.`
                                    : `${
                                        +day.start.slice(0, 2) - 12
                                      }:${day.start.slice(2)} p.m.`}
                                </p>
                                <p>
                                  Close:{" "}
                                  {+day.end < 1200
                                    ? `${day.end.slice(0, 2)}:${day.end.slice(
                                        2
                                      )} a.m.`
                                    : `${
                                        +day.end.slice(0, 2) - 12
                                      }:${day.end.slice(2)} p.m.`}
                                </p>
                              </div>
                            );
                          }
                          case 3: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Thursday</h4>

                                <p>
                                  Open:{" "}
                                  {+day.start <= 1200
                                    ? `${day.start.slice(
                                        0,
                                        2
                                      )}:${day.start.slice(2)} a.m.`
                                    : `${
                                        +day.start.slice(0, 2) - 12
                                      }:${day.start.slice(2)} p.m.`}
                                </p>
                                <p>
                                  Close:{" "}
                                  {+day.end < 1200
                                    ? `${day.end.slice(0, 2)}:${day.end.slice(
                                        2
                                      )} a.m.`
                                    : `${
                                        +day.end.slice(0, 2) - 12
                                      }:${day.end.slice(2)} p.m.`}
                                </p>
                              </div>
                            );
                          }
                          case 4: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Friday</h4>

                                <p>
                                  Open:{" "}
                                  {+day.start <= 1200
                                    ? `${day.start.slice(
                                        0,
                                        2
                                      )}:${day.start.slice(2)} a.m.`
                                    : `${
                                        +day.start.slice(0, 2) - 12
                                      }:${day.start.slice(2)} p.m.`}
                                </p>
                                <p>
                                  Close:{" "}
                                  {+day.end < 1200
                                    ? `${day.end.slice(0, 2)}:${day.end.slice(
                                        2
                                      )} a.m.`
                                    : `${
                                        +day.end.slice(0, 2) - 12
                                      }:${day.end.slice(2)} p.m.`}
                                </p>
                              </div>
                            );
                          }
                          case 5: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Saturday</h4>

                                <p>
                                  Open:{" "}
                                  {+day.start <= 1200
                                    ? `${day.start.slice(
                                        0,
                                        2
                                      )}:${day.start.slice(2)} a.m.`
                                    : `${
                                        +day.start.slice(0, 2) - 12
                                      }:${day.start.slice(2)} p.m.`}
                                </p>
                                <p>
                                  Close:{" "}
                                  {+day.end < 1200
                                    ? `${day.end.slice(0, 2)}:${day.end.slice(
                                        2
                                      )} a.m.`
                                    : `${
                                        +day.end.slice(0, 2) - 12
                                      }:${day.end.slice(2)} p.m.`}
                                </p>
                              </div>
                            );
                          }
                          case 6: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Sunday</h4>

                                <p>
                                  Open:{" "}
                                  {+day.start <= 1200
                                    ? `${day.start.slice(
                                        0,
                                        2
                                      )}:${day.start.slice(2)} a.m.`
                                    : `${
                                        +day.start.slice(0, 2) - 12
                                      }:${day.start.slice(2)} p.m.`}
                                </p>
                                <p>
                                  Close:{" "}
                                  {+day.end < 1200
                                    ? `${day.end.slice(0, 2)}:${day.end.slice(
                                        2
                                      )} a.m.`
                                    : `${
                                        +day.end.slice(0, 2) - 12
                                      }:${day.end.slice(2)} p.m.`}
                                </p>
                              </div>
                            );
                          }
                          default: {
                            return <h4>Closed</h4>;
                          }

                          // }
                        }
                      })}
                    </div>
                  </div>

                  <div id="right-bar">
                    <div className="map-div">
                      <Map
                        id="business-map"
                        coordinates={business.coordinates}
                      />
                    </div>
                    <div className="business-review-div">
                      <ReviewComp />
                      {reviews &&
                        reviews.map((review) => (
                          <div key={review.id} className="review-div">
                            <div className="review-div-rating">
                              <h4>Rating:</h4>
                              {review.rating > 0 ? <Icon /> : null}
                              {review.rating > 1 ? <Icon /> : null}
                              {review.rating > 2 ? <Icon /> : null}
                              {review.rating > 3 ? <Icon /> : null}
                              {review.rating > 4 ? <Icon /> : null}
                            </div>
                            <div className="review-div-text">
                              <h4>{review.user.name}</h4>
                              <p>{review.text}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ((<h1>Loading...</h1>),
            (<image alt="loading" src="/favicon.png"></image>))
          ))}
      </div>
    </>
  );
};

export default BusinessPage;
