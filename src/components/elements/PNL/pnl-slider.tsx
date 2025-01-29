"use client";

import { useRef } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import RattingStar2 from "../rating/ratting-star2";
import { Element } from "react-scroll";

type Props = {
  pnl: {
    data: {
      title: string;
      details: string;
      items: {
        image: string;
      }[];
    };
  };
};

const PNLSlider = ({ pnl }: Props) => {
  const { title, details, items } = pnl.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <Element name="pnls">
      <section className="pt-[50px] md:pt-[75px] xl:pt-[100px] 2xl:pt-[124px] my-10">
        <div className="container" ref={containerRef}>
          <TitleSection2
            title={title}
            details={details}
            titleClassName="max-w-[600px]"
            detailsClassName="max-w-[700px]"
          />
          <Carousel
            dir="ltr"
            opts={{
              duration: 60,
              loop: true,
            }}
            className="w-full mt-[33px] xl:mt-[43px] 2xl:mt-[63px] mx-auto has_fade_anim relative"
          >
            <CarouselContent className="gap-[14px] has_fade_anim">
              {items &&
                items.length &&
                items.map((item, i) => (
                  <CarouselItem
                    key={`pnl_item-${i}`}
                    className="md:basis-[48%] lg:basis-[32%] cursor-grab"
                  >
                    <Image
                      src={item.image}
                      alt={"pnl" + i}
                      width={500}
                      height={350}
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>

          {/* left overlay */}
          <div className="absolute inset-y-0 left-0 w-1/6 lg:w-1/2 bg-gradient-to-r from-[#05111A] to-transparent pointer-events-none" />
          {/* right overlay */}
          <div className="absolute inset-y-0 right-0 w-1/6 lg:w-1/2 bg-gradient-to-l from-[#05111A] to-transparent pointer-events-none" />
          </Carousel>
        </div>
      </section>
    </Element>
  );
};

export default PNLSlider;
