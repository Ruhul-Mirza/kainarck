import React from "react";
import {
  Globe,
  Megaphone,
  Search,
  Users,
  Palette,
  Image,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Creation",
    description: "We build modern, responsive, and high-performance websites tailored to your business needs.",
  },
  {
    icon: Megaphone,
    title: "Brand Marketing",
    description: "Promote your brand with effective digital strategies to reach the right audience.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your website's search engine rankings and drive more organic traffic.",
  },
  {
    icon: Users,
    title: "SMM",
    description: "Expand your business through engaging and targeted social media marketing campaigns.",
  },
  {
    icon: Palette,
    title: "UI/UX Designing",
    description: "Craft visually appealing and user-friendly designs to enhance customer experience.",
  },
  {
    icon: Image,
    title: "Graphic Designing",
    description: "Professional graphic design services to make your brand stand out.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full py-20 md:py-32 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 dark:from-purple-950 dark:via-muted/20 dark:to-purple-950/20 relative overflow-hidden isolate"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm">
            <span className="mr-1 text-primary">✦</span> Services
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            What We Offer
          </h2>

          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Explore our range of professional services designed to help your
            business grow online.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border text-card-foreground shadow h-full overflow-hidden border-border/40 bg-gradient-to-b from-card to-card/50 backdrop-blur transition-all hover:shadow-md group dark:hover:bg-white/[0.]"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mb-4 transition-colors duration-300">
                  <service.icon className="size-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-700 dark:text-neutral-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
