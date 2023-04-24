import React from "react";
import NavBar from "../components/Navbar";
import { Wrapper } from "@googlemaps/react-wrapper";
import { MapComponent } from "../components/MapPosts";
import Tree from "../components/Tree";

export default function Dashboard() {
  console.log(localStorage.getItem("user"));
  console.log(localStorage.getItem("email"));

  // const center = {
  //   lat: 37.7749,
  //   lng: -122.4194,
  // };
  // const zoom = 13;

  return (
    <div className="flex flex-col">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-row">
        <div className="w-6/12">
          <div className="flex justify-center">
            <h1 className=" text-2xl font-bold">Family Tree</h1>
          </div>
          <Tree />
        </div>
        <div>
          <Wrapper
            apiKey={"AIzaSyCecWQ01w2hL3sX2XNdjBVsL0KA9Yln4Hs"}
            version="beta"
            libraries={["marker"]}
          >
            <MapComponent />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
