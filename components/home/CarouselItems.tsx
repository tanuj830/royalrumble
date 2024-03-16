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

export function CarouselItems() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const fights = [
    {
      title: "Manny Pacquioa vs Errol Spence Jr| Boxing Match",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b7e7c2120416045.60b0fcefa2b99.png",
    },
    {
      title: "Manny Pacquioa vs Errol Spence Jr| Boxing Match",
      img: "https://img.freepik.com/premium-psd/mma-fight-sport-flyer-template_524343-457.jpg?size=626&ext=jpg&ga=GA1.1.630556571.1709205587&semt=ais",
    },
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen p-5 overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {fights.map((fight, index) => (
          <CarouselItem key={index} className=" ">
            <div className="p-1">
              <Card className=" border-muted shadow-xs shadow-primary border bg-secondary">
                <CardContent className=" aspect-square p-6">
                  <img
                    src={fight.img}
                    className="w-full h-[50vw] object-cover object-top rounded-lg overflow-hidden"
                    alt=""
                  />
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
