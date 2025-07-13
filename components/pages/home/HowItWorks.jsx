import React from "react";
import { Users } from "lucide-react";
import { AnimatedBeamDemo } from "./UserLoop";

const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="w-full py-20 md:py-32 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 dark:from-purple-950 dark:via-muted/20 dark:to-purple-950/20 relative overflow-hidden isolate"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(88,71,105,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(88,71,105,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(213,50,250,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(213,50,250,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            About Our Journey & Approach
          </h2>
          <p className="max-w-2xl mt-4 text-muted-foreground md:text-lg">
            We blend creativity, strategy, and technology to build meaningful digital experiences that deliver real-world impact.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
  {/* Our Story Card */}
  <div className="group relative rounded-3xl bg-white/5 dark:bg-white/5 border border-white/10 backdrop-blur-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-12 flex flex-col justify-between">
    <div className="flex items-start mb-8">
      <div className="p-4 rounded-xl bg-gradient-to-tr from-purple-400 via-purple-500 to-purple-600 shadow-lg">
        <Users className="w-6 h-6 text-white" />
      </div>
      <div className="ml-6">
        <p className="uppercase tracking-wide text-sm text-purple-500 dark:text-purple-300 font-semibold mb-2">
          Who We Are
        </p>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
          Our Story
        </h3>
      </div>
    </div>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      From a boutique studio to a global digital partner, our growth has been powered by dedication, curiosity, and craftsmanship. We craft digital experiences that blend performance with personality.
    </p>
  </div>

  {/* Our Approach Card */}
  <div className="group relative rounded-3xl bg-white/5 dark:bg-white/5 border border-white/10 backdrop-blur-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-12 flex flex-col justify-between">
    <div className="mb-8">
      <AnimatedBeamDemo />
    </div>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      We bridge your vision with scalable, future-ready technology. Our mission is to transform challenges into opportunities with thoughtful strategy and engineering precision.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default WhoWeAre;
