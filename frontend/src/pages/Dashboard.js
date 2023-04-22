import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Wrapper } from "@googlemaps/react-wrapper";
import MapComponent from "../components/MapComponent";
import Tree from "../components/Tree";
import trees from "../treenew.json";

export default function Dashboard() {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };
  const zoom = 13;
  const [nodes, setNodes] = useState(null);
  useEffect(() => {
    console.log("fetching");
    fetch("http://localhost:3010/gettree")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("data");
        setNodes(data);
        console.log("sent data");
      });
    console.log("fetched");
  }, []);
  

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
          {nodes ? 
          <Tree shape={nodes} />
          : <div>loading</div>}
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
