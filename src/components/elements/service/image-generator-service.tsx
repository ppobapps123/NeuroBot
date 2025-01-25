"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { delayTime2 } from "@/lib/helper/delayTime";

// types
import { ServiceDetailsType } from "@/types";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import ServiceCard5 from "./card/service-card5";
import ServiceCard1 from "./card/service-card1";
import ServiceCard2 from "./card/service-card2";
import ServiceCard3 from "./card/service-card3";
import ServiceCard4 from "./card/service-card4";
import ServiceCard6 from "./card/service-card6";

type Props = {
  service: {
    data: {
      title: string;
      details: string;
    };
  };
  services: {
    data: ServiceDetailsType;
    slug: string;
  }[];
};

const ImageGeneratorService = ({ service }: Props) => {
  const { title, details } = service.data;
  const services = [
    {
      slug: "",
      data: {
        title: "Powered By AI",
        short_description:
          "With our deep learning model on solana Our AI Agent scan through thousands of on chain data to identify token that matches your requirements as early as it get listed.",
        color: "bg-orange-500",
        image: "/assets/imgs/icon/new/brain.png",
      },
    },
    {
      slug: "",
      data: {
        title: "Fastest Sniping",
        short_description: "Graduated from Pump.fun, optimized for precision.",
        color: "bg-green-500",
        image: "/assets/imgs/icon/new/scissors-line-dashed.png",
      },
    },
    {
      slug: "",
      data: {
        title: "Instant Buy & Sell",
        short_description: "Execute trades seamlessly with the lowest 1% fee.",
        color: "bg-yellow-500",
        image: "/assets/imgs/icon/new/arrow-right-left.png",
      },
    },
    {
      slug: "",
      data: {
        title: "Referral Program",
        short_description: "Earn 50% from fees when you refer others.",
        color: "bg-purple-500",
        image: "/assets/imgs/icon/new/refresh-ccw.png",
      },
    },
    {
      slug: "",
      data: {
        title: "Binary System",
        short_description:
          "Pairing points with unlimited levels for massive growth.",
        color: "bg-blue-500",
        image: "/assets/imgs/icon/new/binary.png",
      },
    },
    {
      slug: "",
      data: {
        title: "Earn Exclusive Rewards",
        short_description: "Collect points and redeem limited rewards.",
        color: "bg-purple-300",
        image: "/assets/imgs/icon/new/hand-coins.png",
      },
    },
    {
      slug: "",
      data: {
        title: "AutoSnip Leveling",
        short_description: "Optimized for lowest Jito tip.",
        color: "bg-pink-500",
        image: "/assets/imgs/icon/new/square-bottom-dashed-scissors.png",
      },
    },
    {
      slug: "",
      data: {
        title: "Anti-MEV Bots",
        short_description: "Secure trades with advanced protection.",
        color: "bg-green-300",
        image: "/assets/imgs/icon/new/shield-check.png",
      },
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-[50px] md:pt-[75px] xl:pt-[100px] 2xl:pt-[124px]">
      <div className="container" ref={containerRef}>
        <TitleSection2
          title={title}
          details={details}
          titleClassName="max-w-[700px]"
          detailsClassName="max-w-[700px]"
        />

        {services && services.length && (
          <div className="mt-[33px] xl:mt-[43px] 2xl:mt-[63px]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-y-[50px] px-[14px] py-[74px] gap-x-2">
              {services.map((item, i) => (
                <div
                  key={item.slug}
                  className="group bg-[#121B21] rounded-theme py-10 cursor-pointer hover:bg-[#24DC87] ease-in-out duration-300"
                >
                  <ServiceCard5 service={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGeneratorService;
