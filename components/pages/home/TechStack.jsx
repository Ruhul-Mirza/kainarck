import React from "react";
import { Marquee } from "@/components/magicui/marquee";

const techStack = [
  { name: "React", img: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Tailwind CSS", img: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Bootstrap", img: "https://cdn.simpleicons.org/bootstrap" },
  { name: "HTML5", img: "https://cdn.simpleicons.org/html5" },
//   { name: "CSS3", img: "https://cdn.simpleicons.org/css3" },
  { name: "JavaScript", img: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript" },
  { name: "jQuery", img: "https://cdn.simpleicons.org/jquery" },
  { name: "Git", img: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", img: "https://cdn.simpleicons.org/github" },
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb" },
  { name: "Express", img: "https://cdn.simpleicons.org/express" },
  { name: "Figma", img: "https://cdn.simpleicons.org/figma" },
  { name: "Firebase", img: "https://cdn.simpleicons.org/firebase" },
];

const firstRow = techStack.slice(0, techStack.length / 2);
const secondRow = techStack.slice(techStack.length / 2);

// ✅ Single card component
const TechCard = ({ img, name }) => (
  <div className="relative group text-center mx-2">
    <div className="w-20 h-20 border rounded-2xl p-5 bg-gradient-to-b from-white to-slate-100 dark:from-white/10 dark:to-white/5 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_8px_rgba(139,92,246,0.3)] flex items-center justify-center border-gray-200 dark:border-white/10">
      <img
        alt={`${name} logo`}
        src={img}
        loading="lazy"
        width={30}
        height={0}
        className="transition-transform"
        style={{ color: "transparent" }}
      />
    </div>
    <span className="text-sm mt-2 block text-gray-800 dark:text-white font-medium">
      {name}
    </span>
  </div>
);

// ✅ Full section
export const TechStackSection = () => {
  return (
  <section className="container mx-auto py-12 md:py-24">
  
    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-2 sm:mb-12">Technology Stack</h2>
    <div className="relative w-full py-12 overflow-hidden bg-white dark:bg-black">

      {/* Top Marquee */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>

      {/* Bottom Marquee */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>

      {/* Fading edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-black"></div>
    </div>
    </section>
  );
};
