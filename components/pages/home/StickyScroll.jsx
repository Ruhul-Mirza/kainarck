"use client";
import { StickyScrollLenis } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import CallToAction from "../CallToAction";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "Track every modification in real time. Say goodbye to version control chaos and embrace real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Never stress about version control again. Our platform ensures you're always working on the latest version.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "You’re always synced and aligned — no more confusion or duplication. Always real-time, always organized.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
        Running out of content
      </div>
    ),
  },
];

export function StickyScrollRevealLenisDemo() {
  return (

    <>

      <div className="h-[20rem] rounded-t-3xl flex items-center justify-center border-t-2 border-purple-500">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-500">
            Kainarck
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors duration-500">
            Professional Web Solutions
          </p>
        </div>
      </div>
      <StickyScrollLenis />
      <div className="h-[25rem] rounded-b-3xl flex items-center justify-center  border-b-2 border-purple-500">
      <CallToAction/>
      </div>
    </>
  );
}
