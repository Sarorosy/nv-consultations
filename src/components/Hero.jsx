import { Calendar, Search, ArrowUpRight, CheckCircle2, Clock, Stethoscope, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import heroDoctor from "../assets/navinhero.png";
import navin from "../assets/navin.png";
import varsha from "../assets/varsha.png";
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
                                <span className="text-primary">Dr. Navin</span>
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
                                <div className="absolute bottom-22  right-2 flex flex-wrap gap-2 justify-center">
                                    {specialists.slice(0, 3).map((spec, index) => (
                                        <span key={spec} className={`px-4 py-2 hover:bg-white hover:text-black ${index == 0 ? "bg-white text-black  border border-white/30" : "bg-transparent text-white  border-1 border-white"} rounded-full text-xs font-semibold   whitespace-nowrap`}>
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute bottom-3 left-20 flex flex-wrap gap-2 justify-center">
                                    {specialists.slice(3).map((spec) => (
                                        <span key={spec} className="px-4 py-2 hover:bg-white hover:text-black bg-transparent text-white  border-1 border-white rounded-full text-xs font-semibold   whitespace-nowrap">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 1: Orthopedics */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -left-12 top-1/4 z-20 hidden xl:block"
                        >
                            <div className="bg-white dark:bg-[#1E293B] p-4 rounded-3xl shadow-2xl border border-primary-light dark:border-gray-700/50 max-w-[280px]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center">
                                        <Stethoscope size={24} color="#7a319eff" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-dark dark:text-white">Diabetes Care</h3>
                                        <div className="flex items-center -space-x-2 mt-1">
                                            {[navin, varsha].map((img, i) => (
                                                <img key={i} src={img} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 object-cover" alt="doctor" />
                                            ))}
                                            <span className="ml-3 text-[10px] font-bold text-secondary dark:text-gray-400 tracking-tight">Expert Specialists</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-[11px] font-medium text-secondary">
                                    <span className="flex items-center"><Clock size={12} className="mr-1" /> Consultation Hours</span>
                                    <span className="bg-primary/10 text-primary px-1 py-1 rounded ml-1">Mon - Fri</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Card 2: Dental Care Profile */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="absolute -right-10 top-1/3 z-20 hidden xl:block  bg-transparent"
                        >
                            <div className="shadow-2xl bg-white dark:bg-[#1E293B] p-4 rounded-[40px] border-4 border-white dark:border-gray-800 max-w-[200px]">
                                <div className="relative rounded-[32px] overflow-hidden mb-3 h-40">
                                    <img src={navin} alt="Dr Navin" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-bold text-primary-dark dark:text-white text-sm mb-1 leading-tight">
                                    Comprehensive Diabetes & Metabolic Care.
                                </h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full overflow-hidden bg-primary/20">
                                        <img src={navin} alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-primary-dark dark:text-white">Dr. Navin</p>
                                        <p className="text-[8px] text-secondary dark:text-gray-400">Diabetes Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge: Eye Consultation */}
                        <div className="absolute top-12 left-2 z-20 bg-white/90 dark:bg-[#1E293B]/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-primary-light dark:border-gray-700/50 flex items-center gap-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-xs font-bold text-primary-dark dark:text-white">Diabetes Consultation</span>
                        </div>

                        {/* Corner Arrow Icon */}
                        <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/20 rounded-full flex items-center justify-center text-white border border-white/30 cursor-pointer hover:bg-white/40">
                            <ArrowUpRight size={24} />
                        </div>

                        {/* Mobile Tagline - Restructured for 3 lines and positioned below image */}
                        <div className="lg:hidden mt-8 text-center">
                            <p className="text-[13px] text-secondary dark:text-gray-400 leading-relaxed font-semibold tracking-[0.1em] uppercase">
                                <span className="flex items-center justify-center gap-2 mb-1">
                                    SPECIALIZED CARE FOR
                                    <Sparkle size={14} className="fill-primary stroke-primary animate-[spin_4s_linear_infinite]" />
                                </span>
                                <span className="block">DIABETES MANAGEMENT</span>
                                <span className="block text-primary/80 dark:text-primary-light">METABOLIC HEALTH & PREVENTIVE CARE.</span>
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
