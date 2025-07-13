import React from 'react';
import { Users, Target } from 'lucide-react';
import { NumberTicker } from '@/components/magicui/number-ticker';
// import { Logos } from './IconCloud';
import { AnimatedBeamDemo } from './UserLoop';

const WhoWeAre = () => {
  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-20">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Our Story Card */}
              <div className="relative group p-6 sm:p-8 rounded-lg transition-transform duration-300 bg-white border border-gray-200 hover:shadow- dark:bg-white/[0.01] dark:border-white/10 dark:hover:bg-white/[0.05]">

                {/* Arrow Icon - Top Right */}
                {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300 text-purple-600 dark:text-purple-400 text-xl font-semibold">
                   <div className="p-3 rounded-xl mr-4 bg-purple-100 dark:bg-purple-500/20">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div> */}


                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="p-2.5 rounded-xl mr-4 bg-purple-100 dark:bg-purple-500/20">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Our Story
                  </h3>
                </div>

                {/* Body */}
                <p className="text-base leading-relaxed text-neutral-500 dark:text-gray-300">
                  We are a passionate collective of innovators, designers, and technologists united by our commitment to creating digital solutions that make a meaningful impact.
                </p>
              </div>

              {/* Our Approach Card */}
              <div className="group p-6 sm:p-8 rounded-xl transition-transform duration-300 bg-white border border-gray-200 dark:bg-white/[0.01] dark:border-white/10 dark:hover:bg-white/[0.05]">
                <AnimatedBeamDemo />
                
                <p className="text-base leading-relaxed text-neutral-500 dark:text-gray-300">
                  We bridge your ideas with cutting-edge technology.
                  Our mission is to turn your business challenges into scalable, future-ready solutions by combining your vision with our engineering excellence.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full">
              <div className="relative p-6 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-purple-50/50 border border-purple-200/50 shadow-xl dark:from-white/[0.05] dark:to-white/[0.02] dark:border-white/10">
                {/* Floating Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="p-6 rounded-full bg-purple-500/20 dark:bg-purple-500">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="text-center pt-12 sm:pt-16">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    Excellence in Every Detail
                  </h3>
                  <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
                    With a proven track record of delivering exceptional results, we combine technical expertise with creative vision.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl md:text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                        <NumberTicker value={50} duration={2000} />+
                      </div>
                      <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                        <NumberTicker value={12000} duration={2000} />+
                      </div>
                      <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Coding Hours
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                        <NumberTicker value={100} duration={2000} />%
                      </div>
                      <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Satisfaction
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;






