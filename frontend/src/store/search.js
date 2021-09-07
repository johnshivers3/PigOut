import { csrfFetch } from "./csrf";

const SET_SUGGESTIONS = "search/SET_SUGGESTIONS";
const SET_RESULTS = "search/SET_RESULTS";

const setSuggestions = (suggestions) => ({
  type: SET_SUGGESTIONS,
  payload: suggestions,
});
const setResults = (results, query) => ({
  type: SET_RESULTS,
  payload: results,
  query
});

export const getSuggestions = (location) => async (dispatch) => {
  const response = await csrfFetch(
    `/api/search/suggestions/${location.latitude}/${location.longitude}`
  );

  if (response.ok) {
    const suggestions = await response.json();
    await dispatch(setSuggestions(suggestions));
    return suggestions;
  } else {
    throw new Error("Resource not found.");
  }
};

export const getResults = (query,location) => async (dispatch) => {
  const response = await csrfFetch(
    `/api/search/results/${query}/${location.lat}/${location.lng}`, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    }
  )

  if (response.ok) {
    const results = await response.json();
    await dispatch(setResults(results, query));
    return results;
  } else {
    throw new Error("Resource not found.");
  }
}

const initialState = {};

const searchReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_SUGGESTIONS:
      newState = Object.assign({}, state);
      newState.suggestions = action.payload;
      return newState;
    case SET_RESULTS:
      newState = Object.assign({}, state);
      newState.results = action.payload;
      newState.query = action.query;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
