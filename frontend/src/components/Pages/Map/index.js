import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "400px",
};



export const Map = ({ coordinates }) => {
  const { latitude:lat, longitude:lng } = coordinates;
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={{lat,lng}} zoom={19}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
