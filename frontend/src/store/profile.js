import { csrfFetch } from "./csrf";

const GET_REVIEWS = 'profile/GET_REVIEWS'
const GET_CHECKINS = 'profile/GET_CHECKINS'
const GET_SAVED = 'profile/GET_SAVED'
const GET_COLLECTIONS = 'profile/GET_COLLECTIONS'
const SET_CHECKINS = "review/SET_CHECKINS";

const userReviewGetter = (reviews) => ({
  type: GET_REVIEWS,
  payload:reviews
})
const userCheckInGetter = (checkins) => ({
  type: GET_CHECKINS,
  payload:checkins
})
const userSavedBusinessGetter = (saved) => ({
  type: GET_SAVED,
  payload:saved
})
const userCollectionsGetter = (collections) => ({
  type: GET_COLLECTIONS,
  payload:collections
})


export const getUserReviews = (userId) => async(dispatch) => {
  const response = await csrfFetch(`/api/profile/reviews/${userId}`)

  try {
    const json = await response.json()
    dispatch(userReviewGetter(json))
    return json
  } catch (error) {
    throw new Error(error)
  }
}
export const getUserCheckIns = (userId) => async(dispatch) => {
  const response = await csrfFetch(`/api/profile/checkins/${userId}`)

  try {
    const json = await response.json()
    dispatch(userCheckInGetter(json))
    return json
  } catch (error) {
    throw new Error(error)
  }
}
export const saveCheckIn = (userId, businessId) => async(dispatch) => {
  try {
  const response = await csrfFetch(`/api/profile/checkins/${userId}/${businessId}`, {
    method: 'POST',
  })
  if(response.ok){
    const json = await response.json()
    dispatch(getUserCheckIns(userId))
    return json}
  } catch (error) {
    throw new Error(error)
  }
}
export const getUserSavedBusinesses = (userId) => async(dispatch) => {
  const response = await csrfFetch(`/api/profile/saved/${userId}`)

  try {
    const json = await response.json()
    dispatch(userSavedBusinessGetter(json))
    return json
  } catch (error) {
    throw new Error(error)
  }
}
export const getUserCollections = (userId) => async(dispatch) => {
  const response = await csrfFetch(`/api/profile/collections/${userId}`)

  try {
    const json = await response.json()
    dispatch(userCollectionsGetter(json))
    return json
  } catch (error) {
    throw new Error(error)
  }
}

const initialState = { reviews: null, checkins:null, saved: null, collections: null};

const profileReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = Object.assign({}, state);
      newState.reviews = action.payload;
      return newState;
    case GET_CHECKINS:
      newState = Object.assign({}, state);
      newState.checkins = action.payload;
      return newState;
    case GET_SAVED:
      newState = Object.assign({}, state);
      newState.saved = action.payload;
      return newState;
    case GET_COLLECTIONS:
      newState = Object.assign({}, state);
      newState.collections = action.payload;
      return newState;
    default:
      return state;
  }
};

export default profileReducer;
