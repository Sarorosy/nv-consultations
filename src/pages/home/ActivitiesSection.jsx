import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Presentation, HeartPulse, ExternalLink, Users, Award } from 'lucide-react';

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

// Awareness Images
import awareness1 from '../../assets/diabetes_awareness_initiative/WhatsApp Image 2026-03-17 at 7.36.18 PM.jpeg';
import awareness2 from '../../assets/diabetes_awareness_initiative/WhatsApp Image 2026-03-17 at 7.36.18 PM (1).jpeg';

// Conference Images
import conference1 from '../../assets/diabetes_conference/WhatsApp Image 2026-03-17 at 7.41.04 PM.jpeg';
import conference2 from '../../assets/diabetes_conference/WhatsApp Image 2026-03-17 at 7.41.04 PM (1).jpeg';
import conference3 from '../../assets/diabetes_conference/WhatsApp Image 2026-03-17 at 7.41.05 PM.jpeg';

const ActivitiesSection = ({ content = true }) => {
    return (
        <section className="py-24 bg-white dark:bg-[#0B1120] overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {content && (
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
                )}

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
                        className="group"
                    >
                        <div className="h-[450px] bg-gradient-to-br from-[#1B3C74] to-[#102851] rounded-[40px] p-8 flex flex-col border border-[#1B3C74] shadow-xl overflow-hidden relative text-white">
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary-light mb-6 group-hover:rotate-12 transition-transform">
                                    <HeartPulse size={24} />
                                </div>
                                <h3 className="text-xl font-extrabold mb-3">Lipoprotein(a)</h3>
                                <p className="text-blue-100/80 text-sm mb-6 leading-relaxed">
                                    Reviewing the clinical importance of Lipoprotein(a) in cardiovascular risk assessment and therapeutic decision-making.
                                </p>
                            </div>

                            {/* Collage Mini */}
                            <div className="flex-grow grid grid-cols-2 gap-2 mt-auto">
                                <div className="rounded-2xl overflow-hidden h-32">
                                    <img src={lipo1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Lipoprotein discussion" />
                                </div>
                                <div className="rounded-2xl overflow-hidden h-32">
                                    <img src={lipo2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Cardiovascular health" />
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Awareness Activity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 group"
                    >
                        <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                            <div className="absolute inset-0 flex gap-1">
                                <div className="flex-1">
                                    <img src={awareness1} alt="Diabetes Awareness Initiative" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <div className="flex-1">
                                    <img src={awareness2} alt="Diabetes Awareness Initiative" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
                                <div className="flex items-center gap-3 text-primary-light mb-4">
                                    <Users size={24} />
                                    <span className="font-bold tracking-widest text-xs uppercase">Government Collaboration</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Diabetes Awareness Initiative</h3>
                                <p className="text-gray-300 max-w-lg leading-relaxed">
                                    In a meeting with Honourable State Health Minister Thiru. Ma. Subramanian, Dr. Navin outlined the diabetes awareness efforts conducted in Kolathur.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Conference Activity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group lg:col-span-3"
                    >
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-r from-[#17172A] to-[#1E293B] text-white border border-gray-800">
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full lg:w-1/3 p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                                    <div className="flex items-center gap-3 text-primary-light mb-4 sm:mb-6">
                                        <Award size={24} />
                                        <span className="font-bold tracking-widest text-xs uppercase">D MANTRA 2025</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Diabetes Conference</h3>
                                    <p className="text-gray-300 text-sm md:text-lg mb-2 sm:mb-8 max-w-md leading-relaxed">
                                        Dr. Navin participated as faculty at <span className="text-primary font-bold uppercase">D MANTRA 2025</span> , presenting on diabetes management in the geriatric population.
                                    </p>
                                </div>
                                <div className="w-full lg:w-2/3 grid grid-cols-2 h-[250px] sm:h-[300px] lg:h-full overflow-hidden order-1 lg:order-2">
                                    <div className="overflow-hidden">
                                        <img src={conference1} alt="Conference" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="overflow-hidden h-1/2 border-b border-[#0B1120] border-l">
                                            <img src={conference2} alt="Conference" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                                        </div>
                                        <div className="overflow-hidden h-1/2 border-l border-[#0B1120]">
                                            <img src={conference3} alt="Conference" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                                        </div>
                                    </div>
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
