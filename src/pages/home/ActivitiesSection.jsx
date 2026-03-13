import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Presentation, HeartPulse, ExternalLink } from 'lucide-react';

// Radio Images
import radio1 from '../../assets/doctor_talking_in_radio/WhatsApp Image 2026-03-12 at 12.45.10 AM (1).jpeg';
import radio2 from '../../assets/doctor_talking_in_radio/WhatsApp Image 2026-03-12 at 12.45.10 AM.jpeg';
import radio3 from '../../assets/doctor_talking_in_radio/WhatsApp Image 2026-03-12 at 12.45.11 AM (1).jpeg';

// Talking Images (Empagliflozin)
import talk1 from '../../assets/talking/WhatsApp Image 2026-03-12 at 12.36.59 AM.jpeg';
import talk2 from '../../assets/talking/WhatsApp Image 2026-03-12 at 12.37.00 AM.jpeg';
import talk3 from '../../assets/talking/WhatsApp Image 2026-03-12 at 12.37.01 AM.jpeg';

// Lipoprotein Images
import lipo1 from '../../assets/Dr_Navin_discussing_on_lipoprotein_and_cardiovascular_health/WhatsApp Image 2026-03-12 at 12.32.41 AM.jpeg';
import lipo2 from '../../assets/Dr_Navin_discussing_on_lipoprotein_and_cardiovascular_health/WhatsApp Image saa 2026-03-12 at 12.32.41 AM.jpeg';

const ActivitiesSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#0B1120] overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="section-pill mb-4 dark:bg-primary/20 dark:text-primary-light uppercase tracking-[0.2em] text-[10px] font-bold py-1 px-3">Awareness & Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white leading-[1.1] tracking-tight mt-4">
                            Driving <span className="text-primary">Diabetes Awareness</span> <br /> & Medical Innovation
                        </h2>
                    </div>
                    <p className="text-lg text-secondary dark:text-gray-400 max-w-md italic border-l-2 border-primary pl-6">
                        Dr. Navin actively engages with the community and medical fraternity to promote health education and advanced diabetes management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Radio Activity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 group"
                    >
                        <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                            <div className="absolute inset-0 flex gap-1">
                                <div className="flex-1">
                                    <img src={radio1} alt="Dr. Navin at Radio Mirchi" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <img src={radio2} alt="Dr. Navin at Radio Mirchi" className="w-full h-1/2 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                                    <img src={radio3} alt="Dr. Navin at Radio Mirchi" className="w-full h-1/2 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                                <div className="flex items-center gap-3 text-primary-light mb-4">
                                    <Mic size={24} />
                                    <span className="font-bold tracking-widest text-xs uppercase">Public Health Initiative</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Radio Mirchi - Live Discussion</h3>
                                <p className="text-gray-300 max-w-lg">
                                    Dr. Navin discussing diabetes awareness measures in Tamil for listeners of Radio Mirchi, focusing on preventive care.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Empagliflozin Activity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group"
                    >
                        <div className="h-[450px] bg-bg-soft dark:bg-[#1E293B] rounded-[40px] p-8 flex flex-col border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform">
                                    <Presentation size={24} />
                                </div>
                                <h3 className="text-xl font-extrabold text-primary-dark dark:text-white mb-4">Clinical Armamentarium</h3>
                                <p className="text-secondary dark:text-gray-400 text-sm mb-8 leading-relaxed">
                                    Discussing <span className="text-primary font-bold uppercase">Empagliflozin</span> and its strategic position in modern diabetic treatment.
                                </p>
                            </div>

                            {/* Collage Mini */}
                            <div className="flex-grow grid grid-cols-2 gap-2 mt-auto">
                                <div className="rounded-2xl overflow-hidden h-32">
                                    <img src={talk1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Empagliflozin discussion" />
                                </div>
                                <div className="rounded-2xl overflow-hidden h-32">
                                    <img src={talk2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Empagliflozin discussion" />
                                </div>
                                <div className="col-span-2 rounded-2xl overflow-hidden h-24">
                                    <img src={talk3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Empagliflozin discussion" />
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Lipoprotein Activity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group lg:col-span-3"
                    >
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-r from-[#1B3C74] to-[#102851] text-white">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 lg:p-16 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 text-primary-light mb-6">
                                        <HeartPulse size={24} />
                                        <span className="font-bold tracking-widest text-xs uppercase">Metabolic Research</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Lipoprotein(a) & <br /> Cardiovascular Health</h3>
                                    <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
                                        An in-depth discussion on the critical role of Lipoprotein(a) in identifying and managing cardiovascular risks in diabetic patients.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 font-bold px-6 py-3 bg-white text-primary-dark rounded-full hover:bg-primary transition-all hover:text-white">
                                            Read More <ExternalLink size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 h-[300px] lg:h-auto">
                                    <img src={lipo1} alt="Lipoprotein discussion" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                                    <img src={lipo2} alt="Cardiovascular health" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
