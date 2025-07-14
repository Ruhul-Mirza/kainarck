'use client'
import { Footer } from "@/components/common/Footer";
import { FeatureFourImages } from "@/components/pages/home/Feature1";
import HeroSection from "@/components/pages/home/HeroSection";
import { Newsletter } from "@/components/pages/home/NewsLatter";
import PerformanceSection from "@/components/pages/home/performance-section";
import WhoWeAre from "@/components/pages/home/WhoWeAre";
import { Testimonials } from "@/components/pages/home/Testimonials";
import WhyChooseUsSection from "@/components/pages/home/WhyChooseUsSection";
import { Logos } from "@/components/pages/home/IconCloud";
import Simple3DCardLayout from "@/components/pages/home/Demo";
import { ServicesOverview } from "@/components/pages/home/services-overview";
import { StickyScrollRevealDemo } from "@/components/pages/home/StickyScroll";
import { TechStackSection } from "@/components/pages/home/TechStack";
import HowItWorks from "@/components/pages/home/HowItWorks";
import ServicesSection from "@/components/pages/home/Services";
import StatsSection from "@/components/pages/home/StatsSection";
import CallToAction from "@/components/pages/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <PerformanceSection/>  */}
      <TechStackSection/>
      <WhoWeAre/>
      <WhyChooseUsSection/> 
      <ServicesSection/>
      <Testimonials/>
      <CallToAction/>
    
      {/* <Logos/> */}
      {/* <StickyScrollRevealDemo/> */}
      {/* <ServicesOverview/> */}
    </>
  );
}

