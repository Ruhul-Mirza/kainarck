import React from "react";
import { ChevronRight } from "lucide-react";

function CallToAction() {
  return (
    <div className="py-36 px-3">
      <div className="z-10 mt-4 flex flex-col items-center text-center text-primary gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
          Ready for a speed up?
        </h2>
        <p className="mt-3 text-xl leading-8 text-black/80 dark:text-white/50">
          Start building with a free account. Speak to an expert for your{" "}
          <span className="text-[var(--color-one)] font-semibold">Enterprise</span>{" "}
          needs.
        </p>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full justify-center">
        <a
          href="/docs"
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 group mt-4 rounded-[2rem] px-6"
        >
          Get started in 60 seconds
          <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </a>

        <a
          href="https://cal.com/aiden"
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-11 group mt-4 rounded-[2rem] px-6"
        >
          Contact Sales
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
