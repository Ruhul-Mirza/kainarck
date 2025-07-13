"use client";

// import { Badge } from "@/components/ui/badge";
// import { ContactForm } from "@/components/ContactForm";
// import { useInView } from "@/hooks/useInView";
import React from "react";
import clsx from "clsx";

const Contact = () => {
  // const [mapRef, mapInView] = useInView({ threshold: 0.3 });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-violet-50/20 dark:to-violet-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={clsx(
              "transition-all duration-1000 transform opacity-0 translate-y-10",
            )}
          >
            {/* <Badge variant="outline" className="mb-4">
              Contact Us
            </Badge> */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Work Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your digital presence? Get in touch with our
              team of experts and let's discuss how we can help your business
              grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <ContactForm /> */}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-b from-background to-violet-50/30 dark:to-violet-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={clsx(
              "text-center mb-12 transition-all duration-1000 transform opacity-0 translate-y-10",
            )}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Office
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Digital City, our office is always open
              for meetings and consultations.
            </p>
          </div>

          <div
            className={clsx(
              "rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 transform opacity-0 translate-y-10"
            )}
          >
            <div className="w-full h-96 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  123 Tech Street, Digital City, DC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
