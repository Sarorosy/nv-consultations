import React from "react";
import { Facebook, Instagram, Linkedin, X, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer = () => {
    return (
        <footer className="w-full border-t border-primary/20 dark:border-white/10">
            {/* TOP SECTION */}
            <div className="bg-white dark:bg-grayscale-black transition-colors duration-300 pt-16 pb-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row justify-between gap-16">

                        {/* LEFT TITLE & CONTACT */}
                        <div className="lg:w-[35%] flex flex-col gap-10">
                            <h2 className="text-[32px] lg:text-[46px] font-bold text-primary-dark dark:text-white leading-[1.1] tracking-tight">
                                Expert Diabetes Care <br /> & Preventive Health <br /> in Kolathur
                            </h2>
                            <div className="flex flex-col gap-5 text-secondary dark:text-secondary-muted text-[14px] font-semibold tracking-wide">
                                <div className="flex items-start gap-3 hover:text-[#2AA7FF] transition-colors">
                                    <MapPin className="w-5 h-5 mt-0.5 text-[#2AA7FF] shrink-0" />
                                    <p className="leading-relaxed">Kolathur, Chennai,<br/> Tamil Nadu 600099</p>
                                </div>
                                <div className="flex items-center gap-3 hover:text-[#2AA7FF] transition-colors">
                                    <Phone className="w-5 h-5 text-[#2AA7FF] shrink-0" />
                                    <p>+91 7010972462</p>
                                </div>
                                <div className="flex items-center gap-3 hover:text-[#2AA7FF] transition-colors">
                                    <Mail className="w-5 h-5 text-[#2AA7FF] shrink-0" />
                                    <p>info@nvconsultations.com</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">

                            {/* QUICK LINKS */}
                            <div>
                                <h4 className="text-[14px] font-bold text-primary-dark dark:text-white mb-6 tracking-[0.1em] uppercase">
                                    Quick Links
                                </h4>
                                <ul className="space-y-4 text-secondary dark:text-secondary-muted text-[13px] font-bold tracking-wide">
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase"><Link to="/">Home</Link></li>
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase"><Link to="/about">About Us</Link></li>
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase"><Link to="/services">Services</Link></li>
                                    <li className="cursor-pointer hover:text-[#2AA7FF] transition-colors uppercase"><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            {/* CLINIC HOURS */}
                            <div>
                                <h4 className="text-[14px] font-bold text-primary-dark dark:text-white mb-6 tracking-[0.1em] uppercase">
                                    Clinic Hours
                                </h4>
                                <ul className="space-y-5 text-secondary dark:text-secondary-muted text-[13px] font-bold tracking-wide">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-primary-dark dark:text-white uppercase tracking-wider">Mon - Sat</span> 
                                        <span className="text-gray-500 dark:text-gray-400">9:30 AM - 1:00 PM</span>
                                        <span className="text-gray-500 dark:text-gray-400">6:00 PM - 9:00 PM</span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="text-primary-dark dark:text-white uppercase tracking-wider">Sunday</span> 
                                        <span className="text-red-500">Closed</span>
                                    </li>
                                </ul>
                            </div>

                            {/* MAP */}
                            <div className="w-full">
                                <h4 className="text-[14px] font-bold text-primary-dark dark:text-white mb-6 tracking-[0.1em] uppercase">
                                    Find Us
                                </h4>
                                <div className="w-full h-[180px] rounded-xl overflow-hidden border border-primary/20 dark:border-white/10 shadow-sm">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15541.516393167123!2d80.20011559495116!3d13.138473956402094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ab75791783%3A0xe5a36ebd71b0fd52!2sN.V.Consultations!5e0!3m2!1sen!2sin!4v1703223000000!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
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
