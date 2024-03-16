import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "../ui/button";
import { fights } from "@/constants/matches";
export function CarouselItems() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen p-5 overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="  ">
        {fights.map((fight, index) => (
          <CarouselItem key={index} className=" ">
            <div className="p-1">
              <Card className=" border-muted shadow-xs shadow-primary border ">
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
                    <span className="text-md font-semibold ">
                      {fight.title}
                    </span>
                    <Button>
                      <Link href="#">Explore Fight</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
