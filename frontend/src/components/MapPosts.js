import React, { useEffect, useRef, useState,createRoot } from "react";



function Marker({position, map, children}){
  const markerRef= useRef();
  const rootRef = useRef();


  useEffect(()=>{
    if(!rootRef.current){
      const container = document.createElement('div');
      rootRef.current = createRoot(container);
      markerRef.current = new window.google.maps.marker.AdvancedMarkerView({
        position,
        content: container,
    });
    }
  },[])

  useEffect(()=>{
    rootRef.current.render(children);
    markerRef.current.position = position;
    markerRef.current.map = map;
  },[position, map, children])
}

function MapPosts({map}){
  const [posts, setPosts] = useState(null);

  useEffect(()=>{
    fetch('http://localhost:3030/getPosts').then(res => res.json()).then(data => {
      console.log(data);
      setPosts(data);
    })
  },[])


  return(
    <div>
      {posts && posts.map(([key,post]) => {
        return(
          <Marker key={key} position={{lat:post.location_lat,lng:post.location_long}} map={map}>
            <div className="w-4 bg-black">
              <h2 className="text-white">{post.caption}</h2>
            </div>
          </Marker>
        )
      })}
    </div>
  )
}
    
export default function MapComponent() {
  const ref = useRef();
  const [map, setMap] = useState(null);

  useEffect(()=>{
    setMap(new window.google.maps.Map(ref.current, {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 13,
    }));
  },[])

      
  return (
    <div
      style={{ width: "800px", height: "900px", borderRadius: "20px" }}
      ref={ref}
      id="map">
        {map && <MapPosts map={map}></MapPosts>}
    </div>
  );
}
