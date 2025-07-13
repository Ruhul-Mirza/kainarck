import React from 'react';
import { Shield, Zap, Users, Award, Clock, Lightbulb } from 'lucide-react';

function WhyChooseUsSection() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption with zero-trust architecture and compliance with SOC 2, GDPR, and HIPAA standards.",
      metric: "99.99%",
      metricLabel: "Security Score",
    },
    {
      icon: Zap,
      title: "Unmatched Performance",
      description: "Sub-millisecond response times powered by edge computing and intelligent caching across 200+ global locations.",
      metric: "<50ms",
      metricLabel: "Response Time",
    },
    {
      icon: Users,
      title: "White-Glove Support",
      description: "Dedicated success managers and 24/7 expert support with guaranteed SLA and proactive monitoring.",
      metric: "24/7",
      metricLabel: "Expert Support",
    },
    {
      icon: Award,
      title: "Industry Pioneer",
      description: "Trusted by Fortune 100 companies and recognized as a leader by Gartner, Forrester, and G2.",
      metric: "500+",
      metricLabel: "Enterprise Clients",
    },
    {
      icon: Clock,
      title: "Guaranteed Uptime",
      description: "Mission-critical reliability with redundant infrastructure and automated disaster recovery protocols.",
      metric: "99.99%",
      metricLabel: "Uptime SLA",
    },
    {
      icon: Lightbulb,
      title: "Innovation Engine",
      description: "AI-powered insights, predictive analytics, and continuous platform evolution with quarterly feature releases.",
      metric: "50+",
      metricLabel: "New Features/Year",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent dark:via-gray-900/50 to-transparent"></div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 shadow-sm dark:bg-gray-900/20 dark:border-zinc-800 bg-gray-50 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-purple-800 dark:bg-purple-500 rounded-full animate-pulse"></div>
              <span className="dark:text-gray-300 text-sm font-medium tracking-wide text-black">
                WHY CHOOSE US
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-light dark:text-white mb-8 tracking-tight">
              Engineered for
              <br />
              <span className="font-extralight bg-gradient-to-r from-purple-900 to-purple-600 dark:from-purple-400 dark:via-white dark:to-purple-800 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-xl dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              We don't just meet expectations—we redefine what's possible
              through precision engineering and relentless innovation.
            </p>
          </div>

          <div className="grid grid-cols-1  lg:grid-cols-3 dark:bg-gray-800/30 overflow-hidden">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group border-1 dark:border-zinc-800 border-zinc-200 dark:bg-transparent backdrop-blur-sm p-10 dark:hover:bg-gray-900/60 hover:bg-purple-50 transition-all duration-700 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br dark:from-purple-600/5 to-purple-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-900 dark:via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>


                  <div className="relative z-10">
                    <div className="mb-8">
                      <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-500/20 border dark:border-transparent flex items-center justify-center shadow-sm dark:shadow-2xl transition-colors duration-500">
                        <IconComponent className="w-6 h-6 text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-500" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-3xl font-light dark:text-white mb-1">
                        {feature.metric}
                      </div>
                      <div className="text-xs dark:text-gray-500 uppercase tracking-wider">
                        {feature.metricLabel}
                      </div>
                    </div>

                    <h3 className="text-xl font-medium dark:text-white mb-4 dark:group-hover:text-purple-300 transition-colors duration-500">
                      {feature.title}
                    </h3>

                    <p className="text-neutral-400 dark:text-gray-400 leading-relaxed font-normal text-sm dark:group-hover:text-gray-300 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
