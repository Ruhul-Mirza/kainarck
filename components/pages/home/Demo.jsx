"use client";

import React from "react";

const Card = ({ title, description, imgSrc, extraClass = "" }) => {
  return (
    <div
      className={`relative border border-neutral-400/30 text-white rounded-2xl p-6 overflow-hidden dark:shadow-2xl${extraClass}`}
    >
      <div className="max-w-sm z-10 relative">
        <h2 className="text-xl md:text-2xl dark:text-neutral-200 text-neutral-950 lg:text-3xl font-semibold tracking-tight mb-3">
          {title}
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-200">{description}</p>
      </div>
    </div>
  );
};

export default function Simple3DCardLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container py-12 mx-auto p-6">
      {/* First Card */}
      <div className="lg:col-span-2">
        <Card
          title="Gippity AI powers the entire universe"
          description="With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers."
          imgSrc="/linear.webp"
          extraClass="min-h-[500px] lg:min-h-[300px]"
        />
      </div>

      {/* Second Card */}
      <Card
        title="No shirt, no shoes, no weapons."
        description="If someone yells “stop!”, goes limp, or taps out, the fight is over."
        extraClass="bg-purple-800 min-h-[300px]"
      />

      {/* Third Card */}
      <div className="lg:col-span-3">
        <Card
          title="Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!"
          description="With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers."
          imgSrc="/linear.webp"
          extraClass="bg-blue-900 "
        />
      </div>
    </div>
  );
}
