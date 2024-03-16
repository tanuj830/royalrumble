"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { fights } from "@/constants/matches";
import { Button } from "@/components/ui/button";
import { HobbyKnifeIcon, PersonIcon } from "@radix-ui/react-icons";

const Match = ({ params }: any) => {
  const fight: any = fights.filter((f) => {
    return f.id === params.slug;
  });
  const match = fight[0];
  return (
    <div className="mb-20">
      {match ? (
        <div>
          <div className="relative">
            <img
              className="shadow-lg shadow-muted fade "
              src={match.img}
              alt=""
            />
            <div className="absolute bottom-4 w-full flex justify-center items-center gap-2">
              <Button>Scheduled on 16 Mar 2024</Button>
              <Button variant={"light"} className="">
                Join Room
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center p-5">
            <div>
              {/* team a */}
              <PersonIcon width={30} height={30} />
              {match.teamA.map((p: any) => (
                <div>
                  <div className="flex justify-center items-center"></div>
                  <h6 className="text-sm mt-2">{p.player.name}</h6>
                </div>
              ))}
            </div>
            <div>
              <span className="text-primary font-bold text-2xl">VS</span>
            </div>
            <div>
              {/* team b */}
              <PersonIcon width={30} height={30} />
              {match.teamB.map((p: any) => (
                <div>
                  <div className="flex justify-center items-center"></div>
                  <h6 className="text-sm mt-2">{p.player.name}</h6>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5">
            <label className="uppercase text-sm">description</label>
            <p className="text-md text-muted-foreground mt-1">{match.disp}</p>
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
