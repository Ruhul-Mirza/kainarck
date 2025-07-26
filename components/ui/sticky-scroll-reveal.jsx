"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { useTheme } from "../../context/ThemeContext";
import { AnimatedBulletCard } from '../common/AnimatedBulletCard'; // Import the new component

// Enhanced content data with modern professional styling
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
  {
    title: "Premium eCommerce Solutions",
    subtitle: "Maximize Online Revenue",
    description:
      "Build high-converting online stores with cutting-edge design and seamless checkout experiences. Our eCommerce solutions are optimized for sales and customer retention.",
    content: (
      <AnimatedBulletCard
        title="eCommerce Power-Ups"
        items={[
          "Custom Store Development",
          "Secure Payment Gateways",
          "Inventory & Order Management",
          "Conversion Rate Optimization",
          "Scalable Architectures",
        ]}
      />
    ),
  },
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
  {
    title: "Ongoing Support & Growth",
    subtitle: "Partner for Success",
    description:
      "Continuous improvement and support to ensure your digital presence evolves with your business. We provide proactive maintenance, updates, and growth strategies.",
    content: (
      <AnimatedBulletCard
        title="Long-Term Partnership"
        items={[
          "Routine Maintenance & Updates",
          "Performance Monitoring",
          "Scalability Planning",
          "Feature Enhancements",
          "Dedicated Support Team",
        ]}
      />
    ),
  },
];

export const StickyScrollLenis = ({ content = contentData, contentClassName }) => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  // Theme-aware gradient backgrounds - Dark: Black to Purple, Light: White to Purple
  const darkBackgroundGradients = [
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
    "linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d004d 60%, #4c1d95 100%)",
  ];

  const lightBackgroundGradients = [
    "linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 60%, #cbd5e1 100%)",
    "linear-gradient(135deg, #fefefe 0%, #f1f5f9 30%, #e2e8f0 60%, #c7d2fe 100%)",
    "linear-gradient(135deg, #ffffff 0%, #faf5ff 30%, #f3e8ff 60%, #ddd6fe 100%)",
    "linear-gradient(135deg, #fefefe 0%, #fdf4ff 30%, #fae8ff 60%, #e879f9 100%)",
    "linear-gradient(135deg, #ffffff 0%, #f9fafb 30%, #f3f4f6 60%, #d1d5db 100%)",
    "linear-gradient(135deg, #fefefe 0%, #eef2ff 30%, #e0e7ff 60%, #c7d2fe 100%)",
    "linear-gradient(135deg, #ffffff 0%, #faf5ff 30%, #f3e8ff 60%, #c4b5fd 100%)",
    "linear-gradient(135deg, #fefefe 0%, #f8fafc 30%, #e2e8f0 60%, #a78bfa 100%)",
  ];

  const [currentBackground, setCurrentBackground] = useState(
    theme === 'dark' ? darkBackgroundGradients[0] : lightBackgroundGradients[0]
  );

  // Handle mouse movement for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll effect with smooth transitions
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;
      const progress = Math.min(Math.max(scrollY - containerTop, 0), containerHeight);
      const perCardHeight = containerHeight / content.length;
      const index = Math.floor(progress / perCardHeight);

      if (index !== activeCard && index >= 0 && index < content.length) {
        setActiveCard(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.length, activeCard]);

  // Update background on active card change and theme change
  useEffect(() => {
    const gradients = theme === 'dark' ? darkBackgroundGradients : lightBackgroundGradients;
    setCurrentBackground(gradients[activeCard % gradients.length]);
  }, [activeCard, theme]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">      
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen items-center justify-center transition-all duration-1000 ease-out overflow-hidden"
        style={{
          background: currentBackground,
        }}
      >
        {/* Animated background elements with theme-aware colors */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating orbs */}
          <div
            className={cn(
              "absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000",
              theme === 'dark' 
                ? "bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20" 
                : "bg-gradient-to-br from-purple-400/30 to-fuchsia-400/30"
            )}
            style={{
              top: '10%',
              right: '10%',
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) rotate(${activeCard * 45}deg) scale(${1 + activeCard * 0.1})`,
            }}
          />
          <div
            className={cn(
              "absolute w-80 h-80 rounded-full blur-3xl transition-all duration-1000",
              theme === 'dark' 
                ? "bg-gradient-to-br from-indigo-600/15 to-purple-600/15" 
                : "bg-gradient-to-br from-indigo-400/25 to-purple-400/25"
            )}
            style={{
              bottom: '20%',
              left: '15%',
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) rotate(${-activeCard * 30}deg) scale(${0.8 + activeCard * 0.05})`,
            }}
          />
          <div
            className={cn(
              "absolute w-64 h-64 rounded-full blur-2xl transition-all duration-1000",
              theme === 'dark' 
                ? "bg-gradient-to-br from-pink-500/25 to-rose-500/25" 
                : "bg-gradient-to-br from-pink-400/35 to-rose-400/35"
            )}
            style={{
              top: '60%',
              left: '5%',
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) rotate(${activeCard * 60}deg)`,
            }}
          />

          {/* Geometric shapes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-4 h-4 rounded-full transition-all duration-1000",
                theme === 'dark' 
                  ? "bg-purple-400/40" 
                  : "bg-purple-500/50"
              )}
              style={{
                top: `${20 + i * 12}%`,
                right: `${5 + i * 8}%`,
                transform: `
                  translate(${mousePosition.x * (i + 1) * 5}px, ${mousePosition.y * (i + 1) * 5}px) 
                  rotate(${activeCard * (i + 1) * 30}deg) 
                  scale(${0.5 + Math.sin(activeCard + i) * 0.3})
                `,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex w-full max-w-7xl items-center justify-between px-6 lg:px-12 gap-16">
          {/* Left: Enhanced Text Content */}
          <div className="flex-1 max-w-2xl relative">
            <div className="relative h-80">
              {content.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 transform",
                    activeCard === index
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  )}
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className={cn(
                          "w-1 h-8 rounded-full",
                          theme === 'dark'
                            ? "bg-gradient-to-b from-purple-400 to-fuchsia-400"
                            : "bg-gradient-to-b from-purple-600 to-fuchsia-600"
                        )} />
                        <span className={cn(
                          "text-sm font-medium uppercase tracking-wider",
                          theme === 'dark' ? "text-purple-300" : "text-purple-700"
                        )}>
                          Step {index + 1}
                        </span>
                      </div>
                      <h2 className={cn(
                        "text-4xl font-bold leading-tight",
                        theme === 'dark' ? "text-white" : "text-gray-900"
                      )}>
                        {item.title}
                      </h2>
                      <p className={cn(
                        "text-xl font-medium",
                        theme === 'dark' ? "text-purple-200" : "text-purple-800"
                      )}>
                        {item.subtitle}
                      </p>
                    </div>
                    <p className={cn(
                      "text-lg leading-relaxed",
                      theme === 'dark' ? "text-gray-300" : "text-gray-700"
                    )}>
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-2 pt-4">
                      <div className={cn(
                        "w-12 h-0.5 rounded-full",
                        theme === 'dark'
                          ? "bg-gradient-to-r from-purple-400 to-fuchsia-400"
                          : "bg-gradient-to-r from-purple-600 to-fuchsia-600"
                      )} />
                      <span className={cn(
                        "text-sm",
                        theme === 'dark' ? "text-gray-400" : "text-gray-600"
                      )}>
                        Kainarck Solution
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Card with Enhanced Animations */}
          <div className="hidden lg:block relative">
            <div
              className="relative w-96 h-80 perspective-1000"
              style={{
                transform: `
                  rotateY(${activeCard * 3 + mousePosition.x * 10}deg) 
                  rotateX(${Math.sin(activeCard) * 2 + mousePosition.y * -5}deg)
                `,
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Card shadow */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl blur-xl transform translate-y-8 scale-105 transition-all duration-800",
                  theme === 'dark' ? "bg-black/40" : "bg-gray-900/20"
                )}
                style={{
                  transform: `translateY(${12 + activeCard * 2}px) scale(${1.05 + activeCard * 0.02})`,
                }}
              />

              {/* Main card */}
              <div
                className={cn(
                  "relative w-full h-full rounded-2xl overflow-hidden transform-gpu transition-all duration-700 border",
                  theme === 'dark'
                    ? "bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl border-purple-500/30 shadow-2xl shadow-purple-500/25"
                    : "bg-gradient-to-br from-white/90 to-gray-50/95 backdrop-blur-xl border-purple-300/40 shadow-2xl shadow-purple-500/20",
                  contentClassName
                )}
                style={{
                  transform: `
                    rotateX(${Math.sin(activeCard * 0.5) * 3}deg) 
                    rotateY(${Math.cos(activeCard * 0.3) * 3}deg) 
                    translateZ(20px)
                  `,
                }}
              >
                {/* Card content with smooth transitions */}
                <div className="relative h-full w-full">
                  {content.map((item, index) => (
                    <div
                      key={index}
                      className={cn(
                        "absolute inset-0 transition-all duration-700 transform",
                        activeCard === index
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-95 rotate-3"
                      )}
                    >
                      {item.content}
                    </div>
                  ))}
                </div>

                {/* Animated border glow */}
                <div
                  className="absolute inset-0 rounded-2xl transition-opacity duration-700 opacity-60"
                  style={{
                    background: `conic-gradient(from ${activeCard * 90}deg, transparent, ${
                      theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(147, 51, 234, 0.2)'
                    }, transparent)`,
                  }}
                />
              </div>

              {/* Floating elements */}
              <div
                className={cn(
                  "absolute -top-4 -right-4 w-8 h-8 rounded-full transition-all duration-700",
                  theme === 'dark'
                    ? "bg-gradient-to-br from-purple-400 to-fuchsia-400"
                    : "bg-gradient-to-br from-purple-500 to-fuchsia-500"
                )}
                style={{
                  transform: `rotate(${activeCard * 45}deg) scale(${0.8 + Math.sin(activeCard) * 0.2})`,
                }}
              />
              <div
                className={cn(
                  "absolute -bottom-4 -left-4 w-6 h-6 rounded-full transition-all duration-700",
                  theme === 'dark'
                    ? "bg-gradient-to-br from-pink-400 to-rose-400"
                    : "bg-gradient-to-br from-pink-500 to-rose-500"
                )}
                style={{
                  transform: `rotate(${-activeCard * 30}deg) scale(${0.6 + Math.cos(activeCard) * 0.2})`,
                }}
              />

              {/* Orbiting elements */}
              <div className="absolute inset-0 -z-10">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "absolute w-6 h-6 rounded-full transition-all duration-1000",
                      theme === 'dark' 
                        ? "bg-purple-500/30" 
                        : "bg-purple-400/40"
                    )}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `
                        translate(-50%, -50%) 
                        rotate(${activeCard * 0.5 * (i + 1)}rad) 
                        translateX(${200 + i * 50}px) 
                        rotate(${-activeCard * 0.5 * (i + 1)}rad)
                        scale(${0.5 + Math.sin(activeCard + i) * 0.3})
                      `,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {content.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeCard === index
                  ? cn(
                      "w-8",
                      theme === 'dark' 
                        ? "bg-gradient-to-r from-purple-400 to-fuchsia-400" 
                        : "bg-gradient-to-r from-purple-600 to-fuchsia-600"
                    )
                  : cn(
                      "w-2",
                      theme === 'dark' ? "bg-white/30" : "bg-black/30"
                    )
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};