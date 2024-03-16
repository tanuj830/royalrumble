"use client";
import Image from "next/image";
import React from "react";
import GetLocation from "../components/GetLocation";
import Navbar from "@/components/home/Navbar";
export default function Home() {
  const [showMap, setShowMap] = React.useState(false);
  const [lat, setLat] = React.useState(0);
  const [long, setLong] = React.useState(0);

  function showposition(position: any) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  const handleLocation = () => {
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition(showposition);
    }
  };
  return <main>hello</main>;
}
