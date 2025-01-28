"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMiddle, setIsMiddle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsMiddle(width > 768 && width <= 1024);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%", // Dynamic height based on screen size
        overflow: "hidden",
        background: "black",
      }}
    >
      <ReactPlayer
        url="/assets/video/bg-video.mp4" // Ubah dengan path video Anda (lokal atau URL online)
        playing
        loop
        muted
        playsinline
        width={isMobile ? "230%" : isMiddle ? "135%" : "200vh"} // Perbesar video
        height={isMobile ? "230%" : isMiddle ? "135%" : "200vh"} // Perbesar video
        // style={{
        //   position: "absolute",
        //   top: isMobile ? "-70%" : isMiddle ? "-30%" : '-70vh', // Sesuaikan posisi untuk menutupi area tengah
        //   right: isMobile ? "-65%" : isMiddle ? "-15%" : '-25%', // Sesuaikan posisi untuk menutupi area tengah
        //   objectFit: "cover",
        // }}
      />
    </div>
  );
};

export default VideoBackground;
