"use client";
import { useRef } from "react";
import Counter2 from "./counter2";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const CounterWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className="mt-[33px] xl:mt-[43px] 2xl:mt-[63px] has_fade_anim"
    >
      <Counter2
        counter={[
          {
            number: 1000000,
            unit: "$",
            text: "Trade Volume",
          },
          {
            number: 100,
            unit: "",
            text: "Total Users",
          },
          {
            number: 200,
            unit: "",
            text: "Total Trades",
          },
        ]}
      />
    </div>
  );
};

export default CounterWrapper;
