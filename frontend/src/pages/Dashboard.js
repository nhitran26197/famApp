import React from "react";
import NavBar from "../components/Navbar";
import { Wrapper } from "@googlemaps/react-wrapper";
import MapComponent from "../components/MapComponent";
import Tree from "../components/Tree";

export default function Dashboard() {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };
  const zoom = 13;

  return (
    <div className="flex flex-col">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-row">
        <div className="w-6/12">
            <Tree />
        </div>
        <div>
          <Wrapper apiKey={"AIzaSyCecWQ01w2hL3sX2XNdjBVsL0KA9Yln4Hs"}>
            <MapComponent center={center} zoom={zoom} />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
