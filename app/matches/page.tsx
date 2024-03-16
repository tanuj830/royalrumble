import React from "react";
import { fights } from "@/constants/matches";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Matches = () => {
  return (
    <div className="px-5 pt-5 pb-10">
      <div className="grid grid-cols-1 gap-4">
        {fights.map((fight, index) => (
          <Card
            className=" border-muted shadow-xs shadow-primary border "
            key={fight.id}
          >
            <CardContent className=" aspect-square p-6">
              <div className="relative">
                <img
                  src="/live.svg"
                  className="absolute w-10 h-10 top-0 left-2"
                  alt=""
                />
                <img
                  src={fight.img}
                  className="w-full h-[50vw] object-cover object-top rounded-lg overflow-hidden"
                  alt=""
                />
              </div>
              <div className=" mt-3 flex flex-col gap-2 ">
                <span className="text-md font-semibold ">{fight.title}</span>
                <Button>
                  <Link href="#">Explore Fight</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Matches;
