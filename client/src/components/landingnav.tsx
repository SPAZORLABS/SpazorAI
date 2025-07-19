"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const SpazorNavigation = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home' },
        { label: 'About' },
        { label: 'Services' },
        { label: 'Portfolio' },
        { label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsExpanded(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuOpen &&
                !(event.target instanceof Element && event.target.closest('.mobile-menu-container'))
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [mobileMenuOpen]);


    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const GetStartedButton = ({ isMobile = false }: { isMobile?: boolean }) => {
        const router = useRouter();

        return (
            <div
                onClick={() => router.push("/new")}
                className={`relative ${isMobile ? 'w-full h-12' : 'w-40 h-12'} rounded-full overflow-hidden border border-white backdrop-blur-sm cursor-pointer hover:border-[#1aa2c8] transition-all duration-300 flex items-center group`}
            >
                <span className={`${isMobile ? 'ml-6' : 'ml-5'} font-semibold text-white text-sm tracking-wider whitespace-nowrap`}>
                    Get Started
                </span>
                <div className={`flex ${isMobile ? 'w-10 h-10' : 'w-10 h-10'} items-center justify-center ml-auto ${isMobile ? 'mr-1' : 'mr-1'} rounded-full border border-white bg-gradient-to-b from-[#1f4a6e] via-[#193d6b] to-[#164d6d] group-hover:scale-110 transition-transform duration-300`}>
                    <ArrowUpRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-white`} />
                </div>
            </div>
        );
    };

    return (
        <div className="relative">
            {/* Main Navigation Header */}
            <div className={`flex fixed top-2 left-2 right-2 sm:left-4 sm:right-4 z-50 backdrop-blur-md bg-black/20 border border-white/10 rounded-full transition-all duration-300 ${isExpanded ? "scale-100 py-4 md:py-6" : "scale-95 py-3 md:py-4"
                }`}>
                <div className="flex items-center justify-between w-full px-4 md:px-8">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1aa2c8] to-[#164d6d] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg md:text-xl">S</span>
                        </div>
                        <div className="font-bold text-[#1aa2c8] text-xl md:text-2xl lg:text-3xl tracking-widest font-mono">
                            SPAZOR.AI
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                className="font-medium text-white text-sm xl:text-base cursor-pointer hover:text-[#1aa2c8] transition-colors duration-300 relative group"
                            >
                                {item.label}
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1aa2c8] group-hover:w-full transition-all duration-300"></div>
                            </div>
                        ))}
                        <GetStartedButton />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden mobile-menu-container">
                        <button
                            className="flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>
                </div>
            )}

            {/* Mobile Menu Sheet */}
            <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#181c2a] via-[#1f2937] to-[#111827] border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1aa2c8] to-[#164d6d] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <div className="font-bold text-[#1aa2c8] text-xl tracking-wider font-mono">
                            SPAZOR.AI
                        </div>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full">
                    {/* Navigation Items */}
                    <nav className="flex-1 px-6 py-8">
                        <div className="space-y-6">
                            {navItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="font-medium text-white text-lg cursor-pointer hover:text-[#1aa2c8] transition-colors duration-300 py-2 border-b border-white/5 hover:border-[#1aa2c8]/30"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Get Started Button */}
                    <div className="p-6 border-t border-white/10">
                        <GetStartedButton isMobile />
                    </div>

                    {/* Footer */}
                    <div className="px-6 pb-6">
                        <div className="text-white/60 text-sm text-center">
                            © 2024 SPAZOR.AI
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpazorNavigation;