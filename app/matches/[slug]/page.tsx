"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Match = () => {
  const pathname = usePathname();
  return <div>Match: Exploring particular fight with id= {pathname}</div>;
};

export default Match;
