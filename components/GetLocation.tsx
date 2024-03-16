"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const GetLiveLocation = () => {
  const [location, setLocation] = useState("none");

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        showPosition,
        failedToGetPosition
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  };

  function showPosition(position: any) {
    setLocation(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
  }
  function failedToGetPosition(position: any) {
    setLocation("Failed to get live location ");
  }
  return (
    <div>
      <h1>Current location : {location}</h1>
      <button onClick={handleLocation}>get location</button>
    </div>
  );
};

export default GetLiveLocation;
