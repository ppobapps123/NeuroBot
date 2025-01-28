"use client";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "@/content/lottie/trading-animation.json";

const LottieGenerator = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default LottieGenerator;
