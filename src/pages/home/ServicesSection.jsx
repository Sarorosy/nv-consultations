import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Laptop, ArrowRight } from 'lucide-react';
import nurseImg from '../../assets/navin-thumbsup.png';

const ServicesSection = () => {
    const cards = [
        {
            title: "Expert Diabetes Monitoring",
            desc: "Continuous glucose monitoring and insulin pump therapy management.",
            icon: <ShieldCheck className="text-primary" size={22} />
        },
        {
            title: "Cardio-Metabolic Care",
            desc: "Integrated management of heart health and metabolic disorders.",
            icon: <HeartPulse className="text-red-500" size={22} />
        },
        {
            title: "Digital Health Solutions",
            desc: "Tele-consultations and digital health tracking for remote care.",
            icon: <Laptop className="text-indigo-500" size={22} />
        }
    ];

    return (
        <section className="py-10 bg-white dark:bg-[#0B1120] transition-colors duration-300" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">

                {/* TOP CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-pill mb-3 dark:bg-[#2AA7FF]/20 dark:text-[#2AA7FF]">Our Services</div>

                        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-white mb-3 leading-tight">
                            We are here to support your health at every stage
                        </h2>

                        <p className="text-base text-secondary dark:text-gray-400 mb-4">
                            Our comprehensive services provide the best care,
                            from routine check-ups to specialized diabetes management.
                        </p>

                        <button className="primary-gradient-btn">
                            Contact Us
                        </button>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-[2rem] overflow-hidden shadow-xl">
                            <img
                                src={nurseImg}
                                alt="Health Support"
                                className="w-full max-h-[600px] object-cover"
                            />
                        </div>

                        {/* Arrow button */}
                        <div className="absolute top-2 right-2 w-14 h-14 rounded-full bg-white/30 dark:bg-[#1E293B]/30 backdrop-blur-md flex items-center justify-center border border-white/50 dark:border-gray-700/50 cursor-pointer hover:scale-110 transition-transform">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* SERVICE CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-primary-light dark:border-gray-700/50 p-4 shadow-md rounded-xl stats-card-2 hover:-translate-y-1 transition-all group bg-white dark:bg-[#1E293B]"
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary-light dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                {React.cloneElement(card.icon, {
                                    className: "group-hover:text-white transition-colors"
                                })}
                            </div>

                            <h3 className="text-base font-bold text-primary-dark dark:text-white mb-2 uppercase tracking-wide">
                                {card.title}
                            </h3>

                            <p className="text-secondary dark:text-gray-400 text-sm mb-4">
                                {card.desc}
                            </p>

                            <button className="text-black dark:text-white bg-white dark:bg-gray-800 border border-black dark:border-gray-600 px-2 py-1 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More
                                <ArrowRight size={18} className="bg-black dark:bg-primary text-white rounded-full p-1" />
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;