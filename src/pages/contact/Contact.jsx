import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import PageHeader from '../../components/PageHeader';
import DynamicTitle from '../../components/DynamicTitle';
import ContactSection from '../home/ContactSection';

const Contact = () => {
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

    return (
        <div className="w-full bg-white dark:bg-[#0B1120] transition-colors duration-300">
            <DynamicTitle
                title="Contact Us"
                description="Contact NV Consultations at 1491A, Poompuhar Nagar 7th Cross St, Kolathur, Chennai. Book an appointment for diabetes care, hypertension management, and preventive healthcare."
            />

            <PageHeader
                title="Contact Us"
                subtitle="Have questions or want to book an appointment? We're here to help. Reach out to us via phone, WhatsApp, or the contact form below."
                breadcrumb="Contact"
            />

            <ContactSection />

            {/* Additional info section */}
            <section className="pb-20 bg-white dark:bg-[#0B1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-8 md:p-12 bg-primary/5 dark:bg-[#1E293B] rounded-[3rem] border border-primary/10">
                        <h3 className="text-2xl font-bold dark:text-white mb-6">Important Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary dark:text-gray-400">
                            <div>
                                <h4 className="font-bold text-[#111827] dark:text-gray-200 mb-2">Emergency Care</h4>
                                <p>For medical emergencies, please visit the nearest hospital emergency room or call an ambulance immediately. NV Consultations is a specialist clinic for planned consultations.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111827] dark:text-gray-200 mb-2">Appointments</h4>
                                <p>We recommend booking appointments in advance to ensure minimal waiting time. You can reach us on WhatsApp for quick scheduling.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
