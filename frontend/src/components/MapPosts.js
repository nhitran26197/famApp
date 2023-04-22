import React, { useEffect, useRef, useState } from "react";

//@ts-ignore
export default function MapComponent() {
  const ref = useRef();
  const [center, setCenter] = useState({
    lat: 40.68018796966656,
    lng: -74.00422464026019,
  });

  let posts = [];
  useEffect(() => {
    fetch("http://localhost:3030/getPosts")
      .then((result) => {
        //result.json();
        return result.json();
      })
      .then((data) => {
        posts = data;
      })
      .then(() => {
        console.log(posts[0].location_lat);
        console.log(posts[0]);
        setCenter({ lat: posts[0].location_lat, lng: posts[0].location_long });
        console.log(center);
        const map = new window.google.maps.Map(ref.current, {
          center,
          zoom: 8,
        });
        let arrPost = [];
        for (let i = 0; i < posts.length; i++) {
          arrPost[i] = {
            position: new window.google.maps.LatLng(
              posts[i].location_lat,
              posts[i].location_long
            ),
            icon: {
              url: posts[i].picture,
              scaledSize: new window.google.maps.Size(60, 80),
            },
          };
        }
        for (let i = 0; i < arrPost.length; i++) {
          //@ts-ignore
          new window.google.maps.Marker({
            position: arrPost[i].position,
            //@ts-ignore
            icon: arrPost[i].icon,
            map: map,
          });
        }
      })

      .catch((err) => console.log(err));
  }, []);

  //@ts-ignore
  return (
    <div
      style={{ width: "800px", height: "900px", borderRadius: "20px" }}
      ref={ref}
      id="map"
    />
  );
}
