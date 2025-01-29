"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const VideoViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <>
      <section className="pt-[50px] md:pt-[75px] xl:pt-[100px] 2xl:pt-[124px] mb-10">
        <div className="container" ref={containerRef}>
          <div className="relative mt-[63px] xl:mt-[73px] 2xl:mt-[93px]">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src="/assets/video/ads-video.mp4" type="video/mp4" />
            </video>

            {/* left overlay */}
            <div className="absolute inset-y-0 left-0 w-1/6 lg:w-1/2 bg-gradient-to-r from-[#05111A] to-transparent pointer-events-none" />
            {/* right overlay */}
            <div className="absolute inset-y-0 right-0 w-1/6 lg:w-1/2 bg-gradient-to-l from-[#05111A] to-transparent pointer-events-none" />
            {/* top overlay */}
            <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-[#05111A] to-transparent pointer-events-none" />
            {/* bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-[#05111A] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoViewer;
