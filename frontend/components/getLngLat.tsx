import React, { useEffect, useRef } from "react";

//@ts-ignore
export default function MapComponent({ center, zoom }) {
  const ref = useRef();
  useEffect(() => {
    //@ts-ignore
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    const myLatlng = { center };
    //@ts-ignore
    let infoWindow = new window.google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });

    infoWindow.open(map);

    // Configure the click listener.
    //@ts-ignore
    map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();

      // Create a new InfoWindow.
      //@ts-ignore
      infoWindow = new window.google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      const latLngObj = mapsMouseEvent.latLng.toJSON();
      infoWindow.setContent(JSON.stringify(latLngObj, null, 2));

      infoWindow.open(map);

      const lat = latLngObj.lat; // Get the latitude
      const lng = latLngObj.lng; // Get the longitude
      console.log("Latitude: " + lat);
      console.log("Longitude: " + lng);

      // @ts-ignore
      declare global {
        interface Window {
          initMap: () => void;
        }
      }
    });
  });

  // @ts-ignore
  return <div style={{ width: "800px", height: "800px" }} ref={ref} id="map" />;
}
