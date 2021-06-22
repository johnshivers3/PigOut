import { csrfFetch } from "./csrf";

const GET_LOCATION = "main/GET_LOCATION";

export const getLocation = () => {
  const success = (location) => {
    return {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
  };

  const error = () => ({ lat: null, lng: null });

  const location =  navigator.geolocation.getCurrentPosition(success, error);

  return {
    type: GET_LOCATION,
    location
  }
};

const initialState = { location: null };

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
