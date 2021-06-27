import { csrfFetch } from "./csrf";

const GET_BUSINESS = "business/GET_BUSINESS";
const GET_REVIEWS = "business/GET_REVIEWS"


const businessGetter = (business) => ({
  type: GET_BUSINESS,
  payload: business
});

const reviewGetter = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews
})


export const getBusiness = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/search/${businessId}`)
  if (response.ok) {
    const {business} = await response.json();
    await dispatch(businessGetter(business));
    return business;
  } else {
    throw new Error("Resource not found.")
  }
};

export const getReviews = (yelpAlias) => async (dispatch) => {
  const response = await csrfFetch(`/api/review/yelp/${yelpAlias}`)
  if (response.ok) {
    const {reviews} = await response.json();
    await dispatch(reviewGetter(reviews));
    return reviews;
  } else {
    throw new Error("React: Resource not found.")
  }
}

const initialState = {};

const businessReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_BUSINESS:
      newState = Object.assign({}, state);
      newState.selected = action.payload;
      return newState;
    case GET_REVIEWS:
      newState = Object.assign({}, state);
      newState.selectReviews = action.payload;
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
