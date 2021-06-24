import { csrfFetch } from "./csrf";

const GET_BUSINESS = "business/GET_BUSINESS";

const businessGetter = (payload) => ({
  type: "GET_BUSINESS",
  action: payload,
});

export const getBusiness = (id) => async (dispatch) => {
  const response = await csrfFetch(`https://api.yelp.com/v3/businesses/${id}`, {
    mode: "no-cors",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
    },
  });

  if (response.ok) {
    const business = await response.json();
    dispatch(businessGetter(business));
    return business;
  } else {
    console.error("Resource not found.");
  }
};

const initialState = { current: null };

const businessReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_BUSINESS:
      newState = Object.assign({}, state);
      newState.current = action.payload;
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
