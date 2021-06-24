import { csrfFetch } from "./csrf";

const GET_BUSINESS = "business/GET_BUSINESS";

const businessGetter = (payload) => ({
  type: "GET_BUSINESS",
  action: payload,
});

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

const initialState = {};

const businessReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_BUSINESS:
      newState = Object.assign({}, state);
      newState.selected = action.payload;
      return newState;

    default:
      return state;
  }
};

export default businessReducer;
