import React from 'react';
import { Users, Target } from 'lucide-react';
import { NumberTicker } from '@/components/magicui/number-ticker';
// import { Logos } from './IconCloud';
import { AnimatedBeamDemo } from './UserLoop';

const WhoWeAre = () => {
  return (
    <section className="">
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


          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;


