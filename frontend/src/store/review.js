import { csrfFetch } from "./csrf";

const GET_REVIEW = "review/GET_REVIEW";

const setReview = (review) => ({
  type: GET_REVIEW,
  payload: review,
});


export const getReview = (userId, businessId) => async (dispatch) => {
  const response = await csrfFetch("/api/review", {
    method: "GET",
    headers: {
      userId: userId,
      businessId: businessId,
    },
  });
  if (response.ok) {
    const { review } = await response.json();
    await dispatch(setReview(review));
    return review;
  } else {
    await dispatch(setReview({}));
    return {};
  }
};

export const addReview = async (review) => {
  const response = await csrfFetch("/api/review", {
    method: "POST",
    body: JSON.stringify(review),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Unable to complete request");
  }
};

export const editReview = async (review) => {
  const response = await csrfFetch("/api/review", {
    method: "PUT",
    body: JSON.stringify(review),
  });
  if (response.ok) {
    const data = await response.json();
    return data.id;
  } else {
    throw new Error("Unable to complete request");
  }
};

export const deleteReview = async ({ userId, businessId }) => {
  const response = await csrfFetch("/api/review", {
    method: "DELETE",
    headers: {
      userId: userId,
      businessId: businessId,
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    throw new Error("Unable to complete request");
  }
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEW:
      newState = Object.assign({}, state);
      newState.selected = action.payload;
      return newState;

    default:
      return state;
  }
};

export default reviewReducer;
