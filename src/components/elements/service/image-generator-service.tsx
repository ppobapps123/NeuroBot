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
import { Element } from "react-scroll";

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
        title: "NOTIFICATION",
        short_description:
          "Enable this option to receive notifications when a new token is detected from PumpFun to Raydium.",
        extra: "",
        color: "bg-orange-500",
        image: "/assets/imgs/icon/new/bell-ring.png",
      },
    },
    {
      slug: "",
      data: {
        title: "AUTO SNIPER",
        short_description:
          "Enable this option to automatically schedule buy token whenever a new token is launched.",
        extra: "",
        color: "bg-green-500",
        image: "/assets/imgs/icon/new/scissors-line-dashed.png",
      },
    },
    {
      slug: "",
      data: {
        title: "BUY TOKEN",
        short_description:
          "Configure buy amount and jito tip for buying each newly launched token.",
        extra: "",
        color: "bg-yellow-500",
        image: "/assets/imgs/icon/new/arrow-right-left.png",
      },
    },
    {
      slug: "",
      data: {
        title: "DEFAULT WALLET",
        short_description:
          "Set default wallet for buying newly launched token.",
        extra: "",
        color: "bg-purple-500",
        image: "/assets/imgs/icon/new/wallet.png",
      },
    },
    {
      slug: "",
      data: {
        title: "FILTER",
        short_description:
          "Fine-tune your notifications by selecting the criteria for tokens.",
        extra: "",
        color: "bg-blue-500",
        image: "/assets/imgs/icon/new/sliders-horizontal.png",
      },
    },
    {
      slug: "",
      data: {
        title: "FILTER CONDITION TYPE",
        short_description: "Choose how the filters are applied:",
        extra:
          "AND: Matches only if all enabled filters are satisfied.| OR: Matches if at least one enabled filter is satisfied.",
        color: "bg-purple-300",
        image: "/assets/imgs/icon/new/hand-coins.png",
      },
    },
    {
      slug: "",
      data: {
        title: "PRICE ALERTS",
        short_description:
          "Stay ahead of the market by enabling price alerts that notify you when a token reaches a specific price threshold.",
        extra: "",
        color: "bg-pink-500",
        image: "/assets/imgs/icon/new/chart-no-axes-combined.png",
      },
    },
    {
      slug: "",
      data: {
        title: "MULTI-NETWORK SUPPORT",
        short_description:
          "Seamlessly trade across multiple Solana-based DEXs, such as Raydium, Orca, or Jupiter, using one unified interface.",
        extra: "",
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
    <Element name="features">
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
              <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-y-[50px] px-[14px] py-[74px] gap-x-2">
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
    </Element>
  );
};

export default ImageGeneratorService;
