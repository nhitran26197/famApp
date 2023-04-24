import { Wrapper } from "@googlemaps/react-wrapper";
import GetCoordinates from "./getCoordinates";
import React from "react";

function Map({ refLat, refLng }) {
  const center = {
    lat: 40.68018796966656,
    lng: -74.00422464026019,
  };
  const zoom = 6;

  //@ts-ignore
  return (
    <div>
      <Wrapper apiKey={"AIzaSyCecWQ01w2hL3sX2XNdjBVsL0KA9Yln4Hs"}
            version="beta"
            libraries={["marker"]}>
        <GetCoordinates
          center={center}
          zoom={zoom}
          refLat={refLat}
          refLng={refLng}
        />
      </Wrapper>
    </div>
  );
}

export default Map;
