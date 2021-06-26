import { csrfFetch } from "./csrf";

const SET_SUGGESTIONS = 'search/SET_SUGGESTIONS'

const setSuggestions = (suggestions) => ({
  type:SET_SUGGESTIONS,
  payload: suggestions
})

export const getSuggestions = (location) => async (dispatch) => {
  const response = await csrfFetch(`/api/search/suggestions/${location.latitude}/${location.longitude}`)

  if (response.ok) {
    const suggestions = await response.json();
    await dispatch(setSuggestions(suggestions));
    return suggestions;
  } else {
    throw new Error("Resource not found.")
  }
};

const initialState = {};

const searchReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_SUGGESTIONS:
      newState = Object.assign({}, state);
      newState.suggestions = action.payload;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
