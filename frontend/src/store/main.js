import { csrfFetch } from "./csrf";

const GET_LOCATION = "main/GET_LOCATION";

export const locationAction = (location) => ({
  type: GET_LOCATION,
  location: location
})

export const getLocation = (dispatch) => {
  const success = (location) => {
    return {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
  };

  const error = () => ({ lat: 39.739071, lng: -75.539787 });

  const location =  navigator.geolocation.getCurrentPosition(success, error);

  dispatch(locationAction(location))

};

const initialState = { };

const mainReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_LOCATION:
      newState = state;
      newState.location  = action.location
      return newState
    default:
      return state;
  }
};

export default mainReducer;
