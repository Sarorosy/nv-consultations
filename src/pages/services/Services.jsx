import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import PageHeader from '../../components/PageHeader';
import DynamicTitle from '../../components/DynamicTitle';
import {
    Activity,
    Heart,
    Thermometer,
    Footprints,
    Apple,
    Stethoscope,
    Scissors,
    Eye,
    Microscope,
    Plus
} from 'lucide-react';

const Services = () => {
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

        return () => {
            lenis.destroy();
            gsap.ticker.remove(update);
        };
    }, []);

    const mainServices = [
        {
            title: "Diabetes Screening and Management",
            description: "Early detection and long-term management of Type 1 diabetes, Type 2 diabetes, prediabetes, and uncontrolled diabetes, with individualized, patient-centered treatment plans.",
            icon: <Activity size={32} />
        },
        {
            title: "Hypertension Management",
            description: "Diagnosis and treatment of high blood pressure with lifestyle guidance and medication management to reduce cardiovascular risk.",
            icon: <Heart size={32} />
        },
        {
            title: "Thyroid Disorder Evaluation",
            description: "Comprehensive evaluation and management of hypothyroidism, hyperthyroidism, and autoimmune thyroid disorders.",
            icon: <Thermometer size={32} />
        },
        {
            title: "Preventive Health Check-ups",
            description: "Regular health screening programs for early detection of diabetes, metabolic disorders, and other lifestyle-related conditions.",
            icon: <Microscope size={32} />
        },
        {
            title: "Diabetic Foot Care",
            description: "Comprehensive evaluation, preventive care, treatment, and rehabilitation for diabetic foot conditions, with a focus on early detection and prevention of complications.",
            icon: <Footprints size={32} />
        },
        {
            title: "Lifestyle and Diet Counselling",
            description: "Guidance on diet, exercise, weight management, and metabolic health to support long-term disease control.",
            icon: <Apple size={32} />
        },
        {
            title: "General Physician Consultation",
            description: "Diagnosis and treatment of common illnesses, infections, and general health concerns with a holistic approach.",
            icon: <Stethoscope size={32} />
        }
    ];

    const specialists = [
        "General Surgery",
        "Surgical Oncology",
        "Orthopedic Surgery",
        "Plastic Surgery",
        "ENT (Ear, Nose & Throat)",
        "Nephrology",
        "Urology"
    ];

    return (
        <div className="w-full bg-white dark:bg-[#0B1120] transition-colors duration-300">
            <DynamicTitle
                title="Our Services"
                description="Comprehensive medical care at NV Consultations. We specialize in diabetes screening, hypertension, thyroid disorders, and preventive healthcare."
            />

            <PageHeader
                title="Our Medical Services"
                subtitle="We provide comprehensive medical care focused on diabetes management, lifestyle disease prevention, and general physician services at 1491A, Poompuhar Nagar 7th Cross St, Kolathur, Chennai."
                breadcrumb="Services"
            />

            {/* Main Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="p-8 bg-white dark:bg-[#1E293B] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl w-fit mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-secondary dark:text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Multispecialty Section */}
            <section className="py-20 bg-primary/5 dark:bg-[#0F172A] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mt-32"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-6">Multispecialty Consultations</h2>
                        <p className="text-lg text-secondary dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Through our network of visiting consultants, patients can access expert care in several specialized fields by prior appointment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specialists.map((specialist, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className="flex items-center gap-4 p-5 bg-white dark:bg-[#1E293B] rounded-2xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all"
                            >
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Plus className="text-primary" size={20} />
                                </div>
                                <span className="font-semibold text-secondary-dark dark:text-gray-200">
                                    {specialist}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-white dark:bg-[#1E293B] rounded-3xl border-2 border-dashed border-primary/20 text-center">
                        <p className="text-secondary dark:text-gray-400 mb-6">
                            These consultations are available by prior appointment, ensuring patients receive timely specialist evaluation and guidance when required.
                        </p>
                        <button className="primary-gradient-btn px-10 py-4 font-bold text-lg">
                            Request Specialist Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
