import React from 'react';
import WhoWeAreBg from '../../../public/images/WhoWeAreBg.jpg';
import {
  ArrowRight,
} from "lucide-react";

function WhoWeAre() {

  return (
    <main className="min-h-screen dark:bg-black bg-white relative z-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
         <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(88,71,105,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(88,71,105,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(213,50,250,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(213,50,250,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"
      ></div>
        {/* <div className="absolute inset-0">
          <img
            src="/images/WhoWeAreBg.jpg"
            alt="Professional office environment"
             className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div> */}

        <div className="container relative z-10 px-4 sm:px-6 lg:px-12 mx-auto">
          <div className="max-w-4xl text-purple-500 dark:text-purple-800 my-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Who We Are?
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-400 mb-6">
              A Global Force in Outsourcing, Analytics, and Digital Transformation
            </h2>
            <div className="space-y-5 text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed font-light">
              <p>
                InfiGlobal Techlogix Pvt Ltd (IGTL) is a purpose-driven organization committed to redefining the way businesses operate and grow in a digitally connected world. We are not just a service provider.<br />
                <span className="block text-neutral-400 font-semibold mb-5 mt-3">
                  — we are strategic partners who embed ourselves in your business challenges to co-create long-term, sustainable success.
                </span>
              </p>
    
            </div>

            <div className="mt-8">
              <a href="/about">
                <button className="bg-purple-500 dark:bg-purple-950 dark:hover:bg-purple-950/70 inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white hover:bg-purple-500/90 h-12 cursor-pointer rounded-full px-8 text-base shadow-md transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                Our Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 size-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhoWeAre;
