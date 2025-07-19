"use client";

import React from "react";
import { Mail, MapPin, Phone, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#121212]">
      {/* Footer elements */}
      <div className="relative w-full max-w-[1240px] mx-auto pt-8 pb-6 px-4 flex flex-col gap-10">
        {/* Connect section */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full min-h-10 flex-wrap gap-4">
          {/* Socials */}
          <div className="flex items-center gap-4 h-10">
            {/* Logo */}
            <div className="flex items-center h-[38px]">
              <h2 className="font-[Urbanist] font-bold text-[32px] leading-[38px] flex items-center text-center tracking-[0.05em] text-[#14C5F0] whitespace-nowrap">
                SPAZOR.AI
              </h2>
            </div>
            {/* Divider */}
            <div className="w-5 h-0 border border-[rgba(255,255,255,0.08)] rotate-90"></div>
            {/* Social accounts */}
            <div className="flex items-center gap-3 h-10">
              <div className="flex justify-center items-center w-10 h-10 border-[0.714286px] border-[rgba(255,255,255,0.08)] rounded-[42.8571px] p-[11.4286px] hover:border-[#14C5F0] transition-colors cursor-pointer">
                <Twitter className="w-[17.14px] h-[17.14px] text-white" />
              </div>
              <div className="flex justify-center items-center w-10 h-10 border-[0.714286px] border-[rgba(255,255,255,0.08)] rounded-[42.8571px] p-[11.4286px] hover:border-[#14C5F0] transition-colors cursor-pointer">
                <Instagram className="w-[17.14px] h-[17.14px] text-white" />
              </div>
              <div className="flex justify-center items-center w-10 h-10 border-[0.714286px] border-[rgba(255,255,255,0.08)] rounded-[42.8571px] p-[11.4286px] hover:border-[#14C5F0] transition-colors cursor-pointer">
                <Linkedin className="w-[17.14px] h-[17.14px] text-white" />
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="h-[19px]">
            <p className="font-[Urbanist] font-normal text-base leading-[19px] text-white text-center">
              ©2025 SPAZOR.AI. All Rights Reserved.
            </p>
          </div>
        </div>
        {/* Divider line */}
        <div className="w-full h-0 border border-[rgba(255,255,255,0.08)]"></div>
        {/* Major texts */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-[215px]">
          {/* Subscribe */}
          <div className="flex flex-col gap-6 w-full lg:w-[340px]">
            <h3 className="font-[Urbanist] font-semibold text-lg leading-[130%] tracking-[-0.02em] text-white">
              Subscribe to Spazor Labs
            </h3>
            {/* Email input container */}
            <div className="relative w-full h-[66px] border border-white rounded-[40px]">
              <input
                type="email"
                placeholder="Enter your Email"
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-[calc(100%-140px)] h-[23px] bg-transparent text-white placeholder-white font-[Urbanist] font-medium text-lg leading-[130%] tracking-[-0.02em] outline-none border-none"
              />
              <button className="absolute w-[106px] h-[50px] right-2 top-1/2 transform -translate-y-1/2 bg-[#A259FF] border border-white rounded-[24px] flex flex-col justify-center items-center p-[13.5px_24px] gap-[10px] hover:bg-[#9550e9] transition-colors">
                <span className="font-[Urbanist] font-medium text-lg leading-[130%] tracking-[-0.02em] text-white">
                  Sign up
                </span>
              </button>
            </div>
          </div>
          {/* Menu */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-[60px] w-full lg:w-[783px]">
            {/* Explore */}
            <div className="relative w-full md:w-[73px] mb-6 md:mb-0">
              <h3 className="font-[Urbanist] font-semibold text-lg leading-[22px] tracking-[-0.02em] text-white mb-4">
                Explore
              </h3>
              <div className="flex flex-col gap-4">
                <a href="#" className="font-[Urbanist] font-normal text-lg leading-[22px] text-white hover:text-[#14C5F0] transition-colors">
                  Home
                </a>
                <a href="#" className="font-[Urbanist] font-normal text-lg leading-[22px] text-white hover:text-[#14C5F0] transition-colors">
                  About Us
                </a>
                <a href="#" className="font-[Urbanist] font-normal text-lg leading-[22px] text-white hover:text-[#14C5F0] transition-colors">
                  FAQs
                </a>
                <a href="#" className="font-[Urbanist] font-normal text-lg leading-[22px] text-white hover:text-[#14C5F0] transition-colors">
                  Blog
                </a>
              </div>
            </div>
            {/* Contact Us */}
            <div className="relative w-full md:w-[264px] mb-6 md:mb-0">
              <h3 className="font-[Urbanist] font-semibold text-lg leading-[22px] tracking-[-0.02em] text-white mb-4">
                Contact Us
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-[#14C5F0] flex-shrink-0" strokeWidth={2} />
                  <span className="font-[Urbanist] font-normal text-lg leading-[22px] text-white">
                    admin@spazorlabs.studio
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-[#14C5F0] flex-shrink-0" strokeWidth={2} />
                  <span className="font-[Urbanist] font-normal text-lg leading-[22px] text-white">
                    +91 9509217234
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#14C5F0] flex-shrink-0" strokeWidth={2} />
                  <span className="font-[Urbanist] font-normal text-lg leading-[22px] text-white">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>
            {/* Services */}
            <div className="relative w-full md:w-[166px]">
              <h3 className="font-[Urbanist] font-semibold text-lg leading-[22px] tracking-[-0.02em] text-white mb-4">
                Services
              </h3>
              <div className="flex flex-col gap-4">
                <a href="#" className="font-[Urbanist] font-normal text-lg leading-[22px] text-white hover:text-[#14C5F0] transition-colors">
                  ERP Solutions
                </a>
                <a href="#" className="font-[Urbanist] font-normal text-lg leading-[22px] text-white hover:text-[#14C5F0] transition-colors">
                  UI/UX Design
                </a>
                <a href="#" className="font-[Urbanist] font-normal text-lg leading-[22px] text-white hover:text-[#14C5F0] transition-colors">
                  DevOps & Security
                </a>
                <a href="#" className="font-[Urbanist] font-normal text-lg leading-[22px] text-white hover:text-[#14C5F0] transition-colors">
                  SaaS Development
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};