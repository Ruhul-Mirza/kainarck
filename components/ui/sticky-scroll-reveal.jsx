"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { useTheme } from "../../context/ThemeContext";
import { AnimatedBulletCard } from '../common/AnimatedBulletCard';

// Enhanced content data
const contentData = [
  {
    title: "Strategic Web Development",
    subtitle: "Define Your Digital Success",
    description:
      "Transform your vision into reality with our comprehensive digital strategy. We analyze market trends, user behavior, and competitive landscapes to create a roadmap that drives measurable results.",
    content: (
      <AnimatedBulletCard
        title="Our Strategic Pillars"
        items={[
          "Market Analysis & Research",
          "User Journey Mapping",
          "Competitive Benchmarking",
          "Technology Stack Consultation",
          "ROI-Driven Planning",
        ]}
      />
    ),
  },
  {
    title: "Brand Identity & Authority",
    subtitle: "Build Trust That Converts",
    description:
      "Establish an authoritative online presence that resonates with your audience. Our design experts craft cohesive brand experiences that build trust and drive engagement.",
    content: (
      <AnimatedBulletCard
        title="Key Branding Elements"
        items={[
          "Logo & Visual Identity",
          "Brand Messaging",
          "Style Guide Development",
          "Digital Asset Creation",
          "Audience Persona Definition",
        ]}
      />
    ),
  },
  {
    title: "Conversion-Focused UX",
    subtitle: "Design That Performs",
    description:
      "Create intuitive user experiences that guide visitors seamlessly through your conversion funnel. Every interaction is optimized for maximum engagement and results.",
    content: (
      <AnimatedBulletCard
        title="Optimized UX Practices"
        items={[
          "User Flow Optimization",
          "Wireframing & Prototyping",
          "A/B Testing & Analytics",
          "Accessibility Standards",
          "Mobile-First Design",
        ]}
      />
    ),
  },
  {
    title: "Engaging User Experience",
    subtitle: "Keep Visitors Coming Back",
    description:
      "Reduce bounce rates with interactive, engaging experiences. Our designs captivate users and encourage deeper exploration of your content and services.",
    content: (
      <AnimatedBulletCard
        title="Interactive Design Focus"
        items={[
          "Rich Media Integration",
          "Micro-interactions",
          "Personalized Content",
          "Feedback Mechanisms",
          "Performance-driven UI",
        ]}
      />
    ),
  },
  // {
  //   title: "Premium eCommerce Solutions",
  //   subtitle: "Maximize Online Revenue",
  //   description:
  //     "Build high-converting online stores with cutting-edge design and seamless checkout experiences. Our eCommerce solutions are optimized for sales and customer retention.",
  //   content: (
  //     <AnimatedBulletCard
  //       title="eCommerce Power-Ups"
  //       items={[
  //         "Custom Store Development",
  //         "Secure Payment Gateways",
  //         "Inventory & Order Management",
  //         "Conversion Rate Optimization",
  //         "Scalable Architectures",
  //       ]}
  //     />
  //   ),
  // },
  {
    title: "Search Engine Optimization",
    subtitle: "Dominate Search Results",
    description:
      "Boost your visibility with advanced SEO strategies. We implement technical SEO, content optimization, and performance enhancements to drive organic traffic.",
    content: (
      <AnimatedBulletCard
        title="Advanced SEO Tactics"
        items={[
          "Keyword Research & Strategy",
          "On-Page & Off-Page SEO",
          "Technical SEO Audit",
          "Local SEO Optimization",
          "Content Marketing Integration",
        ]}
      />
    ),
  },
  {
    title: "Performance Optimization",
    subtitle: "Lightning-Fast Loading",
    description:
      "Optimize every aspect of your site for peak performance. We ensure blazing-fast load times, perfect Core Web Vitals scores, and exceptional user experiences.",
    content: (
      <AnimatedBulletCard
        title="Speed & Efficiency"
        items={[
          "Core Web Vitals Improvement",
          "Image & Asset Optimization",
          "CDN Integration",
          "Server-Side Rendering (SSR)",
          "Code Splitting & Bundling",
        ]}
      />
    ),
  },
  // {
  //   title: "Ongoing Support & Growth",
  //   subtitle: "Partner for Success",
  //   description:
  //     "Continuous improvement and support to ensure your digital presence evolves with your business. We provide proactive maintenance, updates, and growth strategies.",
  //   content: (
  //     <AnimatedBulletCard
  //       title="Long-Term Partnership"
  //       items={[
  //         "Routine Maintenance & Updates",
  //         "Performance Monitoring",
  //         "Scalability Planning",
  //         "Feature Enhancements",
  //         "Dedicated Support Team",
  //       ]}
  //     />
  //   ),
  // },
];

export const StepListWithTracingBeam = ({ content = contentData, className }) => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress through the container
      const progress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (containerHeight + windowHeight)));
      setScrollProgress(progress);

      // Calculate active step based on scroll position
      const stepProgress = progress * content.length;
      const currentStep = Math.min(Math.floor(stepProgress), content.length - 1);
      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.length]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative min-h-screen py-20",
        theme === 'dark' 
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900" 
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50",
        className
      )}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000",
            theme === 'dark' 
              ? "bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10" 
              : "bg-gradient-to-br from-purple-400/20 to-fuchsia-400/20"
          )}
          style={{
            top: '20%',
            right: '10%',
            transform: `scale(${1 + scrollProgress * 0.2})`,
          }}
        />
        <div
          className={cn(
            "absolute w-80 h-80 rounded-full blur-3xl transition-all duration-1000",
            theme === 'dark' 
              ? "bg-gradient-to-br from-indigo-600/8 to-purple-600/8" 
              : "bg-gradient-to-br from-indigo-400/15 to-purple-400/15"
          )}
          style={{
            bottom: '30%',
            left: '5%',
            transform: `scale(${0.8 + scrollProgress * 0.3})`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className={cn(
              "text-4xl lg:text-5xl font-bold mb-6",
              theme === 'dark' ? "text-white" : "text-gray-800"
            )}>
              Our Development Process
            </h2>
            <p className={cn(
              "text-xl max-w-3xl mx-auto",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              From concept to launch, we follow a proven methodology that ensures exceptional results
            </p>
          </div>

          {/* Step List */}
          <div className="relative">
            {/* Tracing Beam Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 overflow-hidden">
              {/* Background line */}
              <div className={cn(
                "absolute inset-0 w-full",
                theme === 'dark' ? "bg-gray-700" : "bg-gray-200"
              )} />
              
              {/* Animated progress line */}
              <div
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-300 ease-out",
                  theme === 'dark'
                    ? "bg-gradient-to-b from-purple-500 via-fuchsia-500 to-purple-600"
                    : "bg-gradient-to-b from-purple-500 via-fuchsia-500 to-purple-600"
                )}
                style={{
                  height: `${scrollProgress * 100}%`,
                  boxShadow: theme === 'dark' 
                    ? '0 0 20px rgba(168, 85, 247, 0.5)' 
                    : '0 0 20px rgba(168, 85, 247, 0.6)',
                }}
              />

              {/* Glowing orb at the end of progress line */}
              <div
                className={cn(
                  "absolute w-4 h-4 rounded-full -left-1.5 transition-all duration-300",
                  theme === 'dark'
                    ? "bg-gradient-to-r from-purple-400 to-fuchsia-400 shadow-lg shadow-purple-500/50"
                    : "bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-lg shadow-purple-500/60"
                )}
                style={{
                  top: `${scrollProgress * 100}%`,
                  transform: 'translateY(-50%)',
                }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-16">
              {content.map((step, index) => (
                <div key={index} className="relative overflow flex items-start">
                  {/* Step Number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 border-4",
                        activeStep >= index
                          ? cn(
                              theme === 'dark'
                                ? "bg-gradient-to-br from-purple-500 to-fuchsia-500 border-purple-400 text-white shadow-lg shadow-purple-500/30"
                                : "bg-gradient-to-br from-purple-500 to-fuchsia-500 border-purple-400 text-white shadow-lg shadow-purple-500/40"
                            )
                          : cn(
                              theme === 'dark'
                                ? "bg-gray-800 border-gray-600 text-gray-400"
                                : "bg-white border-gray-200 text-gray-400 shadow-lg"
                            )
                      )}
                      style={{
                        transform: activeStep >= index ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Pulse animation for active step */}
                    {activeStep === index && (
                      <div
                        className={cn(
                          "absolute inset-0 w-16 h-16 rounded-full animate-ping",
                          theme === 'dark'
                            ? "bg-purple-500/30"
                            : "bg-purple-500/40"
                        )}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-8 overflow-hidden flex-1">
                    <div
                      className={cn(
                        "transition-all duration-700 transform lg:flex lg:gap-x-3",
                        activeStep >= index
                          ? "opacity-100 translate-y-0"
                          : "opacity-50 translate-y-4"
                      )}
                    >
                      {/* Text Content */}
                      <div className="mb-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={cn(
                            "w-1 h-8 rounded-full",
                            activeStep >= index
                              ? (theme === 'dark'
                                  ? "bg-gradient-to-b from-purple-400 to-fuchsia-400"
                                  : "bg-gradient-to-b from-purple-500 to-fuchsia-500")
                              : (theme === 'dark' ? "bg-gray-600" : "bg-gray-200")
                          )} />
                          <span className={cn(
                            "text-sm font-medium uppercase tracking-wider",
                            activeStep >= index
                              ? (theme === 'dark' ? "text-purple-300" : "text-purple-600")
                              : (theme === 'dark' ? "text-gray-500" : "text-gray-500")
                          )}>
                            Step {index + 1}
                          </span>
                        </div>
                        
                        <h3 className={cn(
                          "text-3xl lg:text-4xl font-bold mb-3",
                          activeStep >= index
                            ? (theme === 'dark' ? "text-white" : "text-gray-800")
                            : (theme === 'dark' ? "text-gray-400" : "text-gray-400")
                        )}>
                          {step.title}
                        </h3>
                        
                        <p className={cn(
                          "text-xl font-medium mb-4",
                          activeStep >= index
                            ? (theme === 'dark' ? "text-purple-200" : "text-purple-700")
                            : (theme === 'dark' ? "text-gray-500" : "text-gray-500")
                        )}>
                          {step.subtitle}
                        </p>
                        
                        <p className={cn(
                          "text-lg leading-relaxed max-w-2xl",
                          activeStep >= index
                            ? (theme === 'dark' ? "text-gray-300" : "text-gray-600")
                            : (theme === 'dark' ? "text-gray-500" : "text-gray-500")
                        )}>
                          {step.description}
                        </p>
                      </div>

                      {/* Interactive Card */}
                      <div className="max-w-md">
                        <div
                          className={cn(
                            "relative rounded-2xl overflow-hidden transition-all duration-700 border",
                            activeStep >= index
                              ? cn(
                                  "transform scale-100 opacity-100",
                                  theme === 'dark'
                                    ? "bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl border-purple-500/30 shadow-2xl shadow-purple-500/10"
                                    : "bg-gradient-to-br from-white/95 to-gray-50/90 backdrop-blur-xl border-purple-400/30 shadow-2xl shadow-purple-500/15"
                                )
                              : cn(
                                  "transform scale-95 opacity-40",
                                  theme === 'dark'
                                    ? "bg-gray-800/40 border-gray-600/30"
                                    : "bg-gray-50/60 border-gray-200/40"
                                )
                          )}
                        >
                          {step.content}

                          {/* Animated border for active step */}
                          {activeStep === index && (
                            <div
                              className="absolute inset-0 rounded-2xl opacity-60 pointer-events-none"
                              style={{
                                background: `conic-gradient(from 0deg, transparent, ${
                                  theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.4)'
                                }, transparent)`,
                                animation: 'spin 3s linear infinite',
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-20 text-center">
            <div className="flex justify-center space-x-2 mb-4">
              {content.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    activeStep >= index
                      ? cn(
                          "w-8",
                          theme === 'dark' 
                            ? "bg-gradient-to-r from-purple-400 to-fuchsia-400" 
                            : "bg-gradient-to-r from-purple-500 to-fuchsia-500"
                        )
                      : cn(
                          "w-2",
                          theme === 'dark' ? "bg-gray-600" : "bg-gray-200"
                        )
                  )}
                />
              ))}
            </div>
            <div className={cn(
              "text-sm",
              theme === 'dark' ? "text-gray-400" : "text-gray-500"
            )}>
              Step {activeStep + 1} of {content.length}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};