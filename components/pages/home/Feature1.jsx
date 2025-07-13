"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { TextComponent } from "@/components/ui/TextComponent";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { BoxReveal } from "@/components/magicui/box-reveal";

const data = [
    {
        title: "SEO Audit & Strategy",
        content:
            "We conduct comprehensive SEO audits, keyword research, and competitive analysis to create data-driven strategies for your digital success.",
        srcImage1:
            "https://res.cloudinary.com/sayed12m/image/upload/v1749810490/pvtmobtko9pzyxxnpscj.gif",
        srcImage2:
            "https://res.cloudinary.com/sayed12m/image/upload/v1749810339/iou8anks94hbwmln5xuz.gif",
    },
    {
        title: "Design & Development",
        content:
            "Our team creates SEO-optimized designs and develops high-performance websites using modern technologies and best practices.",
        srcImage1:
            "https://res.cloudinary.com/sayed12m/image/upload/v1749811246/pi5wrvb8v5jsv9xbwke6.gif",
        srcImage2:
            "https://res.cloudinary.com/sayed12m/image/upload/v1749811248/skmk0n4aqcuhuasm4rtj.gif",
    },
    {
        title: "Digital Marketing Implementation",
        content:
            "We implement comprehensive digital marketing campaigns including SEO, PPC, social media, and content marketing strategies.",
        srcImage1:
            "https://res.cloudinary.com/sayed12m/image/upload/v1749811526/m82pgmakfygjok9lwhdc.gif",
        srcImage2:
            "https://res.cloudinary.com/sayed12m/image/upload/v1749811528/qvhbdtwmkpjtx5eux39c.gif",
    },
    {
        title: "Analytics & Optimization",
        content:
            "Continuous monitoring, A/B testing, and optimization ensure maximum ROI and long-term digital growth for your business.",
        srcImage1:
            "https://res.cloudinary.com/sayed12m/image/upload/v1749812943/oldiw7penut9qlu0yf9u.gif",
        srcImage2:
            "https://res.cloudinary.com/sayed12m/image/upload/v1749812943/ae1uin4rfwbg8z4z9ord.gif",

    },
];

export function FeatureFourImages() {
    const [featureOpen, setFeatureOpen] = useState(0);
    const [timer, setTimer] = useState(0);
    const { theme } = useTheme()

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 10);
        }, 10);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer > 10000) {
            setFeatureOpen((prev) => (prev + 1) % data.length);
            setTimer(0);
        }
    }, [timer]);

    return (
        <div className="container mx-auto px-6 md:px-5 py-12 overflow-hidden">
            <div className="mb-20 text-center relative py-5 ">
                {/* <div className="group w-fit mb-4 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                    <span
                        className={cn(
                            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                        )}
                        style={{
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                        }}
                    />
                    🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                    <AnimatedGradientText className="text-sm font-medium">
                        Our Proven Process
                    </AnimatedGradientText>
                    <ChevronRight
                        className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
                    />
                </div> */}
                {/* <div className="absolute bottom-0 -z-10  -right-10 md:w-2xl w-52 md:h-30 h-32 bg-purple-500/20 dark:bg-purple-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0  -z-10- left--right-10 md:w-2xl w-52 md:h-30 h-32 bg-violet-500/20 dark:bg-violet-500/10 rounded-full filter blur-3xl"></div> */}


                <h2 className="mb-4 text-4xl md:text-5xl font-bold flex justify-center text-gray-900 dark:text-white tracking-normal">
                    <BoxReveal duration={1} boxColor='oklch(62.7% .265 303.9)'>
                        How We Deliver Results
                    </BoxReveal>
                </h2>
                <div className="flex justify-center">
                <BoxReveal duration={1} boxColor='oklch(62.7% .265 303.9)'>
                    <p className="">
                        Our data-driven 4-step process ensures successful project delivery, measurable ROI, and long-term digital growth for every client.
                    </p>
                </BoxReveal>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Text Components */}

                <div className="space-y-6">
                    {data.map((item, index) => (
                        <button
                            key={item.title}
                            className="w-full"
                            onClick={() => {
                                setFeatureOpen(index);
                                setTimer(0);
                            }}
                            type="button"
                        >
                            <TextComponent
                                number={index + 1}
                                title={item.title}
                                content={item.content}
                                isOpen={featureOpen === index}
                                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                            />
                        </button>
                    ))}
                </div>

                {/* Image Section */}
                <div className="h-full">
                    <div className={cn("relative mx-auto h-96 w-full overflow-hidden rounded-lg md:h-[500px]")}>
                        {data.map((item, index) => (
                            <img
                                key={item.title}
                                alt={item.title}
                                src={theme === "dark" ? item.srcImage1 : item.srcImage2}
                                className={cn(
                                    "absolute transform-gpu rounded-lg object-fit transition-all duration-300 h-fit w-[500px]",
                                    featureOpen === index ? "scale-100" : "scale-70",
                                    featureOpen > index ? "translate-y-full" : ""
                                )}
                                style={{ zIndex: data.length - index }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
