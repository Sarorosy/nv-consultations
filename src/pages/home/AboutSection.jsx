import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import navinImg from '../../assets/navin.png';
import varshaImg from '../../assets/varsha.png';

const AboutSection = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 bg-gradient-to-br from-[#E8F1FF]/40 to-white dark:from-[#0B1120] dark:to-[#0B1120] overflow-hidden relative transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl -ml-40 -mb-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        {/* Two Circles UI */}
                        <div className="relative w-full max-w-[500px] h-[400px] md:h-[500px]">
                            {/* Dr. Navin Circle */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="absolute top-0 left-0 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border-8 border-white dark:border-gray-800 shadow-2xl overflow-hidden z-20 group"
                            >
                                <img
                                    src={navinImg}
                                    alt="Dr. Navin"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-bold tracking-wider">DR. NAVIN</span>
                                </div>
                            </motion.div>

                            {/* Dr. Varsha Circle */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="absolute bottom-0 right-0 w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border-8 border-white dark:border-gray-800 shadow-2xl overflow-hidden z-10 group"
                            >
                                <img
                                    src={varshaImg}
                                    alt="Dr. Varsha"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-bold tracking-wider">DR. VARSHA</span>
                                </div>
                            </motion.div>

                            {/* Floating Stats/Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/4 -right-4 bg-white dark:bg-[#1E293B] p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 border border-primary-light/20 dark:border-gray-700/50"
                            >
                                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                    <Star className="text-yellow-500 fill-yellow-500" size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-primary-dark dark:text-white">Top Rated</div>
                                    <div className="text-[10px] text-gray-500 dark:text-gray-400">Expert Care</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-1/4 -left-4 bg-white dark:bg-[#1E293B] p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 border border-primary-light/20 dark:border-gray-700/50"
                            >
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <Award className="text-primary" size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-primary-dark dark:text-white">Certified</div>
                                    <div className="text-[10px] text-gray-500 dark:text-gray-400">Specialists</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-pill mb-6 dark:bg-[#2AA7FF]/20 dark:text-[#2AA7FF]">Expert Team</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-white mb-6 leading-[1.2]">
                            Dedicated <span className="text-primary relative inline-block">
                                Professionals
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 rounded-full"></span>
                            </span> for Your Health
                        </h2>
                        <p className="text-lg text-secondary dark:text-gray-400 mb-8 leading-relaxed">
                            Led by <span className="font-semibold text-primary-dark dark:text-primary-light">Dr. Navin</span> and <span className="font-semibold text-primary-dark dark:text-primary-light">Dr. Varsha</span>, our clinic is committed to providing exceptional care. We focus on evidence-based treatments and personalized attention for every patient.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                <p className="text-sm text-secondary dark:text-gray-400"><span className="font-bold text-primary-dark dark:text-gray-200">Personalized Care:</span> Tailored treatment plans for your specific needs.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                <p className="text-sm text-secondary dark:text-gray-400"><span className="font-bold text-primary-dark dark:text-gray-200">Advanced Tech:</span> Utilizing the latest medical diagnostics.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/about#team">
                                <button
                                    className="primary-gradient-btn flex items-center gap-2 group"
                                >
                                    Meet Our Team <ArrowRight size={20} className=" transition-transform" />
                                </button>
                            </Link>
                            <button
                                onClick={() => navigate('/services')}
                                className="px-8 py-3 rounded-full border-2 text-primary font-medium border-primary transition-all shadow-sm"
                            >
                                View Services
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;


