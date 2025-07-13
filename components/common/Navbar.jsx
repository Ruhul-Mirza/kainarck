"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import logo from "../../public/images/kainarck_logo.png";
import darkLogo from "../../public/images/dark_logo.png";
import { useTheme } from "@/context/ThemeContext";
import {
  Brush,
  ChevronDown,
  Code2,
  Database,
  Globe,
  Moon,
  Server,
  Shield,
  Smartphone,
  SmartphoneIcon,
  Sparkles,
  Sun,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { DesktopIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavContent = React.lazy(() => import("./navbar/MobileNavContext"));
export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      // children: [
      //     {
      //         icon: <Sparkles />,
      //         title: "AI Tools",
      //         description: "Explore powerful AI tools",
      //     },
      //     {
      //         icon: <Sparkles />,
      //         title: "Analytics",
      //         description: "View detailed reports",
      //     },
      // ],
    },
    {
      name: "Serivce",
      link: "/service",
      children: [
        {
          icon: <Code2 />,
          title: "Web Desiging & Development",
          description: "Explore powerful AI tools",
        },
        {
          icon: <Smartphone />,
          title: "Mobile App Development",
          description: "View detailed reports",
        },
        {
          icon: <Brush />,
          title: "Graphic & UI Design",
          description: "View detailed reports",
        },
        {
          icon: <DesktopIcon />,
          title: "Website Rebranding",
          description: "View detailed reports",
        },
      ],
    },
    {
      name: "Blogs",
      link: "/blogs",
      // children: [
      //     {
      //         icon: <Sparkles />,
      //         title: "AI Tools",
      //         description: "Explore powerful AI tools",
      //     },
      //     {
      //         icon: <Sparkles />,
      //         title: "Analytics",
      //         description: "View detailed reports",
      //     },
      // ],
    },

    {
      name: "About",
      link: "/aboutus",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const servicesItems = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Web Development",
      description: "Custom websites and web applications",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Cybersecurity",
      description: "Protect your digital assets",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Analytics",
      description: "Turn data into business insights",
    },
  ];
  return (
    <header className="sticky z-50 top-0 py-5">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
<div className="flex items-center h-12">
  <Image
    src={theme === "dark" ? darkLogo : logo}
    alt="Kainarck Logo"
    width={160}
    height={50}
    className="h-full w-auto object-contain"
    priority
  />
</div>
          <NavItems items={navItems} />
          <div className="flex items-center select-none gap-4">
            <NavbarButton
              variant="secondary"
              as="button"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-purple-700"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 " />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </NavbarButton>
            <Link href={"/contactus"}>
              <InteractiveHoverButton>Get in Touch</InteractiveHoverButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center h-10">
  <Image
    src={theme === "dark" ? darkLogo : logo}
    alt="Kainarck Logo"
    width={140}
    height={40}
    className="h-full w-auto object-contain"
  />
</div>

            <div className="flex items-center space-x-3">
              <NavbarButton
                variant="secondary"
                as="button"
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-purple-700"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 " />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </NavbarButton>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <MobileNavContent
              activeDropdown={activeDropdown}
              servicesItems={servicesItems}
              toggleDropdown={toggleDropdown}
            />
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Check the navbar at the top of the container
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
