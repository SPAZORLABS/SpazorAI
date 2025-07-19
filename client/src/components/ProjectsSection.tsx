"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Plus, Minus, Check, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

export const ProjectsSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const personas = [
    {
      id: 1,
      name: "Dr. Mohit Chaudhry",
      role: "General Physician",
      description: "Your go-to for health questions and first-aid advice.",
      category: "Expert Help",
      image: "/icons/doctor-icon.svg",
      borderColor: "#00ABE0"
    },
    {
      id: 2,
      name: "Grammar Genie",
      role: "English Coach",
      description: "Let's improve your writing and speaking!",
      category: "Education",
      image: "/icons/teacher-icon.svg",
      borderColor: "#00ABE0"
    },
    {
      id: 3,
      name: "Dr. Meera Kumar",
      role: "AI Therapist",
      description: "Here to talk, anytime you need.",
      category: "Mental Wellness",
      image: "/icons/legal-icon.svg",
      borderColor: "#00ABE0"
    },
    {
      id: 4,
      name: "ResumePro",
      role: "Job Application Helper",
      description: "Craft the perfect resume and cover letter.",
      category: "Professional",
      image: "/icons/business-icon.svg",
      borderColor: "#00ABE0"
    },
    {
      id: 5,
      name: "StorySparkh",
      role: "Storytelling Buddy",
      description: "Let's write your next short story!",
      category: "Creative",
      image: "/icons/tech-icon.svg",
      borderColor: "#00ABE0"
    }
  ];

  const faqs = [
    {
      question: "How can I request a quote for your services?",
      answer: "You can request a quote for our services by filling out our online contact form or by giving us a call. We'll get back to you as soon as possible with a quote based on your specific needs.",
      expanded: true
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in various industries including healthcare, education, finance, technology, and more.",
      expanded: false
    },
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive AI services including chatbot development, persona creation, and digital solutions.",
      expanded: false
    },
    {
      question: "What is your approach to project management?",
      answer: "We follow an agile approach with regular communication and milestone-based delivery.",
      expanded: false
    },
    {
      question: "How long does it take to typically complete a project?",
      answer: "Project timelines vary based on complexity, but typically range from 2-8 weeks for most implementations.",
      expanded: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anil Kumar",
      role: "CEO at SpazorLabs",
      company: "Runverve PVT LTD",
      location: "Delhi",
      rating: 5,
      text: "Working with SpazorLabs transformed our digital presence. Their team delivered a website that exceeded our expectations, resulting in a 40% increase in leads within the first month.",
      verified: true,
      avatar: "/icons/doctor-icon.svg"
    },
    {
      id: 2,
      name: "Marie Jane",
      role: "CFO at Movix",
      company: "Shanghai",
      location: "New York",
      rating: 4,
      text: "From booking to final delivery, Ship X delivers excellence. Their support team is responsive, and shipments always arrive on time. It's the reliability we've been looking for",
      verified: true,
      avatar: "/icons/teacher-icon.svg"
    }
  ];

  const toggleFAQ = (index: number): void => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    answerRefs.current = answerRefs.current.slice(0, faqs.length);
  }, [faqs.length]);


  return (
    <section className="relative w-full bg-[#121212] flex flex-col pt-0">
      {/* Explore Portfolio Section */}
      <div className="relative w-full flex md:flex-row flex-col gap-5 items-center justify-between px-5 md:pb-40 container m-auto md:pt-40">
        {/* Left Content */}
        <div className="flex flex-col md:w-[541px]">
          <h2 className="font-h2-headlines font-[600] text-[#E6E6E6] text-[48px] leading-[58px] mb-6">
            Explore Our Portfolio
          </h2>
          <p className="font-h3-body-text font-[500] text-[#E6E6E6] text-[20px] leading-[24px] mb-8 tracking-[-0.02em]">
            We craft digital experiences that captivate and convert. Building brands that stand out in the digital landscape. Browse our recent work and see how we've helped businesses transform their digital presence.
          </p>
          <Button className="inline-flex items-center gap-3 pl-[18px] pr-[6px] py-[6px] w-[175px] h-[56px] bg-[#A763FE] rounded-[60px] hover:bg-[#9550e9] transition-colors">
            <span className="font-h3-body-text font-[500] text-white text-[18px] leading-[22px] tracking-[-0.02em]">
              Explore Now
            </span>
            <div className="flex w-[44px] h-[44px] items-center justify-center bg-[rgba(255,255,255,0.08)] rounded-[22px]">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Button>
        </div>

        {/* Right Illustration */}
        <div className="w-[400px] h-[400px] bg-gradient-to-br from-[#a763fe] to-[#1aa2c8] rounded-[10px] flex items-center justify-center transform scale-x-[-1] relative overflow-hidden">
          <div className="w-[300px] h-[300px] bg-white/10 rounded-[8px] flex items-center justify-center">
            {/* Illustration placeholder - you can replace this with actual illustration */}
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-[8px] flex items-center justify-center">
              <div className="text-white text-[18px] font-medium opacity-80">Portfolio Preview</div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Your Persona Section */}
      <div className="relative w-full py-20 px-6 md:px-12 xl:px-20 bg-[#121212]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#AAAAAA] text-lg md:text-xl font-medium tracking-tight mb-2">
            Who do you want to talk to today?
          </p>
          <h2 className="text-[#E6E6E6] text-[40px] md:text-[58px] leading-tight font-bold tracking-tight">
            Choose your Persona...
          </h2>
        </div>

        {/* Personas Grid */}
        <div className="flex flex-wrap justify-center gap-6 container mx-auto mb-16">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="flex-grow max-w-[295px] min-w-[250px] basis-[280px] bg-[#2A2A2A] border-2 border-[#00ABE0] rounded-[40px] p-6 shadow-lg hover:shadow-[0_8px_20px_rgba(0,171,224,0.35)] transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="w-[145px] h-[145px] mx-auto mb-4 rounded-full border-2 border-[#08B21C] bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center">
                <img
                  src={persona.image}
                  alt={persona.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-white text-xl font-bold mb-1">
                  {persona.name}
                </h3>
                <p className="text-[#B0B0B0] text-lg font-medium mb-2">
                  {persona.role}
                </p>
                <p className="text-[#CCCCCC] text-base font-light mb-6 px-2">
                  {persona.description}
                </p>

                {/* Category Button */}
                <button className="w-[190px] h-[44px] border-2 border-[#00ABE0] rounded-full bg-transparent hover:bg-[#00ABE0]/10 text-white font-semibold transition-all duration-200">
                  {persona.category}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Personas Button */}
        <div className="flex justify-center">
          <Button className="flex items-center gap-4 px-6 py-2 w-[231px] h-[56px] bg-[#A763FE] rounded-full hover:bg-[#9550e9] transition-colors">
            <span className="text-white text-lg font-medium tracking-tight">
              View All Personas
            </span>
            <div className="flex items-center justify-center w-11 h-11 bg-white/10 rounded-full">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </Button>
        </div>
      </div>


      {/* Testimonial Section */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#121212] rounded-xl lg:rounded-3xl my-12 lg:my-20 px-4 md:px-8 lg:px-12 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-96 text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center px-4 py-2 border border-white/10 rounded-full mb-4">
                <span className="font-medium text-white text-sm lg:text-base leading-tight tracking-tight">
                  Testimonial
                </span>
              </div>
              <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-4">
                What Do Our Clients Say
              </h2>
              <p className="font-medium text-[#FCFEFF] text-base lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                We provide comprehensive digital solutions tailored to help your business thrive in the digital landscape.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="inline-flex items-center gap-4 pl-6 pr-2 py-2 w-fit h-14 bg-[#A763FE] rounded-full hover:bg-[#9550e9] transition-colors">
                <span className="font-medium text-white text-lg leading-tight tracking-tight">
                  Contact us
                </span>
                <div className="flex w-10 h-10 items-center justify-center bg-white/10 rounded-full">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Button>

              <Button className="inline-flex items-center gap-4 pl-6 pr-2 py-2 w-fit h-14 bg-white/10 border border-black/5 rounded-full hover:bg-white/15 transition-colors">
                <span className="font-medium text-white text-lg leading-tight tracking-tight">
                  Get Started
                </span>
                <div className="flex w-10 h-10 items-center justify-center bg-white/10 rounded-full">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Button>
            </div>
          </div>

          {/* Right Testimonials */}
          <div className="flex-1 relative">
            {/* Navigation Buttons */}
            <div className="flex justify-center lg:justify-end gap-4 mb-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 h-auto lg:h-96 flex flex-col">
                      {/* User Info */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center text-xl">
                          <img src={testimonial.avatar} alt="icon" />

                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg leading-tight mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="font-normal text-[#D9D9D9] text-sm leading-tight">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating
                              ? "fill-[#FFF702] text-[#FFF702]"
                              : "fill-white/20 text-white/20"
                              }`}
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="font-medium text-white text-base lg:text-lg leading-relaxed tracking-tight mb-6 flex-grow">
                        "{testimonial.text}"
                      </p>

                      {/* Location */}
                      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-[#14C5F0]" />
                          <span className="font-medium text-white text-sm lg:text-base leading-tight tracking-tight">
                            {testimonial.company}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white" />
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-[#14C5F0]" />
                          <span className="font-medium text-white text-sm lg:text-base leading-tight tracking-tight">
                            {testimonial.location}
                          </span>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      {testimonial.verified && (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="font-normal text-white/60 text-sm leading-tight tracking-tight">
                            Verified
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? "bg-white" : "bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative w-full max-w-4xl mx-auto py-12 lg:py-20 px-4 md:px-8">
        {/* FAQ Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#A259FF] border border-white rounded-full mb-2">
            <span className="font-bold text-[#E6E6E6] text-lg lg:text-xl leading-tight tracking-tight">
              FAQ
            </span>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-[#E6E6E6] text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-4">
              Frequently Asked Question
            </h2>
            <p className="font-medium text-[#E6E6E6] text-base lg:text-lg leading-relaxed tracking-tight max-w-2xl">
              Find answers to common questions you need to know about using SpazorLabs services and process.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 lg:space-y-5 mb-12 lg:mb-16">
          {faqs.map((faq, index) => {
            const isOpen = expandedFAQ === index;
            return (
              <div
                key={index}
                className={`w-full bg-white rounded-2xl lg:rounded-3xl transition-all duration-300 ${isOpen ? "h-auto" : "h-16 lg:h-20"
                  }`}
              >
                <div
                  className="flex items-center justify-between p-4 lg:p-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className={`text-base lg:text-lg xl:text-xl leading-tight tracking-tight flex-1 mr-4 ${isOpen ? "font-bold text-black" : "font-medium text-[#131735]"
                    }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full border flex items-center justify-center flex-shrink-0 ${isOpen
                    ? "bg-[#A259FF] border-black/10"
                    : "border-black/10"
                    }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-black" />
                    )}
                  </div>
                </div>
                <div
                  ref={el => { answerRefs.current[index] = el; }}
                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{
                    maxHeight: isOpen
                      ? answerRefs.current[index]?.scrollHeight
                        ? answerRefs.current[index].scrollHeight + "px"
                        : "500px"
                      : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className={`px-4 lg:px-6 pb-4 lg:pb-6 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                    <p className="font-medium text-black/60 text-sm lg:text-base xl:text-lg leading-relaxed tracking-tight">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ask Question Button */}
        <div className="flex justify-center">
          <Button className="inline-flex items-center gap-6 pl-6 pr-2 py-2 w-fit h-12 lg:h-14 bg-[#A259FF] border border-white rounded-full hover:bg-[#9550e9] transition-colors">
            <span className="font-medium text-white text-base lg:text-lg leading-tight tracking-tight">
              Ask a question
            </span>
            <div className="flex w-8 h-8 lg:w-10 lg:h-10 items-center justify-center bg-white/10 rounded-full">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};