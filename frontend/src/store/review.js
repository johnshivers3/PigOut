import { csrfFetch } from "./csrf";

const GET_REVIEW = "review/GET_REVIEW";

const setReview = (review) => ({
  type: GET_REVIEW,
  payload: review,
});

export const getReview = (userId, businessId) => async (dispatch) => {
  const response = await csrfFetch("/api/review", {
    method: "GET",
    body: JSON.stringify({ userId, businessId }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(setReview(data));
  }
  throw new Error("Unable to complete request");
};

export const addReview = async (review) => {
  const response = await csrfFetch("/api/review", {
    method: "POST",
    body: JSON.stringify(review),
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    // return data.id;
  }
  throw new Error("Unable to complete request");
};

export const editReview = async (review) => {
  const response = await csrfFetch("/api/review", {
    method: "PUT",
    body: JSON.stringify(review),
  });
  if (response.ok) {
    const data = await response.json();
    return data.id;
  }
  throw new Error("Unable to complete request");
};

const initialState = { current: null };

const reviewReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEW:
      newState = Object.assign({}, state);
      newState.current = action.payload;
      return newState;

    default:
      return state;
  }
};

export default reviewReducer;
