import React from "react";
import Lottie from "react-lottie";
import { useMedia } from "react-use";

export default function LottieAnimation({ lotti = {}, width = 300, height = 300 }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const isMobile = useMedia('(max-width: 970px)');

  return (
    <div style={{ marginTop: isMobile ? 'calc(50vh - 250px)' : 'calc(50vh - 150px)' }}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};