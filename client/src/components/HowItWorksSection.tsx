"use client";

import React from "react";
import { Search, MessageCircle, Send } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#121212] flex flex-col items-center justify-start pt-0 pb-20">
      {/* Section Header */}
      <div className="text-center mb-16 pt-20">
        <h2 className="font-h2-headlines font-[number:var(--h2-headlines-font-weight)] text-white text-[48px] tracking-[-0.96px] leading-[56px] mb-6">
          How it works
        </h2>
        <p className="font-h3-body-text font-[400] text-[#ffffffcc] text-[18px] tracking-[-0.36px] leading-[28px] max-w-[700px] mx-auto">
          Interact with expert-level personas like a doctor, teacher, or financial advisor,<br />
          powered by our proprietary LLM and wrapped in an intuitive, chat-based experience.
        </p>
      </div>

      {/* Steps Container */}
      <div className="relative w-full container px-4 pt-6 mx-auto flex flex-col">

        {/* Step 1: Sign Up */}
        <div className="relative flex-col-reverse flex gap-5 md:flex-row justify-evenly items-center">
          {/* Sign Up Form */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-full md:w-96 rounded-2xl bg-[#1a1a2e] border-2 border-[#ffd700] p-8 shadow-2xl">
              {/* Email */}
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full h-[48px] rounded-md bg-[#2a2a4a] border border-[#3a3a5a] px-4 text-white placeholder-[#888] text-sm focus:outline-none focus:ring-2 focus:ring-[#1aa2c8]"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number..."
                  className="w-full h-[48px] rounded-md bg-[#2a2a4a] border border-[#3a3a5a] px-4 text-white placeholder-[#888] text-sm focus:outline-none focus:ring-2 focus:ring-[#1aa2c8]"
                />
              </div>

              {/* Submit */}
              <button className="w-full h-[48px] bg-[#4a5a8a] hover:bg-[#5a6a9a] text-white font-semibold rounded-md transition-all">
                Create Account
              </button>

              {/* Divider */}
              <div className="text-center my-6">
                <p className="text-sm text-[#aaa]">
                  Already a member?
                  <span className="text-[#1aa2c8] ml-1 cursor-pointer hover:underline">
                    Sign in
                  </span>
                </p>
                <div className="my-4 h-px bg-[#2a2a4a]"></div>
                <p className="text-sm text-[#888]">Or sign in with</p>
              </div>

              {/* Social Buttons */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center h-[45px] rounded-md bg-[#4285f4] hover:bg-[#3367d6] text-white text-sm font-medium transition-colors">
                  <span className="bg-white text-[#4285f4] w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold mr-2">
                    G
                  </span>
                  Sign in with Google
                </button>
                <button className="w-full flex items-center justify-center h-[45px] rounded-md bg-[#1877f2] hover:bg-[#166fe5] text-white text-sm font-medium transition-colors">
                  <span className="bg-white text-[#1877f2] w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold mr-2">
                    f
                  </span>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-1/2 absolute border-t-4 border-dashed border-white"></div>

          {/* Step 1 Description */}
          <div className="z-10">
            <div className="z-10 bg-[#121212] p-4">
              <h3 className="text-white text-[42px] font-bold mb-6 leading-[50px]">Sign up</h3>
              <p className="text-[#ffffffcc] text-[18px] leading-[28px] max-w-[400px]">
                Create an account with Spazor labs-<br />
                by providing your email address, phone<br />
                number and password.
              </p>
            </div>
          </div>
          <div className="hidden lg:block h-1/2 absolute top-1/2 left-3/4 border-l-4 border-dashed border-white"></div>
        </div>

        {/* Step 2: Connect with Personas */}
        <div className="relative flex flex-col md:flex-row items-center justify-evenly pt-10 md:pt-40 md:pb-40">
          {/* Step 2 Description */}
          <div className="hidden lg:block h-1/2 absolute top-0 left-3/4 border-l-4 border-dashed border-white"></div>
          <div className="hidden lg:block h-1/2 absolute top-1/2 left-1/4 border-l-4 border-dashed border-white"></div>

          <div className="z-10 bg-[#121212] p-4">
            <h3 className="text-white text-[42px] font-bold mb-6 leading-[50px]">
              Connect with Spazor.AI<br />Personas
            </h3>
            <p className="text-[#ffffffcc] text-[18px] leading-[28px] max-w-[450px]">
              Our company provides a comprehensive suite of AI services,<br />
              featuring dynamic personas tailored to deliver precise,<br />
              context-aware responses aligned with your specific needs.
            </p>
          </div>
          <div className="w-1/2 absolute border-t-4 border-dashed border-white"></div>


          {/* Personas Selection Interface */}
          <div className="relative">
            <div className="w-[350px] h-[500px] rounded-[20px] bg-[#1a1a2e] border-2 border-[#ffd700] p-6 shadow-lg">
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search for professionals..."
                  className="w-full h-[45px] bg-[#2a2a4a] border border-[#3a3a5a] rounded-[8px] pl-4 pr-10 text-white placeholder-[#888] text-[14px] focus:border-[#1aa2c8] focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#888]" />
              </div>

              {/* Personas List */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-[#2a2a4a] rounded-[8px] hover:bg-[#3a3a5a] cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4ade80] to-[#22c55e] flex items-center justify-center">
                      <span className="text-white text-[12px] font-bold">EO</span>
                    </div>
                    <div>
                      <p className="text-white text-[14px] font-medium">Esther Oluwakunde</p>
                      <p className="text-[#888] text-[12px]">UI UX Designer</p>
                    </div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-[#1aa2c8]" />
                </div>

                <div className="flex items-center justify-between p-3 bg-[#2a2a4a] rounded-[8px] hover:bg-[#3a3a5a] cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center">
                      <span className="text-white text-[12px] font-bold">MC</span>
                    </div>
                    <div>
                      <p className="text-white text-[14px] font-medium">Montana Closet</p>
                      <p className="text-[#888] text-[12px]">Social Media Marketer</p>
                    </div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-[#1aa2c8]" />
                </div>

                <div className="flex items-center justify-between p-3 bg-[#2a2a4a] rounded-[8px] hover:bg-[#3a3a5a] cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] flex items-center justify-center">
                      <span className="text-white text-[12px] font-bold">CG</span>
                    </div>
                    <div>
                      <p className="text-white text-[14px] font-medium">Cecilia Gay</p>
                      <p className="text-[#888] text-[12px]">Website Developer</p>
                    </div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-[#1aa2c8]" />
                </div>

                <div className="flex items-center justify-between p-3 bg-[#2a2a4a] rounded-[8px] hover:bg-[#3a3a5a] cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center">
                      <span className="text-white text-[12px] font-bold">TJ</span>
                    </div>
                    <div>
                      <p className="text-white text-[14px] font-medium">TopJob View</p>
                      <p className="text-[#888] text-[12px]">Software Developer</p>
                    </div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-[#1aa2c8]" />
                </div>
              </div>

              <button className="w-full h-[45px] bg-[#4a5a8a] hover:bg-[#5a6a9a] rounded-[8px] text-white font-medium transition-colors">
                Create account
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Swift Response */}
        <div className="flex flex-col-reverse gap-5 md:flex-row  justify-evenly items-center">
          {/* Chat Interface */}
          <div className="relative">
            <div className="w-[350px] h-[500px] rounded-[20px] bg-[#1a1a2e] border-2 border-[#ffd700] p-6 shadow-lg">
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search for professionals..."
                  className="w-full h-[45px] bg-[#2a2a4a] border border-[#3a3a5a] rounded-[8px] pl-4 pr-10 text-white placeholder-[#888] text-[14px] focus:border-[#1aa2c8] focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#888]" />
              </div>

              {/* Selected Professional */}
              <div className="flex items-center justify-between p-3 bg-[#2a2a4a] rounded-[8px] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4ade80] to-[#22c55e] flex items-center justify-center">
                    <span className="text-white text-[12px] font-bold">AS</span>
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-medium">Akansha Sethi</p>
                    <p className="text-[#888] text-[12px]">UI UX Designer</p>
                  </div>
                </div>
                <MessageCircle className="w-5 h-5 text-[#1aa2c8]" />
              </div>

              {/* Chat Area */}
              <div className="h-[250px] bg-[#2a2a4a] rounded-[8px] p-4 mb-4 flex flex-col justify-end">
                <div className="bg-[#3a3a5a] rounded-[12px] p-3 mb-3 max-w-[80%] self-end">
                  <p className="text-white text-[14px]">I want to design an e-commerce website</p>
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full h-[45px] bg-[#2a2a4a] border border-[#3a3a5a] rounded-[8px] pl-4 pr-12 text-white placeholder-[#888] text-[14px] focus:border-[#1aa2c8] focus:outline-none"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1aa2c8] rounded-full flex items-center justify-center hover:bg-[#1590b8] transition-colors">
                  <Send className="w-3 h-3 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 Description */}
          <div className="ml-20 mt-8">
            <h3 className="text-white text-[42px] font-bold mb-6 leading-[50px]">
              Swift response,<br />
              Iteration and Delivery
            </h3>
            <p className="text-[#ffffffcc] text-[18px] leading-[28px] max-w-[450px]">
              We provide comprehensive digital solutions tailored<br />
              to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};