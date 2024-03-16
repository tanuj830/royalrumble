"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { fights } from "@/constants/matches";
import { Button } from "@/components/ui/button";

const Match = ({ params }: any) => {
  const fight: any = fights.filter((f) => {
    return f.id === params.slug;
  });
  const match = fight[0];
  return (
    <div>
      {match ? (
        <div>
          <div className="relative">
            <img
              className="shadow-lg shadow-muted fade "
              src={match.img}
              alt=""
            />
            <div className="absolute bottom-4 w-full flex justify-center items-center ">
              <Button>Scheduled on 16 Mar 2024</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center h-full w-full items-center">
          <span>Nothing to show</span>
        </div>
      )}
    </div>
  );
};

export default Match;
