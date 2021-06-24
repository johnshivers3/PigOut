import { csrfFetch } from "./csrf";

const ADD_REVIEW = 'review/addReview'

// const setReview = (review) => ({
//   type: ADD_REVIEW,
//   payload: review
// })

export const addReview = async(review)  => {
  const response = await csrfFetch('/api/review',{
    method: 'POST',
    body: JSON.stringify(review)
  })
  if (response.ok) {
    const data = await response.json();
    return data.id
  }
  throw new Error('Unable to complete request')
}


const initialState = { review: null };


const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_REVIEW:
      newState = Object.assign({}, state);
      newState.review = action.payload;
      return newState;

    default:
      return state;
  }
};

export default reviewReducer;
