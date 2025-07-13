"use client";

import React from "react";

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden animate-aurora-drift bg-[radial-gradient(ellipse_at_20%_30%,rgba(138,43,226,0.8)_0%,rgba(138,43,226,0)_60%),radial-gradient(ellipse_at_80%_50%,rgba(0,191,255,0.7)_0%,rgba(0,191,255,0)_70%),radial-gradient(ellipse_at_50%_80%,rgba(50,205,50,0.6)_0%,rgba(50,205,50,0)_65%),linear-gradient(135deg,#000000_0%,#0a0520_100%)] bg-blend-overlay bg-blend-screen bg-blend-hard-light -z-20 rounded-2xl">
      <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-grid-shift bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_40px),repeating-linear-gradient(-45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_60px)]" />
      <div className="absolute inset-0 animate-aurora-pulse bg-[radial-gradient(circle_at_center,transparent_70%,rgba(10,5,32,0.9)_100%)]" />
    </div>
  );
};

export default GradientBackground;
