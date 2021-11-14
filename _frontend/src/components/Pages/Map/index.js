import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Maps.css";
const containerStyle = {
  width: "100%",
  height: "600px",
  paddingBottom: "3%",
  border: "10px solid white",
  borderLeft: "5px solid white",
  margin: "0",
};

export const Map = ({ coordinates }) => {
  const { latitude: lat, longitude: lng } = coordinates;
  const position = { lat, lng };
  const animation = { animation: "google.maps.Animation.DROP" };
  return (
    <div id="google-map-wrapper">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={20}
          marker={{ position, animation }}
        >
          <>
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={position} />
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
