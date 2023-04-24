import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { Wrapper } from "@googlemaps/react-wrapper";
import { MapComponent } from "../components/MapPosts";
import Tree from "../components/Tree";
import newtree from "../treenew.json";

export default function Dashboard() {
  console.log(localStorage.getItem("user"));
  console.log(localStorage.getItem("email"));

  // const center = {
  //   lat: 37.7749,
  //   lng: -122.4194,
  // };
  // const zoom = 13;
  const [nodes, setNodes] = useState(newtree);
  useEffect(() => {
    console.log("fetching");
    fetch("http://localhost:3030/gettree")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("data");
        setNodes(data);
        console.log("sent data");
      })
      .catch((err) => {
        console.log(err);
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
          <Tree shape={nodes} />
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
