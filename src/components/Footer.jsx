import React from "react";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer = () => {
    return (
        <footer className="w-full border-t border-primary/20 dark:border-white/10">
            {/* TOP SECTION */}
            <div className="bg-white dark:bg-grayscale-black transition-colors duration-300 pt-16 pb-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row justify-between gap-16">

                        {/* LEFT TITLE */}
                        <div className="lg:w-[48%]">
                            <h2 className="text-[40px] lg:text-[56px] font-bold text-primary-dark dark:text-white leading-[1.1] tracking-tight">
                                Expert Diabetes Care <br /> & Preventive Health <br /> in Kolathur
                            </h2>
                        </div>

                        {/* RIGHT LINKS & NEWSLETTER */}
                        <div className="lg:w-[52%] grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">

                            {/* SERVICES */}
                            <div>
                                <h4 className="text-[14px] font-bold text-primary-dark dark:text-white mb-10 tracking-[0.1em] uppercase">
                                    Services
                                </h4>
                                <ul className="space-y-6 text-secondary dark:text-secondary-muted text-[13px] font-bold tracking-wide">
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase">
                                        <Link to="/services">Diabetes Care</Link>
                                    </li>
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase">
                                        <Link to="/services">Hypertension</Link>
                                    </li>
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase">
                                        <Link to="/services">Preventive Checkup</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* QUICK LINKS */}
                            <div>
                                <h4 className="text-[14px] font-bold text-primary-dark dark:text-white mb-10 tracking-[0.1em] uppercase">
                                    Quick Links
                                </h4>
                                <ul className="space-y-6 text-secondary dark:text-secondary-muted text-[13px] font-bold tracking-wide">
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase"><Link to="/">Home</Link></li>
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase"><Link to="/about">About Us</Link></li>
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase"><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            {/* NEWSLETTER */}
                            <div className="min-w-[280px]">
                                <h4 className="text-[14px] font-bold text-primary-dark dark:text-white mb-10 tracking-[0.1em] uppercase">
                                    Newsletter
                                </h4>
                                <div className="relative flex items-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full p-1 shadow-sm focus-within:border-primary transition-all">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="flex-1 bg-transparent px-5 py-2.5 text-sm text-primary-dark dark:text-white outline-none placeholder:text-gray-400"
                                    />
                                    <button className="px-6 py-2.5 text-[11px] font-black text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full shadow-md hover:scale-105 transition-all uppercase tracking-widest">
                                        Join
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="bg-secondary-soft/30 dark:bg-white/5 py-10 transition-colors duration-300">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4">
                        {[
                            { icon: Facebook, href: "#" },
                            { icon: Instagram, href: "#" },
                            { icon: X, href: "#" },
                            { icon: Linkedin, href: "#" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-200 dark:border-white/10 bg-white dark:bg-white/5 text-primary hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <social.icon size={18} strokeWidth={2.5} />
                            </a>
                        ))}
                    </div>

                    {/* COPYRIGHT */}
                    <p className="text-secondary dark:text-secondary-muted text-[13px] font-bold tracking-widest uppercase">
                        2024 NV Consultations. All Rights Reserved
                    </p>

                    {/* BOTTOM BUTTONS */}
                    <div className="flex items-center gap-4">
                        <Link to="/terms-conditions">
                            <button className="px-6 py-3 border-[1.5px] border-primary-dark/20 dark:border-white/20 rounded-full text-[11px] font-extrabold text-primary-dark dark:text-white hover:bg-primary-dark dark:hover:bg-white hover:text-white dark:hover:text-grayscale-black transition-all uppercase tracking-wider">
                                Terms & Condition
                            </button>
                        </Link>
                        <Link to="/privacy-policy">
                            <button className="px-6 py-3 border-[1.5px] border-primary-dark/20 dark:border-white/20 rounded-full text-[11px] font-extrabold text-primary-dark dark:text-white hover:bg-primary-dark dark:hover:bg-white hover:text-white dark:hover:text-grayscale-black transition-all uppercase tracking-wider">
                                Privacy Policy
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            <FloatingWhatsApp
                phoneNumber="917010972462"
                accountName="NV Consultations"
                avatar="/ndwhite.png"
                statusMessage="Typically replies in minutes"
                chatMessage="Hi 👋! How can we help?"
                placeholder="Type your message here..."
                allowClickAway={false}
                notification
                notificationSound
                // darkMode={theme === "dark"}
                allowEsc={false}
            />
        </footer>
    );
};

export default Footer;
