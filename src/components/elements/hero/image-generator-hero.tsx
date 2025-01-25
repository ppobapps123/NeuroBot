"use client";

import { useRef } from "react";
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
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="relative pt-[121px] xl:pt-[151px] 2xl:pt-[231px] pb-[63px] lg:pb-[93px] xl:pb-[113px]">
      <div className="absolute select-none w-full h-full top-0 start-0 before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:start-0 before:bg-gradient-180 before:from-[#05111900] before:from-0% before:to-[#051119] before:to-[129.9%]">
        <Image
          width={1920}
          height={920}
          src="/assets/imgs/shape/shape-s-33.png"
          className="object-cover h-[90%]"
          alt="bg image"
        />
      </div>
      <div
        className="container relative z-[2] text-center lg:pb-[50px] lg:pt-[40px] pb-[30px] pt-[40px]"
        ref={containerRef}
      >
        <h1
          dangerouslySetInnerHTML={markdownify(title)}
          className="text-[34px] md:text-[50px] xl:text-[70px] 2xl:text-[110px] max-w-[410px] md:max-w-[610px] xl:max-w-[810px] 2xl:max-w-[1300px] mx-auto !font-bold !leading-[1.09] [&>span]:bg-gradient-160 [&>span]:from-[#C581FB] [&>span]:to-[#24DC87] [&>span]:to-[71.11%] [&>span]:bg-clip-text [&>span]:text-transparent [&>img]:inline-block [&>img]:-me-[20px] xl:[&>img]:-me-[30px] 2xl:[&>img]:-me-[50px] [&>img]:w-[74px] md:[&>img]:w-[94px] xl:[&>img]:w-[104px] 2xl:[&>img]:w-[174px] [&>img]:rtl_y has_fade_anim"
        />
        <p
          className="mt-[20px] text-[20px] 2xl:text-[24px] leading-[1.33] max-w-[530px] 2xl:max-w-[760px] mx-auto has_fade_anim"
          data-delay="0.30"
        >
          {details}
        </p>
        <Button
          variant="primary2"
          size="sm"
          onClick={() => {
            window.open('https://t.me/NeuroAITradingBot?start=0d06c9', '_blank')
          }}
          className="border border-transparent hover:border-[#41494D] mt-5"
        >
          <span className="btn-span" data-text="Start">
            Get Started
          </span>
        </Button>
      </div>
    </section>
  );
};

export default ImageGeneratorHero;
