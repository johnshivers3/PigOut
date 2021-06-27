import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import './Maps.css'
const containerStyle = {
  width: "800px",
  height: "400px",
};

export const Map = ({ coordinates }) => {
  const { latitude: lat, longitude: lng } = coordinates;
  const position = { lat, lng };
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={19}
        marker={position}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
