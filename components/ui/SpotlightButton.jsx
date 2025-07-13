"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function SpotlightButton({ text = "Hover me",className,innerclassName }) {
  return (
    <div style={{ transform: "none" }}>
      <button className={cn("group relative inline-block cursor-pointer rounded-3xl dark:bg-transparent p-px font-semibold leading-6 text-white no-underline dark:shadow-2xl shadow-zinc-900",className)}>
        <span className="absolute inset-0 py-4 overflow-hidden rounded-xl">
         <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(168,85,247,0.6)_0%,rgba(168,85,247,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
</span>

        </span>
        <div className={cn(`relative z-10 flex items-center space-x-2 rounded-3xl dark:bg-transparent bg-purple-500 px-5 ring-1 ring-white/10`,innerclassName)}>
          <span>{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </div>
  );
}
