import React from 'react';
import { Globe, TrendingUp, Share2, Palette, Search, ArrowRight, Sparkles } from 'lucide-react';

const ServicePage = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Creation",
      description: "Custom websites and web applications built with modern, scalable technology stacks for optimal performance and user experience."
    },
    {
      icon: TrendingUp,
      title: "Brand Marketing",
      description: "Strategic campaigns designed to elevate your brand identity, increase visibility, and drive meaningful customer engagement."
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Data-driven social media strategies that boost engagement, build communities, and generate qualified leads for your business."
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Striking visual designs that define and elevate your brand, from logos to complete visual identity systems."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive on-page and technical SEO strategies to improve search rankings and drive organic traffic growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3ff] via-[#fdfbfb] to-[#f0eaff]">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#ab46ff]">Empowering</span>{' '}
                <span className="text-gray-800">Digital Growth</span>{' '}
                <span className="text-gray-600">with</span>{' '}
                <span className="text-[#ab46ff]">World-Class Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                From powerful websites to strategic brand scaling — we deliver end-to-end digital solutions with precision, innovation, and measurable results.
              </p>
            </div>
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#ab46ff] to-[#8b5cf6] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ab46ff] to-[#8b5cf6] rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Digital Excellence</h3>
                    <p className="text-sm text-gray-600">Premium Solutions</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#ab46ff] to-[#8b5cf6] rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/30 transform -rotate-12 hover:rotate-0 transition-transform duration-700">
                <div className="w-8 h-8 bg-gradient-to-r from-[#8b5cf6] to-[#ab46ff] rounded-lg"></div>
              </div>

              <div className="absolute -bottom-8 -left-4 bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#ab46ff] rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-[#8b5cf6] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-3 bg-[#ab46ff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ab46ff]/5 to-[#8b5cf6]/5 rounded-full blur-3xl transform scale-150"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#ab46ff]">Premium</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business growth and establish market leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#ab46ff] to-[#8b5cf6] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ab46ff] to-[#8b5cf6] rounded-2xl opacity-20 blur-lg scale-150 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#ab46ff] group-hover:text-[#8b5cf6] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-[#ab46ff] to-[#8b5cf6] transition-all duration-300 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-[#ab46ff] font-semibold">
            <span>Ready to transform your digital presence?</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicePage;
