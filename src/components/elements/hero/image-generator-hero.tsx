"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { markdownify } from "@/lib/helper/convert";

// components
import Generator1 from "../generator/generator1";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Element } from "react-scroll";
import Counter2 from "../counter/counter2";
import ReactPlayer from "react-player";
import VideoBackground from "./videoBackground";

type Props = {
  hero: {
    data: {
      title: string;
      details: string;
    };
  };
};

const ImageGeneratorHero = ({ hero }: Props) => {
  const { title, details } = hero.data;
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <Element name="home">
      <section className="relative pt-[121px] xl:pt-[151px] 2xl:pt-[231px] pb-[63px] lg:pb-[93px] xl:pb-[113px] h-[100vh]">
        {/* <div className="absolute select-none w-full h-full top-0 start-0 before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:start-0 before:bg-gradient-180 before:from-[#05111900] before:from-0% before:to-[#051119] before:to-[129.9%]">
          <Image
            width={1920}
            height={920}
            src="/assets/imgs/shape/shape-s-33.png"
            className="object-cover h-[90%]"
            alt="bg image"
          />
        </div> */}
        <div
          className="w-full h-full  flex justify-center items-center relative z-[2] text-center lg:pb-[50px] lg:pt-[40px] pb-[30px] pt-[40px]"
          ref={containerRef}
        >
          <div>
            <h1
              dangerouslySetInnerHTML={markdownify(title)}
              className="text-[34px] md:text-[50px] xl:text-[70px] 2xl:text-[110px] max-w-[410px] md:max-w-[610px] xl:max-w-[810px] 2xl:max-w-[90%] mx-auto !font-bold !leading-[1.09] [&>img]:inline-block [&>img]:-me-[20px] xl:[&>img]:-me-[30px] 2xl:[&>img]:-me-[50px] [&>img]:w-[74px] md:[&>img]:w-[94px] xl:[&>img]:w-[104px] 2xl:[&>img]:w-[174px] [&>img]:rtl_y has_fade_anim"
            />

            <p
              className="mt-[20px] text-[20px] 2xl:text-[24px] leading-[1.33] max-w-[530px] 2xl:max-w-[760px] mx-auto has_fade_anim"
              data-delay="0.30"
            >
              {details}
            </p>
            <Button
              variant={"primary2"}
              size="sm"
              onClick={() => {
                window.open(
                  "https://t.me/NeuroAITradingBot?start=0d06c9",
                  "_blank"
                );
              }}
              className="border bg-[#3390EC] rounded-full text-white border-transparent mt-5"
            >
              <div>
                <div
                  className="flex justify-between items-center w-fit gap-2 relative p-0 transition-transform duration-500 origin-origin-1 transform transform-style-3d before:absolute before:top-full before:left-0 before:w-full before:h-full before:content-[attr(data-text)] before:transition-colors before:duration-500 before:transform before:-rotate-x-90 before:origin-origin-1 before:text-center group-hover:transform group-hover:text-inherit group-hover:rotate-x-90 group-hover:-translate-y-[2px]"
                  data-text="Start Trading"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-8 h-8 text-white fill-white hover:fill-[#c8c8c8]"
                    >
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </div>
                  <div>
                    <span>Try on Telegram</span>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ImageGeneratorHero;
