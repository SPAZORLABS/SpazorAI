"use client";

import { ArrowRightIcon, ArrowUpRightIcon, PlayIcon, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { HowItWorksSection } from "./HowItWorksSection";
import { ProjectsSection } from "./ProjectsSection";
import { Footer } from "./Footer";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SpazorNavigation from "./landingnav";

export const SpazorLabHero: React.FC = () => {
  // Navigation menu items
  const navItems = [
    { label: "Home", width: "w-fit" },
    { label: "About Us", width: "w-[78px]" },
    { label: "FAQs", width: "w-11" },
    { label: "Blog", width: "w-[37px]" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < scrollY.current) {
        setIsExpanded(true); // scrolling up
      } else {
        setIsExpanded(false); // scrolling down
      }

      scrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      {/* Logo and Brand */}
      <SpazorNavigation />  
      <div className="relative w-full h-screen flex flex-col justify-between bg-gradient-to-b from-[#121212] via-[#a763fe] to-[#121212] overflow-x-hidden">
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center flex-1 w-full px-2 sm:px-4 md:px-12 pt-10 md:pt-16 pb-6 md:pb-8">
          {/* Decorative Blur Elements */}
          <div className="absolute left-0 top-0 w-[90px] h-[90px] md:w-[135px] md:h-[135px] rounded-full bg-blend-soft-light bg-[linear-gradient(232deg,rgba(60,71,158,0.25)_0%,rgba(30,76,110,0.25)_100%)] opacity-40 blur-[2px] pointer-events-none" />
          <div className="absolute right-0 top-0 w-[90px] h-[90px] md:w-[135px] md:h-[135px] rounded-full bg-blend-soft-light bg-[linear-gradient(232deg,rgba(60,71,158,0.25)_0%,rgba(30,76,110,0.25)_100%)] opacity-40 blur-[10px] pointer-events-none" />

          {/* Main Headline */}
          <h1 className="font-h2-headlines font-[600] text-white text-[32px] sm:text-[48px] md:text-[64px] text-center tracking-[-1.28px] leading-tight md:leading-[77px] max-w-2xl md:max-w-5xl mb-4 md:mb-6">
            Redefining the Power of Artificial Intelligence
          </h1>
          {/* Subheading */}
          <p className="font-h3-body-text font-[500] text-white text-[16px] sm:text-[18px] md:text-[20px] text-center tracking-[-0.4px] leading-[22px] md:leading-[24px] max-w-md md:max-w-2xl mb-6 md:mb-10">
            Interact with expert-level personas like a doctor, teacher, or financial advisor,<br className="hidden md:block" />
            powered by our proprietary LLM and wrapped in an intuitive, chat-based experience.
          </p>
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
            {/* Get Started Button */}
            <button
              className="flex flex-row items-center px-2 pl-6 py-[6px] gap-6  h-[56px] bg-[#A763FE] rounded-full focus:outline-none transition-colors hover:bg-[#8c3ee6]"
              style={{
                fontFamily: "'Urbanist', Helvetica",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 18,
                lineHeight: "22px",
                letterSpacing: "-0.02em",
              }}
            >
              <span
                className="text-white text-[18px] leading-[22px] text-center"
                style={{
                  width: 92,
                  height: 22,
                  fontFamily: "'Urbanist', Helvetica",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: "22px",
                  letterSpacing: "-0.02em",
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                }}
              >
                Get Started
              </span>
              <span
                className="flex items-center justify-center bg-[rgba(255,255,255,0.08)] rounded-[22px]"
                style={{
                  width: 44,
                  height: 44,
                  padding: 14,
                  gap: 10,
                  flex: "none",
                  order: 1,
                  flexGrow: 0,
                }}
              >
                <ArrowRightIcon
                  className="w-4 h-4"
                  style={{
                    width: 16,
                    height: 16,
                    transform: "matrix(1, 0, 0, -1, 0, 0)",
                  }}
                  strokeWidth={1.5}
                  color="#fff"
                />
              </span>
            </button>
            {/* Watch Demo Button */}
            <button
              className="w-full px-2 pl-6 relative flex items-center font-sans-serif justify-between h-[56px] rounded-full border border-white/5 bg-[linear-gradient(90deg,rgba(217,217,217,0.12)_0%,rgba(115,115,115,0.195)_100%)] backdrop-blur-[10px] hover:bg-[rgba(80,40,120,0.18)] transition-colors gap-2"

            >
              <span className="text-white font-medium w-fit"
                style={{
                  fontFamily: "'Urbanist', Helvetica",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 18,
                }}>
                Watch Demo
              </span>

              <span
                className="flex items-center justify-center w-11 h-11 rounded-full"
                style={{
                  background:
                    "linear-gradient(102.8deg, rgba(42,42,42,0) 7.58%, rgba(144,144,144,0.34) 93.27%)",
                }}
              >
                <PlayIcon
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  color="#fff"
                />
              </span>
            </button>

          </div>
        </div>
        {/* Gradient Transition to Black */}
      </div>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};