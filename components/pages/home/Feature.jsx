import {
    Code2,
    Smartphone,
    Paintbrush2,
    MonitorSmartphone,
    Landmark,
    Database,
    Server,
    Brush,
    Palette,
    Cloud,
    AppWindow,
    BarChart,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { ShineBorder } from "@/components/magicui/shine-border";
import { IconBrandAdobeIllustrator, IconBrandAdobePhotoshop, IconBrandAdobeXd, IconBrandCoreos, IconBrandFigma, IconBrandFirebase, IconBrandFlutter, IconBrandFramerMotion, IconBrandGatsby, IconBrandGooglePlay, IconBrandMongodb, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandRadixUi, IconBrandReact, IconBrandReactNative, IconBrandShopee, IconBrandTailwind, IconBrandThreejs, IconBrandWordpress } from "@tabler/icons-react";
import { BoxReveal } from "@/components/magicui/box-reveal";

const techStacks = [
    {
        name: "Web Development",
        description:
            "We use modern technologies like Next.js, React, Node.js, MongoDB, PostgreSQL, and Tailwind CSS to build powerful web apps.",
        Icon: Code2,
        href: "/web-development",
        cta: "Explore Our Web Development Service",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Marquee pauseOnHover className="absolute top-10 [--duration:18s]">
                {[
                    { name: "Next.js", icon: <IconBrandNextjs /> },
                    { name: "React", icon: <IconBrandReact /> },
                    { name: "Node.js", icon: <IconBrandNodejs /> },
                    { name: "Shopify", icon: <IconBrandShopee /> },
                    { name: "WordPress", icon: <IconBrandWordpress /> },
                    { name: "Tailwind CSS", icon: <IconBrandTailwind /> },
                    { name: "MongoDB", icon: <IconBrandMongodb /> },
                    { name: "MySQL", icon: <IconBrandMysql /> },
                ].map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-2 mx-2 rounded-xl relative p-5 px-10"
                    >
                        <div className="text-lg">{tech.icon}</div>
                        <div>
                            {tech.name}
                        </div>
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    </div>
                ))}
            </Marquee>
        ),
    },
    {
        name: "Mobile App Development",
        description:
            "Build seamless mobile experiences with React Native, Expo, and Flutter. From design to deployment, we handle it all.",
        Icon: Smartphone,
        href: "#app-development",
        cta: "Explore Our Mobile App Service",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee pauseOnHover className="absolute top-10 [--duration:16s]">
                {[
                    { name: "React Native", icon: <IconBrandReactNative /> },
                    { name: "Flutter", icon: <IconBrandFlutter /> },
                    { name: "Firebase", icon: <IconBrandFirebase /> },
                    { name: "Play Store", icon: <IconBrandGooglePlay /> },
                ].map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-2 mx-2 rounded-xl relative p-5 px-10"
                    >
                        <div className="text-lg">{tech.icon}</div>
                        <div>
                            {tech.name}
                        </div>
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    </div>
                ))}
            </Marquee>
        ),
    },
    {
        name: "Website Rebranding",
        description:
            "We revamp your digital presence with bold UI/UX, modern typography, and cutting-edge frontend frameworks.",
        Icon: MonitorSmartphone,
        href: "#website-rebranding",
        cta: "Explore Website Rebranding Service",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee pauseOnHover className="absolute top-10 [--duration:20s]">
                {[
                    { name: "Framer Motion", icon: <IconBrandFramerMotion /> },
                    { name: "Three Js", icon: <IconBrandThreejs /> },
                    { name: "Gatsby", icon: <IconBrandGatsby /> },
                    { name: "AOS", icon: "🌀" },
                    { name: "Radix UI", icon: <IconBrandRadixUi /> },
                ].map((lib, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-2 mx-2 rounded-xl relative p-5 px-10"
                    >
                        <div className="text-lg">{lib.icon}</div>
                        <div>
                            {lib.name}
                        </div>
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    </div>
                ))}
            </Marquee>
        ),
    },
    {
        name: "Graphic & UI Design",
        description:
            "We design logos, mockups, templates, banners and social posts using powerful tools that make your brand stand out.",
        Icon: Brush,
        href: "#graphic-design",
        cta: "Explore Graphic Design Service",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Marquee pauseOnHover className="absolute top-10 [--duration:22s]">
                {[
                    { name: "Figma", icon:<IconBrandFigma/> },
                    { name: "Adobe XD", icon: <IconBrandAdobeXd/>},
                    { name: "Illustrator", icon:<IconBrandAdobeIllustrator/> },
                    { name: "Photoshop", icon: <IconBrandAdobePhotoshop/> },
                    { name: "Canva", icon: "🌈" },
                    { name: "CorelDRAW", icon: <IconBrandCoreos/> },
                ].map((tool, idx) => (
                    <div
                        key={idx}
                        className="flex-col flex items-center gap-2 mx-2 rounded-xl relative p-5 px-10"
                    >
                        <div className="text-lg">{tool.icon}</div>
                        <div>
                            {tool.name}
                        </div>
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    </div>
                ))}
            </Marquee>
        ),
    },
];

export default function TechStackSectionDemo() {
    return (
        <section id="tech-stack" className="py-20">
            <h2 className="mb-4 text-center text-4xl md:text-5xl px-5 font-bold leading-tight tracking-tight text-foreground">
               Powered by Modern Tech Stack
            </h2>
            <p className="mx-auto mb-10 px-5 max-w-xl text-center text-base text-muted-foreground">
                We use modern tools and frameworks for{" "}
                <strong className="text-purple-600">Web, App, Branding</strong> and{" "}
                <strong className="text-purple-600">UI Design</strong> to deliver high-performance solutions.
            </p>
            {/* <h2 className="mb-4 text-4xl md:text-5xl font-bold w-full text-gray-900 dark:text-white tracking-normal">
                <BoxReveal duration={1} boxColor='oklch(62.7% .265 303.9)'>
                 Powered by Modern Tech Stack
                </BoxReveal>
            </h2> */}
            {/* <div className="flex justify-center container mx-auto">
                <BoxReveal duration={1} boxColor='oklch(62.7% .265 303.9)'>
                    <p className="">
                      We leverage cutting-edge technologies including React, Node.js, AI/ML, and cloud infrastructure to build scalable, secure, and high-performance digital solutions.
                    </p>
                </BoxReveal>
            </div> */}

            <BentoGrid className="container mx-auto mt-12 px-5">
                {techStacks.map((stack, index) => (
                    <BentoCard key={index} {...stack} />
                ))}
            </BentoGrid>
        </section>
    );
}
