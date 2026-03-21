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
    Plus,
    Truck,
    ShoppingBag,
    ShieldCheck,
    Stethoscope as DoctorIcon
} from 'lucide-react';

import pharmacyImg1 from '../../assets/pharmacy/1.jpeg';
import pharmacyImg2 from '../../assets/pharmacy/2.jpeg';
import { Link } from 'react-router-dom';

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
            <section className="py-10">
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

            {/* NV Pharmacy Section */}
            <section className="py-10 bg-white dark:bg-[#0B1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="section-pill">NV Pharmacy</span>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] dark:text-white mb-6 leading-tight">
                                    Quality Medicines & <span className="text-primary italic">Convenient Care</span>
                                </h2>
                                <p className="text-lg text-secondary dark:text-gray-400 mb-8 leading-relaxed">
                                    NV Pharmacy ensures patients have convenient access to quality medicines and healthcare products. We prioritize your health by providing genuine medications and professional guidance.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10">
                                        <div className="p-2 bg-primary/10 rounded-xl">
                                            <ShieldCheck className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#111827] dark:text-white">Genuine Medicines</h4>
                                            <p className="text-sm text-secondary dark:text-gray-400">Authentic healthcare products</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10">
                                        <div className="p-2 bg-primary/10 rounded-xl">
                                            <Truck className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#111827] dark:text-white">Free Home Delivery</h4>
                                            <p className="text-sm text-secondary dark:text-gray-400">Supporting patient convenience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10">
                                        <div className="p-2 bg-primary/10 rounded-xl">
                                            <ShoppingBag className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#111827] dark:text-white">Special Discounts</h4>
                                            <p className="text-sm text-secondary dark:text-gray-400">Affordable care for customers</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10">
                                        <div className="p-2 bg-primary/10 rounded-xl">
                                            <Activity className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#111827] dark:text-white">Continuous Care</h4>
                                            <p className="text-sm text-secondary dark:text-gray-400">Ensuring health continuity</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-secondary dark:text-gray-400 mb-8 border-l-4 border-primary pl-6 py-2 italic">
                                    "Our pharmacy services are designed to support patient convenience and ensure continuity of care with every prescription."
                                </p>
                            </motion.div>
                        </div>
                        
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative z-10"
                            >
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img src={pharmacyImg1} alt="Pharmacy Section 1" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="absolute -bottom-10 -right-10 w-2/3 hidden md:block"
                                >
                                    <div className="relative rounded-3xl overflow-hidden border-8 border-white dark:border-[#0B1120] shadow-2xl">
                                        <img src={pharmacyImg2} alt="Pharmacy Section 2" className="w-full h-[250px] object-cover" />
                                    </div>
                                </motion.div>
                            </motion.div>
                            
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary-dark/20 rounded-full blur-3xl animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multispecialty Section */}
            <section className="py-10 bg-primary/5 dark:bg-[#0F172A] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mt-32"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="section-pill">Integrated Care</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#111827] dark:text-white mb-6">Multispecialty Consultations</h2>
                        <p className="text-xl text-secondary dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            To ensure comprehensive patient care, specialist consultations are available based on patient needs through visiting consultants in several specialties. These services allow patients to access multidisciplinary medical expertise conveniently through NV Consultations.
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
                                className="flex items-center gap-4 p-5 bg-white dark:bg-[#1E293B] rounded-2xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Plus className="text-primary group-hover:text-white" size={20} />
                                </div>
                                <span className="font-bold text-[#111827] dark:text-gray-200 group-hover:text-primary transition-colors">
                                    {specialist}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-white dark:bg-[#1E293B] rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-xl text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-4">Book Your Appointment</h3>
                            <p className="text-secondary dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                                Our specialist consultations are available by prior appointment. Contact us today to schedule your visit with one of our visiting consultants.
                            </p>
                            <Link to="/contact">
                                <button className="primary-gradient-btn px-12 py-5 font-bold text-xl uppercase tracking-wider">
                                    Contact Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
