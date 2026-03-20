import { Calendar, Search, ArrowUpRight, CheckCircle2, Clock, Stethoscope, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import heroDoctor from "../assets/navinhero_new.png";
import navin from "../assets/navin.png";
import varsha from "../assets/varsha_square.png";
import capsule from "../assets/capsule.png";

import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    const specialists = [
        "Diabetes Care",
        "Metabolic Disorders",
        "Preventive Care",
        "Diet & Nutrition",
        "Lifestyle "
    ];

    return (
        <section className="relative overflow-hidden bg-bg-soft dark:bg-[#0B1120] pt-0 pb-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="z-10 text-center lg:text-left"
                    >
                        <div className="flex items-center gap-2 mb-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-primary/10 dark:border-white/10 rounded-full px-3 py-1 w-fit mx-auto lg:mx-0 shadow-sm animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-[12px] font-black uppercase tracking-[0.1em] text-primary-dark dark:text-gray-300">NV CONSULTATIONS</span>
                        </div>

                        <p className="hidden lg:block text-md text-secondary dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed uppercase tracking-wide font-medium">
                            <span className="flex items-center gap-2">
                                SPECIALIZED CARE FOR
                                <span className=""><Sparkle size={18} className="fill-primary stroke-primary animate-[spin_4s_linear_infinite]" /></span>
                            </span>

                            <span className="block">DIABETES MANAGEMENT</span>
                            <span className="block">METABOLIC HEALTH</span>
                            <span className="block">AND PREVENTIVE CARE.</span>
                        </p>



                        <h1 className="text-5xl lg:text-5xl font-bold text-primary-dark dark:text-white leading-tight mb-6">
                            Expert Diabetes Care <br />
                            by
                            <div className="flex items-center gap-2">
                                <span className="bg-gray-200 dark:bg-gray-800 h-8 rounded-full flex items-center justify-center">
                                    <img src={capsule} alt="capsule" className="w-22 mt-3 -mt-8" />
                                </span>
                                <span className="text-primary">Dr. Navin & Dr. Varsha</span>
                            </div>
                        </h1>



                        {/* Trusted Users */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-[#0B1120] overflow-hidden bg-gray-200 dark:bg-gray-800">
                                        <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-primary-dark dark:text-white">10k+</div>
                                <div className="text-sm text-secondary dark:text-gray-400 uppercase tracking-wider">Trusted User</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

                            {/* Schedule Button */}
                            <button
                                onClick={() => navigate("/appointment")}
                                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-2 rounded-full font-medium shadow-sm transition"
                            >
                                <span className="w-8 h-8 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-full">
                                    <Calendar size={16} />
                                </span>
                                Schedule an Appointment
                            </button>

                            {/* Find Doctor Button */}
                            <button
                                onClick={() => navigate("/services")}
                                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-2 py-2 rounded-full font-medium shadow-md transition"
                            >
                                <span className="w-8 h-8 flex items-center justify-center bg-white text-blue-500 rounded-full">
                                    <Stethoscope size={16} />
                                </span>
                                View Services
                            </button>

                        </div>
                    </motion.div>

                    {/* Right Content - Hero Image & Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main Doctor Image Container */}
                        <div className="relative z-10">
                            <img
                                src={heroDoctor}
                                alt="Doctor"
                                className="w-full "
                            />

                            {/* Bottom Specialist Categories Overlay */}
                            <div className=" flex flex-col items-center gap-2">
                                <div className="absolute bottom-16  md:bottom-22  right-2 flex flex-wrap gap-2 justify-center">
                                    {specialists.slice(0, 3).map((spec, index) => (
                                        <span key={spec} className={`px-4 py-2 hover:bg-white hover:text-black bg-white text-black  border border-black rounded-full text-[10px] md:text-xs font-semibold   whitespace-nowrap`}>
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute bottom-3 left-10 md:left-20 flex flex-wrap gap-2 justify-center">
                                    {specialists.slice(3).map((spec) => (
                                        <span key={spec} className="px-4 py-2 hover:bg-white hover:text-black bg-white text-black  border border-black rounded-full text-[10px] md:text-xs font-semibold   whitespace-nowrap">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Profile Card */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute right-0 md:-right-8 top-1/3 z-20 hidden sm:block delay-100"
                        >
                            <div className="bg-white/90 dark:bg-[#1E293B]/90 backdrop-blur-md px-2 py-1.5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] dark:shadow-none border border-white/60 dark:border-gray-700/50 flex items-center gap-4 pr-6 hover:scale-105 transition-transform duration-300 group cursor-pointer">
                                <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-xl border border-[#2AA7FF]/30 bg-gradient-to-tr from-[#E8F1FF] to-white dark:from-gray-800 dark:to-[#1E293B] shadow-inner group-hover:border-[#2AA7FF]/60 group-hover:shadow-[0_0_15px_rgba(42,167,255,0.2)] transition-all duration-300">
                                    <Stethoscope size={20} className="text-[#2AA7FF] stroke-[2.5]" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#102851] dark:text-white text-[17px] leading-tight tracking-tight">Dr. Navin</h4>
                                    <p className="text-[11px] font-bold text-[#2AA7FF] tracking-wider uppercase mt-1">CONSULTANT PHYSICIAN, <br/> DIABETOLOGIST</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Corner Arrow Icon */}
                        <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/20 rounded-full flex items-center justify-center text-white border border-white/30 cursor-pointer hover:bg-white/40">
                            <ArrowUpRight size={24} />
                        </div>

                        {/* Mobile Tagline - Restructured for 3 lines and positioned below image */}
                        <div className="lg:hidden mt-8 text-center">
                            <h2 className="text-xl font-black text-[#102851] dark:text-white mb-4 uppercase tracking-[0.2em]">
                                NV CONSULTATIONS
                            </h2>
                            <p className="text-[13px] text-secondary dark:text-gray-400 leading-relaxed font-semibold tracking-[0.1em] uppercase">
                                <span className="flex items-center justify-center gap-2 mb-1">
                                    SPECIALIZED CARE FOR
                                    <Sparkle size={14} className="fill-primary stroke-primary animate-[spin_4s_linear_infinite]" />
                                </span>
                                <span className="block italic text-primary/80 dark:text-primary-light">DIABETES & METABOLIC HEALTH.</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 text-primary-light dark:text-primary-dark opacity-50 z-0">
                <CheckCircle2 size={120} />
            </div>
            <div className="absolute bottom-20 right-10 text-primary-light dark:text-primary-dark opacity-30 z-0 scale-150 rotate-45 text-6xl font-bold">
                +
            </div>
        </section>
    );
}
