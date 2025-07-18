"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// TODO: Improve mobile version to display the image down the corresponding text instead of at the full bottom

export function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-lg border transition-all",
        isOpen
          ? "border-purple-500/10 bg-gradient-to-b from-purple-200/30 to-purple-200/5 dark:border-purple-500/15 dark:from-purple-600/15 dark:to-purple-600/5 dark:shadow-[2px_4px_25px_0px_rgba(248,248,248,0.06)_inset]"
          : "scale-90 border-transparent opacity-50 saturate-0"
      )}
    >
      <div className="flex w-full items-center gap-4 p-4">
        <p className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-purple-500/20 text-neutral-600 dark:bg-purple-500 dark:text-neutral-100">
          {number}
        </p>
        <h2 className="text-left text-xl font-medium text-neutral-800 dark:text-neutral-200">
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-neutral-600 transition-all duration-500 dark:text-neutral-400",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <p className="p-4 text-lg">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className="absolute left-0 top-0 h-1 bg-purple-500"
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
