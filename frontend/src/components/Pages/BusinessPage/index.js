import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as businessActions from "../../../store/business";
import Map from "../Map";
import * as mockData from "../../../assets/SampleDonutData.json";
import "./BusinessPage.css";

export const BusinessPage = () => {
  const { yelpId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const business = useSelector((state) => state.business.selected);
  const [currentBusiness, setCurrentBusiness] = useState();

  useEffect(() => {
    if (business === undefined) {
      const refresh = (yelpId) => {
        dispatch(businessActions.getBusiness(yelpId));
      };
      refresh(yelpId);
    }

    return () => setCurrentBusiness(business);
  }, [business, yelpId, dispatch, history]);
  useEffect(() => {
    dispatch(businessActions.getReviews(business?.alias));
  }, [business]);
  return (
    <>
      <div className="business-main">
        {business &&
          (business.id === yelpId ? (
            <>
              <div
                className="business-image-header"
                style={{ background: `url(${business.photos[2]}) center` }}
              >
                <div className="overlay">
                  <h1>{business.name}</h1>
                </div>
              </div>

              <div className="business-content">
                <div className="business-content-info">
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
                    <div className="business-hours-div">
                      {business.hours[0].is_open_now ? (
                        <h2 className="is-open-now">OPEN</h2>
                      ) : (
                        <h2 className="is-open-now">CLOSED</h2>
                      )}
                      {business.hours[0].open.map((day) => {
                        switch (day.day) {
                          case 0: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Monday</h4>
                                <p>
                                  Open:{" "}
                                  {+day.start < 1200
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
                          case 1: {
                            return (
                              <div key={day.day} className="daily-hours-div">
                                <h4>Tuesday</h4>

                                <p>
                                  Open:{" "}
                                  {+day.start < 1200
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
                                  {+day.start < 1200
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
                                  {+day.start < 1200
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
                                  {+day.start < 1200
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
                                  {+day.start < 1200
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
                                  {+day.start < 1200
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

                  <div className="business-review-div">
                    {/* {reviews.map(review => (
                        <p key={review.id} > {review.text}</p>
                      ))} */}
                  </div>
                </div>
              </div>
              <div className="map-div">
                <Map coordinates={business.coordinates} />
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
