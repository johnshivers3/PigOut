import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { ResultsCards } from "./ResultsCards";
import * as mockData from "../../../assets/SampleDonutData.json";
import * as businessActions from "../../../store/business";
import * as searchActions from "../../../store/search";

import "./ResultsContainer.css";

export const ResultsContainer = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);
  const location = useSelector((state) => state.main.location);
  const history = useHistory();

  // if(!results) history.push('/')

  // useEffect(() => {}, [results]);
  const handleClick = async (id) => {
    await dispatch(businessActions.getBusiness(id));
  };
  return (
    <>
      <h1 id="suggestion-heading">Search Results</h1>
      <div className="suggestions-container">
        {results?.map((business) => (
          <div key={business.id} className="cards">
            <Link
              onClick={async () => await handleClick(business.id)}
              to={`/business/${business.id}`}
            >
              <ResultsCards business={business} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default ResultsContainer;
