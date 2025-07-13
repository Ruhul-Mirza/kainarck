import { BoxReveal } from '@/components/magicui/box-reveal';
import clsx from 'clsx';
import { Badge, Globe, Trophy, Users, Zap, Rocket, Brain, Code2, Shield } from 'lucide-react';
import React from 'react'

function page() {
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" strokeWidth="2" />
          <line x1="12" y1="2" x2="12" y2="6" strokeWidth="2" />
          <line x1="12" y1="18" x2="12" y2="22" strokeWidth="2" />
        </svg>
      ),
      title: 'Our Mission',
      description:
        'To revolutionize digital experiences through cutting-edge technology, transforming ambitious visions into scalable, intelligent solutions that drive unprecedented business growth.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/20',
      hoverText: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      ),
      title: 'Our Vision',
      description:
        'To be the global catalyst for digital transformation, pioneering the next generation of intelligent systems that seamlessly integrate AI, cloud computing, and human-centered design.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/20',
      hoverText: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 21s-6-4.5-6-10a6 6 0 0112 0c0 5.5-6 10-6 10z" strokeWidth="2" />
        </svg>
      ),
      title: 'Our Values',
      description:
        'Innovation-first mindset, ethical AI development, sustainable technology practices, and unwavering commitment to client success through transparent collaboration and continuous learning.',
      color: 'text-rose-600 dark:text-rose-400',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      hoverBorder: 'hover:border-rose-500/20',
      hoverText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    }
  ];

  const stats = [
    { icon: Users, value: '1000+', label: 'Global Clients', color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-500/10' },
    { icon: Trophy, value: '500+', label: 'AI Solutions', color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-500/10' },
    { icon: Globe, value: '50+', label: 'Countries', color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-500/10' },
    { icon: Zap, value: '99.99%', label: 'System Uptime', color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-500/10' }
  ]

  const timeline = [
    {
      year: '2015',
      event: 'Genesis of Innovation',
      description: 'Founded with a vision to revolutionize digital experiences',
      icon: Rocket,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      year: '2017',
      event: 'Enterprise Breakthrough',
      description: 'Secured first Fortune 100 partnership, scaling globally',
      icon: Trophy,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      year: '2019',
      event: 'AI Revolution Begins',
      description: 'Launched proprietary AI platform, transforming industries',
      icon: Brain,
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      year: '2021',
      event: 'Quantum Computing Lab',
      description: 'Established quantum research division for next-gen computing',
      icon: Code2,
      color: 'text-cyan-600 dark:text-cyan-400'
    },
    {
      year: '2023',
      event: 'Zero-Trust Security',
      description: 'Pioneered advanced cybersecurity frameworks',
      icon: Shield,
      color: 'text-red-600 dark:text-red-400'
    },
    {
      year: '2024',
      event: 'Future Unleashed',
      description: 'Leading the next wave of autonomous digital transformation',
      icon: Zap,
      color: 'text-orange-600 dark:text-orange-400'
    }
  ]
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image:
        'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      initials: 'SC',
      bgColor: 'bg-purple-500/10',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Solutions Architect',
      image:
        'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      initials: 'MR',
      bgColor: 'bg-purple-500/10',
    },
  ];

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden 
        py-20 sm:py-24 lg:py-32"
        >
        {/* bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950  */}
        {/* Floating Background Shapes */}
        <div className="absolute inset-0 z-0">
          {/* Top-left square */}
          <div className="absolute rotate-45 animate-spin-slow border-2 border-purple-700/60 dark:border-purple-700/50 
          w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
          top-[8%] left-[4%] sm:top-[10%] sm:left-[6%] md:top-[12%] md:left-[8%]">
          </div>

          {/* Bottom-right square (adjusted) */}
          <div className="absolute rotate-45 animate-spin-slow delay-500 border-2 border-purple-700/60 dark:border-blue-700/30 
                    w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
          bottom-[3%] right-[4%] sm:bottom-[8%] sm:right-[5%] md:bottom-[10%] md:right-[6%]">
          </div>
        </div>
        <div className="absolute bottom-0 -z-10  right-0 -mt-16 -mr-16 md:w-3xl w-52 md:h-80 h-32 bg-purple-500/20 dark:bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0  -z-10 left-0 -mb-16 -ml-16 md:w-3xl w-52 md:h-80 h-32 bg-violet-500/20 dark:bg-violet-500/10 rounded-full filter blur-3xl"></div>


        {/* Floating Tech SVGs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Zap Icon */}
          <svg
            className="absolute animate-float text-yellow-500 dark:text-yellow-200
            h-5 w-5 sm:h-6 sm:w-6
            top-[12%] left-[25%] sm:top-[14%] sm:left-[28%] md:top-[20%] md:left-[25%]"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
          </svg>

          {/* Code Icon (moved upward and inward for balance) */}
          <svg
            className="absolute animate-float-delayed text-blue-500 dark:text-blue-200
    h-5 w-5 sm:h-7 sm:w-7
    top-[12%] right-[16%] sm:top-[22%] sm:right-[8%] md:top-[33%] md:right-[12%] lg:top-[35%] lg:right-[14%]"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>


          {/* CPU Icon (shifted slightly higher and left for symmetry) */}
          <svg
            className="absolute animate-float text-orange-500 dark:text-orange-400 
            h-5 w-5 sm:h-7 sm:w-7
            bottom-[16%] left-[12%] sm:bottom-[18%] sm:left-[15%] md:bottom-[20%] md:left-[18%]"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path d="M9 9h6v6H9z" />
            <path d="M3 9h3M3 15h3M18 9h3M18 15h3M9 3v3M15 3v3M9 18v3M15 18v3" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>

          {/* Database Icon (lowered and moved inward slightly) */}
          <svg
            className="absolute animate-float-delayed text-green-600 dark:text-green-300 
            h-5 w-5 sm:h-7 sm:w-7 
            bottom-[14%] right-[12%] sm:bottom-[18%] sm:right-[15%] md:bottom-[20%] md:right-[18%]"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up delay-200 items-center flex flex-col">
            <BoxReveal duration={1} boxColor='oklch(62.7% .265 303.9)'>
              <span className="block">About Us</span>
            </BoxReveal>
            <BoxReveal duration={1} boxColor='oklch(62.7% .265 303.9)'>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400">
                Tomorrow's Technology
              </span>
            </BoxReveal>
          </h1>

          {/* Description */}
          <div className='max-w-3xl mx-auto text-base lg:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
          <BoxReveal duration={1} boxColor='oklch(62.7% .265 303.9)'>
            <p className="">
              We're not just developers—we're digital architects crafting the future of technology. Our
              cutting-edge solutions transform complex challenges into elegant, scalable innovations
              that propel businesses into the next generation.
            </p>
          </BoxReveal>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-in-up delay-600">
            <button className="group relative overflow-hidden 
            px-4 py-2 lg:px-5 lg:py-3 
            rounded-md bg-gradient-to-r from-purple-600 to-violet-600 
            text-sm sm:text-base lg:text-lg font-medium text-white 
            shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-500/10 
            hover:-translate-y-1 transition-all duration-300 
            focus:outline-none focus:ring-2 focus:ring-purple-500 
            focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Innovation
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 hidden sm:inline-block"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
      <section
        id="mission"
        className="pt-24 bg-gradient-to-b from-muted/30 to-background relative pb-10 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/20 backdrop-blur-sm px-4 py-2 text-sm mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-purple-800 dark:text-neutral-400 font-medium">Core Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              <span className="dark:text-neutral-200 text-purple-600">What Drives Our Innovation</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up delay-200">
              Our foundation is built on revolutionary thinking, ethical practices, and relentless pursuit
              of technological excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className={clsx(
                  "group relative overflow-hidden rounded-xl border bg-card/80 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-sm animate-fade-in-up",
                  value.borderColor,
                  value.hoverBorder
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={clsx("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", value.bgColor)} />

                <div className="relative z-10">
                  <div className={clsx("inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", value.bgColor)}>
                    <div className={clsx(value.color, "group-hover:animate-pulse")}>{value.icon}</div>
                  </div>
                  <h3 className={clsx("text-xl font-semibold text-foreground mb-4 transition-colors duration-300", value.hoverText)}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 border border-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="story" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up delay-400">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-2 text-sm mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
                <span className="text-primary font-medium">Our Evolution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
                  Pioneering Digital Transformation
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                From a visionary startup to a global technology powerhouse, our journey represents the
                relentless pursuit of innovation. We've consistently pushed the boundaries of what's possible,
                transforming industries through cutting-edge AI, quantum computing, and next-generation security solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we stand at the forefront of the digital revolution, empowering organizations worldwide
                with intelligent systems that adapt, learn, and evolve. Our commitment to ethical AI development
                and sustainable technology practices ensures we're not just building the future—we're building
                a better future for everyone.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we stand at the forefront of the digital revolution, empowering organizations worldwide
                with intelligent systems that adapt, learn, and evolve. Our commitment to ethical AI development
                and sustainable technology practices ensures we're not just building the future—we're building
                a better future for everyone.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we stand at the forefront of the digital revolution, empowering organizations worldwide
                with intelligent systems that adapt, learn, and evolve. Our commitment to ethical AI development
                and sustainable technology practices ensures we're not just building the future—we're building
                a better future for everyone.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">AI/ML Certified</Badge>
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">ISO 27001</Badge>
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20">SOC 2 Type II</Badge>
                <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 border-orange-500/20">Carbon Neutral</Badge>
                <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-600 border-cyan-500/20">Quantum Ready</Badge>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up delay-600">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Rocket className="h-6 w-6 text-primary mr-3" />
                Innovation Timeline
              </h3>
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`flex-shrink-0 w-16 h-16 bg-card/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <item.icon className={`h-6 w-6 ${item.color} group-hover:animate-pulse`} />
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-border/50 pl-6 -ml-8 last:border-l-0 group-hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{item.year}</span>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{item.event}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/20 backdrop-blur-sm px-4 py-2 text-sm mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-purple-800 dark:text-neutral-400 font-medium">
                Our Leadership
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400">
                Meet Our Tech Visionaries
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up delay-200">
              Brilliant minds pushing the boundaries of what's possible in technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden p-6 rounded-xl border border-border bg-card/80 dark:bg-card/30 dark:border-white/10 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-sm animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 ${member.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-background dark:ring-white/10 shadow-xl group-hover:ring-purple-500/50 transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground dark:text-white mb-1 group-hover:text-purple-800 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-300 font-medium mb-3">
                    {member.role}
                  </p>

                  <div className="flex justify-center space-x-3">
                    {['linkedin', 'email'].map((platform, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="p-2 rounded-full bg-accent dark:bg-white/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group/icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 group-hover/icon:scale-110 transition-transform duration-200"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d={
                              platform === 'linkedin'
                                ? 'M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z'
                                : 'M4 4h16v2l-8 5-8-5V4zm0 4v12h16V8l-8 5-8-5z'
                            }
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default page