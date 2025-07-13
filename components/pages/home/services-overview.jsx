"use client";

import WaveCard from "@/components/ui/WaveCard";
import { Code, Smartphone, Search, Palette } from "lucide-react";

export function ServicesOverview({ isDarkMode }) {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "iOS and Android mobile applications",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Search engine optimization and ranking",
    },
    {
      icon: Palette,
      title: "Website Rebranding",
      description: "Complete brand identity redesigns",
    },
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2
          className={`text-3xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Our Core Services
        </h2>
        <p
          className={`text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } max-w-3xl mx-auto`}
        >
          We specialize in delivering comprehensive digital solutions that drive
          business growth and enhance online presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={service.title}>
              {/* Replace default service card with Tailwind animated card */}
              <WaveCard icon={<IconComponent/>} title={service.title}  discription={service.description} />
              {/* <h3
                className={`text-lg font-semibold mt-4 mb-1 text-center ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {}
              </h3>
              <p
                className={`text-sm text-center ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                
              </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
