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
import { Element } from "react-scroll";
import { Button } from "@/components/ui/button";

const RefferalPage = () => {
  const items = [
    { icon: "/path/to/icon1.png", text: "Save 10% on NeuroBot Fees" },
    {
      icon: "/path/to/icon2.png",
      text: "Receive up to 50% of the fees from referrals",
    },
    {
      icon: "/path/to/icon3.png",
      text: "Accumulate 5 layers of referrals. Earn from your referral's referrals!",
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
    <Element name="pnls">
      <section className="pt-[50px] md:pt-[75px] xl:pt-[100px] 2xl:pt-[124px] mb-10">
        <div className="container" ref={containerRef}>
          <TitleSection2
            title={"Our Top-Tier Referral Program"}
            details={"Claim quickly and get all the benefits quickly"}
            titleClassName="max-w-[600px]"
            detailsClassName="max-w-[700px]"
          />
          <div className="relative mt-[63px] xl:mt-[73px] 2xl:mt-[93px]">
            <div className="relative bg-[#121B21] rounded-theme px-[20px] xl:px-[40px] py-[25px] xl:py-[45px] min-h-[300px] flex flex-col justify-between items-center has_fade_anim">
              {/* decoration */}
              <div className="absolute -top-8 left-0 bg-[#121B21] flex justify-center items-center w-16 h-10 rounded-t-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-pin"
                >
                  <path d="M12 17v5" />
                  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <div className="absolute z-10 top-[-.5px] left-0 bg-[#121B21] w-16 h-4" />

              <div className="flex flex-col mt-10 md:flex-row justify-center lg:items-center md:items-start items-center gap-[30px]">
                {items.slice(0, 3).map((item, i) => (
                  <div
                    key={`process_item-${i}`}
                    className="[&>img]:last:hidden flex justify-between items-center gap-[30px]"
                  >
                    <div className="flex flex-col lg:flex-row gap-[20px] items-center text-center lg:text-start max-w-[350px]">
                      {item.icon && (
                        <span className="w-[50px] 2xl:w-[70px] min-w-[50px] 2xl:min-w-[70px] h-[50px] 2xl:h-[70px] rounded-full bg-primary-100 inline-flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-check text-[#20E68D]"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                      )}
                      <h3 className="text-[18px] 2xl:text-[24px] leading-tight !text-white max-w-[180px] 2xl:max-w-full">
                        {item.text}
                      </h3>
                    </div>
                    <Image
                      width={72}
                      height={15}
                      src="/assets/imgs/shape/shape-s-49.png"
                      className="hidden xl:block rtl_y fill-[#fff]"
                      alt="shape-image"
                    />
                  </div>
                ))}
              </div>

              {/* button */}
              <div className="w-full flex justify-center mt-[40px]">
                <Button
                  onClick={() => {
                    window.open(
                      "https://t.me/NeuroAITradingBot?start=0d06c9",
                      "_blank"
                    );
                  }}
                  className="mt-[10px] has_fade_anim"
                  variant="primary2"
                >
                  <span className="btn-span" data-text={"Claim"}>
                    Claim Refferal Link
                  </span>
                </Button>
              </div>
            </div>

            {/* decorative */}
            <div className="has_fade_anim absolute -z-10 -top-6 left-14 bg-[#20E68D] w-16 h-10 rounded-t-md" />
            <div className="has_fade_anim absolute -z-20 -top-4 left-28 bg-[#257450] w-16 h-10 rounded-t-md" />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default RefferalPage;
