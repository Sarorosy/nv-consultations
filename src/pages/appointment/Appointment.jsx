import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import PageHeader from '../../components/PageHeader';
import DynamicTitle from '../../components/DynamicTitle';
import ContactSection from '../home/ContactSection';

const Appointment = () => {
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
                title="Book Appointment"
                description="Schedule your visit to NV Consultations. Expert diabetes care and preventive health consultations in Kolathur, Chennai."
            />

            <PageHeader
                title="Book an Appointment"
                subtitle="Fill out the form below to request an appointment. Our team will get back to you shortly to confirm your slot."
                breadcrumb="Appointment"
            />

            <ContactSection />

            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-white dark:bg-[#1E293B] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h4 className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">Call Us</h4>
                            <p className="text-xl font-bold dark:text-white">+91 81244 98803</p>
                        </div>
                        <div className="p-8 bg-white dark:bg-[#1E293B] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h4 className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">WhatsApp</h4>
                            <p className="text-xl font-bold dark:text-white">+91 81244 98803</p>
                        </div>
                        <div className="p-8 bg-white dark:bg-[#1E293B] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h4 className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">Visit Us</h4>
                            <p className="text-sm font-medium dark:text-gray-300">Kolathur, Chennai</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;
