import { Wrapper } from "@googlemaps/react-wrapper";
import MapComponent from "./getLngLat";
require("dotenv").config();

function MapPicker() {
  const center = {
    lat: 40.68018796966656,
    lng: -74.00422464026019,
  };
  const zoom = 6;

  return (
    //@ts-ignore
    <Wrapper apiKey={process.env.GOOGLE_API_KEY}>
      <MapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}

export default MapPicker;
