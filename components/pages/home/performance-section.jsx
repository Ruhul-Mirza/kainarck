"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Cpu,
  Database,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { HovermeButton } from "@/components/ui/HovermeButton";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import TechStack from "@/components/ui/TechStack";

const performanceStrategies = [
  { name: "Web Development Projects", progress: 92, icon: TrendingUp, color: "#8B5CF6" },
  { name: "Mobile App Development", progress: 78, icon: Cpu, color: "#10B981" },
  { name: "SEO Optimization", progress: 85, icon: Zap, color: "#F59E0B" },
  { name: "Website Rebranding", progress: 88, icon: Shield, color: "#3B82F6" },
  { name: "Client Satisfaction", progress: 95, icon: TrendingUp, color: "#EC4899" },
  { name: "Digital Marketing ROI", progress: 82, icon: Database, color: "#10B981" },
];

const serviceCards = [
  { title: "Web Development", description: "Build responsive, scalable, and secure websites using modern web technologies." },
  { title: "App Development", description: "Create seamless cross-platform mobile apps tailored to user needs." },
  { title: "UI/UX Design", description: "Design user-first interfaces with accessibility and aesthetics in mind." },
  { title: "SEO & Marketing", description: "Enhance online visibility with advanced SEO strategies and growth marketing." },
  { title: "Cloud Services", description: "Deploy scalable cloud infrastructure and CI/CD pipelines." },
  { title: "Maintenance & Support", description: "Ongoing technical support and optimization services." },
];

const ServiceCard = ({ title, description }) => (
  <article
    role="listitem"
    className="relative p-5 border hover:cursor-pointer rounded-xl bg-gradient-to-b from-[#e0bbff]/10 to-[#c084fc]/10 dark:from-[#3b0764]/10 dark:to-[#a855f7]/10
              border-purple-500/10 dark:border-purple-100/15
              "
  >
    {/* <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} /> */}
    <h3 className="text-neutral-600 dark:text-purple-500 text-base font-semibold mb-1">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
  </article>
);

const AnimatedPerformanceItem = ({ name, progress, color }) => {
  return (
    <article
      role="listitem"
      tabIndex={0}
      className={cn("flex flex-col items-center p-2 rounded-2xl")}
    >
      <div className="w-[72px] h-[72px]">
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={progress}
          className="w-full h-full"
          gaugePrimaryColor={color}
          gaugeSecondaryColor={"rgba(0,0,0,0.05)"}
        />
      </div>
      <h3 className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
        {name}
      </h3>
    </article>
  );
};

export default function PerformanceAndServicesSection() {
  return (
    <section
      aria-label="Performance and Services Overview"
      className="w-full overflow-hidden"
    >
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <header className="mb-12 space-y-4 max-w-2xl">
          <BoxReveal boxColor="oklch(62.7% .265 303.9)">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Performance & Services
            </h1>
          </BoxReveal>
          <BoxReveal boxColor="oklch(62.7% .265 303.9)">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From scalable web apps to mobile solutions, explore how our expert team drives performance and delivers innovative digital services.
            </p>
          </BoxReveal>
        </header>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Performance Column */}
          <section
            aria-label="Performance Highlights"
            className="flex-[2]"
          >
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Our Performance Metrics
            </h2>
            <div className="grid grid-cols-2 h-full sm:grid-cols-3 items-center gap-4 p-6 rounded-3xl relative border
              bg-gradient-to-b from-[#e0bbff]/10 to-[#c084fc]/20 dark:from-[#3b0764]/10 dark:to-[#a855f7]/10
              border-purple-500/10 dark:border-purple-500/15
              
              backdrop-blur-md overflow-hidden">
              {/* <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                className="from-transparent via-blue-500 to-transparent"
              /> */}
              {performanceStrategies.map(({ name, progress, color }, index) => (
                <AnimatedPerformanceItem key={index} name={name} progress={progress} color={color} />
              ))}
            </div>
          </section>

          {/* Services Marquee */}
          <section
            aria-label="Offered Services"
            className="flex-[1] relative"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                What We Offer
              </h2>
               <InteractiveHoverButton>View Services</InteractiveHoverButton>
            </div>
            <div className="relative h-[500px] sm:h-[380px] overflow-hidden rounded-xl" role="list">
              <Marquee pauseOnHover vertical className="[--duration:32s]">
                {serviceCards.slice(0, 3).map((service, idx) => (
                  <ServiceCard key={idx} {...service} />
                ))}
              </Marquee>
              <Marquee pauseOnHover vertical reverse className="[--duration:32s]">
                {serviceCards.slice(3).map((service, idx) => (
                  <ServiceCard key={idx} {...service} />
                ))}
              </Marquee>

              {/* Fade Shadows */}
              {/* <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white dark:from-black pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white dark:from-black pointer-events-none" /> */}
            </div>
          </section>
        </div>
            {/* <TechStack/> */}
      </div>
    </section>
  );
}
