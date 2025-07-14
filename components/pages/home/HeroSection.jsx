import { useTheme } from "@/context/ThemeContext";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Particles } from "@/components/magicui/particles";
import { Ripple } from "@/components/magicui/ripple";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

import {
  IconBrandGoogleDrive,
  IconBrandOpenai,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { IconCloud } from "@/components/magicui/icon-cloud";
import {
  AnimatedTooltip,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/animated-tooltip";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { HovermeButton } from "@/components/ui/HovermeButton";
import { ArrowRightIcon, Code, Smartphone } from "lucide-react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import StatsSection from "./StatsSection";


const avatars = [
  {
    id: 1,
    name: "Mira Lopez",
    designation: "Product Designer",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Frontend Developer",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "DevOps Engineer",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

// const ParticleAnimation = () => {
//   const containerRef = useRef(null);
//   const { theme } = useTheme();

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       containerRef.current.clientWidth / containerRef.current.clientHeight,
//       0.1,
//       1000
//     );

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(
//       containerRef.current.clientWidth,
//       containerRef.current.clientHeight
//     );
//     containerRef.current.appendChild(renderer.domElement);

//     // Icosahedron geometry
//     const geometry = new THREE.IcosahedronGeometry(2, 1);
//     const material = new THREE.MeshPhongMaterial({
//       color: theme === "dark" ? 0x8b5cf6 : 0x7c3aed,
//       wireframe: true,
//     });

//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     // Sprinkles background
//     const sprinklesGeometry = new THREE.BufferGeometry();
//     const sprinklesCount = 300;
//     const sprinklesPositions = new Float32Array(sprinklesCount * 3);
//     const sprinklesSizes = new Float32Array(sprinklesCount);

//     for (let i = 0; i < sprinklesCount * 3; i += 3) {
//       const radius = 4;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);

//       sprinklesPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
//       sprinklesPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       sprinklesPositions[i + 2] = radius * Math.cos(phi);
//       sprinklesSizes[i / 3] = Math.random() * 0.1 + 0.02;
//     }

//     sprinklesGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(sprinklesPositions, 3)
//     );
//     sprinklesGeometry.setAttribute(
//       "size",
//       new THREE.BufferAttribute(sprinklesSizes, 1)
//     );

//     const sprinklesMaterial = new THREE.PointsMaterial({
//       size: 0.1,
//       sizeAttenuation: true,
//       color: theme === "dark" ? 0x9f7aea : 0x8b5cf6,
//       transparent: true,
//       opacity: 0.6,
//     });

//     const sprinkles = new THREE.Points(sprinklesGeometry, sprinklesMaterial);
//     scene.add(sprinkles);

//     // Particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 2000;
//     const posArray = new Float32Array(particlesCount * 3);
//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 10;
//     }

//     particlesGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(posArray, 3)
//     );

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: theme === "dark" ? 0x7c3aed : 0x6d28d9,
//     });

//     const particlesMesh = new THREE.Points(
//       particlesGeometry,
//       particlesMaterial
//     );
//     scene.add(particlesMesh);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(
//       theme === "dark" ? 0x404040 : 0x808080
//     );
//     scene.add(ambientLight);

//     const pointLight = new THREE.PointLight(
//       theme === "dark" ? 0x7c3aed : 0x6d28d9,
//       2
//     );
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       sphere.rotation.x += 0.001;
//       sphere.rotation.y += 0.002;
//       sprinkles.rotation.x += 0.0005;
//       sprinkles.rotation.y += 0.0003;
//       particlesMesh.rotation.x += 0.0002;
//       particlesMesh.rotation.y += 0.0001;
//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       if (!containerRef.current) return;
//       camera.aspect =
//         containerRef.current.clientWidth / containerRef.current.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(
//         containerRef.current.clientWidth,
//         containerRef.current.clientHeight
//       );
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       if (
//         containerRef.current &&
//         containerRef.current.contains(renderer.domElement)
//       ) {
//         containerRef.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [theme]);

//   return (
//     <div ref={containerRef} className="absolute inset-0 -z-10 h-full w-full" />
//   );
// };

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* <ParticleAnimation /> */}
      <Particles className="absolute -z-20 w-full h-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="z-10 flex items-center">
              <div
                className={cn(
                  "group rounded-full border border-black/10  text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ Introducing AI Implementation</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              <BoxReveal duration={1} boxColor="oklch(62.7% .265 303.9)">
                <span className="block">Innovative IT Solutions</span>
              </BoxReveal>
              {/* <BoxReveal duration={1} boxColor='oklch(62.7% .265 303.9)'>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                  for Your Business
                </span>
              </BoxReveal> */}
            </h1>

            <BoxReveal duration={1} boxColor="oklch(62.7% .265 303.9)">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We deliver cutting-edge technology solutions that drive growth,
                enhance efficiency, and secure your digital transformation
                journey.
              </p>
            </BoxReveal>

            <div className="flex flex-wrap gap-4">
              {/* <button className="px-8 py-4 rounded-md bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900">
                Get Started
              </button> */}
              <button className="bg-purple-500 dark:bg-purple-950 dark:hover:bg-purple-950/70 inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white hover:bg-purple-500/90 h-12 cursor-pointer rounded-full px-8 text-base shadow-md transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                Our Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 size-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button
                className=" dark:border-zinc-900 inline-flex items-center justify-center dark:bg-neutral-950 gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-primary/20 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50 h-12 cursor-pointer rounded-full px-8 text-base transition-transform duration-300 hover:translate-y-[-2px]"
              >
                Contact Us
              </button>
              {/* <button className="px-8 py-4 rounded-md bg-transparent border border-purple-400 text-gray-900 dark:text-white font-medium hover:bg-purple-500/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900">
                Learn More
              </button> */}
            </div>

            {/* <div className="flex items-center space-x-8 text-gray-600 dark:text-gray-400 text-sm mt-8">
              <div className="flex items-center">
                <AnimatedTooltip items={avatars} />
              </div>
              <span>
                Trusted by{" "}
                <span className="font-medium text-purple-600 dark:text-purple-400">
                  2,000+
                </span>{" "}
                clients worldwide
              </span>
            </div> */}
          </div>

          <div className="relative -z-20 order-first md:order-last">
            <ITAnimation />
            {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"> */}
            {/* <Ripple className="absolute" />
              <IconCloudDemo /> 
              
              */}
            {/* </div> */}
            {/* <OrbitingCircles className={"h-full absolute top-0 left-52"} path={false} radius={200} iconSize={40}>
              <div className="group relative animate-shiny-text rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2 px-6 flex shadow-md transition hover:shadow-xl hover:scale-[1.02] transform duration-300 ease-in-out">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Web Development
                </h3>
              </div>
              <div className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2 px-6 flex shadow-md transition hover:shadow-xl hover:scale-[1.02] transform duration-300 ease-in-out">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  App Development
                </h3>
              </div>
              <div className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2 px-6 flex shadow-md transition hover:shadow-xl hover:scale-[1.02] transform duration-300 ease-in-out">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Digital Development
                </h3>
              </div>
            </OrbitingCircles> */}
          </div>
          <OrbitingCircles radius={2000} className={"absolute h-full top-0"} />
        </div>
      </div>
      <div className="absolute bottom-0 -z-10  right-0 -mt-16 -mr-16 md:w-3xl w-52 md:h-80 h-32 bg-purple-500/20 dark:bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0  -z-10 left-0 -mb-16 -ml-16 md:w-3xl w-52 md:h-80 h-32 bg-violet-500/20 dark:bg-violet-500/10 rounded-full filter blur-3xl"></div>
      <StatsSection/>
    </div>
  );
};

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

const ITAnimation = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Background (optional for better contrast)
    // scene.background = new THREE.Color(theme === 'dark' ? 0x0f0f0f : 0xf0f0f0);

    // Geometry (Icosahedron)
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshPhongMaterial({
      color: theme === "dark" ? 0xffffff : 0x7c3aed,
      emissive: theme === "dark" ? 0x5b21b6 : 0x7c3aed,
      emissiveIntensity: 0.8,
      shininess: 60,
      wireframe: true,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Sprinkles
    const sprinklesGeometry = new THREE.BufferGeometry();
    const sprinklesCount = 300;
    const sprinklesPositions = new Float32Array(sprinklesCount * 3);
    const sprinklesSizes = new Float32Array(sprinklesCount);

    for (let i = 0; i < sprinklesCount * 3; i += 3) {
      const radius = 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      sprinklesPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      sprinklesPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      sprinklesPositions[i + 2] = radius * Math.cos(phi);
      sprinklesSizes[i / 3] = Math.random() * 0.1 + 0.02;
    }

    sprinklesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(sprinklesPositions, 3)
    );
    sprinklesGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(sprinklesSizes, 1)
    );

    const sprinklesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      color: theme === "dark" ? 0x9f7aea : 0x8b5cf6,
      transparent: true,
      opacity: 0.6,
    });

    const sprinkles = new THREE.Points(sprinklesGeometry, sprinklesMaterial);
    scene.add(sprinkles);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: theme === "dark" ? 0x7c3aed : 0x6d28d9,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      theme === "dark" ? 0.4 : 0.6
    );
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(
      theme === "dark" ? 0xc084fc : 0x6d28d9,
      2.5
    );
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-5, 3, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.002;
      sprinkles.rotation.x += 0.0005;
      sprinkles.rotation.y += 0.0003;
      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] z-40 max-w-full overflow-hidden rounded-lg"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-violet-600/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-8 bg-gradient-to-tr from-purple-500/40 to-violet-500/40 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-16 bg-gradient-to-tl from-purple-400/50 to-violet-400/50 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div> */}
        <Ripple />
        {/* <IconCloudDemo/> */}
      </div>
    </div>
  );
};

export default HeroSection;
