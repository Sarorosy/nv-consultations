import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import PageHeader from '../../components/PageHeader';
import DynamicTitle from '../../components/DynamicTitle';
import navinImg from '../../assets/navin.png';
import varshaImg from '../../assets/varsha.png';
import { Award, BookOpen, GraduationCap, Heart, ShieldCheck, Stethoscope, Users } from 'lucide-react';

const About = () => {
    const { hash } = useLocation();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenis.on('scroll', ScrollTrigger.update);
        function update(time) {
            lenis.raf(time * 1000);
        }
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        if (hash) {
            setTimeout(() => {
                lenis.scrollTo(hash, { offset: -80 });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }

        return () => {
            lenis.destroy();
            gsap.ticker.remove(update);
        };
    }, [hash]);

    const whyChooseUs = [
        {
            title: "Experienced Diabetes Care Team",
            description: "Led by doctors with specialized training in diabetes care, metabolic disorders, and lifestyle disease management.",
            icon: <Users size={24} />
        },
        {
            title: "Comprehensive Diabetes Management",
            description: "Continuous care, blood sugar monitoring, medication management, and screening for complications.",
            icon: <ShieldCheck size={24} />
        },
        {
            title: "Preventive Health Focus",
            description: "Emphasis on early diagnosis, risk factor identification, and lifestyle modification guidance.",
            icon: <Heart size={24} />
        },
        {
            title: "Patient-Centred Approach",
            description: "Tailored treatment plans and encouraging patient participation in healthcare decisions.",
            icon: <Stethoscope size={24} />
        }
    ];

    return (
        <div className="w-full bg-white dark:bg-[#0B1120] transition-colors duration-300">
            <DynamicTitle
                title="About Us"
                description="Learn more about NV Consultations. Led by Dr. Navin and Dr. Varsha, we provide expert diabetes care and preventive healthcare in Kolathur, Chennai."
            />

            <PageHeader
                title="About NV Consultations"
                subtitle="At NV Consultations – Dr. Navin’s Diabetes Care, Kolathur, Chennai, our goal is to provide high-quality, patient-centred healthcare with a strong emphasis on diabetes management, preventive medicine, and long-term wellness."
                breadcrumb="About Us"
            />

            {/* Why Choose Us Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-4">Why Choose NV Consultations?</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white dark:bg-[#1E293B] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-3">{item.title}</h3>
                                <p className="text-secondary dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctors Section */}
            <section className="py-20 bg-[#f8faff] dark:bg-[#0F172A]" id='team'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Dr. Navin */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] bg-primary/10 rounded-[40px] overflow-hidden">
                                <img src={navinImg} alt="Dr. R. Navin" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#1E293B] p-6 rounded-2xl shadow-xl border border-primary/10">
                                <div className="flex items-center gap-3">
                                    <Award className="text-primary" size={32} />
                                    <div>
                                        <div className="text-xs font-bold text-primary tracking-widest uppercase">Director</div>
                                        <div className="text-xl font-bold dark:text-white">Dr. R. Navin</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-6">Dr. R. Navin</h2>
                            <p className="text-primary font-semibold mb-6 flex items-center gap-2">
                                <GraduationCap size={20} /> Director & Consultant Diabetologist
                            </p>
                            <div className="space-y-4 text-secondary dark:text-gray-400 leading-relaxed">
                                <p>
                                    Dr. R. Navin is a dedicated Consultant Diabetologist and Director of NV Consultations, with a strong focus on comprehensive diabetes care, preventive medicine, and long-term metabolic health management.
                                </p>
                                <p>
                                    He holds the Fellowship in Clinical Diabetology (FCD) from the Indian Medical Association (IMA) and advanced certifications including CCEBDM and CCGDM from the Public Health Foundation of India (PHFI). He also completed the Certificate Course in Diabetes Care from Leicester Diabetes Centre, UK.
                                </p>
                                <p>
                                    Currently, Dr. Navin is pursuing M.Sc. in Advancing Diabetes Care from Birmingham City University, UK. He has a special interest in Diabetic Foot Care and has undergone specialized training at the Institute of Medical and Minimal Access Surgery Training, Mumbai.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-white dark:bg-[#1E293B] rounded-xl border border-gray-100 dark:border-gray-800">
                                    <Award className="text-primary" size={24} />
                                    <span className="text-sm font-medium dark:text-gray-200">RSSDI Innovation Award 2023</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white dark:bg-[#1E293B] rounded-xl border border-gray-100 dark:border-gray-800">
                                    <Award className="text-primary" size={24} />
                                    <span className="text-sm font-medium dark:text-gray-200">Diabetes India Award 2024</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Dr. Varsha */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-2 relative"
                        >
                            <div className="aspect-[4/5] bg-primary/10 rounded-[40px] overflow-hidden">
                                <img src={varshaImg} alt="Dr. Varsha Ezhilarasu" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1E293B] p-6 rounded-2xl shadow-xl border border-primary/10">
                                <div className="flex items-center gap-3">
                                    <Award className="text-primary" size={32} />
                                    <div>
                                        <div className="text-xs font-bold text-primary tracking-widest uppercase">Co-Director</div>
                                        <div className="text-xl font-bold dark:text-white">Dr. Varsha Ezhilarasu</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-1"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-6">Dr. Varsha Ezhilarasu</h2>
                            <p className="text-primary font-semibold mb-6 flex items-center gap-2">
                                <GraduationCap size={20} /> Co-Director, Consultant Physician & Diabetologist
                            </p>
                            <div className="space-y-4 text-secondary dark:text-gray-400 leading-relaxed">
                                <p>
                                    Dr. Varsha Ezhilarasu is a Consultant Physician and Diabetologist at NV Consultations, dedicated to providing comprehensive, patient-centred medical care.
                                </p>
                                <p>
                                    She completed her MBBS from Government Chengalpattu Medical College and later pursued DNB in Anaesthesiology from MIOT Hospital, Chennai. To further strengthen her expertise in metabolic disorders, she completed CCEBDM and FCD – Fellowship in Clinical Diabetology.
                                </p>
                                <p>
                                    Dr. Varsha strongly believes in a holistic approach to patient care, emphasizing lifestyle modification, preventive medicine, and patient education as key components in the management of chronic diseases.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-white dark:bg-[#1E293B] rounded-xl border border-gray-100 dark:border-gray-800">
                                    <Award className="text-primary" size={24} />
                                    <span className="text-sm font-medium dark:text-gray-200">Diabetes India Award (2025)</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission/Vision - Simple version from text */}
            <section className="py-20 bg-primary/5 dark:bg-[#0B1120]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#111827] dark:text-white mb-8 italic italic-quote">
                        "Our mission is to help patients achieve better health, prevent complications, and live healthier lives through evidence-based treatments and personalized care."
                    </h2>
                    <p className="text-secondary dark:text-gray-400">
                        Patients from Kolathur and nearby areas in Chennai trust NV Consultations for reliable medical care, preventive health guidance, and long-term disease management.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
