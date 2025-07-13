"use client";

import React from "react";
import { Shield } from "lucide-react";

const WaveCard = ({ title, discription, icon }) => {
    return (
        <div className="relative w-[240px] h-[330px] rounded-2xl overflow-hidden shadow-[0px_8px_28px_-9px_rgba(0,0,0,0.45)] bg-transparent mx-auto my-12 playing">
            <div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave1"></div>
            <div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave2"></div>
            <div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave3"></div>

            <div className="text-center text-white font-semibold text-lg absolute top-[5.6em] left-0 right-0">
                {icon}
                {title}
                <div className="text-sm font-light mt-2 lowercase">{discription}</div>
            </div>
        </div>
    );
};

export default WaveCard;

// Add keyframes in global.css or Tailwind config if needed
